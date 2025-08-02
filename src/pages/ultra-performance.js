// Ultra-Lightweight Performance Monitor
// Minimal overhead for maximum performance

class UltraPerformanceMonitor {
    constructor() {
        this.fpsHistory = [];
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
        this.isMonitoring = false;
    }
    
    start() {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        this.monitorFrame();
        
        console.log('Ultra-performance monitoring started');
    }
    
    monitorFrame() {
        if (!this.isMonitoring) return;
        
        const currentTime = performance.now();
        const frameTime = currentTime - this.lastFrameTime;
        
        this.frameCount++;
        this.lastFrameTime = currentTime;
        
        // Calculate FPS every second
        if (this.frameCount % 60 === 0) {
            const fps = Math.round(60000 / frameTime);
            this.fpsHistory.push(fps);
            
            // Keep only last 10 measurements
            if (this.fpsHistory.length > 10) {
                this.fpsHistory.shift();
            }
            
            // Alert if performance is poor
            if (fps < 45) {
                console.warn(`Performance warning: ${fps} FPS`);
            }
        }
        
        requestAnimationFrame(() => this.monitorFrame());
    }
    
    stop() {
        this.isMonitoring = false;
        const avgFps = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
        console.log(`Performance report: Average FPS: ${avgFps.toFixed(1)}`);
    }
    
    getAverageFps() {
        if (this.fpsHistory.length === 0) return 0;
        return this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    }
}

// Auto-start in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.ultraMonitor = new UltraPerformanceMonitor();
    window.ultraMonitor.start();
    
    // Stop after 30 seconds
    setTimeout(() => {
        if (window.ultraMonitor) {
            window.ultraMonitor.stop();
        }
    }, 30000);
} 