// Responsive Homepage - Optimized for Both Mobile and Desktop
// Removed mobile-specific performance killers that harm desktop performance

$w.onReady(function () {
    // Performance-optimized state management
    const appState = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        lastScrollY: 0,
        scrollRAF: null,
        resizeTimeout: null
    };
    
    // Optimized element cache
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
    
    // Optimized navigation functionality
    const initNavigation = () => {
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
            appState.isMenuOpen = !appState.isMenuOpen;
            
            if (appState.isMenuOpen) {
                elements.navMenu.classList.add('active');
                elements.navMenuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                elements.navMenu.classList.remove('active');
                elements.navMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
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
                    if (appState.isMenuOpen) {
                        toggleMenu();
                    }
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (appState.isMenuOpen && 
                !elements.navMenu.contains(e.target) && 
                !elements.navMenuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && appState.isMenuOpen) {
                toggleMenu();
            }
        });
    };
    
    // Optimized scroll handler - different behavior for mobile vs desktop
    const handleScroll = () => {
        if (appState.scrollRAF) return;
        
        appState.scrollRAF = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            
            // Only update navigation on desktop or when scroll is significant
            if (!appState.isMobile || Math.abs(currentScrollY - appState.lastScrollY) > 10) {
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
            }
            
            appState.lastScrollY = currentScrollY;
            appState.scrollRAF = null;
        });
    };
    
    // Optimized page initialization
    const initPage = () => {
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
        
        // Add device-specific classes
        if (appState.isMobile) {
            document.body.classList.add('mobile-device');
        } else {
            document.body.classList.add('desktop-device');
        }
        
        // Initialize navigation
        initNavigation();
    };
    
    // Optimized button interactions
    const initButtons = () => {
        if (!elements.buttons) return;
        
        const buttons = elements.buttons.children;
        Array.from(buttons).forEach(button => {
            // Optimized transitions
            button.style.transition = 'all 0.2s ease-out';
            
            // Desktop hover effects
            if (!appState.isMobile) {
                button.onMouseEnter(() => {
                    button.style.transform = 'translateY(-2px)';
                });
                
                button.onMouseLeave(() => {
                    button.style.transform = 'translateY(0)';
                });
            }
            
            // Mobile touch feedback
            if (appState.isMobile) {
                button.onClick(() => {
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
        if (!appState.isMobile) return;
        
        // Swipe to close menu
        let touchStartY = 0;
        let touchStartX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!appState.isMenuOpen) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaY = touchStartY - touchEndY;
            const deltaX = touchStartX - touchEndX;
            
            // Swipe down to close menu
            if (deltaY < -50 && Math.abs(deltaX) < 100) {
                if (elements.navMenu) {
                    elements.navMenu.classList.remove('active');
                    elements.navMenuToggle.classList.remove('active');
                    appState.isMenuOpen = false;
                    document.body.style.overflow = '';
                }
            }
        }, { passive: true });
    };
    
    // Optimized event listeners
    const initEvents = () => {
        // Optimized scroll listener
        let isScrolling = false;
        
        const throttledScrollHandler = () => {
            if (!isScrolling) {
                isScrolling = true;
                handleScroll();
                
                setTimeout(() => {
                    isScrolling = false;
                }, appState.isMobile ? 100 : 16); // Faster on desktop
            }
        };
        
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
        
        // Optimized resize handler
        window.addEventListener('resize', () => {
            if (appState.resizeTimeout) clearTimeout(appState.resizeTimeout);
            appState.resizeTimeout = setTimeout(() => {
                // Update device state
                const wasMobile = appState.isMobile;
                appState.isMobile = window.innerWidth < 768;
                
                // Update navigation
                if (elements.nav) {
                    const navOpacity = Math.min(window.scrollY / 100, 1);
                    elements.nav.style.backgroundColor = `rgba(255, 255, 255, ${navOpacity * 0.98})`;
                }
                
                // Close mobile menu if switching to desktop
                if (!appState.isMobile && appState.isMenuOpen) {
                    if (elements.navMenu) {
                        elements.navMenu.classList.remove('active');
                        elements.navMenuToggle.classList.remove('active');
                        appState.isMenuOpen = false;
                        document.body.style.overflow = '';
                    }
                }
                
                // Update device classes
                if (wasMobile !== appState.isMobile) {
                    if (appState.isMobile) {
                        document.body.classList.remove('desktop-device');
                        document.body.classList.add('mobile-device');
                    } else {
                        document.body.classList.remove('mobile-device');
                        document.body.classList.add('desktop-device');
                    }
                }
            }, 300);
        }, { passive: true });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                appState.isMobile = window.innerWidth < 768;
                
                if (appState.isMobile) {
                    document.body.classList.add('mobile-device');
                    document.body.classList.remove('desktop-device');
                } else {
                    document.body.classList.add('desktop-device');
                    document.body.classList.remove('mobile-device');
                }
            }, 500);
        });
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
                        console.warn(`Performance warning: ${fps} FPS - Consider optimizing`);
                    }
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorFPS);
            };
            
            requestAnimationFrame(monitorFPS);
        }
    };
    
    // Accessibility enhancements
    const initAccessibility = () => {
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
                appState.isMenuOpen = !appState.isMenuOpen;
                updateMenuAria(appState.isMenuOpen);
                
                if (appState.isMenuOpen) {
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
        if (appState.scrollRAF) {
            cancelAnimationFrame(appState.scrollRAF);
        }
        if (appState.resizeTimeout) {
            clearTimeout(appState.resizeTimeout);
        }
        elementCache.clear();
        document.body.style.overflow = '';
    };
    
    // Initialize everything
    const init = () => {
        // Initialize in order of priority
        initPage();
        initButtons();
        initEvents();
        initTouchGestures();
        initAccessibility();
        initPerformanceMonitoring();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
        
        console.log(`Responsive mode initialized: ${appState.isMobile ? 'Mobile' : 'Desktop'} device detected`);
    };
    
    // Start initialization
    init();
    
    // Export for external access
    window.responsiveHomepage = {
        state: appState,
        elements: elements,
        cleanup,
        toggleMenu: () => {
            if (elements.navMenuToggle) {
                elements.navMenuToggle.click();
            }
        }
    };
}); 