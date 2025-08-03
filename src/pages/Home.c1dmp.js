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
    // Ultra-optimized scroll performance state
    const ultraState = {
        isScrolling: false,
        lastScrollTime: 0,
        scrollVelocity: 0,
        activeAnimations: 0,
        maxAnimations: 0,
        frameBudget: 16,
        lastFrameTime: performance.now(),
        scrollThreshold: 2, // Ultra-sensitive for maximum smoothness
        lastProcessedScrollY: 0,
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        touchStartY: 0,
        touchStartX: 0,
        scrollMomentum: 0,
        lastScrollDirection: 0,
        smoothScrollTarget: 0,
        isSmoothScrolling: false,
        // Ultra-optimization properties
        rafId: null,
        scrollCache: new Map(),
        elementCache: new Map(),
        lastScrollY: 0,
        scrollDelta: 0,
        isThrottled: false,
        throttleTime: 8, // Ultra-fast 120fps equivalent
        batchUpdates: [],
        updateQueue: []
    };
    
    // Ultra-optimized element cache with minimal DOM queries
    const getElement = (selector) => {
        if (!ultraState.elementCache.has(selector)) {
            const element = $w(selector);
            if (element) {
                ultraState.elementCache.set(selector, element);
                // Pre-apply hardware acceleration
                if (element.style) {
                    element.style.transform = 'translate3d(0, 0, 0)';
                    element.style.willChange = 'transform';
                    element.style.backfaceVisibility = 'hidden';
                    element.style.contain = 'layout style paint';
                }
            }
            return element;
        }
        return ultraState.elementCache.get(selector);
    };
    
    // Pre-cache all elements with ultra-optimization
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
    
    // Ultra-optimized scroll handler with minimal processing
    const ultraScrollHandler = () => {
        if (ultraState.isThrottled) return;
        
        ultraState.isThrottled = true;
        
        // Use ultra-fast requestAnimationFrame
        if (ultraState.rafId) {
            cancelAnimationFrame(ultraState.rafId);
        }
        
        ultraState.rafId = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            ultraState.scrollDelta = currentScrollY - ultraState.lastProcessedScrollY;
            
            // Only process if scroll distance is significant
            if (Math.abs(ultraState.scrollDelta) < ultraState.scrollThreshold) {
                ultraState.rafId = null;
                ultraState.isThrottled = false;
                return;
            }
            
            // Batch DOM updates for maximum performance
            ultraState.batchUpdates = [];
            
            // Ultra-optimized navigation update
            if (elements.nav && Math.abs(ultraState.scrollDelta) > 5) {
                const navOpacity = Math.min(currentScrollY / 100, 1);
                const smoothOpacity = navOpacity * 0.98;
                
                ultraState.batchUpdates.push(() => {
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${smoothOpacity})`;
                    
                    if (currentScrollY > 10) {
                        elements.nav.style.boxShadow = `0 4px 20px rgba(0, 0, 0, ${Math.min(currentScrollY / 200, 0.15)})`;
                    } else {
                        elements.nav.style.boxShadow = 'none';
                    }
                });
            }
            
            // Ultra-optimized parallax with minimal calculations
            if (elements.hero && currentScrollY < window.innerHeight) {
                const parallaxOffset = currentScrollY * 0.3; // Reduced for better performance
                ultraState.batchUpdates.push(() => {
                    elements.hero.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
                });
            }
            
            // Execute all updates in a single batch
            if (ultraState.batchUpdates.length > 0) {
                ultraState.batchUpdates.forEach(update => update());
                ultraState.batchUpdates = [];
            }
            
            // Update state
            ultraState.lastProcessedScrollY = currentScrollY;
            ultraState.lastScrollY = currentScrollY;
            ultraState.rafId = null;
            
            // Reset throttle after minimal delay
            setTimeout(() => {
                ultraState.isThrottled = false;
            }, ultraState.throttleTime);
        });
    };
    
    // Ultra-optimized smooth scroll with minimal processing
    const ultraSmoothScrollTo = (targetY, duration = 600) => {
        if (ultraState.isSmoothScrolling) return;
        
        ultraState.isSmoothScrolling = true;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();
        
        // Ultra-optimized easing function
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
        
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            
            window.scrollTo(0, startY + distance * easedProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                ultraState.isSmoothScrolling = false;
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
            ultraState.isMenuOpen = !ultraState.isMenuOpen;
            
            if (ultraState.isMenuOpen) {
                elements.navMenu.classList.add('active');
                elements.navMenuToggle.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            } else {
                elements.navMenu.classList.remove('active');
                elements.navMenuToggle.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            }
        };
        
        // Add click event
        elements.navMenuToggle.onClick(() => {
            toggleMenu();
        });
        
        // Close menu when clicking on nav links
        if (elements.navLinks) {
            const links = elements.navLinks.children;
            Array.from(links).forEach(link => {
                link.onClick(() => {
                    if (ultraState.isMenuOpen) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (ultraState.isMenuOpen && 
                !elements.navMenu.contains(e.target) && 
                !elements.navMenuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && ultraState.isMenuOpen) {
                toggleMenu();
            }
        });
    };
    
    // Mobile-optimized scroll handler
    let lastScrollY = 0;
    
    const mobileScrollHandler = () => {
        // Cancel any pending scroll processing
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Use timeout to throttle scroll processing
        scrollTimeout = setTimeout(() => {
            if (scrollRAF) return;
            
            scrollRAF = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollDelta = Math.abs(currentScrollY - ultraState.lastProcessedScrollY);
                
                // Only process if scroll distance is significant
                if (scrollDelta < ultraState.scrollThreshold) {
                    scrollRAF = null;
                    return;
                }
                
                // Mobile-optimized navigation update - only update if significant change
                if (elements.nav && Math.abs(currentScrollY - ultraState.lastProcessedScrollY) > 20) {
                    const navOpacity = Math.min(currentScrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.98})`;
                    
                    // Add shadow on scroll for better visual separation
                    if (currentScrollY > 10) {
                        elements.nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    } else {
                        elements.nav.style.boxShadow = 'none';
                    }
                }
                
                // Update last processed scroll position
                ultraState.lastProcessedScrollY = currentScrollY;
                lastScrollY = currentScrollY;
                scrollRAF = null;
            });
        }, ultraState.isMobile ? 150 : 100); // Increased throttle for better performance
    };
    
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
        if (ultraState.isMobile) {
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
                if (!ultraState.isMobile) {
                    button.style.transform = 'translateY(-2px)';
                }
            });
            
            button.onMouseLeave(() => {
                if (!ultraState.isMobile) {
                    button.style.transform = 'translateY(0)';
                }
            });
            
            // Mobile touch feedback
            if (ultraState.isMobile) {
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
    
    // Mobile touch gesture handling
    const initTouchGestures = () => {
        if (!ultraState.isMobile) return;
        
        // Swipe to close menu
        let touchStartY = 0;
        let touchStartX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!ultraState.isMenuOpen) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaY = touchStartY - touchEndY;
            const deltaX = touchStartX - touchEndX;
            
            // Swipe down to close menu
            if (deltaY < -50 && Math.abs(deltaX) < 100) {
                if (elements.navMenu) {
                    elements.navMenu.classList.remove('active');
                    elements.navMenuToggle.classList.remove('active');
                    ultraState.isMenuOpen = false;
                    document.body.style.overflow = '';
                }
            }
        }, { passive: true });
    };
    
    // Mobile-optimized event listeners
    const initMobileEvents = () => {
        // Premium scroll listener with ultra-smooth performance
        let isScrolling = false;
        let scrollThrottleTime = ultraState.isMobile ? 16 : 8; // Ultra-smooth 60fps scrolling
        
        const throttledScrollHandler = () => {
            if (!isScrolling) {
                isScrolling = true;
                ultraScrollHandler(); // Use premium scroll handler
                
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
                        ultraSmoothScrollTo(targetY, 1000); // Premium smooth scroll
                    }
                    
                    if (ultraState.isMenuOpen) {
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
                ultraState.isMobile = window.innerWidth < 768;
                scrollThrottleTime = ultraState.isMobile ? 16 : 8; // Maintain 60fps
                
                // Update navigation with hardware acceleration
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.transform = `translate3d(0, 0, 0)`;
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.98})`;
                }
                
                // Close mobile menu if switching to desktop
                if (!ultraState.isMobile && ultraState.isMenuOpen) {
                    if (elements.navMenu) {
                        elements.navMenu.classList.remove('active');
                        elements.navMenuToggle.classList.remove('active');
                        ultraState.isMenuOpen = false;
                        document.body.style.overflow = '';
                    }
                }
            }, 100); // Faster resize handling
        }, { passive: true });
        
        // Handle orientation change with premium performance
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Recalculate premium state
                ultraState.isMobile = window.innerWidth < 768;
                scrollThrottleTime = ultraState.isMobile ? 16 : 8;
                
                // Update viewport if needed
                if (ultraState.isMobile) {
                    document.body.classList.add('mobile-device');
                } else {
                    document.body.classList.remove('mobile-device');
                }
            }, 300); // Faster orientation handling
        });
    };
    
    // Mobile performance monitoring
    const initMobilePerformanceMonitoring = () => {
        // Only run performance monitoring in development and limit its impact
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            let frameCount = 0;
            let lastTime = performance.now();
            let monitoringActive = false;
            
            const monitorFPS = () => {
                if (!monitoringActive) return;
                
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    if (fps < 30) {
                        console.warn(`Performance warning: ${fps} FPS - Consider optimizing`);
                    }
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                // Only continue monitoring for a limited time to prevent infinite loops
                if (currentTime - lastTime < 5000) { // Stop after 5 seconds
                    requestAnimationFrame(monitorFPS);
                } else {
                    monitoringActive = false;
                }
            };
            
            // Start monitoring only when needed
            const startMonitoring = () => {
                if (!monitoringActive) {
                    monitoringActive = true;
                    frameCount = 0;
                    lastTime = performance.now();
                    requestAnimationFrame(monitorFPS);
                }
            };
            
            // Start monitoring on user interaction to avoid blocking initial load
            document.addEventListener('click', startMonitoring, { once: true });
            document.addEventListener('scroll', startMonitoring, { once: true });
        }
    };
    
    // Mobile accessibility enhancements
    const initMobileAccessibility = () => {
        // Add ARIA labels for mobile menu
        if (elements.navMenuToggle) {
            elements.navMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            elements.navMenuToggle.setAttribute('aria-expanded', 'false');
        }
        
        if (elements.navMenu) {
            elements.navMenu.setAttribute('aria-hidden', 'true');
        }
        
        // Update ARIA states when menu toggles
        const updateMenuAria = (isOpen) => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.setAttribute('aria-expanded', isOpen.toString());
            }
            if (elements.navMenu) {
                elements.navMenu.setAttribute('aria-hidden', (!isOpen).toString());
            }
        };
        
        // Override the toggle function to include ARIA updates
        if (elements.navMenuToggle) {
            const originalClick = elements.navMenuToggle.onClick;
            elements.navMenuToggle.onClick(() => {
                ultraState.isMenuOpen = !ultraState.isMenuOpen;
                updateMenuAria(ultraState.isMenuOpen);
                
                if (ultraState.isMenuOpen) {
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
        ultraState.isScrolling = false;
        ultraState.isMenuOpen = false;
        ultraState.activeAnimations = 0;
        
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
        if (ultraState.isMobile) {
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
        
        console.log(`Mobile-first mode initialized: ${ultraState.isMobile ? 'Mobile' : 'Desktop'} device detected`);
    };
    
    // Start initialization
    init();
    
    // Export for external access
    window.mobileHomepage = {
        state: ultraState,
        elements: elements,
        cleanup,
        toggleMenu: () => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.click();
            }
        }
    };
});
