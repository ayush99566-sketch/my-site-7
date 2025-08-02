// Performance Monitoring Utility for Homepage Animations
// Helps identify and resolve performance bottlenecks

class PerformanceMonitor {
    constructor() {
        this.metrics = {
            fps: [],
            frameTime: [],
            memoryUsage: [],
            animationCount: 0,
            lastFrameTime: performance.now()
        };
        
        this.isMonitoring = false;
        this.monitorInterval = null;
        this.frameCount = 0;
        this.lastFpsUpdate = performance.now();
    }
    
    start() {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        this.metrics = {
            fps: [],
            frameTime: [],
            memoryUsage: [],
            animationCount: 0,
            lastFrameTime: performance.now()
        };
        
        // Monitor FPS and frame times
        this.monitorInterval = setInterval(() => {
            this.updateMetrics();
        }, 1000);
        
        // Monitor memory usage
        if ('memory' in performance) {
            setInterval(() => {
                this.metrics.memoryUsage.push({
                    timestamp: performance.now(),
                    used: performance.memory.usedJSHeapSize,
                    total: performance.memory.totalJSHeapSize,
                    limit: performance.memory.jsHeapSizeLimit
                });
            }, 5000);
        }
        
        console.log('Performance monitoring started');
    }
    
    stop() {
        if (!this.isMonitoring) return;
        
        this.isMonitoring = false;
        if (this.monitorInterval) {
            clearInterval(this.monitorInterval);
            this.monitorInterval = null;
        }
        
        console.log('Performance monitoring stopped');
        this.generateReport();
    }
    
    updateMetrics() {
        const now = performance.now();
        const frameTime = now - this.metrics.lastFrameTime;
        
        this.metrics.frameTime.push(frameTime);
        this.metrics.lastFrameTime = now;
        
        // Calculate FPS
        const fps = 1000 / frameTime;
        this.metrics.fps.push(fps);
        
        // Keep only last 60 measurements
        if (this.metrics.fps.length > 60) {
            this.metrics.fps.shift();
            this.metrics.frameTime.shift();
        }
        
        // Alert if performance is poor
        if (fps < 30) {
            console.warn(`Low FPS detected: ${fps.toFixed(1)}`);
            this.suggestOptimizations();
        }
    }
    
    trackAnimation() {
        this.metrics.animationCount++;
    }
    
    suggestOptimizations() {
        const avgFps = this.getAverageFps();
        const suggestions = [];
        
        if (avgFps < 30) {
            suggestions.push('Consider reducing animation complexity');
            suggestions.push('Use CSS transforms instead of layout properties');
            suggestions.push('Implement requestAnimationFrame for all animations');
            suggestions.push('Reduce the number of simultaneous animations');
        }
        
        if (this.metrics.animationCount > 10) {
            suggestions.push('Too many animations running simultaneously');
            suggestions.push('Consider staggering animations or reducing frequency');
        }
        
        if (suggestions.length > 0) {
            console.warn('Performance optimization suggestions:', suggestions);
        }
    }
    
    getAverageFps() {
        if (this.metrics.fps.length === 0) return 0;
        return this.metrics.fps.reduce((a, b) => a + b, 0) / this.metrics.fps.length;
    }
    
    getAverageFrameTime() {
        if (this.metrics.frameTime.length === 0) return 0;
        return this.metrics.frameTime.reduce((a, b) => a + b, 0) / this.metrics.frameTime.length;
    }
    
    generateReport() {
        const report = {
            averageFps: this.getAverageFps(),
            averageFrameTime: this.getAverageFrameTime(),
            totalAnimations: this.metrics.animationCount,
            memoryUsage: this.metrics.memoryUsage.length > 0 ? this.metrics.memoryUsage : null,
            performance: this.getPerformanceRating()
        };
        
        console.log('Performance Report:', report);
        return report;
    }
    
    getPerformanceRating() {
        const avgFps = this.getAverageFps();
        
        if (avgFps >= 55) return 'Excellent';
        if (avgFps >= 45) return 'Good';
        if (avgFps >= 30) return 'Fair';
        return 'Poor';
    }
    
    // Utility function to measure specific operations
    measureOperation(name, operation) {
        const start = performance.now();
        const result = operation();
        const end = performance.now();
        
        console.log(`${name} took ${(end - start).toFixed(2)}ms`);
        return result;
    }
    
    // Monitor specific DOM operations
    monitorDOMOperation(operation) {
        return this.measureOperation('DOM Operation', operation);
    }
    
    // Check for layout thrashing
    checkLayoutThrashing() {
        let layoutCount = 0;
        const originalGetComputedStyle = window.getComputedStyle;
        
        window.getComputedStyle = function(element) {
            layoutCount++;
            if (layoutCount > 10) {
                console.warn('Potential layout thrashing detected');
            }
            return originalGetComputedStyle.call(this, element);
        };
        
        return () => {
            window.getComputedStyle = originalGetComputedStyle;
        };
    }
}

// Animation performance utilities
class AnimationOptimizer {
    constructor() {
        this.activeAnimations = new Set();
        this.maxConcurrentAnimations = 8;
    }
    
    // Throttle animations to prevent overwhelming the browser
    throttleAnimation(animationFunction, delay = 16) {
        let timeoutId;
        let lastRun = 0;
        
        return function(...args) {
            const now = Date.now();
            
            if (now - lastRun >= delay) {
                lastRun = now;
                return animationFunction.apply(this, args);
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    lastRun = Date.now();
                    animationFunction.apply(this, args);
                }, delay - (now - lastRun));
            }
        };
    }
    
    // Debounce rapid-fire events
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Check if animation should be skipped for performance
    shouldSkipAnimation() {
        return this.activeAnimations.size >= this.maxConcurrentAnimations;
    }
    
    // Register an active animation
    registerAnimation(id) {
        this.activeAnimations.add(id);
    }
    
    // Unregister an animation
    unregisterAnimation(id) {
        this.activeAnimations.delete(id);
    }
    
    // Optimize scroll events
    optimizeScrollHandler(handler) {
        return this.throttleAnimation(handler, 16); // ~60fps
    }
    
    // Optimize resize events
    optimizeResizeHandler(handler) {
        return this.debounce(handler, 100);
    }
}

// Global performance monitoring instance
window.performanceMonitor = new PerformanceMonitor();
window.animationOptimizer = new AnimationOptimizer();

// Auto-start monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.performanceMonitor.start();
    
    // Stop monitoring after 30 seconds
    setTimeout(() => {
        window.performanceMonitor.stop();
    }, 30000);
}

// Export for use in other modules
export { PerformanceMonitor, AnimationOptimizer }; 