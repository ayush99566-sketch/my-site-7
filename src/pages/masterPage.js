// ULTRA-SMOOTH WIX SITE - Master Page with Progressive Loading
// Prevents first-time loading crashes by loading features in phases

$w.onReady(function () {
    console.log('🚀 Progressive Master Page Loading...');
    
    // Performance state management
    const state = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        isLoaded: false,
        loadPhase: 0, // 0: critical, 1: essential, 2: enhanced, 3: full
        scrollRAF: null, // Variable to hold the RAF ID for smooth scroll
        lastScrollY: 0 // Variable to hold the last scroll position
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
        window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
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
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
    }
    
    function ultraSmoothScroll() {
        if (state.scrollRAF) return;
        
        state.scrollRAF = requestAnimationFrame(() => {
            try {
                const currentScrollY = window.scrollY;
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
                window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth'
                });
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
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const wasMobile = state.isMobile;
                state.isMobile = window.innerWidth < 768;
                
                if (!state.isMobile && wasMobile && state.isMenuOpen) {
                    toggleMobileMenu();
                }
            }, 250);
        });
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
            
            window.addEventListener('scroll', scrollObserver, { passive: true });
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
        }
    }
    
    // Error handling & crash prevention
    function setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.warn('Error caught and handled:', e.error);
            e.preventDefault();
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.warn('Unhandled promise rejection caught:', e.reason);
            e.preventDefault();
        });
        
        const originalWixFunction = window.$w;
        if (originalWixFunction) {
            window.$w = function(...args) {
                try {
                    return originalWixFunction.apply(this, args);
                } catch (error) {
                    console.warn('Wix function error:', error);
                    return null;
                }
            };
        }
    }
    
    // Mobile optimizations
    function initializeMobileOptimizations() {
        console.log('📱 Initializing Mobile Optimizations...');
        
        try {
            const isMobile = window.innerWidth < 768;
            const isTouchDevice = 'ontouchstart' in window;
            
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
    
    // Start progressive loading
    progressiveLoad();
    
    // Export functions for other pages to use
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
                window.addEventListener('ultraFastSiteReady', callback);
            }
        }
    };
}); 