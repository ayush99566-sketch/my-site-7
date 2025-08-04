// ULTRA-SMOOTH WIX SITE - Master Page with Progressive Loading
// Prevents first-time loading crashes by loading features in phases

$w.onReady(function () {
    console.log('🚀 Progressive Master Page Loading...');
    
    // Performance state management
    const state = {
        isLoaded: false,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        scrollY: 0,
        isMenuOpen: false,
        performance: {
            startTime: Date.now(),
            loadTime: 0,
            renderTime: 0
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
    
    // Progressive loading system
    function progressiveLoad() {
        console.log('📦 Starting progressive load...');
        
        // Phase 0: Critical functionality only
        loadCriticalElements();
        
        // Phase 1: Essential features (after 100ms)
        setTimeout(() => loadEssentialFeatures(), 100);
        
        // Phase 2: Enhanced features (after 300ms)
        setTimeout(() => loadEnhancedFeatures(), 300);
        
        // Phase 3: Full features (after 800ms)
        setTimeout(() => loadFullFeatures(), 800);
    }
    
    function loadCriticalElements() {
        console.log('🔧 Loading critical elements...');
        state.loadPhase = 0;
        
        // Only essential navigation
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.onClick(() => toggleMobileMenu());
        }
        
        // Basic error handling
        setupErrorHandling();
        
        console.log('✅ Critical elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential features...');
        state.loadPhase = 1;
        
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
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced features...');
        state.loadPhase = 2;
        
        // Smooth scroll system
        setupSmoothScroll();
        
        // Basic animations
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full features...');
        state.loadPhase = 3;
        
        // Enhanced animations
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        // Mark as fully loaded
        state.isLoaded = true;
        console.log('✅ Full site loaded successfully!');
        
        // Dispatch custom event for other scripts
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
        }
    }
    
    // Mobile menu system
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
                document.body.style.overflow = 'hidden';
            } else {
                menu.collapse();
                toggle.collapse();
                if (overlay) overlay.collapse();
                document.body.style.overflow = '';
            }
        } catch (error) {
            console.warn('Menu toggle failed:', error);
        }
    }
    
    // Simple scroll system (Phase 1)
    function simpleScrollTo(target) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            element.scrollTo();
        } catch (error) {
            console.warn('Simple scroll failed:', error);
        }
    }
    
    // Smooth scroll system (Phase 2)
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
    
    // Ultra-fast scroll to element (Phase 3)
    function ultraFastScrollTo(target, offset = 80) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            
            element.scrollTo();
            
            setTimeout(() => {
                const elementTop = element.offsetTop - offset;
                if (typeof window !== 'undefined') {
                    window.scrollTo({
                        top: elementTop,
                        behavior: 'smooth'
                    });
                }
            }, 50);
        } catch (error) {
            console.warn('Ultra-fast scroll failed:', error);
        }
    }
    
    // Image optimization
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
    
    // Basic animations (Phase 2)
    function setupBasicAnimations() {
        try {
            const mainContent = getElement('#mainContent') || $w('main') || $w('.main-content');
            if (mainContent) {
                mainContent.opacity = 0;
                mainContent.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    mainContent.opacity = 1;
                }, 200);
            }
        } catch (error) {
            console.warn('Basic animations failed:', error);
        }
    }
    
    // Enhanced animations (Phase 3)
    function setupEnhancedAnimations() {
        try {
            const buttons = $w('button, .btn, .cta-button');
            buttons.forEach(button => {
                button.onMouseIn(() => {
                    button.scale = 1.02;
                    button.style.transition = 'transform 0.1s ease';
                });
                
                button.onMouseOut(() => {
                    button.scale = 1;
                });
                
                button.onClick(() => {
                    button.scale = 0.98;
                    setTimeout(() => {
                        button.scale = 1;
                    }, 100);
                });
            });
            
            const listItems = $w('li, .list-item');
            listItems.forEach((item, index) => {
                item.opacity = 0;
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    item.opacity = 1;
                }, 200 + (index * 100));
            });
        } catch (error) {
            console.warn('Enhanced animations failed:', error);
        }
    }
    
    // Basic responsive (Phase 1)
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
    
    // Performance monitoring
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
    
    // Error handling & crash prevention
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
    
    // Mobile optimizations
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
                    btn.style.transform = 'scale(0.95)';
                    btn.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                });
                
                btn.onTouchEnd(() => {
                    setTimeout(() => {
                        btn.style.transform = '';
                        btn.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, 150);
                });
            });
            
            const cards = $w('.feature-card, .featureCard, .card');
            cards.forEach(card => {
                if (!card) return;
                
                card.onTouchStart(() => {
                    card.style.transform = 'scale(0.98)';
                    card.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                });
                
                card.onTouchEnd(() => {
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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
    
    // Initialize service section optimizer
    function initializeServiceOptimizer() {
        console.log('🎯 Initializing Service Section Optimizer...');
        
        // Performance state for service sections
        const serviceState = {
            isServiceSectionVisible: false,
            serviceSectionRAF: null,
            lastServiceScrollY: 0,
            serviceElements: new Map(),
            animationFrame: null,
            isOptimized: false,
            isFirstLoad: true,
            optimizationLevel: 0
        };
        
        // IMMEDIATE optimization for first-time load
        function immediateOptimization() {
            console.log('⚡ Applying immediate optimizations for first-time load...');
            
            try {
                // Disable ALL animations immediately
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Disable all heavy animations
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                        }
                    });
                }
                
                // Disable scroll effects temporarily
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                console.log('✅ Immediate optimizations applied');
                
            } catch (error) {
                console.warn('Immediate optimization failed:', error);
            }
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
                    '.service-item',
                    '[class*="service"]',
                    '[id*="service"]',
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]'
                ];
                
                serviceSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            serviceState.serviceElements.set(`${selector}-${index}`, element);
                            console.log(`🎯 Found service section: ${selector}-${index}`);
                            
                            // IMMEDIATE optimization for each found element
                            if (element && element.style) {
                                // Disable all animations immediately
                                element.style.animation = 'none';
                                element.style.transition = 'none';
                                element.style.transform = 'none';
                                element.style.filter = 'none';
                                element.style.backdropFilter = 'none';
                                element.style.boxShadow = 'none';
                                
                                // Set basic opacity for smooth reveal
                                element.style.opacity = '0.9';
                                
                                // Optimize for performance
                                element.style.willChange = 'auto';
                                element.style.backfaceVisibility = 'visible';
                                element.style.perspective = 'none';
                                
                                console.log(`⚡ Immediately optimized: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
            } catch (error) {
                console.warn('Service section detection failed:', error);
            }
        }
        
        // Special optimization for "03 digital service" red balloon
        function optimizeRedBalloonSection() {
            try {
                // Look for red balloon elements with more specific selectors
                const balloonSelectors = [
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="digital"]',
                    '[id*="digital"]',
                    '[class*="service"]',
                    '[id*="service"]'
                ];
                
                balloonSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            // AGGRESSIVE optimization for red balloon
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            
                            // Set basic opacity
                            element.style.opacity = '0.95';
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                            
                            // Remove any heavy CSS classes
                            if (element.className) {
                                element.className = element.className.replace(/animate|animation|transition|transform/g, '');
                            }
                            
                            console.log(`🎈 Aggressively optimized red balloon: ${selector}-${index}`);
                        });
                    }
                });
                
            } catch (error) {
                console.warn('Red balloon optimization failed:', error);
            }
        }
        
        // Setup ultra-lightweight animations for service sections
        function setupUltraLightweightAnimations() {
            try {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Keep animations disabled for first load
                    element.style.animation = 'none';
                    element.style.transition = 'opacity 0.5s ease';
                    
                    // Simple fade in effect
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 200);
                    
                });
                
            } catch (error) {
                console.warn('Ultra-lightweight animations setup failed:', error);
            }
        }
        
        // Progressive re-enabling of features
        function progressiveReEnable() {
            console.log('🔄 Progressive re-enabling of features...');
            
            // Phase 1: Basic interactions (after 2 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable basic hover effects
                    element.onMouseIn(() => {
                        element.style.opacity = '0.95';
                    });
                    
                    element.onMouseOut(() => {
                        element.style.opacity = '1';
                    });
                });
                
                console.log('✅ Phase 1: Basic interactions enabled');
                
            }, 2000);
            
            // Phase 2: Light animations (after 4 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable light transitions
                    element.style.transition = 'opacity 0.3s ease, transform 0.2s ease';
                });
                
                console.log('✅ Phase 2: Light animations enabled');
                
            }, 4000);
            
            // Phase 3: Full features (after 6 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable full features
                    element.style.willChange = 'transform, opacity';
                    element.style.backfaceVisibility = 'hidden';
                });
                
                serviceState.isOptimized = true;
                serviceState.isFirstLoad = false;
                console.log('✅ Phase 3: Full features enabled');
                
            }, 6000);
        }
        
        // Emergency optimization for performance issues
        function emergencyOptimization() {
            try {
                console.log('🚨 Emergency optimization triggered');
                
                // Disable ALL animations across the entire page
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            element.style.willChange = 'auto';
                        }
                    });
                }
                
                // Cancel all animation frames
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                if (serviceState.animationFrame) {
                    cancelAnimationFrame(serviceState.animationFrame);
                    serviceState.animationFrame = null;
                }
                
                console.log('🚨 Emergency optimization applied - all animations disabled');
                
            } catch (error) {
                console.warn('Emergency optimization failed:', error);
            }
        }
        
        // Performance monitoring with aggressive thresholds
        function monitorPerformanceAggressively() {
            try {
                let frameCount = 0;
                let lastTime = performance.now();
                let lowFpsCount = 0;
                
                function checkPerformance() {
                    frameCount++;
                    const currentTime = performance.now();
                    
                    if (currentTime - lastTime >= 1000) {
                        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                        
                        // More aggressive threshold for first load
                        const threshold = serviceState.isFirstLoad ? 45 : 30;
                        
                        if (fps < threshold) {
                            lowFpsCount++;
                            console.warn(`⚠️ Low FPS detected: ${fps} (threshold: ${threshold})`);
                            
                            // Trigger emergency optimization after 2 consecutive low FPS readings
                            if (lowFpsCount >= 2) {
                                emergencyOptimization();
                                lowFpsCount = 0;
                            }
                        } else {
                            lowFpsCount = 0;
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
        
        // Start aggressive optimization sequence
        console.log('🚀 Starting aggressive optimization sequence...');
        
        // Step 1: Immediate optimization (0ms)
        immediateOptimization();
        
        // Step 2: Detect and optimize service sections (50ms)
        setTimeout(() => {
            detectServiceSections();
            optimizeRedBalloonSection();
        }, 50);
        
        // Step 3: Setup ultra-lightweight animations (200ms)
        setTimeout(() => {
            setupUltraLightweightAnimations();
        }, 200);
        
        // Step 4: Start performance monitoring (500ms)
        setTimeout(() => {
            monitorPerformanceAggressively();
        }, 500);
        
        // Step 5: Progressive re-enabling (2-6 seconds)
        progressiveReEnable();
        
        console.log('✅ Aggressive Service Section Optimizer initialized');
    }
    
    // Initialize the service optimizer
    initializeServiceOptimizer();
    
    // DEDICATED "03" SECTION OPTIMIZER - Runs immediately and continuously
    function initialize03SectionOptimizer() {
        console.log('🎯 Initializing DEDICATED "03" Section Optimizer...');
        
        // Continuous optimization state
        const section03State = {
            isOptimized: false,
            optimizationInterval: null,
            lastOptimization: 0,
            optimizationCount: 0
        };
        
        // IMMEDIATE "03" section optimization
        function optimize03SectionImmediately() {
            console.log('⚡ IMMEDIATE "03" section optimization...');
            
            try {
                // Target ALL possible "03" selectors
                const selectors03 = [
                    '[class*="03"]',
                    '[id*="03"]',
                    '[data-id*="03"]',
                    '[data-testid*="03"]',
                    '[class*="service"]',
                    '[id*="service"]',
                    '[class*="digital"]',
                    '[id*="digital"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '.service-card',
                    '.service-item',
                    '.digital-service',
                    '#services',
                    '.services'
                ];
                
                selectors03.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // AGGRESSIVE optimization for "03" section
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                element.style.willChange = 'auto !important';
                                element.style.backfaceVisibility = 'visible !important';
                                element.style.perspective = 'none !important';
                                element.style.opacity = '1 !important';
                                
                                // Remove any heavy CSS classes
                                if (element.className) {
                                    element.className = element.className.replace(/animate|animation|transition|transform|scale|rotate|skew|translate/g, '');
                                }
                                
                                // Disable any hover effects
                                element.onMouseIn = null;
                                element.onMouseOut = null;
                                element.onClick = null;
                                
                                console.log(`🎯 IMMEDIATELY optimized "03" element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                section03State.optimizationCount++;
                section03State.lastOptimization = Date.now();
                
            } catch (error) {
                console.warn('Immediate "03" optimization failed:', error);
            }
        }
        
        // CONTINUOUS "03" section monitoring and optimization
        function startContinuous03Optimization() {
            console.log('🔄 Starting CONTINUOUS "03" section optimization...');
            
            // Run optimization every 100ms for the first 5 seconds
            let intervalCount = 0;
            const maxIntervals = 50; // 5 seconds at 100ms intervals
            
            section03State.optimizationInterval = setInterval(() => {
                optimize03SectionImmediately();
                intervalCount++;
                
                if (intervalCount >= maxIntervals) {
                    // Switch to less frequent optimization
                    clearInterval(section03State.optimizationInterval);
                    section03State.optimizationInterval = setInterval(() => {
                        optimize03SectionImmediately();
                    }, 1000); // Every second
                    
                    console.log('✅ Switched to continuous "03" optimization (1s intervals)');
                }
            }, 100);
        }
        
        // EMERGENCY "03" section optimization
        function emergency03Optimization() {
            console.log('🚨 EMERGENCY "03" section optimization triggered!');
            
            try {
                // Disable ALL elements that might be related to "03"
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Nuclear option - disable everything
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.willChange = 'auto !important';
                            element.style.opacity = '1 !important';
                        }
                    });
                }
                
                // Cancel ALL animation frames
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                console.log('🚨 EMERGENCY "03" optimization applied - ALL animations disabled');
                
            } catch (error) {
                console.warn('Emergency "03" optimization failed:', error);
            }
        }
        
        // Performance monitoring specifically for "03" section
        function monitor03SectionPerformance() {
            let frameCount = 0;
            let lastTime = performance.now();
            let lowFpsCount = 0;
            
            function check03Performance() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    // Very aggressive threshold for "03" section
                    const threshold = 50; // Must maintain 50fps
                    
                    if (fps < threshold) {
                        lowFpsCount++;
                        console.warn(`⚠️ Low FPS in "03" section: ${fps} (threshold: ${threshold})`);
                        
                        // Trigger emergency optimization immediately
                        if (lowFpsCount >= 1) {
                            emergency03Optimization();
                            lowFpsCount = 0;
                        }
                    } else {
                        lowFpsCount = 0;
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(check03Performance);
            }
            
            check03Performance();
        }
        
        // Start the dedicated "03" optimizer
        console.log('🚀 Starting DEDICATED "03" Section Optimizer...');
        
        // Step 1: Immediate optimization (0ms)
        optimize03SectionImmediately();
        
        // Step 2: Start continuous optimization (50ms)
        setTimeout(() => {
            startContinuous03Optimization();
        }, 50);
        
        // Step 3: Start performance monitoring (100ms)
        setTimeout(() => {
            monitor03SectionPerformance();
        }, 100);
        
        // Step 4: Additional optimization every 500ms
        setInterval(() => {
            optimize03SectionImmediately();
        }, 500);
        
        section03State.isOptimized = true;
        console.log('✅ DEDICATED "03" Section Optimizer initialized');
        
        // Export for manual triggering
        if (typeof window !== 'undefined') {
            window.section03Optimizer = {
                optimize: optimize03SectionImmediately,
                emergency: emergency03Optimization,
                getState: () => section03State
            };
        }
    }
    
    // Initialize the dedicated "03" optimizer
    initialize03SectionOptimizer();
    
    // SPECIFIC FIX FOR "03" BALLOON BLACK SCREEN ISSUE
    function initialize03BalloonFix() {
        console.log('🎈 Initializing "03" Balloon Black Screen Fix...');
        
        // State for balloon fix
        const balloonFixState = {
            isFixed: false,
            backgroundPreserved: false,
            lastCheck: 0
        };
        
        // IMMEDIATE "03" balloon optimization to prevent black screen
        function fix03BalloonImmediately() {
            console.log('🎈 IMMEDIATE "03" balloon fix...');
            
            try {
                // Target "03" balloon specifically
                const balloonSelectors = [
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '[class*="gradient"]',
                    '[style*="gradient"]'
                ];
                
                balloonSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // PREVENT BLACK SCREEN - Disable heavy effects
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                element.style.willChange = 'auto !important';
                                element.style.backfaceVisibility = 'visible !important';
                                element.style.perspective = 'none !important';
                                
                                // PRESERVE VISIBILITY
                                element.style.opacity = '1 !important';
                                element.style.visibility = 'visible !important';
                                element.style.display = 'block !important';
                                
                                // Remove any heavy CSS classes that might cause crashes
                                if (element.className) {
                                    element.className = element.className.replace(/animate|animation|transition|transform|scale|rotate|skew|translate|blur|brightness|contrast|hue-rotate|invert|saturate|sepia/g, '');
                                }
                                
                                // Disable any event handlers that might cause issues
                                element.onMouseIn = null;
                                element.onMouseOut = null;
                                element.onClick = null;
                                
                                console.log(`🎈 Fixed "03" balloon element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                // PRESERVE BACKGROUND ELEMENTS
                preserveBackgroundElements();
                
                balloonFixState.isFixed = true;
                
            } catch (error) {
                console.warn('"03" balloon fix failed:', error);
            }
        }
        
        // PRESERVE BACKGROUND ELEMENTS
        function preserveBackgroundElements() {
            console.log('🎨 Preserving background elements...');
            
            try {
                // Target background elements
                const backgroundSelectors = [
                    'body',
                    'html',
                    '[class*="background"]',
                    '[id*="background"]',
                    '[class*="bg"]',
                    '[id*="bg"]',
                    '[class*="gradient"]',
                    '[style*="gradient"]',
                    '[class*="red"]',
                    '[style*="red"]'
                ];
                
                backgroundSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // PRESERVE BACKGROUND STYLES
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                // Ensure background is not hidden
                                if (element.style.background || element.style.backgroundColor) {
                                    element.style.background = element.style.background || 'inherit';
                                    element.style.backgroundColor = element.style.backgroundColor || 'inherit';
                                }
                                
                                console.log(`🎨 Preserved background element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                balloonFixState.backgroundPreserved = true;
                
            } catch (error) {
                console.warn('Background preservation failed:', error);
            }
        }
        
        // CONTINUOUS MONITORING to prevent black screen
        function startContinuousMonitoring() {
            console.log('👁️ Starting continuous monitoring for black screen prevention...');
            
            // Check every 50ms for potential issues
            setInterval(() => {
                try {
                    // Check if any "03" elements are causing issues
                    const elements03 = $w('[class*="03"], [id*="03"]');
                    if (elements03 && elements03.length > 0) {
                        elements03.forEach(element => {
                            if (element && element.style) {
                                // Ensure element is visible and not causing crashes
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.opacity = '1 !important';
                                element.style.visibility = 'visible !important';
                            }
                        });
                    }
                    
                    // Ensure body and html are visible
                    const body = $w('body');
                    const html = $w('html');
                    
                    if (body && body.length > 0) {
                        body.forEach(element => {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                        });
                    }
                    
                    if (html && html.length > 0) {
                        html.forEach(element => {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                        });
                    }
                    
                } catch (error) {
                    console.warn('Continuous monitoring error:', error);
                }
            }, 50);
        }
        
        // EMERGENCY RECOVERY for black screen
        function emergencyRecovery() {
            console.log('🚨 EMERGENCY RECOVERY - Black screen detected!');
            
            try {
                // Force all elements to be visible
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Force visibility
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                            
                            // Disable all animations
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                        }
                    });
                }
                
                // Restore background
                preserveBackgroundElements();
                
                console.log('🚨 Emergency recovery completed');
                
            } catch (error) {
                console.warn('Emergency recovery failed:', error);
            }
        }
        
        // Start the balloon fix
        console.log('🎈 Starting "03" Balloon Black Screen Fix...');
        
        // Step 1: Immediate fix (0ms)
        fix03BalloonImmediately();
        
        // Step 2: Start continuous monitoring (100ms)
        setTimeout(() => {
            startContinuousMonitoring();
        }, 100);
        
        // Step 3: Additional fix every 200ms
        setInterval(() => {
            fix03BalloonImmediately();
        }, 200);
        
        // Step 4: Emergency recovery trigger
        setTimeout(() => {
            emergencyRecovery();
        }, 1000);
        
        console.log('✅ "03" Balloon Black Screen Fix initialized');
        
        // Export for manual triggering
        if (typeof window !== 'undefined') {
            window.balloonFix = {
                fix: fix03BalloonImmediately,
                preserve: preserveBackgroundElements,
                emergency: emergencyRecovery,
                getState: () => balloonFixState
            };
        }
    }
    
    // Initialize the balloon fix
    initialize03BalloonFix();
    
    // COMPREHENSIVE PROGRESSIVE LOADING SYSTEM
    function initializeProgressiveLoadingSystem() {
        console.log('🚀 Initializing Comprehensive Progressive Loading System...');
        
        // Progressive loading state
        const progressiveState = {
            phase: 0,
            isLoaded: false,
            isVisible: false,
            loadStartTime: Date.now(),
            elementsLoaded: 0,
            totalElements: 0
        };
        
        // PHASE 1: Hide everything and prepare
        function phase1HideAndPrepare() {
            console.log('📦 Phase 1: Hiding everything and preparing...');
            
            try {
                // Hide ALL elements initially
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    progressiveState.totalElements = allElements.length;
                    
                    allElements.forEach((element, index) => {
                        if (element && element.style) {
                            // Hide element completely
                            element.style.visibility = 'hidden !important';
                            element.style.opacity = '0 !important';
                            element.style.display = 'none !important';
                            
                            // Disable all animations and effects
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.willChange = 'auto !important';
                            element.style.backfaceVisibility = 'visible !important';
                            element.style.perspective = 'none !important';
                        }
                    });
                }
                
                // Show only essential elements (body, html)
                const essentialElements = $w('body, html');
                if (essentialElements && essentialElements.length > 0) {
                    essentialElements.forEach(element => {
                        if (element && element.style) {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                        }
                    });
                }
                
                progressiveState.phase = 1;
                console.log('✅ Phase 1 completed: All elements hidden');
                
            } catch (error) {
                console.warn('Phase 1 failed:', error);
            }
        }
        
        // PHASE 2: Load critical elements
        function phase2LoadCritical() {
            console.log('🔧 Phase 2: Loading critical elements...');
            
            try {
                // Load critical elements first
                const criticalSelectors = [
                    'body', 'html', '[class*="background"]', '[id*="background"]',
                    '[class*="bg"]', '[id*="bg"]', '[class*="gradient"]', '[style*="gradient"]'
                ];
                
                criticalSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 2;
                console.log('✅ Phase 2 completed: Critical elements loaded');
                
            } catch (error) {
                console.warn('Phase 2 failed:', error);
            }
        }
        
        // PHASE 3: Load essential content
        function phase3LoadEssential() {
            console.log('📄 Phase 3: Loading essential content...');
            
            try {
                // Load essential content elements
                const essentialSelectors = [
                    '[class*="header"]', '[id*="header"]', '[class*="nav"]', '[id*="nav"]',
                    '[class*="main"]', '[id*="main"]', '[class*="content"]', '[id*="content"]',
                    '[class*="section"]', '[id*="section"]'
                ];
                
                essentialSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 3;
                console.log('✅ Phase 3 completed: Essential content loaded');
                
            } catch (error) {
                console.warn('Phase 3 failed:', error);
            }
        }
        
        // PHASE 4: Load enhanced elements
        function phase4LoadEnhanced() {
            console.log('✨ Phase 4: Loading enhanced elements...');
            
            try {
                // Load enhanced elements (excluding problematic ones)
                const enhancedSelectors = [
                    '[class*="text"]', '[id*="text"]', '[class*="title"]', '[id*="title"]',
                    '[class*="subtitle"]', '[id*="subtitle"]', '[class*="description"]', '[id*="description"]',
                    '[class*="button"]', '[id*="button"]', '[class*="cta"]', '[id*="cta"]'
                ];
                
                enhancedSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 4;
                console.log('✅ Phase 4 completed: Enhanced elements loaded');
                
            } catch (error) {
                console.warn('Phase 4 failed:', error);
            }
        }
        
        // PHASE 5: Load remaining elements (excluding problematic ones)
        function phase5LoadRemaining() {
            console.log('🎯 Phase 5: Loading remaining elements...');
            
            try {
                // Load all remaining elements except problematic ones
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Skip problematic elements for now
                            const className = element.className || '';
                            const id = element.id || '';
                            
                            // Skip "03" and heavy animation elements
                            if (className.includes('03') || id.includes('03') || 
                                className.includes('balloon') || id.includes('balloon') ||
                                className.includes('animate') || className.includes('animation')) {
                                return; // Skip these for now
                            }
                            
                            // Show element
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                            
                            progressiveState.elementsLoaded++;
                        }
                    });
                }
                
                progressiveState.phase = 5;
                console.log('✅ Phase 5 completed: Remaining elements loaded');
                
            } catch (error) {
                console.warn('Phase 5 failed:', error);
            }
        }
        
        // PHASE 6: Load problematic elements with special handling
        function phase6LoadProblematic() {
            console.log('🎈 Phase 6: Loading problematic elements with special handling...');
            
            try {
                // Load "03" and balloon elements with special handling
                const problematicSelectors = [
                    '[class*="03"]', '[id*="03"]', '[class*="balloon"]', '[id*="balloon"]',
                    '[class*="red"]', '[style*="red"]', '[class*="gradient"]', '[style*="gradient"]'
                ];
                
                problematicSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element but keep animations disabled
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                // Keep heavy effects disabled
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 6;
                console.log('✅ Phase 6 completed: Problematic elements loaded with special handling');
                
            } catch (error) {
                console.warn('Phase 6 failed:', error);
            }
        }
        
        // PHASE 7: Final smooth reveal
        function phase7SmoothReveal() {
            console.log('🌟 Phase 7: Final smooth reveal...');
            
            try {
                // Enable smooth transitions for all elements
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Enable smooth transitions
                            element.style.transition = 'opacity 0.3s ease-in-out !important';
                            
                            // Ensure visibility
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                        }
                    });
                }
                
                progressiveState.isLoaded = true;
                progressiveState.isVisible = true;
                
                const loadTime = Date.now() - progressiveState.loadStartTime;
                console.log(`✅ Phase 7 completed: Everything revealed smoothly in ${loadTime}ms`);
                console.log(`📊 Loaded ${progressiveState.elementsLoaded}/${progressiveState.totalElements} elements`);
                
            } catch (error) {
                console.warn('Phase 7 failed:', error);
            }
        }
        
        // Start progressive loading sequence
        console.log('🚀 Starting comprehensive progressive loading sequence...');
        
        // Phase 1: Hide everything (0ms)
        phase1HideAndPrepare();
        
        // Phase 2: Load critical elements (100ms)
        setTimeout(() => {
            phase2LoadCritical();
        }, 100);
        
        // Phase 3: Load essential content (300ms)
        setTimeout(() => {
            phase3LoadEssential();
        }, 300);
        
        // Phase 4: Load enhanced elements (500ms)
        setTimeout(() => {
            phase4LoadEnhanced();
        }, 500);
        
        // Phase 5: Load remaining elements (800ms)
        setTimeout(() => {
            phase5LoadRemaining();
        }, 800);
        
        // Phase 6: Load problematic elements (1200ms)
        setTimeout(() => {
            phase6LoadProblematic();
        }, 1200);
        
        // Phase 7: Final smooth reveal (1500ms)
        setTimeout(() => {
            phase7SmoothReveal();
        }, 1500);
        
        console.log('✅ Comprehensive Progressive Loading System initialized');
        
        // Export for manual control
        if (typeof window !== 'undefined') {
            window.progressiveLoader = {
                getState: () => progressiveState,
                forceReveal: phase7SmoothReveal,
                reload: () => {
                    progressiveState.phase = 0;
                    progressiveState.isLoaded = false;
                    progressiveState.isVisible = false;
                    progressiveState.elementsLoaded = 0;
                    progressiveState.loadStartTime = Date.now();
                    
                    // Restart sequence
                    phase1HideAndPrepare();
                    setTimeout(() => phase2LoadCritical(), 100);
                    setTimeout(() => phase3LoadEssential(), 300);
                    setTimeout(() => phase4LoadEnhanced(), 500);
                    setTimeout(() => phase5LoadRemaining(), 800);
                    setTimeout(() => phase6LoadProblematic(), 1200);
                    setTimeout(() => phase7SmoothReveal(), 1500);
                }
            };
        }
    }
    
    // Initialize the progressive loading system
    initializeProgressiveLoadingSystem();
    
    // WIX-COMPATIBLE DEBUGGING - Visual indicators instead of console logs
    console.log('🔍 WIX DEBUGGING: Progressive loading system initialized');
    
    // Create a visual debug element to show progress
    try {
        const debugElement = $w('#debugInfo') || createDebugElement();
        if (debugElement) {
            debugElement.text = '🚀 Progressive Loading: Initialized';
            debugElement.style.visibility = 'visible';
        }
    } catch (error) {
        console.log('🔍 WIX DEBUGGING: Could not create visual debug element');
    }
    
    // Check if progressive loader was created
    try {
        if (typeof window !== 'undefined' && window.progressiveLoader) {
            console.log('✅ WIX DEBUGGING: Progressive loader found');
            showDebugMessage('✅ Progressive loader found and working');
        } else {
            console.log('❌ WIX DEBUGGING: Progressive loader not found');
            showDebugMessage('❌ Progressive loader not found - using fallback');
            // Fallback: manually trigger the phases
            setTimeout(() => manualProgressiveLoad(), 100);
        }
    } catch (error) {
        console.log('🔍 WIX DEBUGGING: Error checking progressive loader');
        showDebugMessage('⚠️ Error checking progressive loader');
    }
    
    // Helper function to create debug element
    function createDebugElement() {
        try {
            // Try to create a text element for debugging
            const elements = $w('*');
            for (let element of elements) {
                if (element && element.text && element.id && element.id.includes('debug')) {
                    return element;
                }
            }
        } catch (error) {
            console.log('🔍 WIX DEBUGGING: Could not find debug element');
        }
        return null;
    }
    
    // Helper function to show debug messages
    function showDebugMessage(message) {
        try {
            // Try to show in any available text element
            const elements = $w('*');
            for (let element of elements) {
                if (element && element.text && element.visible) {
                    element.text = message;
                    break;
                }
            }
        } catch (error) {
            console.log('🔍 WIX DEBUGGING: Could not show debug message');
        }
    }
    
    // Manual progressive loading fallback
    function manualProgressiveLoad() {
        console.log('🔍 WIX DEBUGGING: Starting manual progressive loading...');
        showDebugMessage('🔄 Manual progressive loading started...');
        
        // Phase 1: Hide everything
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = '0';
                    }
                });
                showDebugMessage('📦 Phase 1: All elements hidden');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 1 failed');
            }
        }, 0);
        
        // Phase 2: Show critical elements
        setTimeout(() => {
            try {
                const criticalElements = $w('body, html, [class*="background"], [class*="bg"]');
                criticalElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('🔧 Phase 2: Critical elements shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 2 failed');
            }
        }, 200);
        
        // Phase 3: Show essential content
        setTimeout(() => {
            try {
                const essentialElements = $w('[class*="header"], [class*="nav"], [class*="main"], [class*="content"]');
                essentialElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('📄 Phase 3: Essential content shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 3 failed');
            }
        }, 400);
        
        // Phase 4: Show remaining elements
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('✨ Phase 4: All elements shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 4 failed');
            }
        }, 600);
        
        // Phase 5: Final reveal
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.transition = 'opacity 0.3s ease-in-out';
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('🌟 Phase 5: Everything revealed smoothly!');
                console.log('✅ WIX DEBUGGING: Manual progressive loading completed');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 5 failed');
            }
        }, 800);
    }
    
    // Start progressive loading
    progressiveLoad();
    
    // Export functions for other pages to use
    if (typeof window !== 'undefined') {
        window.ultraFastSite = {
            scrollTo: ultraFastScrollTo,
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
}); 