// ULTRA-SMOOTH WIX SITE - Optimized Master Page
// Consolidated optimization system to prevent crashes and ensure smooth functioning

$w.onReady(function () {
    console.log('🚀 Optimized Master Page Loading...');
    
    // Single consolidated state management
    const state = {
        isLoaded: false,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        scrollY: 0,
        isMenuOpen: false,
        performance: {
            startTime: Date.now(),
            loadTime: 0,
            renderTime: 0
        },
        optimization: {
            phase: 0,
            isOptimized: false,
            animationsDisabled: false,
            emergencyMode: false,
            lastOptimization: 0
        }
    };
    
    // Element cache for fast access
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
    
    // CONSOLIDATED OPTIMIZATION SYSTEM
    function initializeConsolidatedOptimization() {
        console.log('⚡ Initializing Consolidated Optimization System...');
        
        // Phase 1: Immediate crash prevention
        preventCrashes();
        
        // Phase 2: Progressive loading
        setTimeout(() => progressiveLoad(), 100);
        
        // Phase 3: Performance monitoring
        setTimeout(() => startPerformanceMonitoring(), 500);
        
        // Phase 4: Mobile optimizations
        setTimeout(() => initializeMobileOptimizations(), 1000);
        
        console.log('✅ Consolidated Optimization System initialized');
    }
    
    // CRASH PREVENTION SYSTEM
    function preventCrashes() {
        console.log('🛡️ Initializing Crash Prevention System...');
        
        try {
            // Disable all heavy animations immediately
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
            
            // Setup error handling
            setupErrorHandling();
            
            // Disable scroll effects temporarily
            if (state.scrollRAF) {
                cancelAnimationFrame(state.scrollRAF);
                state.scrollRAF = null;
            }
            
            console.log('✅ Crash prevention applied');
            
        } catch (error) {
            console.warn('Crash prevention failed:', error);
        }
    }
    
    // PROGRESSIVE LOADING SYSTEM
    function progressiveLoad() {
        console.log('📦 Starting Progressive Loading...');
        
        // Phase 1: Load critical elements
        loadCriticalElements();
        
        // Phase 2: Load essential features
        setTimeout(() => loadEssentialFeatures(), 200);
        
        // Phase 3: Load enhanced features
        setTimeout(() => loadEnhancedFeatures(), 500);
        
        // Phase 4: Final optimizations
        setTimeout(() => finalOptimizations(), 1000);
    }
    
    function loadCriticalElements() {
        console.log('🔧 Loading critical elements...');
        
        try {
            // Basic navigation
            const menuToggle = getElement('#navMenuToggle');
            if (menuToggle) {
                menuToggle.onClick(() => toggleMobileMenu());
            }
            
            // Mobile menu overlay
            const mobileOverlay = getElement('#mobileOverlay');
            if (mobileOverlay) {
                mobileOverlay.onClick(() => toggleMobileMenu());
            }
            
            // Basic navigation links
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
            
            console.log('✅ Critical elements loaded');
            
        } catch (error) {
            console.warn('Critical elements loading failed:', error);
        }
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential features...');
        
        try {
            // Basic responsive behavior
            setupBasicResponsive();
            
            // Image optimization
            optimizeImages();
            
            console.log('✅ Essential features loaded');
            
        } catch (error) {
            console.warn('Essential features loading failed:', error);
        }
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced features...');
        
        try {
            // Lightweight animations
            setupLightweightAnimations();
            
            // Smooth scroll system
            setupSmoothScroll();
            
            console.log('✅ Enhanced features loaded');
            
        } catch (error) {
            console.warn('Enhanced features loading failed:', error);
        }
    }
    
    function finalOptimizations() {
        console.log('🚀 Applying final optimizations...');
        
        try {
            // Mark as fully loaded
            state.isLoaded = true;
            
            // Enable smooth transitions
            enableSmoothTransitions();
            
            // Dispatch ready event
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
            }
            
            console.log('✅ Final optimizations applied');
            
        } catch (error) {
            console.warn('Final optimizations failed:', error);
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
    
    // SCROLL SYSTEM
    function simpleScrollTo(target) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            element.scrollTo();
        } catch (error) {
            console.warn('Simple scroll failed:', error);
        }
    }
    
    function setupSmoothScroll() {
        if (state.scrollRAF) return;
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        }
    }
    
    function ultraSmoothScroll() {
        if (state.scrollRAF) return;
        
        state.scrollRAF = requestAnimationFrame(() => {
            try {
                const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
                const nav = getElement('#navigation');
                
                if (nav && Math.abs(currentScrollY - state.lastScrollY) > 5) {
                    const opacity = Math.min(currentScrollY / 100, 1);
                    const backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                    
                    nav.style.backgroundColor = backgroundColor;
                    nav.style.backdropFilter = `blur(${opacity * 10}px)`;
                    
                    if (opacity > 0.1) {
                        nav.style.boxShadow = `0 2px 20px rgba(0,0,0,${opacity * 0.1})`;
                    } else {
                        nav.style.boxShadow = 'none';
                    }
                    
                    state.lastScrollY = currentScrollY;
                }
            } catch (error) {
                console.warn('Smooth scroll failed:', error);
            }
            
            state.scrollRAF = null;
        });
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
    
    // LIGHTWEIGHT ANIMATIONS
    function setupLightweightAnimations() {
        try {
            const buttons = $w('button, .btn, .cta-button');
            buttons.forEach(button => {
                button.onMouseIn(() => {
                    button.style.opacity = '0.9';
                    button.style.transition = 'opacity 0.2s ease';
                });
                
                button.onMouseOut(() => {
                    button.style.opacity = '1';
                });
                
                button.onClick(() => {
                    button.style.opacity = '0.8';
                    setTimeout(() => {
                        button.style.opacity = '1';
                    }, 100);
                });
            });
            
            const listItems = $w('li, .list-item');
            listItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 200 + (index * 100));
            });
        } catch (error) {
            console.warn('Lightweight animations failed:', error);
        }
    }
    
    // ENABLE SMOOTH TRANSITIONS
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
    
    // BASIC RESPONSIVE
    function setupBasicResponsive() {
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
    }
    
    // PERFORMANCE MONITORING
    function startPerformanceMonitoring() {
        try {
            let scrollCount = 0;
            let lastScrollCheck = Date.now();
            
            const scrollObserver = () => {
                scrollCount++;
                const now = Date.now();
                
                if (now - lastScrollCheck > 1000) {
                    const scrollsPerSecond = scrollCount;
                    if (scrollsPerSecond > 30) {
                        console.warn('High scroll frequency detected, optimizing...');
                    }
                    scrollCount = 0;
                    lastScrollCheck = now;
                }
            };
            
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', scrollObserver, { passive: true });
            }
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
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
        
        const originalWixFunction = typeof window !== 'undefined' ? window.$w : null;
        if (originalWixFunction) {
            typeof window !== 'undefined' ? window.$w = function(...args) {
                try {
                    return originalWixFunction.apply(this, args);
                } catch (error) {
                    console.warn('Wix function error:', error);
                    return null;
                }
            } : null;
        }
    }
    
    // MOBILE OPTIMIZATIONS
    function initializeMobileOptimizations() {
        console.log('📱 Initializing Mobile Optimizations...');
        
        try {
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
            const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in window : false;
            
            state.isMobile = isMobile;
            state.isTouchDevice = isTouchDevice;
            
            injectMobileCSS();
            
            if (isTouchDevice) {
                initializeTouchOptimizations();
            }
            
            initializeMobileResponsive();
            initializeMobilePerformance();
            
            console.log('✅ Mobile optimizations initialized!');
        } catch (error) {
            console.warn('Mobile optimizations failed:', error);
        }
    }
    
    function injectMobileCSS() {
        const mobileCSS = `
            @media (max-width: 768px) {
                .nav, .navigation {
                    padding: 0.75rem 1rem !important;
                }
                
                .nav-container, .nav-wrapper {
                    padding: 0 0.5rem !important;
                }
                
                .nav-logo, .logo {
                    font-size: 1.25rem !important;
                }
                
                .hero, .heroSection {
                    min-height: 100vh !important;
                    padding: 1rem !important;
                    padding-top: 70px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                
                .hero-content, .heroContent {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 1rem !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
                    line-height: 1.2 !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.875rem, 4vw, 1.125rem) !important;
                    margin-bottom: 1.5rem !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: column !important;
                    align-items: center !important;
                    width: 100% !important;
                    gap: 0.75rem !important;
                }
                
                .btn, .button {
                    width: 100% !important;
                    max-width: 280px !important;
                    min-height: 48px !important;
                    padding: 0.875rem 1.5rem !important;
                    font-size: 1rem !important;
                    text-align: center !important;
                    touch-action: manipulation !important;
                }
                
                .features, .featuresSection {
                    padding: 2rem 1rem !important;
                }
                
                .features h2, .featuresTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 2rem !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                    padding: 0 0.5rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 1.25rem !important;
                    margin: 0 !important;
                }
                
                .feature-card h3, .featureCard h3 {
                    font-size: 1.125rem !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .feature-card p, .featureCard p {
                    font-size: 0.875rem !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media (max-width: 375px) {
                .hero, .heroSection {
                    padding: 0.75rem !important;
                    padding-top: 60px !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.5rem, 7vw, 2rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.75rem, 4.5vw, 1rem) !important;
                }
                
                .btn, .button {
                    max-width: 260px !important;
                    padding: 0.75rem 1.25rem !important;
                    font-size: 0.875rem !important;
                }
                
                .features, .featuresSection {
                    padding: 1.5rem 0.75rem !important;
                }
                
                .features-grid, .featuresGrid {
                    gap: 1rem !important;
                    padding: 0 0.25rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 1rem !important;
                }
            }
            
            @media (min-width: 376px) and (max-width: 428px) {
                .hero-title, .heroTitle {
                    font-size: clamp(1.875rem, 6.5vw, 2.25rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.875rem, 4.5vw, 1.125rem) !important;
                }
                
                .btn, .button {
                    max-width: 300px !important;
                }
            }
            
            @media (min-width: 429px) and (max-width: 768px) {
                .hero-title, .heroTitle {
                    font-size: clamp(2rem, 6vw, 2.5rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(1rem, 4vw, 1.25rem) !important;
                }
                
                .btn, .button {
                    max-width: 320px !important;
                }
            }
            
            @media (max-width: 768px) and (orientation: landscape) {
                .hero, .heroSection {
                    min-height: 85vh !important;
                    padding-top: 60px !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 0.5rem !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.75rem, 3.5vw, 1rem) !important;
                    margin-bottom: 1rem !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: row !important;
                    justify-content: center !important;
                    gap: 1rem !important;
                }
                
                .btn, .button {
                    width: auto !important;
                    max-width: 200px !important;
                    min-width: 160px !important;
                }
                
                .features, .featuresSection {
                    padding: 1.5rem 1rem !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
                    gap: 1rem !important;
                }
            }
            
            @media (hover: none) and (pointer: coarse) {
                .btn:hover, .button:hover {
                    transform: none !important;
                    box-shadow: none !important;
                }
                
                .nav-link:hover, .navLink:hover {
                    transform: none !important;
                }
                
                .feature-card:hover, .featureCard:hover {
                    transform: none !important;
                }
                
                .btn, .button, .nav-link, .navLink {
                    min-height: 44px !important;
                    min-width: 44px !important;
                }
            }
            
            @supports (padding: max(0px)) {
                .nav, .navigation {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .hero, .heroSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .features, .featuresSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
            }
            
            body {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            
            .nav-container, .nav-wrapper,
            .hero-content, .heroContent,
            .features-grid, .featuresGrid {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = mobileCSS;
        document.head.appendChild(style);
    }
    
    function initializeTouchOptimizations() {
        try {
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
            
            const cards = $w('.feature-card, .featureCard, .card');
            cards.forEach(card => {
                if (!card) return;
                
                card.onTouchStart(() => {
                    card.style.opacity = '0.9';
                    card.style.transition = 'opacity 0.15s ease';
                });
                
                card.onTouchEnd(() => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 150);
                });
            });
            
            let lastTouchEnd = 0;
            document.addEventListener('touchend', (event) => {
                const now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                    event.preventDefault();
                }
                lastTouchEnd = now;
            }, false);
        } catch (error) {
            console.warn('Touch optimizations failed:', error);
        }
    }
    
    function initializeMobileResponsive() {
        try {
            const heroSection = $w('#heroSection') || $w('.hero');
            if (heroSection && state.isMobile) {
                heroSection.style.minHeight = '100vh';
                heroSection.style.padding = '1rem';
                heroSection.style.paddingTop = '70px';
            }
            
            const nav = $w('.nav, .navigation');
            if (nav && state.isMobile) {
                nav.style.padding = '0.75rem 1rem';
            }
            
            const buttons = $w('.btn, .button');
            buttons.forEach(btn => {
                if (!btn || !state.isMobile) return;
                
                btn.style.width = '100%';
                btn.style.maxWidth = '280px';
                btn.style.minHeight = '48px';
                btn.style.padding = '0.875rem 1.5rem';
                btn.style.fontSize = '1rem';
                btn.style.textAlign = 'center';
                btn.style.touchAction = 'manipulation';
            });
        } catch (error) {
            console.warn('Mobile responsive failed:', error);
        }
    }
    
    function initializeMobilePerformance() {
        try {
            if (state.isMobile) {
                const animations = $w('[data-animation]');
                animations.forEach(anim => {
                    if (!anim) return;
                    anim.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                });
                
                const scrollElements = $w('.scroll-container, .scrollContainer');
                scrollElements.forEach(element => {
                    if (!element) return;
                    element.style.willChange = 'transform';
                    element.style.transform = 'translateZ(0)';
                });
            }
        } catch (error) {
            console.warn('Mobile performance failed:', error);
        }
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
    
    // Start the consolidated optimization system
    initializeConsolidatedOptimization();
    
    console.log('✅ Optimized Master Page initialized successfully!');
}); 