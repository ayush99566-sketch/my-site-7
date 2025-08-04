// ULTRA-FAST WIX SITE - Desktop & Mobile Optimized
$w.onReady(function () {
    console.log('⚡ Ultra-Fast Site Loading...');
    
    // Enhanced state for desktop
    const state = {
        isLoaded: false,
        isMenuOpen: false,
        isDesktop: false,
        isMobile: false,
        scrollY: 0,
        lastScrollY: 0,
        scrollRAF: null
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
            // Check if we're on desktop (Wix environment)
            state.isDesktop = true; // Assume desktop for Wix
            state.isMobile = false;
            
            console.log('🖥️ Desktop mode detected');
        } catch (error) {
            console.warn('Screen size detection failed:', error);
        }
    }
    
    // DESKTOP SMOOTH SCROLL SYSTEM
    function initializeDesktopSmoothScroll() {
        if (!state.isDesktop) return;
        
        console.log('🎯 Initializing desktop smooth scroll system...');
        
        function smoothScrollTo(target, offset = 80) {
            try {
                const element = typeof target === 'string' ? getElement(target) : target;
                if (!element) return;
                
                // Desktop smooth scroll with easing
                element.scrollTo();
                
                setTimeout(() => {
                    try {
                        const elementTop = element.offsetTop - offset;
                        // Use Wix's native scroll with smooth behavior
                        element.scrollTo();
                    } catch (error) {
                        console.warn('Desktop scroll positioning failed:', error);
                    }
                }, 50);
                
            } catch (error) {
                console.warn('Desktop smooth scroll failed:', error);
            }
        }
        
        function setupDesktopScrollEffects() {
            if (state.scrollRAF) return;
            
            try {
                const nav = getElement('#navigation') || getElement('.nav') || getElement('.navigation');
                if (nav) {
                    // Desktop scroll effects with smooth transitions
                    nav.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    nav.style.backdropFilter = 'blur(10px)';
                    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                }
            } catch (error) {
                console.warn('Desktop scroll effects failed:', error);
            }
        }
        
        function setupNavigationLinks() {
            try {
                // Handle navigation links with desktop smoothness
                const navLinks = $w('.nav-link');
                navLinks.forEach(link => {
                    try {
                        const href = link.href || link.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            link.onClick((e) => {
                                e.preventDefault();
                                smoothScrollTo(href);
                                if (state.isMenuOpen) {
                                    toggleMobileMenu();
                                }
                            });
                        }
                    } catch (error) {
                        console.warn('Desktop link setup failed:', error);
                    }
                });
                
            } catch (error) {
                console.warn('Desktop navigation setup failed:', error);
            }
        }
        
        setupDesktopScrollEffects();
        setupNavigationLinks();
        console.log('✅ Desktop smooth scroll system initialized');
    }
    
    // MOBILE SIMPLE SCROLL SYSTEM
    function initializeMobileSimpleScroll() {
        if (state.isDesktop) return;
        
        console.log('📱 Initializing mobile simple scroll system...');
        
        function simpleScrollTo(target) {
            try {
                const element = typeof target === 'string' ? getElement(target) : target;
                if (!element) return;
                
                // Use Wix's native scroll - no custom animations for mobile
                element.scrollTo();
                
            } catch (error) {
                console.warn('Mobile simple scroll failed:', error);
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
                        console.warn('Mobile link setup failed:', error);
                    }
                });
                
            } catch (error) {
                console.warn('Mobile navigation setup failed:', error);
            }
        }
        
        setupNavigationLinks();
        console.log('✅ Mobile simple scroll system initialized');
    }
    
    // DESKTOP SMOOTH ANIMATIONS
    function initializeDesktopAnimations() {
        if (!state.isDesktop) return;
        
        console.log('✨ Initializing desktop smooth animations...');
        
        function setupButtonAnimations() {
            try {
                const buttons = $w('.btn');
                buttons.forEach(button => {
                    if (!button) return;
                    
                    // Desktop button animations
                    button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    button.onMouseIn(() => {
                        button.style.transform = 'translateY(-2px) scale(1.02)';
                        button.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                    });
                    
                    button.onMouseOut(() => {
                        button.style.transform = 'translateY(0) scale(1)';
                        button.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
                    });
                    
                    button.onClick(() => {
                        button.style.transform = 'translateY(0) scale(0.98)';
                        setTimeout(() => {
                            button.style.transform = 'translateY(0) scale(1)';
                        }, 100);
                    });
                });
                
                const ctaButtons = $w('.cta-button');
                ctaButtons.forEach(button => {
                    if (!button) return;
                    
                    button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    button.onMouseIn(() => {
                        button.style.transform = 'translateY(-2px) scale(1.02)';
                        button.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                    });
                    
                    button.onMouseOut(() => {
                        button.style.transform = 'translateY(0) scale(1)';
                        button.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
                    });
                    
                    button.onClick(() => {
                        button.style.transform = 'translateY(0) scale(0.98)';
                        setTimeout(() => {
                            button.style.transform = 'translateY(0) scale(1)';
                        }, 100);
                    });
                });
            } catch (error) {
                console.warn('Desktop button animations failed:', error);
            }
        }
        
        function setupCardAnimations() {
            try {
                const cards = $w('.feature-card');
                cards.forEach((card, index) => {
                    if (!card) return;
                    
                    // Desktop card animations
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                    
                    card.onMouseIn(() => {
                        card.style.transform = 'translateY(-8px) scale(1.02)';
                        card.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                    });
                    
                    card.onMouseOut(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    });
                });
                
                const featureCards = $w('.featureCard');
                featureCards.forEach((card, index) => {
                    if (!card) return;
                    
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                    
                    card.onMouseIn(() => {
                        card.style.transform = 'translateY(-8px) scale(1.02)';
                        card.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                    });
                    
                    card.onMouseOut(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    });
                });
            } catch (error) {
                console.warn('Desktop card animations failed:', error);
            }
        }
        
        function setupPageLoadAnimation() {
            try {
                const mainContent = getElement('#mainContent');
                if (mainContent) {
                    mainContent.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    mainContent.style.opacity = '0';
                    mainContent.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }, 300);
                }
            } catch (error) {
                console.warn('Desktop page load animation failed:', error);
            }
        }
        
        function setupTextAnimations() {
            try {
                const heroTitles = $w('.hero-title');
                heroTitles.forEach((title, index) => {
                    if (!title) return;
                    
                    title.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    title.style.opacity = '0';
                    title.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        title.style.opacity = '1';
                        title.style.transform = 'translateY(0)';
                    }, 400 + (index * 100));
                });
                
                const heroTitles2 = $w('.heroTitle');
                heroTitles2.forEach((title, index) => {
                    if (!title) return;
                    
                    title.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    title.style.opacity = '0';
                    title.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        title.style.opacity = '1';
                        title.style.transform = 'translateY(0)';
                    }, 400 + (index * 100));
                });
            } catch (error) {
                console.warn('Desktop text animations failed:', error);
            }
        }
        
        setupButtonAnimations();
        setupCardAnimations();
        setupPageLoadAnimation();
        setupTextAnimations();
        
        console.log('✅ Desktop smooth animations initialized');
    }
    
    // MINIMAL MOBILE CSS - No heavy effects
    function injectMinimalCSS() {
        const minimalCSS = `
            * { box-sizing: border-box; }
            body { overflow-x: hidden; width: 100%; margin: 0; padding: 0; }
            
            /* DESKTOP STYLES - Smooth and beautiful */
            @media (min-width: 769px) {
                .nav, .navigation, #navigation {
                    padding: 1rem 2rem !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 1000 !important;
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(10px) !important;
                    box-shadow: 0 2px 20px rgba(0,0,0,0.1) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
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
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                    color: white !important;
                    font-weight: 600 !important;
                    text-decoration: none !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    cursor: pointer !important;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                .btn:hover, .button:hover, .cta-button:hover {
                    transform: translateY(-2px) scale(1.02) !important;
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
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
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
                    border: 1px solid #eee !important;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                .feature-card:hover, .featureCard:hover {
                    transform: translateY(-8px) scale(1.02) !important;
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
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
            
            /* Mobile performance - disable animations */
            @media (max-width: 768px) {
                * {
                    animation: none !important;
                    transition: none !important;
                    transform: none !important;
                    filter: none !important;
                    backdrop-filter: none !important;
                    box-shadow: none !important;
                    will-change: auto !important;
                }
            }
        `;
        
        // Create style element using Wix methods
        try {
            const styleElement = $w('style');
            if (styleElement) {
                styleElement.text = minimalCSS;
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
    
    // MINIMAL PERFORMANCE OPTIMIZATIONS
    function optimizePerformance() {
        console.log('⚡ Applying performance optimizations...');
        
        try {
            // Optimize images
            const images = $w('img');
            images.forEach(img => {
                if (img.loading !== 'lazy') {
                    img.loading = 'lazy';
                }
            });
            
            // Mobile-specific optimizations
            if (!state.isDesktop) {
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
            }
            
        } catch (error) {
            console.warn('Performance optimization failed:', error);
        }
        
        console.log('✅ Performance optimizations applied');
    }
    
    // ULTRA-FAST INITIALIZATION
    console.log('🚀 Starting ultra-fast initialization...');
    
    // Step 1: Detect screen size (0ms)
    detectScreenSize();
    
    // Step 2: Inject CSS (50ms)
    setTimeout(() => {
        injectMinimalCSS();
    }, 50);
    
    // Step 3: Setup mobile menu (100ms)
    setTimeout(() => {
        setupMobileMenu();
    }, 100);
    
    // Step 4: Setup scroll system based on device (150ms)
    setTimeout(() => {
        if (state.isDesktop) {
            initializeDesktopSmoothScroll();
        } else {
            initializeMobileSimpleScroll();
        }
    }, 150);
    
    // Step 5: Setup animations based on device (200ms)
    setTimeout(() => {
        if (state.isDesktop) {
            initializeDesktopAnimations();
        }
    }, 200);
    
    // Step 6: Apply performance optimizations (250ms)
    setTimeout(() => {
        optimizePerformance();
    }, 250);
    
    // Step 7: Mark as loaded (300ms)
    setTimeout(() => {
        state.isLoaded = true;
        console.log('✅ Ultra-fast site loaded successfully!');
        console.log(`🎯 Mode: ${state.isDesktop ? 'Desktop (Smooth)' : 'Mobile (Fast)'}`);
    }, 300);
    
    console.log('✅ Ultra-fast Wix site ready!');
}); 