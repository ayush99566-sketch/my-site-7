// Optimized Homepage with Smooth Animations
// Performance-focused implementation using modern animation techniques

$w.onReady(function () {
    // Performance optimization: Use requestAnimationFrame for smooth animations
    let animationFrameId;
    let isAnimating = false;
    
    // Cache DOM elements for better performance
    const elements = {
        hero: $w('#heroSection'),
        nav: $w('#navigation'),
        content: $w('#mainContent'),
        buttons: $w('#ctaButtons'),
        footer: $w('#footerSection')
    };
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    const scrollHandler = () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            handleScrollOptimized();
        }, 16); // ~60fps
    };
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScrollOptimized = () => {
        if (!isAnimating) {
            isAnimating = true;
            animationFrameId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                
                // Parallax effect with transform3d for hardware acceleration
                if (elements.hero) {
                    const heroParallax = scrollY * 0.5;
                    elements.hero.style.transform = `translate3d(0, ${heroParallax}px, 0)`;
                }
                
                // Smooth navigation background transition
                if (elements.nav) {
                    const navOpacity = Math.min(scrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.95})`;
                    elements.nav.style.backdropFilter = `blur(${navOpacity * 10}px)`;
                }
                
                // Content fade-in animations with intersection observer
                animateOnScroll();
                
                // Track animation for performance monitoring
                if (window.performanceMonitor) {
                    window.performanceMonitor.trackAnimation();
                }
                
                isAnimating = false;
            });
        }
    };
    
    // Intersection Observer for efficient scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Initialize intersection observer for elements
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));
    };
    
    // Animate elements on scroll with performance optimization
    const animateOnScroll = () => {
        if (window.animationOptimizer && window.animationOptimizer.shouldSkipAnimation()) {
            return; // Skip animation if too many are running
        }
        
        const elements = document.querySelectorAll('.scroll-animate:not(.animate-in)');
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.8) {
                // Stagger animations for better performance
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, index * 50);
            }
        });
    };
    
    // Smooth animation function using CSS transforms
    const animateElement = (element, properties, duration = 600, easing = 'ease-out') => {
        if (!element) return;
        
        // Use CSS transforms for better performance
        const startTime = performance.now();
        const startProps = {};
        const endProps = {};
        
        // Get current computed styles
        Object.keys(properties).forEach(prop => {
            startProps[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
            endProps[prop] = properties[prop];
        });
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = easing === 'ease-out' 
                ? 1 - Math.pow(1 - progress, 3)
                : progress;
            
            // Apply transforms
            Object.keys(properties).forEach(prop => {
                const value = startProps[prop] + (endProps[prop] - startProps[prop]) * easeProgress;
                
                if (prop === 'opacity') {
                    element.style.opacity = value;
                } else if (prop === 'scale') {
                    element.style.transform = `scale(${value})`;
                } else if (prop === 'translateY') {
                    element.style.transform = `translate3d(0, ${value}px, 0)`;
                } else if (prop === 'translateX') {
                    element.style.transform = `translate3d(${value}px, 0, 0)`;
                }
            });
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    // Optimized button hover effects
    const initButtonAnimations = () => {
        if (!elements.buttons) return;
        
        const buttons = elements.buttons.children;
        Array.from(buttons).forEach(button => {
            // Use CSS transitions for hover effects (more performant)
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            button.onMouseEnter(() => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
                button.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            });
            
            button.onMouseLeave(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    };
    
    // Performance optimization: Throttle resize events
    let resizeTimeout;
    const handleResize = () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            // Recalculate layout if needed
            handleScrollOptimized();
        }, 100);
    };
    
    // Initialize page animations
    const initPageAnimations = () => {
        // Hero section entrance animation
        if (elements.hero) {
            elements.hero.style.opacity = '0';
            elements.hero.style.transform = 'translate3d(0, 30px, 0)';
            
            setTimeout(() => {
                animateElement(elements.hero, {
                    opacity: 1,
                    translateY: 0
                }, 800, 'ease-out');
            }, 100);
        }
        
        // Content stagger animation
        if (elements.content) {
            const contentChildren = elements.content.children;
            Array.from(contentChildren).forEach((child, index) => {
                child.style.opacity = '0';
                child.style.transform = 'translate3d(0, 20px, 0)';
                
                setTimeout(() => {
                    animateElement(child, {
                        opacity: 1,
                        translateY: 0
                    }, 600, 'ease-out');
                }, 200 + (index * 100));
            });
        }
    };
    
    // Cleanup function for performance
    const cleanup = () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        observer.disconnect();
    };
    
    // Event listeners with performance optimizations
    const initEventListeners = () => {
        // Use optimized handlers if available
        const optimizedScrollHandler = window.animationOptimizer 
            ? window.animationOptimizer.optimizeScrollHandler(scrollHandler)
            : scrollHandler;
            
        const optimizedResizeHandler = window.animationOptimizer
            ? window.animationOptimizer.optimizeResizeHandler(handleResize)
            : handleResize;
        
        // Use passive listeners for better scroll performance
        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
        window.addEventListener('resize', optimizedResizeHandler, { passive: true });
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
    };
    
    // Initialize everything
    const init = () => {
        initPageAnimations();
        initButtonAnimations();
        initScrollAnimations();
        initEventListeners();
        
        // Add performance monitoring
        if ('performance' in window) {
            performance.mark('homepage-init-start');
            performance.mark('homepage-init-end');
            performance.measure('homepage-initialization', 'homepage-init-start', 'homepage-init-end');
        }
    };
    
    // Start initialization
    init();
    
    // Export cleanup for external use
    window.homepageCleanup = cleanup;
});
