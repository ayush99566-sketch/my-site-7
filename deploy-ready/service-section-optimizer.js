// 🎯 SERVICE SECTION OPTIMIZER - Eliminates Lag in "03 Digital Service" Section
// Specifically designed to make the red balloon section smooth

$w.onReady(function () {
    console.log('🎯 Service Section Optimizer Loading...');
    
    // Performance state for service sections
    const serviceState = {
        isServiceSectionVisible: false,
        serviceSectionRAF: null,
        lastServiceScrollY: 0,
        serviceElements: new Map(),
        animationFrame: null,
        isOptimized: false
    };
    
    // Progressive loading for service sections
    function optimizeServiceSections() {
        console.log('🎯 Optimizing service sections...');
        
        // Phase 1: Basic service section detection
        setTimeout(() => detectServiceSections(), 100);
        
        // Phase 2: Lightweight animations
        setTimeout(() => setupLightweightAnimations(), 300);
        
        // Phase 3: Enhanced interactions
        setTimeout(() => setupEnhancedInteractions(), 600);
        
        // Phase 4: Full optimization
        setTimeout(() => setupFullOptimization(), 1000);
    }
    
    // Detect service sections (including "03 digital service")
    function detectServiceSections() {
        try {
            // Look for various service section selectors
            const serviceSelectors = [
                '#services',
                '.services',
                '[data-service]',
                '.service-section',
                '.digital-service',
                '.service-card',
                '.service-item'
            ];
            
            serviceSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach((element, index) => {
                        serviceState.serviceElements.set(`${selector}-${index}`, element);
                        console.log(`🎯 Found service section: ${selector}-${index}`);
                    });
                }
            });
            
            // Look specifically for "03" or numbered services
            const numberedServices = $w('[class*="03"], [id*="03"], [class*="service"], [id*="service"]');
            if (numberedServices && numberedServices.length > 0) {
                numberedServices.forEach((element, index) => {
                    serviceState.serviceElements.set(`numbered-service-${index}`, element);
                    console.log(`🎯 Found numbered service: numbered-service-${index}`);
                });
            }
            
        } catch (error) {
            console.warn('Service section detection failed:', error);
        }
    }
    
    // Setup lightweight animations for service sections
    function setupLightweightAnimations() {
        try {
            serviceState.serviceElements.forEach((element, key) => {
                if (!element) return;
                
                // Disable heavy animations initially
                element.style.transition = 'none';
                element.style.animation = 'none';
                
                // Add lightweight opacity transition
                element.style.opacity = '0.8';
                element.style.transition = 'opacity 0.3s ease';
                
                // Smooth reveal on scroll
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            serviceState.isServiceSectionVisible = true;
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '50px'
                });
                
                observer.observe(element);
                
            });
            
        } catch (error) {
            console.warn('Lightweight animations setup failed:', error);
        }
    }
    
    // Setup enhanced interactions for service sections
    function setupEnhancedInteractions() {
        try {
            serviceState.serviceElements.forEach((element, key) => {
                if (!element) return;
                
                // Optimize hover effects
                element.onMouseIn(() => {
                    if (serviceState.animationFrame) {
                        cancelAnimationFrame(serviceState.animationFrame);
                    }
                    
                    serviceState.animationFrame = requestAnimationFrame(() => {
                        element.style.transform = 'translateY(-2px)';
                        element.style.transition = 'transform 0.2s ease';
                    });
                });
                
                element.onMouseOut(() => {
                    if (serviceState.animationFrame) {
                        cancelAnimationFrame(serviceState.animationFrame);
                    }
                    
                    serviceState.animationFrame = requestAnimationFrame(() => {
                        element.style.transform = 'translateY(0)';
                    });
                });
                
                // Optimize click effects
                element.onClick(() => {
                    if (serviceState.animationFrame) {
                        cancelAnimationFrame(serviceState.animationFrame);
                    }
                    
                    serviceState.animationFrame = requestAnimationFrame(() => {
                        element.style.transform = 'scale(0.98)';
                        setTimeout(() => {
                            element.style.transform = 'scale(1)';
                        }, 100);
                    });
                });
                
            });
            
        } catch (error) {
            console.warn('Enhanced interactions setup failed:', error);
        }
    }
    
    // Setup full optimization for service sections
    function setupFullOptimization() {
        try {
            // Optimize scroll performance for service sections
            let ticking = false;
            
            function updateServiceSections() {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const currentScrollY = window.scrollY;
                        
                        serviceState.serviceElements.forEach((element, key) => {
                            if (!element) return;
                            
                            // Calculate distance from viewport
                            const rect = element.getBoundingClientRect();
                            const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
                            
                            // Apply performance optimizations based on distance
                            if (distanceFromCenter < 200) {
                                // Near viewport - enable full features
                                element.style.willChange = 'transform, opacity';
                                element.style.backfaceVisibility = 'hidden';
                                element.style.transform = 'translateZ(0)';
                            } else {
                                // Far from viewport - disable heavy features
                                element.style.willChange = 'auto';
                                element.style.backfaceVisibility = 'visible';
                            }
                        });
                        
                        serviceState.lastServiceScrollY = currentScrollY;
                        ticking = false;
                    });
                    
                    ticking = true;
                }
            }
            
            // Throttled scroll listener
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
                scrollTimeout = setTimeout(updateServiceSections, 16); // ~60fps
            }, { passive: true });
            
            // Optimize images in service sections
            const serviceImages = $w('img');
            if (serviceImages && serviceImages.length > 0) {
                serviceImages.forEach(img => {
                    if (img.loading !== 'lazy') {
                        img.loading = 'lazy';
                    }
                    
                    // Optimize image loading
                    img.onLoad(() => {
                        img.style.opacity = '1';
                        img.style.transition = 'opacity 0.3s ease';
                    });
                    
                    img.onError(() => {
                        console.warn('Service image failed to load:', img.src);
                    });
                });
            }
            
            serviceState.isOptimized = true;
            console.log('✅ Service sections fully optimized');
            
        } catch (error) {
            console.warn('Full optimization setup failed:', error);
        }
    }
    
    // Special optimization for "03 digital service" red balloon
    function optimizeRedBalloonSection() {
        try {
            // Look for red balloon elements
            const balloonSelectors = [
                '[class*="balloon"]',
                '[id*="balloon"]',
                '[class*="red"]',
                '[style*="red"]',
                '[class*="03"]',
                '[id*="03"]'
            ];
            
            balloonSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach((element, index) => {
                        // Disable heavy animations
                        element.style.animation = 'none';
                        element.style.transition = 'transform 0.2s ease, opacity 0.3s ease';
                        
                        // Optimize for performance
                        element.style.willChange = 'transform';
                        element.style.backfaceVisibility = 'hidden';
                        element.style.transform = 'translateZ(0)';
                        
                        // Lightweight hover effect
                        element.onMouseIn(() => {
                            element.style.transform = 'translateZ(0) scale(1.05)';
                        });
                        
                        element.onMouseOut(() => {
                            element.style.transform = 'translateZ(0) scale(1)';
                        });
                        
                        console.log(`🎈 Optimized red balloon element: ${selector}-${index}`);
                    });
                }
            });
            
        } catch (error) {
            console.warn('Red balloon optimization failed:', error);
        }
    }
    
    // Performance monitoring for service sections
    function monitorServicePerformance() {
        try {
            let frameCount = 0;
            let lastTime = performance.now();
            
            function checkPerformance() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    if (fps < 30 && serviceState.isServiceSectionVisible) {
                        console.warn('⚠️ Low FPS detected in service section:', fps);
                        // Apply emergency optimizations
                        emergencyOptimization();
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(checkPerformance);
            }
            
            checkPerformance();
            
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
        }
    }
    
    // Emergency optimization for performance issues
    function emergencyOptimization() {
        try {
            serviceState.serviceElements.forEach((element, key) => {
                if (!element) return;
                
                // Disable all animations
                element.style.animation = 'none';
                element.style.transition = 'none';
                element.style.transform = 'none';
                
                // Reduce visual effects
                element.style.filter = 'none';
                element.style.backdropFilter = 'none';
                
                console.log('🚨 Emergency optimization applied to service section');
            });
            
        } catch (error) {
            console.warn('Emergency optimization failed:', error);
        }
    }
    
    // Initialize service section optimizer
    function initializeServiceOptimizer() {
        console.log('🎯 Initializing Service Section Optimizer...');
        
        // Start progressive optimization
        optimizeServiceSections();
        
        // Special optimization for red balloon
        setTimeout(() => optimizeRedBalloonSection(), 500);
        
        // Start performance monitoring
        setTimeout(() => monitorServicePerformance(), 1000);
        
        console.log('✅ Service Section Optimizer initialized');
    }
    
    // Start the optimizer
    initializeServiceOptimizer();
    
    // Export for global access
    window.serviceSectionOptimizer = {
        optimizeServiceSections,
        optimizeRedBalloonSection,
        emergencyOptimization,
        getState: () => serviceState
    };
    
    console.log('🎯 Service Section Optimizer Ready!');
}); 