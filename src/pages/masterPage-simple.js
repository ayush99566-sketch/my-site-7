// SIMPLIFIED ULTRA-SMOOTH WIX SITE - Master Page
// Optimized to prevent crashes and ensure smooth functioning

$w.onReady(function () {
    console.log('🚀 Simplified Master Page Loading...');
    
    // Simple state management
    const state = {
        isLoaded: false,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        isMenuOpen: false
    };
    
    // Element cache
    const elements = new Map();
    
    function getElement(selector) {
        if (!elements.has(selector)) {
            try {
                const element = $w(selector);
                if (element) elements.set(selector, element);
            } catch (error) {
                console.warn('Element not found:', selector);
            }
        }
        return elements.get(selector);
    }
    
    // CRASH PREVENTION - Disable all heavy animations
    function preventCrashes() {
        console.log('🛡️ Preventing crashes...');
        
        try {
            const allElements = $w('*');
            if (allElements && allElements.length > 0) {
                allElements.forEach(element => {
                    if (element && element.style) {
                        // Disable all animations and heavy effects
                        element.style.animation = 'none !important';
                        element.style.transition = 'none !important';
                        element.style.transform = 'none !important';
                        element.style.filter = 'none !important';
                        element.style.backdropFilter = 'none !important';
                        element.style.boxShadow = 'none !important';
                        element.style.willChange = 'auto !important';
                        element.style.backfaceVisibility = 'visible !important';
                        element.style.perspective = 'none !important';
                        
                        // Ensure visibility
                        element.style.visibility = 'visible !important';
                        element.style.opacity = '1 !important';
                        element.style.display = 'block !important';
                    }
                });
            }
            
            console.log('✅ Crash prevention applied');
            
        } catch (error) {
            console.warn('Crash prevention failed:', error);
        }
    }
    
    // ERROR HANDLING
    function setupErrorHandling() {
        if (typeof window !== 'undefined') {
            window.addEventListener('error', (e) => {
                console.warn('Error caught and handled:', e.error);
                e.preventDefault();
            });
            
            window.addEventListener('unhandledrejection', (e) => {
                console.warn('Unhandled promise rejection caught:', e.reason);
                e.preventDefault();
            });
        }
    }
    
    // MOBILE MENU SYSTEM
    function toggleMobileMenu() {
        try {
            const menu = getElement('#navMenu');
            const toggle = getElement('#navMenuToggle');
            const overlay = getElement('#mobileOverlay');
            
            if (!menu || !toggle) return;
            
            state.isMenuOpen = !state.isMenuOpen;
            
            if (state.isMenuOpen) {
                menu.expand();
                toggle.expand();
                if (overlay) overlay.expand();
                if (typeof document !== 'undefined') {
                    document.body.style.overflow = 'hidden';
                }
            } else {
                menu.collapse();
                toggle.collapse();
                if (overlay) overlay.collapse();
                if (typeof document !== 'undefined') {
                    document.body.style.overflow = '';
                }
            }
        } catch (error) {
            console.warn('Menu toggle failed:', error);
        }
    }
    
    // SIMPLE SCROLL SYSTEM
    function simpleScrollTo(target) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            element.scrollTo();
        } catch (error) {
            console.warn('Simple scroll failed:', error);
        }
    }
    
    // BASIC NAVIGATION SETUP
    function setupNavigation() {
        console.log('🧭 Setting up navigation...');
        
        try {
            // Mobile menu toggle
            const menuToggle = getElement('#navMenuToggle');
            if (menuToggle) {
                menuToggle.onClick(() => toggleMobileMenu());
            }
            
            // Mobile menu overlay
            const mobileOverlay = getElement('#mobileOverlay');
            if (mobileOverlay) {
                mobileOverlay.onClick(() => toggleMobileMenu());
            }
            
            // Navigation links
            const navLinks = $w('.nav-link, a[href^="#"]');
            navLinks.forEach(link => {
                try {
                    link.onClick((e) => {
                        e.preventDefault();
                        const href = link.href || link.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            simpleScrollTo(href);
                        }
                        if (state.isMenuOpen) {
                            toggleMobileMenu();
                        }
                    });
                } catch (error) {
                    console.warn('Link setup failed:', error);
                }
            });
            
            console.log('✅ Navigation setup complete');
            
        } catch (error) {
            console.warn('Navigation setup failed:', error);
        }
    }
    
    // IMAGE OPTIMIZATION
    function optimizeImages() {
        try {
            const images = $w('img');
            images.forEach(img => {
                if (img.loading !== 'lazy') {
                    img.loading = 'lazy';
                }
                
                img.onError(() => {
                    console.warn('Image failed to load:', img.src);
                });
            });
        } catch (error) {
            console.warn('Image optimization failed:', error);
        }
    }
    
    // MOBILE OPTIMIZATIONS
    function setupMobileOptimizations() {
        console.log('📱 Setting up mobile optimizations...');
        
        try {
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
            const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in window : false;
            
            state.isMobile = isMobile;
            
            if (isTouchDevice) {
                // Touch optimizations
                const buttons = $w('.btn, .button, [data-testid*="button"]');
                buttons.forEach(btn => {
                    if (!btn) return;
                    
                    btn.onTouchStart(() => {
                        btn.style.opacity = '0.8';
                        btn.style.transition = 'opacity 0.15s ease';
                    });
                    
                    btn.onTouchEnd(() => {
                        setTimeout(() => {
                            btn.style.opacity = '1';
                        }, 150);
                    });
                });
            }
            
            // Responsive behavior
            let resizeTimeout;
            if (typeof window !== 'undefined') {
                window.addEventListener('resize', () => {
                    if (resizeTimeout) clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        const wasMobile = state.isMobile;
                        state.isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
                        
                        if (!state.isMobile && wasMobile && state.isMenuOpen) {
                            toggleMobileMenu();
                        }
                    }, 250);
                });
            }
            
            console.log('✅ Mobile optimizations complete');
            
        } catch (error) {
            console.warn('Mobile optimizations failed:', error);
        }
    }
    
    // ENABLE SMOOTH TRANSITIONS (after everything is loaded)
    function enableSmoothTransitions() {
        try {
            const allElements = $w('*');
            allElements.forEach(element => {
                if (element && element.style) {
                    // Enable smooth transitions
                    element.style.transition = 'opacity 0.3s ease-in-out, transform 0.2s ease';
                    
                    // Ensure visibility
                    element.style.visibility = 'visible';
                    element.style.opacity = '1';
                    element.style.display = 'block';
                }
            });
        } catch (error) {
            console.warn('Enable smooth transitions failed:', error);
        }
    }
    
    // MAIN INITIALIZATION
    function initialize() {
        console.log('🚀 Starting simplified initialization...');
        
        // Step 1: Prevent crashes immediately
        preventCrashes();
        
        // Step 2: Setup error handling
        setupErrorHandling();
        
        // Step 3: Setup navigation
        setupNavigation();
        
        // Step 4: Optimize images
        optimizeImages();
        
        // Step 5: Setup mobile optimizations
        setupMobileOptimizations();
        
        // Step 6: Enable smooth transitions after a delay
        setTimeout(() => {
            enableSmoothTransitions();
            state.isLoaded = true;
            
            // Dispatch ready event
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
            }
            
            console.log('✅ Simplified initialization complete!');
        }, 1000);
    }
    
    // Export functions for other pages to use
    if (typeof window !== 'undefined') {
        window.ultraFastSite = {
            scrollTo: simpleScrollTo,
            toggleMenu: toggleMobileMenu,
            getElement: getElement,
            state: state,
            isReady: () => state.isLoaded,
            waitForReady: (callback) => {
                if (state.isLoaded) {
                    callback();
                } else {
                    if (typeof window !== 'undefined') {
                        window.addEventListener('ultraFastSiteReady', callback);
                    }
                }
            }
        };
    }
    
    // Start initialization
    initialize();
    
    console.log('✅ Simplified Master Page initialized!');
}); 