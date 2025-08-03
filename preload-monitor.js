// Preload Warning Monitor for Wix Thunderbolt
// Add this script to your page to monitor and debug preload warnings

(function() {
    'use strict';
    
    // Configuration
    const config = {
        logWarnings: true,
        trackPerformance: true,
        monitorResources: true,
        debugMode: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    };
    
    // Preload warning tracker
    const preloadTracker = {
        warnings: [],
        resources: [],
        performance: {},
        
        // Track preload warnings
        addWarning: function(warning) {
            this.warnings.push({
                message: warning,
                timestamp: new Date().toISOString(),
                url: window.location.href
            });
            
            if (config.logWarnings) {
                console.warn('Preload Warning:', warning);
            }
        },
        
        // Track resource loading
        addResource: function(resource) {
            this.resources.push({
                name: resource.name,
                type: resource.initiatorType,
                duration: resource.duration,
                size: resource.transferSize,
                timestamp: new Date().toISOString()
            });
        },
        
        // Get performance metrics
        getMetrics: function() {
            return {
                warnings: this.warnings.length,
                resources: this.resources.length,
                performance: this.performance,
                timestamp: new Date().toISOString()
            };
        },
        
        // Export data for analysis
        exportData: function() {
            return {
                warnings: this.warnings,
                resources: this.resources,
                metrics: this.getMetrics(),
                userAgent: navigator.userAgent,
                url: window.location.href
            };
        }
    };
    
    // Performance monitoring
    function monitorPerformance() {
        if (!config.trackPerformance) return;
        
        // Monitor page load performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const paintData = performance.getEntriesByType('paint');
                
                preloadTracker.performance = {
                    pageLoadTime: perfData.loadEventEnd - perfData.loadEventStart,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    firstPaint: paintData.find(p => p.name === 'first-paint')?.startTime,
                    firstContentfulPaint: paintData.find(p => p.name === 'first-contentful-paint')?.startTime,
                    totalResources: performance.getEntriesByType('resource').length
                };
                
                if (config.debugMode) {
                    console.log('Performance Metrics:', preloadTracker.performance);
                }
            }, 1000);
        });
    }
    
    // Resource monitoring
    function monitorResources() {
        if (!config.monitorResources) return;
        
        // Monitor resource loading
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(entry => {
                if (entry.initiatorType === 'link' && entry.name.includes('thunderbolt')) {
                    preloadTracker.addResource(entry);
                    
                    // Check if resource was used within expected timeframe
                    setTimeout(() => {
                        const resource = performance.getEntriesByName(entry.name)[0];
                        if (resource && !resource.responseEnd) {
                            preloadTracker.addWarning(`Resource ${entry.name} was preloaded but not used within expected timeframe`);
                        }
                    }, 5000); // 5 second timeout
                }
            });
        });
        
        observer.observe({ entryTypes: ['resource'] });
    }
    
    // Console warning interceptor
    function interceptConsoleWarnings() {
        const originalWarn = console.warn;
        console.warn = function(...args) {
            const message = args.join(' ');
            
            // Check for preload warnings
            if (message.includes('preload') || message.includes('thunderbolt')) {
                preloadTracker.addWarning(message);
            }
            
            // Call original console.warn
            originalWarn.apply(console, args);
        };
    }
    
    // Network monitoring
    function monitorNetwork() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            connection.addEventListener('change', () => {
                preloadTracker.performance.connection = {
                    effectiveType: connection.effectiveType,
                    downlink: connection.downlink,
                    rtt: connection.rtt
                };
            });
        }
    }
    
    // Preload optimization checker
    function checkPreloadOptimizations() {
        const links = document.querySelectorAll('link[rel="preload"]');
        const issues = [];
        
        links.forEach(link => {
            // Check for missing 'as' attribute
            if (!link.hasAttribute('as')) {
                issues.push(`Preload link missing 'as' attribute: ${link.href}`);
            }
            
            // Check for proper resource types
            const as = link.getAttribute('as');
            const href = link.href;
            
            if (as === 'script' && !href.includes('.js')) {
                issues.push(`Script preload may have incorrect resource: ${href}`);
            }
            
            if (as === 'style' && !href.includes('.css')) {
                issues.push(`Style preload may have incorrect resource: ${href}`);
            }
        });
        
        if (issues.length > 0) {
            issues.forEach(issue => preloadTracker.addWarning(issue));
        }
        
        return issues;
    }
    
    // Resource usage analyzer
    function analyzeResourceUsage() {
        const resources = performance.getEntriesByType('resource');
        const preloadedResources = resources.filter(r => r.initiatorType === 'link');
        
        const analysis = {
            total: resources.length,
            preloaded: preloadedResources.length,
            unused: 0,
            slow: 0
        };
        
        preloadedResources.forEach(resource => {
            // Check for slow loading resources
            if (resource.duration > 1000) {
                analysis.slow++;
                preloadTracker.addWarning(`Slow preloaded resource: ${resource.name} (${resource.duration}ms)`);
            }
            
            // Check for unused resources (basic heuristic)
            if (resource.transferSize === 0) {
                analysis.unused++;
                preloadTracker.addWarning(`Potentially unused preloaded resource: ${resource.name}`);
            }
        });
        
        return analysis;
    }
    
    // Generate report
    function generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            metrics: preloadTracker.getMetrics(),
            analysis: analyzeResourceUsage(),
            issues: checkPreloadOptimizations(),
            recommendations: []
        };
        
        // Generate recommendations
        if (report.analysis.unused > 0) {
            report.recommendations.push('Remove unused preload directives');
        }
        
        if (report.analysis.slow > 0) {
            report.recommendations.push('Optimize slow-loading resources');
        }
        
        if (report.issues.length > 0) {
            report.recommendations.push('Fix preload configuration issues');
        }
        
        return report;
    }
    
    // Initialize monitoring
    function init() {
        interceptConsoleWarnings();
        monitorPerformance();
        monitorResources();
        monitorNetwork();
        
        // Generate initial report after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                const report = generateReport();
                
                if (config.debugMode) {
                    console.log('Preload Monitor Report:', report);
                }
                
                // Store report for external access
                window.preloadMonitorReport = report;
                window.preloadTracker = preloadTracker;
            }, 2000);
        });
        
        // Export functions for external use
        window.preloadMonitor = {
            getReport: generateReport,
            getData: () => preloadTracker.exportData(),
            checkOptimizations: checkPreloadOptimizations,
            analyzeUsage: analyzeResourceUsage
        };
        
        if (config.debugMode) {
            console.log('Preload Monitor initialized');
        }
    }
    
    // Start monitoring
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})(); 