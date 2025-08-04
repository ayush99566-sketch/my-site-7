// ULTRA-LIGHT WIX SITE - No Hanging Version
$w.onReady(function () {
    console.log('⚡ Ultra-Light Site Loading...');
    
    // Minimal state
    const state = {
        isLoaded: false,
        isMenuOpen: false,
        isDesktop: false
    };
    
    // Simple element cache
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
    
    // DETECT SCREEN SIZE
    function detectScreenSize() {
        try {
            state.isDesktop = true; // Assume desktop for Wix
            console.log('🖥️ Desktop mode detected');
        } catch (error) {
            console.warn('Screen size detection failed:', error);
        }
    }
    
    // SIMPLE SCROLL SYSTEM - No animations
    function initializeSimpleScroll() {
        console.log('🎯 Initializing simple scroll system...');
        
        function simpleScrollTo(target) {
            try {
                const element = typeof target === 'string' ? getElement(target) : target;
                if (!element) return;
                
                // Use Wix's native scroll - no custom animations
                element.scrollTo();
                
            } catch (error) {
                console.warn('Simple scroll failed:', error);
            }
        }
        
        function setupNavigationLinks() {
            try {
                // Handle navigation links
                const navLinks = $w('.nav-link');
                navLinks.forEach(link => {
                    try {
                        const href = link.href || link.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            link.onClick((e) => {
                                e.preventDefault();
                                simpleScrollTo(href);
                                if (state.isMenuOpen) {
                                    toggleMobileMenu();
                                }
                            });
                        }
                    } catch (error) {
                        console.warn('Link setup failed:', error);
                    }
                });
                
            } catch (error) {
                console.warn('Navigation setup failed:', error);
            }
        }
        
        setupNavigationLinks();
        console.log('✅ Simple scroll system initialized');
    }
    
    // ULTRA-LIGHT CSS - No heavy effects
    function injectUltraLightCSS() {
        const ultraLightCSS = `
            * { box-sizing: border-box; }
            body { overflow-x: hidden; width: 100%; margin: 0; padding: 0; }
            
            /* DESKTOP STYLES - Ultra light, no animations */
            @media (min-width: 769px) {
                .nav, .navigation, #navigation {
                    padding: 1rem 2rem !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 1000 !important;
                    background: rgba(255, 255, 255, 0.95) !important;
                    border-bottom: 1px solid #eee !important;
                }
                
                .hero, .heroSection, #heroSection {
                    min-height: 100vh !important;
                    padding: 2rem !important;
                    padding-top: 100px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                }
                
                .hero-content, .heroContent {
                    width: 100% !important;
                    max-width: 1200px !important;
                    padding: 0 2rem !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(2.5rem, 4vw, 4rem) !important;
                    line-height: 1.2 !important;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                    color: #333 !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(1.125rem, 2vw, 1.5rem) !important;
                    margin-bottom: 2rem !important;
                    line-height: 1.6 !important;
                    color: #666 !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: row !important;
                    align-items: center !important;
                    justify-content: center !important;
                    gap: 1rem !important;
                }
                
                .btn, .button, .cta-button {
                    padding: 1rem 2rem !important;
                    font-size: 1.125rem !important;
                    text-align: center !important;
                    border-radius: 12px !important;
                    border: none !important;
                    background: #667eea !important;
                    color: white !important;
                    font-weight: 600 !important;
                    text-decoration: none !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    cursor: pointer !important;
                }
                
                .features, .featuresSection, #featuresSection {
                    padding: 4rem 2rem !important;
                }
                
                .features h2, .featuresTitle {
                    font-size: clamp(2rem, 3vw, 3rem) !important;
                    margin-bottom: 3rem !important;
                    text-align: center !important;
                    font-weight: 700 !important;
                    color: #333 !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
                    gap: 2rem !important;
                    padding: 0 1rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 2rem !important;
                    margin: 0 !important;
                    border-radius: 16px !important;
                    background: white !important;
                    border: 1px solid #eee !important;
                }
                
                .feature-card h3, .featureCard h3 {
                    font-size: 1.5rem !important;
                    margin-bottom: 1rem !important;
                    font-weight: 600 !important;
                    color: #333 !important;
                }
                
                .feature-card p, .featureCard p {
                    font-size: 1rem !important;
                    line-height: 1.7 !important;
                    color: #666 !important;
                    margin: 0 !important;
                }
            }
            
            /* MOBILE STYLES - Keep minimal for performance */
            @media (max-width: 768px) {
                .nav, .navigation, #navigation {
                    padding: 0.75rem 1rem !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 1000 !important;
                    background: rgba(255, 255, 255, 0.95) !important;
                }
                
                .nav-menu, #navMenu {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background: rgba(255, 255, 255, 0.98) !important;
                    z-index: 1001 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    transform: translateX(-100%) !important;
                }
                
                .nav-menu.open, #navMenu.open {
                    transform: translateX(0) !important;
                }
                
                .nav-menu a, #navMenu a {
                    font-size: 1.5rem !important;
                    margin: 1rem 0 !important;
                    padding: 0.75rem 1.5rem !important;
                }
                
                .nav-toggle, #navMenuToggle {
                    display: block !important;
                    position: relative !important;
                    z-index: 1002 !important;
                    background: none !important;
                    border: none !important;
                    padding: 0.5rem !important;
                    cursor: pointer !important;
                }
                
                .nav-toggle span, #navMenuToggle span {
                    display: block !important;
                    width: 25px !important;
                    height: 3px !important;
                    background: #333 !important;
                    margin: 5px 0 !important;
                }
                
                .nav-toggle.open span:nth-child(1), #navMenuToggle.open span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px) !important;
                }
                
                .nav-toggle.open span:nth-child(2), #navMenuToggle.open span:nth-child(2) {
                    opacity: 0 !important;
                }
                
                .nav-toggle.open span:nth-child(3), #navMenuToggle.open span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px) !important;
                }
                
                .hero, .heroSection, #heroSection {
                    min-height: 100vh !important;
                    padding: 1rem !important;
                    padding-top: 80px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
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
                    font-weight: 700 !important;
                    color: #333 !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.875rem, 4vw, 1.125rem) !important;
                    margin-bottom: 1.5rem !important;
                    line-height: 1.5 !important;
                    color: #666 !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: column !important;
                    align-items: center !important;
                    width: 100% !important;
                    gap: 0.75rem !important;
                }
                
                .btn, .button, .cta-button {
                    width: 100% !important;
                    max-width: 280px !important;
                    min-height: 48px !important;
                    padding: 0.875rem 1.5rem !important;
                    font-size: 1rem !important;
                    text-align: center !important;
                    border-radius: 8px !important;
                    border: none !important;
                    background: #667eea !important;
                    color: white !important;
                    font-weight: 600 !important;
                    text-decoration: none !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    cursor: pointer !important;
                }
                
                .features, .featuresSection, #featuresSection {
                    padding: 2rem 1rem !important;
                }
                
                .features h2, .featuresTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 2rem !important;
                    text-align: center !important;
                    font-weight: 700 !important;
                    color: #333 !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                    padding: 0 0.5rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 1.25rem !important;
                    margin: 0 !important;
                    border-radius: 12px !important;
                    background: white !important;
                    border: 1px solid #eee !important;
                }
                
                .feature-card h3, .featureCard h3 {
                    font-size: 1.125rem !important;
                    margin-bottom: 0.75rem !important;
                    font-weight: 600 !important;
                    color: #333 !important;
                }
                
                .feature-card p, .featureCard p {
                    font-size: 0.875rem !important;
                    line-height: 1.6 !important;
                    color: #666 !important;
                    margin: 0 !important;
                }
            }
            
            @media (max-width: 375px) {
                .hero, .heroSection {
                    padding: 0.75rem !important;
                    padding-top: 70px !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.5rem, 7vw, 2rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.75rem, 4.5vw, 1rem) !important;
                }
                
                .btn, .button, .cta-button {
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
            
            @media (hover: none) and (pointer: coarse) {
                .btn, .button, .cta-button, .nav-link, .navLink {
                    min-height: 44px !important;
                    min-width: 44px !important;
                }
            }
            
            @supports (padding: max(0px)) {
                .nav, .navigation, #navigation {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .hero, .heroSection, #heroSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .features, .featuresSection, #featuresSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
            }
            
            img, video, iframe {
                max-width: 100% !important;
                height: auto !important;
            }
            
            /* DISABLE ALL ANIMATIONS FOR PERFORMANCE */
            * {
                animation: none !important;
                transition: none !important;
                transform: none !important;
                filter: none !important;
                backdrop-filter: none !important;
                box-shadow: none !important;
                will-change: auto !important;
            }
        `;
        
        // Create style element using Wix methods
        try {
            const styleElement = $w('style');
            if (styleElement) {
                styleElement.text = ultraLightCSS;
            }
        } catch (error) {
            console.warn('CSS injection failed:', error);
        }
    }
    
    // SIMPLE MOBILE MENU - No animations
    function setupMobileMenu() {
        try {
            const menuToggle = getElement('#navMenuToggle') || getElement('.nav-toggle');
            const menu = getElement('#navMenu') || getElement('.nav-menu');
            const overlay = getElement('#mobileOverlay') || getElement('.mobile-overlay');
            
            if (menuToggle) {
                menuToggle.onClick(() => toggleMobileMenu());
            }
            
            if (overlay) {
                overlay.onClick(() => toggleMobileMenu());
            }
            
            const menuLinks = $w('.nav-menu a');
            menuLinks.forEach(link => {
                try {
                    link.onClick(() => {
                        if (state.isMenuOpen) {
                            toggleMobileMenu();
                        }
                    });
                } catch (error) {
                    console.warn('Menu link setup failed:', error);
                }
            });
            
            const navMenuLinks = $w('#navMenu a');
            navMenuLinks.forEach(link => {
                try {
                    link.onClick(() => {
                        if (state.isMenuOpen) {
                            toggleMobileMenu();
                        }
                    });
                } catch (error) {
                    console.warn('Menu link setup failed:', error);
                }
            });
            
        } catch (error) {
            console.warn('Mobile menu setup failed:', error);
        }
    }
    
    // SIMPLE MENU TOGGLE - No animations
    function toggleMobileMenu() {
        try {
            const menu = getElement('#navMenu') || getElement('.nav-menu');
            const toggle = getElement('#navMenuToggle') || getElement('.nav-toggle');
            const overlay = getElement('#mobileOverlay') || getElement('.mobile-overlay');
            
            if (!menu || !toggle) return;
            
            state.isMenuOpen = !state.isMenuOpen;
            
            if (state.isMenuOpen) {
                menu.style.transform = 'translateX(0)';
                menu.classList.add('open');
                toggle.classList.add('open');
                if (overlay) {
                    overlay.style.display = 'block';
                }
            } else {
                menu.style.transform = 'translateX(-100%)';
                menu.classList.remove('open');
                toggle.classList.remove('open');
                if (overlay) {
                    overlay.style.display = 'none';
                }
            }
        } catch (error) {
            console.warn('Mobile menu toggle failed:', error);
        }
    }
    
    // ULTRA-LIGHT PERFORMANCE OPTIMIZATIONS
    function optimizePerformance() {
        console.log('⚡ Applying ultra-light performance optimizations...');
        
        try {
            // Optimize images
            const images = $w('img');
            images.forEach(img => {
                if (img.loading !== 'lazy') {
                    img.loading = 'lazy';
                }
            });
            
            // Disable ALL animations and effects
            const allElements = $w('*');
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
            
        } catch (error) {
            console.warn('Performance optimization failed:', error);
        }
        
        console.log('✅ Ultra-light performance optimizations applied');
    }
    
    // ULTRA-FAST INITIALIZATION
    console.log('🚀 Starting ultra-light initialization...');
    
    // Step 1: Detect screen size (0ms)
    detectScreenSize();
    
    // Step 2: Inject ultra-light CSS (50ms)
    setTimeout(() => {
        injectUltraLightCSS();
    }, 50);
    
    // Step 3: Setup mobile menu (100ms)
    setTimeout(() => {
        setupMobileMenu();
    }, 100);
    
    // Step 4: Setup simple scroll (150ms)
    setTimeout(() => {
        initializeSimpleScroll();
    }, 150);
    
    // Step 5: Apply ultra-light performance optimizations (200ms)
    setTimeout(() => {
        optimizePerformance();
    }, 200);
    
    // Step 6: Mark as loaded (250ms)
    setTimeout(() => {
        state.isLoaded = true;
        console.log('✅ Ultra-light site loaded successfully!');
        console.log('🎯 Mode: Ultra-light (No hanging)');
    }, 250);
    
    console.log('✅ Ultra-light Wix site ready!');
}); 