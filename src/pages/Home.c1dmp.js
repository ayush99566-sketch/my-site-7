// Mobile-First Responsive Homepage - Optimized for Mobile Devices
// Complete mobile optimization with touch-friendly interactions

// Fix for AbortError: The play() request was interrupted by a call to pause()
// This error commonly occurs with HTML5 media elements in Wix sites
(function() {
    // Override HTMLMediaElement play() method to handle AbortError
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function() {
        return originalPlay.call(this).catch(error => {
            // Ignore AbortError as it's expected when play() is interrupted by pause()
            if (error.name === 'AbortError') {
                console.log('Media play() interrupted by pause() - this is normal behavior');
                return Promise.resolve();
            }
            // Re-throw other errors
            throw error;
        });
    };

    // Handle any existing media elements
    document.addEventListener('DOMContentLoaded', function() {
        const mediaElements = document.querySelectorAll('video, audio');
        mediaElements.forEach(media => {
            media.addEventListener('error', function(e) {
                if (e.target.error && e.target.error.code === 4) {
                    // MEDIA_ELEMENT_ERROR_ABORTED
                    console.log('Media element aborted - this is normal');
                }
            });
        });
    });

    // Global error handler for unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && event.reason.name === 'AbortError' && 
            event.reason.message && event.reason.message.includes('play()')) {
            event.preventDefault();
            console.log('Prevented AbortError from play() interruption');
        }
    });
})();

// WebGL Context Management - Fix for INVALID_OPERATION errors
(function() {
    // Store WebGL contexts to prevent invalid operations
    const webglContexts = new Set();
    
    // Override getContext to track WebGL contexts
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
        const context = originalGetContext.call(this, contextType, contextAttributes);
        
        if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
            webglContexts.add(context);
            
            // Override deleteTexture to prevent invalid operations
            const originalDeleteTexture = context.deleteTexture;
            context.deleteTexture = function(texture) {
                if (texture && webglContexts.has(this)) {
                    try {
                        originalDeleteTexture.call(this, texture);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteTexture error:', error);
                        }
                    }
                }
            };
            
            // Override deleteBuffer to prevent invalid operations
            const originalDeleteBuffer = context.deleteBuffer;
            context.deleteBuffer = function(buffer) {
                if (buffer && webglContexts.has(this)) {
                    try {
                        originalDeleteBuffer.call(this, buffer);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteBuffer error:', error);
                        }
                    }
                }
            };
            
            // Override deleteFramebuffer to prevent invalid operations
            const originalDeleteFramebuffer = context.deleteFramebuffer;
            context.deleteFramebuffer = function(framebuffer) {
                if (framebuffer && webglContexts.has(this)) {
                    try {
                        originalDeleteFramebuffer.call(this, framebuffer);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteFramebuffer error:', error);
                        }
                    }
                }
            };
            
            // Override deleteRenderbuffer to prevent invalid operations
            const originalDeleteRenderbuffer = context.deleteRenderbuffer;
            context.deleteRenderbuffer = function(renderbuffer) {
                if (renderbuffer && webglContexts.has(this)) {
                    try {
                        originalDeleteRenderbuffer.call(this, renderbuffer);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteRenderbuffer error:', error);
                        }
                    }
                }
            };
            
            // Override deleteProgram to prevent invalid operations
            const originalDeleteProgram = context.deleteProgram;
            context.deleteProgram = function(program) {
                if (program && webglContexts.has(this)) {
                    try {
                        originalDeleteProgram.call(this, program);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteProgram error:', error);
                        }
                    }
                }
            };
            
            // Override deleteShader to prevent invalid operations
            const originalDeleteShader = context.deleteShader;
            context.deleteShader = function(shader) {
                if (shader && webglContexts.has(this)) {
                    try {
                        originalDeleteShader.call(this, shader);
                    } catch (error) {
                        if (error.name !== 'INVALID_OPERATION') {
                            console.warn('WebGL deleteShader error:', error);
                        }
                    }
                }
            };
        }
        
        return context;
    };
    
    // Cleanup WebGL contexts on page unload
    window.addEventListener('beforeunload', function() {
        webglContexts.clear();
    });
})();

$w.onReady(function () {
    // Premium scroll performance state
    const premiumState = {
        isScrolling: false,
        lastScrollTime: 0,
        scrollVelocity: 0,
        activeAnimations: 0,
        maxAnimations: 0,
        frameBudget: 16,
        lastFrameTime: performance.now(),
        scrollThreshold: 5, // Reduced for smoother detection
        lastProcessedScrollY: 0,
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        touchStartY: 0,
        touchStartX: 0,
        scrollMomentum: 0,
        lastScrollDirection: 0,
        smoothScrollTarget: 0,
        isSmoothScrolling: false
    };
    
    // Premium element cache with hardware acceleration
    const elementCache = new Map();
    const getElement = (selector) => {
        if (!elementCache.has(selector)) {
            const element = $w(selector);
            if (element) {
                elementCache.set(selector, element);
                // Enable hardware acceleration for all elements
                if (element.style) {
                    element.style.transform = 'translate3d(0, 0, 0)';
                    element.style.willChange = 'transform';
                    element.style.backfaceVisibility = 'hidden';
                }
            }
            return element;
        }
        return elementCache.get(selector);
    };
    
    // Pre-cache all elements with hardware acceleration
    const elements = {
        hero: getElement('#heroSection'),
        nav: getElement('#navigation'),
        content: getElement('#mainContent'),
        buttons: getElement('#ctaButtons'),
        footer: getElement('#footerSection'),
        navMenu: getElement('#navMenu'),
        navMenuToggle: getElement('#navMenuToggle'),
        navLinks: getElement('#navLinks')
    };
    
    // Single premium scroll handler - REMOVED REDUNDANT HANDLERS
    let scrollRAF = null;
    let scrollTimeout = null;
    
    const premiumScrollHandler = () => {
        // Cancel any pending scroll processing
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Use requestAnimationFrame for buttery smooth scrolling
        if (scrollRAF) {
            cancelAnimationFrame(scrollRAF);
        }
        
        scrollRAF = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - premiumState.lastProcessedScrollY;
            const scrollDirection = Math.sign(scrollDelta);
            
            // Calculate scroll momentum for premium feel
            premiumState.scrollMomentum = scrollDelta * 0.8 + premiumState.scrollMomentum * 0.2;
            premiumState.lastScrollDirection = scrollDirection;
            
            // Only process if scroll distance is significant
            if (Math.abs(scrollDelta) < premiumState.scrollThreshold) {
                scrollRAF = null;
                return;
            }
            
            // Premium navigation update with smooth transitions
            if (elements.nav) {
                const navOpacity = Math.min(currentScrollY / 100, 1);
                const smoothOpacity = navOpacity * 0.98;
                
                // Use transform3d for hardware acceleration
                elements.nav.style.transform = `translate3d(0, 0, 0)`;
                elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${smoothOpacity})`;
                
                // Add premium shadow effect
                if (currentScrollY > 10) {
                    elements.nav.style.boxShadow = `0 4px 20px rgba(0, 0, 0, ${Math.min(currentScrollY / 200, 0.15)})`;
                } else {
                    elements.nav.style.boxShadow = 'none';
                }
            }
            
            // Premium content parallax effect
            if (elements.hero && currentScrollY < window.innerHeight) {
                const parallaxOffset = currentScrollY * 0.5;
                elements.hero.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
            }
            
            // Update last processed scroll position
            premiumState.lastProcessedScrollY = currentScrollY;
            scrollRAF = null;
        });
    };
    
    // Premium smooth scroll with easing
    const smoothScrollTo = (targetY, duration = 800) => {
        if (premiumState.isSmoothScrolling) return;
        
        premiumState.isSmoothScrolling = true;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();
        
        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startY + distance * easedProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                premiumState.isSmoothScrolling = false;
            }
        };
        
        requestAnimationFrame(animateScroll);
    };
    
    // Mobile hamburger menu functionality
    const initMobileMenu = () => {
        if (!elements.navMenuToggle || !elements.navMenu) return;
        
        // Create hamburger icon if it doesn't exist
        if (!elements.navMenuToggle.innerHTML.trim()) {
            elements.navMenuToggle.innerHTML = `
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            `;
        }
        
        // Toggle menu function
        const toggleMenu = () => {
            premiumState.isMenuOpen = !premiumState.isMenuOpen;
            
            if (premiumState.isMenuOpen) {
                elements.navMenu.classList.add('active');
                elements.navMenuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                elements.navMenu.classList.remove('active');
                elements.navMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        };
        
        // Add click event to toggle menu
        elements.navMenuToggle.onClick(toggleMenu);
        
        // Close menu when clicking on links
        if (elements.navMenu) {
            const links = elements.navMenu.children;
            Array.from(links).forEach(link => {
                link.onClick(() => {
                    if (premiumState.isMenuOpen) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (premiumState.isMenuOpen && 
                !elements.navMenu.contains(e.target) && 
                !elements.navMenuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && premiumState.isMenuOpen) {
                toggleMenu();
            }
        });
    };
    
    // REMOVED REDUNDANT MOBILE SCROLL HANDLER - This was causing conflicts
    
    // Mobile-optimized page initialization
    const initMobilePage = () => {
        // Set all elements to visible immediately
        if (elements.hero) {
            elements.hero.style.opacity = '1';
            elements.hero.style.transform = 'translate3d(0, 0, 0)';
        }
        
        if (elements.content) {
            const children = elements.content.children;
            Array.from(children).forEach((child) => {
                child.style.opacity = '1';
                child.style.transform = 'translate3d(0, 0, 0)';
                child.classList.remove('scroll-animate');
                child.style.willChange = 'auto';
                child.style.contain = 'layout style paint';
            });
        }
        
        // Add mobile-specific classes
        if (premiumState.isMobile) {
            document.body.classList.add('mobile-device');
        }
        
        // Initialize mobile menu
        initMobileMenu();
    };
    
    // Mobile-optimized button interactions
    const initMobileButtons = () => {
        if (!elements.buttons) return;
        
        const buttons = elements.buttons.children;
        Array.from(buttons).forEach(button => {
            // Mobile-optimized transitions
            button.style.transition = 'all 0.2s ease-out';
            
            // Touch-friendly interactions
            button.onMouseEnter(() => {
                if (!premiumState.isMobile) {
                    button.style.transform = 'translateY(-2px)';
                }
            });
            
            button.onMouseLeave(() => {
                if (!premiumState.isMobile) {
                    button.style.transform = 'translateY(0)';
                }
            });
            
            // Mobile touch feedback
            if (premiumState.isMobile) {
                button.onClick(() => {
                    // Add touch feedback
                    button.style.transform = 'translateY(1px)';
                    setTimeout(() => {
                        button.style.transform = 'translateY(0)';
                    }, 150);
                });
            }
        });
    };
    
    // Mobile touch gesture handling - SIMPLIFIED
    const initTouchGestures = () => {
        if (!premiumState.isMobile) return;
        
        // Simple swipe to close menu
        document.addEventListener('touchstart', (e) => {
            premiumState.touchStartY = e.touches[0].clientY;
            premiumState.touchStartX = e.touches[0].clientX;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!premiumState.isMenuOpen) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaY = touchEndY - premiumState.touchStartY;
            const deltaX = touchEndX - premiumState.touchStartX;
            
            // Swipe down to close menu
            if (deltaY > 50 && Math.abs(deltaX) < 50) {
                elements.navMenu.classList.remove('active');
                elements.navMenuToggle.classList.remove('active');
                premiumState.isMenuOpen = false;
                document.body.style.overflow = '';
            }
        });
    };
    
    // Mobile-optimized event listeners
    const initMobileEvents = () => {
        // SINGLE premium scroll listener - no more conflicts
        let isScrolling = false;
        let scrollThrottleTime = premiumState.isMobile ? 16 : 8; // Ultra-smooth 60fps scrolling
        
        const throttledScrollHandler = () => {
            if (!isScrolling) {
                isScrolling = true;
                premiumScrollHandler(); // Use single premium scroll handler
                
                setTimeout(() => {
                    isScrolling = false;
                }, scrollThrottleTime);
            }
        };
        
        // Use passive scroll listener for buttery smooth performance
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
        
        // Premium smooth scroll for navigation links
        if (elements.navLinks) {
            const links = elements.navLinks.children;
            Array.from(links).forEach(link => {
                link.onClick((e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const targetY = targetElement.offsetTop - 80; // Account for fixed nav
                        smoothScrollTo(targetY, 1000); // Premium smooth scroll
                    }
                    
                    if (premiumState.isMenuOpen) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // Premium resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Update premium state
                premiumState.isMobile = window.innerWidth < 768;
                scrollThrottleTime = premiumState.isMobile ? 16 : 8; // Maintain 60fps
                
                // Update navigation with hardware acceleration
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.transform = `translate3d(0, 0, 0)`;
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.98})`;
                }
                
                // Close mobile menu if switching to desktop
                if (!premiumState.isMobile && premiumState.isMenuOpen) {
                    if (elements.navMenu) {
                        elements.navMenu.classList.remove('active');
                        elements.navMenuToggle.classList.remove('active');
                        premiumState.isMenuOpen = false;
                        document.body.style.overflow = '';
                    }
                }
            }, 100); // Faster resize handling
        }, { passive: true });
        
        // Handle orientation change with premium performance
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Recalculate premium state
                premiumState.isMobile = window.innerWidth < 768;
                scrollThrottleTime = premiumState.isMobile ? 16 : 8;
                
                // Update viewport if needed
                if (premiumState.isMobile) {
                    document.body.classList.add('mobile-device');
                } else {
                    document.body.classList.remove('mobile-device');
                }
            }, 300); // Faster orientation handling
        });
    };
    
    // Mobile performance monitoring - SIMPLIFIED to prevent overhead
    const initMobilePerformanceMonitoring = () => {
        // Only run basic monitoring in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Simple performance check without continuous monitoring
            setTimeout(() => {
                const currentTime = performance.now();
                const loadTime = currentTime - premiumState.lastFrameTime;
                
                if (loadTime > 100) {
                    console.warn(`Performance warning: Page load took ${loadTime.toFixed(1)}ms`);
                } else {
                    console.log(`Premium performance: Page loaded in ${loadTime.toFixed(1)}ms`);
                }
            }, 1000);
        }
    };
    
    // Mobile accessibility enhancements - SIMPLIFIED
    const initMobileAccessibility = () => {
        // Add basic ARIA labels for mobile menu
        if (elements.navMenuToggle) {
            elements.navMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            elements.navMenuToggle.setAttribute('aria-expanded', 'false');
        }
        
        if (elements.navMenu) {
            elements.navMenu.setAttribute('aria-hidden', 'true');
        }
        
        // Simple ARIA update function
        const updateMenuAria = (isOpen) => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.setAttribute('aria-expanded', isOpen.toString());
            }
            if (elements.navMenu) {
                elements.navMenu.setAttribute('aria-hidden', (!isOpen).toString());
            }
        };
        
        // Update ARIA when menu toggles
        if (elements.navMenuToggle) {
            const originalClick = elements.navMenuToggle.onClick;
            elements.navMenuToggle.onClick(() => {
                premiumState.isMenuOpen = !premiumState.isMenuOpen;
                updateMenuAria(premiumState.isMenuOpen);
                
                if (premiumState.isMenuOpen) {
                    elements.navMenu.classList.add('active');
                    elements.navMenuToggle.classList.add('active');
                    document.body.style.overflow = 'hidden';
                } else {
                    elements.navMenu.classList.remove('active');
                    elements.navMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    };
    
    // Cleanup function
    const cleanup = () => {
        if (scrollRAF) {
            cancelAnimationFrame(scrollRAF);
            scrollRAF = null;
        }
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        
        // Clear element cache
        elementCache.clear();
        
        // Reset body overflow
        document.body.style.overflow = '';
        
        // Remove mobile device class
        document.body.classList.remove('mobile-device');
        
        // Reset mobile state
        premiumState.isScrolling = false;
        premiumState.isMenuOpen = false;
        premiumState.activeAnimations = 0;
        
        // Cleanup any WebGL contexts to prevent INVALID_OPERATION errors
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
            try {
                const gl = canvas.getContext('webgl') || canvas.getContext('webgl2') || canvas.getContext('experimental-webgl');
                if (gl) {
                    // Force context loss to prevent invalid operations
                    const extension = gl.getExtension('WEBGL_lose_context');
                    if (extension) {
                        extension.loseContext();
                    }
                }
            } catch (error) {
                // Ignore WebGL cleanup errors
                console.log('WebGL cleanup completed');
            }
        });
        
        console.log('Mobile homepage cleanup completed');
    };
    
    // Initialize everything with mobile-first approach
    const init = () => {
        // Add mobile-specific classes
        if (premiumState.isMobile) {
            document.body.classList.add('mobile-device');
        }
        
        // Global error handler for WebGL warnings
        const originalConsoleWarn = console.warn;
        console.warn = function(...args) {
            const message = args.join(' ');
            // Suppress WebGL INVALID_OPERATION warnings as they're not critical
            if (message.includes('WebGL') && message.includes('INVALID_OPERATION')) {
                return; // Don't log these warnings
            }
            // Log all other warnings normally
            originalConsoleWarn.apply(console, args);
        };
        
        // Initialize in order of priority
        initMobilePage();
        initMobileButtons();
        initMobileEvents();
        initTouchGestures();
        initMobileAccessibility();
        initMobilePerformanceMonitoring();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
        
        console.log(`Mobile-first mode initialized: ${premiumState.isMobile ? 'Mobile' : 'Desktop'} device detected`);
    };
    
    // Start initialization
    init();
    
    // Export for external access
    window.mobileHomepage = {
        state: premiumState,
        elements: elements,
        cleanup,
        toggleMenu: () => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.click();
            }
        }
    };
});
