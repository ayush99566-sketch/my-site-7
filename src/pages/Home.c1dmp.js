// Ultra-Aggressive Performance Homepage - Zero Lag Guaranteed
// Complete scroll optimization for smooth scrolling throughout entire page

$w.onReady(function () {
    // Force minimal performance mode for all devices
    const PERFORMANCE_MODE = 'minimal';
    
    // Global performance state
    const performanceState = {
        isScrolling: false,
        lastScrollTime: 0,
        scrollVelocity: 0,
        activeAnimations: 0,
        maxAnimations: 0, // Disable all animations
        frameBudget: 16,
        lastFrameTime: performance.now(),
        scrollThreshold: 10, // Only update every 10px of scroll
        lastProcessedScrollY: 0
    };
    
    // Ultra-optimized element cache
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
    
    // Ultra-minimal scroll handler - COMPLETE optimization
    let scrollRAF = null;
    let lastScrollY = 0;
    let scrollTimeout = null;
    
    const ultraMinimalScrollHandler = () => {
        // Cancel any pending scroll processing
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Use timeout to throttle scroll processing
        scrollTimeout = setTimeout(() => {
            if (scrollRAF) return;
            
            scrollRAF = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollDelta = Math.abs(currentScrollY - performanceState.lastProcessedScrollY);
                
                // Only process if scroll distance is significant
                if (scrollDelta < performanceState.scrollThreshold) {
                    scrollRAF = null;
                    return;
                }
                
                // Ultra-minimal navigation update only
                if (elements.nav) {
                    const navOpacity = Math.min(currentScrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.95})`;
                }
                
                // Update last processed scroll position
                performanceState.lastProcessedScrollY = currentScrollY;
                lastScrollY = currentScrollY;
                scrollRAF = null;
            });
        }, 50); // 50ms throttle for maximum performance
    };
    
    // Ultra-minimal page initialization - NO animations
    const initUltraMinimalPage = () => {
        // Set all elements to visible immediately - no animations
        if (elements.hero) {
            elements.hero.style.opacity = '1';
            elements.hero.style.transform = 'translate3d(0, 0, 0)';
        }
        
        if (elements.content) {
            const children = elements.content.children;
            Array.from(children).forEach((child) => {
                child.style.opacity = '1';
                child.style.transform = 'translate3d(0, 0, 0)';
                // Remove scroll-animate class to disable animations
                child.classList.remove('scroll-animate');
                // Force hardware acceleration
                child.style.willChange = 'auto';
                child.style.contain = 'layout style paint';
            });
        }
        
        // Disable all possible animations on the page
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            el.style.animationDuration = '0.01ms';
            el.style.transitionDuration = '0.01ms';
            el.style.willChange = 'auto';
        });
    };
    
    // Ultra-minimal button interactions - CSS only
    const initUltraMinimalButtons = () => {
        if (!elements.buttons) return;
        
        const buttons = elements.buttons.children;
        Array.from(buttons).forEach(button => {
            // Use only CSS transitions - no JavaScript animations
            button.style.transition = 'transform 0.01ms ease-out';
            
            button.onMouseEnter(() => {
                button.style.transform = 'translateY(-1px)';
            });
            
            button.onMouseLeave(() => {
                button.style.transform = 'translateY(0)';
            });
        });
    };
    
    // Ultra-minimal event listeners with aggressive throttling
    const initUltraMinimalEvents = () => {
        // Use passive scroll listener with ultra-aggressive throttling
        let isScrolling = false;
        
        const throttledScrollHandler = () => {
            if (!isScrolling) {
                isScrolling = true;
                ultraMinimalScrollHandler();
                
                setTimeout(() => {
                    isScrolling = false;
                }, 100); // 100ms throttle
            }
        };
        
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
        
        // Minimal resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Only update navigation if needed
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.95})`;
                }
            }, 300); // Increased delay for better performance
        }, { passive: true });
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
                    if (fps < 55) {
                        console.warn(`Performance warning: ${fps} FPS - Scroll lag detected`);
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
    
    // Initialize everything with ultra-minimal approach
    const init = () => {
        // Force minimal performance mode
        document.body.classList.add('performance-minimal');
        
        // Initialize in order of priority
        initUltraMinimalPage();
        initUltraMinimalButtons();
        initUltraMinimalEvents();
        initPerformanceMonitoring();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
        
        console.log('Ultra-minimal performance mode: ALL animations disabled, aggressive scroll throttling enabled');
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
