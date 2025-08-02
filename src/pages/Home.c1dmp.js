// Ultra-Performance Homepage - Zero Lag Implementation
// Aggressive optimizations for butter-smooth scrolling

$w.onReady(function () {
    // Ultra-performance mode detection
    const isLowEndDevice = () => {
        const cores = navigator.hardwareConcurrency || 4;
        const memory = navigator.deviceMemory || 4;
        const connection = navigator.connection?.effectiveType || '4g';
        return cores <= 2 || memory <= 2 || connection === 'slow-2g' || connection === '2g';
    };
    
    // Disable animations on low-end devices for maximum performance
    const PERFORMANCE_MODE = isLowEndDevice() ? 'minimal' : 'ultra';
    
    // Global performance state
    const performanceState = {
        isScrolling: false,
        lastScrollTime: 0,
        scrollVelocity: 0,
        activeAnimations: 0,
        maxAnimations: PERFORMANCE_MODE === 'minimal' ? 2 : 4,
        frameBudget: 16, // 60fps target
        lastFrameTime: performance.now()
    };
    
    // Ultra-optimized element cache with lazy loading
    const elementCache = new Map();
    const getElement = (selector) => {
        if (!elementCache.has(selector)) {
            const element = $w(selector);
            if (element) elementCache.set(selector, element);
            return element;
        }
        return elementCache.get(selector);
    };
    
    // Pre-cache all elements
    const elements = {
        hero: getElement('#heroSection'),
        nav: getElement('#navigation'),
        content: getElement('#mainContent'),
        buttons: getElement('#ctaButtons'),
        footer: getElement('#footerSection')
    };
    
    // Ultra-optimized scroll handler with velocity-based throttling
    let scrollRAF = null;
    let lastScrollY = 0;
    let scrollTimeout = null;
    
    const ultraScrollHandler = () => {
        if (scrollRAF) return; // Prevent multiple RAF calls
        
        scrollRAF = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const currentTime = performance.now();
            const deltaTime = currentTime - performanceState.lastScrollTime;
            
            // Calculate scroll velocity
            performanceState.scrollVelocity = Math.abs(currentScrollY - lastScrollY) / deltaTime;
            
            // Skip processing if scrolling too fast (user is scrolling quickly)
            if (performanceState.scrollVelocity > 150) {
                scrollRAF = null;
                return;
            }
            
            // Ultra-minimal DOM updates
            if (elements.nav && Math.abs(currentScrollY - lastScrollY) > 1) {
                const navOpacity = Math.min(currentScrollY / 100, 1);
                elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.95})`;
            }
            
            // Only update parallax if significant scroll
            if (elements.hero && Math.abs(currentScrollY - lastScrollY) > 5) {
                const parallax = currentScrollY * 0.3; // Reduced parallax for performance
                elements.hero.style.transform = `translate3d(0, ${parallax}px, 0)`;
            }
            
            lastScrollY = currentScrollY;
            performanceState.lastScrollTime = currentTime;
            scrollRAF = null;
        });
    };
    
    // Ultra-optimized intersection observer with minimal processing
    const createUltraObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && performanceState.activeAnimations < performanceState.maxAnimations) {
                    // Minimal animation - just add class
                    entry.target.classList.add('visible');
                    performanceState.activeAnimations++;
                    
                    // Stop observing after animation
                    setTimeout(() => {
                        observer.unobserve(entry.target);
                        performanceState.activeAnimations--;
                    }, 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        return observer;
    };
    
    // Ultra-minimal animation function
    const ultraAnimate = (element, properties, duration = 400) => {
        if (!element || performanceState.activeAnimations >= performanceState.maxAnimations) {
            return Promise.resolve();
        }
        
        performanceState.activeAnimations++;
        
        return new Promise((resolve) => {
            const startTime = performance.now();
            const startProps = {};
            
            // Get initial values
            Object.keys(properties).forEach(prop => {
                if (prop === 'opacity') {
                    startProps[prop] = parseFloat(element.style.opacity) || 0;
                } else if (prop === 'translateY') {
                    startProps[prop] = 0;
                }
            });
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ultra-simple easing
                const easeProgress = 1 - Math.pow(1 - progress, 2);
                
                Object.keys(properties).forEach(prop => {
                    const startValue = startProps[prop];
                    const endValue = properties[prop];
                    const currentValue = startValue + (endValue - startValue) * easeProgress;
                    
                    if (prop === 'opacity') {
                        element.style.opacity = currentValue;
                    } else if (prop === 'translateY') {
                        element.style.transform = `translate3d(0, ${currentValue}px, 0)`;
                    }
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    performanceState.activeAnimations--;
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    };
    
    // Ultra-optimized button interactions
    const initUltraButtons = () => {
        if (!elements.buttons || PERFORMANCE_MODE === 'minimal') return;
        
        const buttons = elements.buttons.children;
        Array.from(buttons).forEach(button => {
            // Use CSS-only hover effects for maximum performance
            button.style.transition = 'transform 0.2s ease-out';
            
            button.onMouseEnter(() => {
                button.style.transform = 'translateY(-1px) scale(1.01)';
            });
            
            button.onMouseLeave(() => {
                button.style.transform = 'translateY(0) scale(1)';
            });
        });
    };
    
    // Ultra-minimal page initialization
    const initUltraPage = () => {
        // Set initial states
        if (elements.hero) {
            elements.hero.style.opacity = '0';
            elements.hero.style.transform = 'translate3d(0, 20px, 0)';
        }
        
        if (elements.content) {
            const children = elements.content.children;
            Array.from(children).forEach((child, index) => {
                child.style.opacity = '0';
                child.style.transform = 'translate3d(0, 30px, 0)';
                child.classList.add('scroll-animate');
            });
        }
        
        // Minimal entrance animation
        setTimeout(() => {
            if (elements.hero) {
                ultraAnimate(elements.hero, { opacity: 1, translateY: 0 }, 300);
            }
        }, 50);
        
        // Stagger content animations with minimal delay
        if (elements.content) {
            const children = elements.content.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    ultraAnimate(child, { opacity: 1, translateY: 0 }, 250);
                }, 100 + (index * 30)); // Minimal stagger
            });
        }
    };
    
    // Ultra-optimized event listeners
    const initUltraEvents = () => {
        // Use passive scroll listener for maximum performance
        window.addEventListener('scroll', ultraScrollHandler, { passive: true });
        
        // Minimal resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Only recalculate if absolutely necessary
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.95})`;
                }
            }, 100);
        }, { passive: true });
    };
    
    // Initialize intersection observer
    const initUltraObserver = () => {
        const observer = createUltraObserver();
        
        // Observe scroll-animate elements
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));
    };
    
    // Performance monitoring (development only)
    const initPerformanceMonitoring = () => {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            let frameCount = 0;
            let lastTime = performance.now();
            
            const monitorFPS = () => {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    if (fps < 50) {
                        console.warn(`Low FPS detected: ${fps}. Consider reducing animations.`);
                    }
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorFPS);
            };
            
            requestAnimationFrame(monitorFPS);
        }
    };
    
    // Cleanup function
    const cleanup = () => {
        if (scrollRAF) {
            cancelAnimationFrame(scrollRAF);
        }
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        elementCache.clear();
    };
    
    // Initialize everything with performance priority
    const init = () => {
        // Set performance mode
        document.body.classList.add(`performance-${PERFORMANCE_MODE}`);
        
        // Initialize in order of priority
        initUltraPage();
        initUltraButtons();
        initUltraEvents();
        initUltraObserver();
        initPerformanceMonitoring();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
        
        console.log(`Ultra-performance mode: ${PERFORMANCE_MODE}`);
    };
    
    // Start initialization
    init();
    
    // Export for external access
    window.homepagePerformance = {
        mode: PERFORMANCE_MODE,
        state: performanceState,
        cleanup
    };
});
