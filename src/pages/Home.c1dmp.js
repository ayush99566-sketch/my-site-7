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

$w.onReady(function () {
    // Mobile-first performance state
    const mobileState = {
        isScrolling: false,
        lastScrollTime: 0,
        scrollVelocity: 0,
        activeAnimations: 0,
        maxAnimations: 0,
        frameBudget: 16,
        lastFrameTime: performance.now(),
        scrollThreshold: 10,
        lastProcessedScrollY: 0,
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        touchStartY: 0,
        touchStartX: 0
    };
    
    // Mobile-optimized element cache
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
        footer: getElement('#footerSection'),
        navMenu: getElement('#navMenu'),
        navMenuToggle: getElement('#navMenuToggle'),
        navLinks: getElement('#navLinks')
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
            mobileState.isMenuOpen = !mobileState.isMenuOpen;
            
            if (mobileState.isMenuOpen) {
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
                    if (mobileState.isMenuOpen) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileState.isMenuOpen && 
                !elements.navMenu.contains(e.target) && 
                !elements.navMenuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileState.isMenuOpen) {
                toggleMenu();
            }
        });
    };
    
    // Mobile-optimized scroll handler
    let scrollRAF = null;
    let lastScrollY = 0;
    let scrollTimeout = null;
    
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
                const scrollDelta = Math.abs(currentScrollY - mobileState.lastProcessedScrollY);
                
                // Only process if scroll distance is significant
                if (scrollDelta < mobileState.scrollThreshold) {
                    scrollRAF = null;
                    return;
                }
                
                // Mobile-optimized navigation update
                if (elements.nav) {
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
                mobileState.lastProcessedScrollY = currentScrollY;
                lastScrollY = currentScrollY;
                scrollRAF = null;
            });
        }, mobileState.isMobile ? 100 : 50); // Slower throttle on mobile
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
        if (mobileState.isMobile) {
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
                if (!mobileState.isMobile) {
                    button.style.transform = 'translateY(-2px)';
                }
            });
            
            button.onMouseLeave(() => {
                if (!mobileState.isMobile) {
                    button.style.transform = 'translateY(0)';
                }
            });
            
            // Mobile touch feedback
            if (mobileState.isMobile) {
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
        if (!mobileState.isMobile) return;
        
        // Swipe to close menu
        let touchStartY = 0;
        let touchStartX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!mobileState.isMenuOpen) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaY = touchStartY - touchEndY;
            const deltaX = touchStartX - touchEndX;
            
            // Swipe down to close menu
            if (deltaY < -50 && Math.abs(deltaX) < 100) {
                if (elements.navMenu) {
                    elements.navMenu.classList.remove('active');
                    elements.navMenuToggle.classList.remove('active');
                    mobileState.isMenuOpen = false;
                    document.body.style.overflow = '';
                }
            }
        }, { passive: true });
    };
    
    // Mobile-optimized event listeners
    const initMobileEvents = () => {
        // Optimized scroll listener for mobile
        let isScrolling = false;
        
        const throttledScrollHandler = () => {
            if (!isScrolling) {
                isScrolling = true;
                mobileScrollHandler();
                
                setTimeout(() => {
                    isScrolling = false;
                }, mobileState.isMobile ? 150 : 100);
            }
        };
        
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
        
        // Mobile-optimized resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Update mobile state
                mobileState.isMobile = window.innerWidth < 768;
                
                // Update navigation
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.98})`;
                }
                
                // Close mobile menu if switching to desktop
                if (!mobileState.isMobile && mobileState.isMenuOpen) {
                    if (elements.navMenu) {
                        elements.navMenu.classList.remove('active');
                        elements.navMenuToggle.classList.remove('active');
                        mobileState.isMenuOpen = false;
                        document.body.style.overflow = '';
                    }
                }
            }, 300);
        }, { passive: true });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Recalculate mobile state
                mobileState.isMobile = window.innerWidth < 768;
                
                // Update viewport if needed
                if (mobileState.isMobile) {
                    document.body.classList.add('mobile-device');
                } else {
                    document.body.classList.remove('mobile-device');
                }
            }, 500);
        });
    };
    
    // Mobile performance monitoring
    const initMobilePerformanceMonitoring = () => {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            let frameCount = 0;
            let lastTime = performance.now();
            
            const monitorFPS = () => {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    if (fps < 50) {
                        console.warn(`Mobile performance warning: ${fps} FPS - Consider optimizing`);
                    }
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorFPS);
            };
            
            requestAnimationFrame(monitorFPS);
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
                mobileState.isMenuOpen = !mobileState.isMenuOpen;
                updateMenuAria(mobileState.isMenuOpen);
                
                if (mobileState.isMenuOpen) {
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
        }
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        elementCache.clear();
        document.body.style.overflow = '';
    };
    
    // Initialize everything with mobile-first approach
    const init = () => {
        // Add mobile-specific classes
        if (mobileState.isMobile) {
            document.body.classList.add('mobile-device');
        }
        
        // Initialize in order of priority
        initMobilePage();
        initMobileButtons();
        initMobileEvents();
        initTouchGestures();
        initMobileAccessibility();
        initMobilePerformanceMonitoring();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
        
        console.log(`Mobile-first mode initialized: ${mobileState.isMobile ? 'Mobile' : 'Desktop'} device detected`);
    };
    
    // Start initialization
    init();
    
    // Export for external access
    window.mobileHomepage = {
        state: mobileState,
        elements: elements,
        cleanup,
        toggleMenu: () => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.click();
            }
        }
    };
});
