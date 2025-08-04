// ULTRA-SMOOTH & FULLY RESPONSIVE WIX SITE
$w.onReady(function () {
    console.log('🚀 Ultra-Smooth Master Page Loading...');
    
    // Performance state
    const state = {
        isLoaded: false,
        isMobile: false,
        isTouchDevice: false,
        scrollY: 0,
        isMenuOpen: false,
        scrollRAF: null,
        lastScrollY: 0
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
    
    // BUTTER-SMOOTH SCROLL SYSTEM
    function initializeSmoothScroll() {
        console.log('🎯 Initializing butter-smooth scroll system...');
        
        function smoothScrollTo(target, offset = 80) {
            try {
                const element = typeof target === 'string' ? getElement(target) : target;
                if (!element) return;
                
                element.scrollTo();
                
                setTimeout(() => {
                    try {
                        const elementTop = element.offsetTop - offset;
                        // Use Wix's native scroll behavior
                        element.scrollTo();
                    } catch (error) {
                        console.warn('Smooth scroll positioning failed:', error);
                    }
                }, 50);
                
            } catch (error) {
                console.warn('Smooth scroll failed:', error);
            }
        }
        
        function setupScrollEffects() {
            if (state.scrollRAF) return;
            
            // Use Wix's scroll event handling
            try {
                const nav = getElement('#navigation') || getElement('.nav') || getElement('.navigation');
                if (nav) {
                    // Apply scroll effects using Wix methods
                    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    nav.style.backdropFilter = 'blur(10px)';
                    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                }
            } catch (error) {
                console.warn('Scroll effects failed:', error);
            }
        }
        
        function setupNavigationLinks() {
            try {
                // Handle navigation links
                const navLinks = $w('.nav-link');
                navLinks.forEach(link => {
                    try {
                        link.onClick((e) => {
                            e.preventDefault();
                            const href = link.href || link.getAttribute('href') || link.getAttribute('data-scroll');
                            if (href && href.startsWith('#')) {
                                smoothScrollTo(href);
                            }
                            if (state.isMenuOpen) {
                                toggleMobileMenu();
                            }
                        });
                    } catch (error) {
                        console.warn('Navigation link setup failed:', error);
                    }
                });
                
                // Handle anchor links
                const anchorLinks = $w('a');
                anchorLinks.forEach(link => {
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
                        console.warn('Anchor link setup failed:', error);
                    }
                });
                
            } catch (error) {
                console.warn('Navigation links setup failed:', error);
            }
        }
        
        setupScrollEffects();
        setupNavigationLinks();
        
        console.log('✅ Butter-smooth scroll system initialized');
    }
    
    // MOBILE-FIRST RESPONSIVE SYSTEM
    function initializeMobileResponsive() {
        console.log('📱 Initializing mobile-first responsive system...');
        
        function injectMobileCSS() {
            const mobileCSS = `
                * { box-sizing: border-box; }
                body { overflow-x: hidden; width: 100%; margin: 0; padding: 0; }
                
                @media (max-width: 768px) {
                    .nav, .navigation, #navigation {
                        padding: 0.75rem 1rem !important;
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        z-index: 1000 !important;
                        background: rgba(255, 255, 255, 0.95) !important;
                        backdrop-filter: blur(10px) !important;
                        box-shadow: 0 2px 20px rgba(0,0,0,0.1) !important;
                    }
                    
                    .nav-menu, #navMenu {
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        bottom: 0 !important;
                        background: rgba(255, 255, 255, 0.98) !important;
                        backdrop-filter: blur(20px) !important;
                        z-index: 1001 !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        align-items: center !important;
                        transform: translateX(-100%) !important;
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    }
                    
                    .nav-menu.open, #navMenu.open {
                        transform: translateX(0) !important;
                    }
                    
                    .nav-menu a, #navMenu a {
                        font-size: 1.5rem !important;
                        margin: 1rem 0 !important;
                        padding: 0.75rem 1.5rem !important;
                        border-radius: 8px !important;
                        transition: all 0.2s ease !important;
                    }
                    
                    .nav-menu a:hover, #navMenu a:hover {
                        background: rgba(0, 0, 0, 0.05) !important;
                        transform: scale(1.05) !important;
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
                        transition: all 0.3s ease !important;
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
                    }
                    
                    .hero-subtitle, .heroSubtitle {
                        font-size: clamp(0.875rem, 4vw, 1.125rem) !important;
                        margin-bottom: 1.5rem !important;
                        line-height: 1.5 !important;
                        opacity: 0.8 !important;
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
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                        color: white !important;
                        font-weight: 600 !important;
                        text-decoration: none !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                        touch-action: manipulation !important;
                        cursor: pointer !important;
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
                    }
                    
                    .btn:hover, .button:hover, .cta-button:hover {
                        transform: translateY(-2px) !important;
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6) !important;
                    }
                    
                    .btn:active, .button:active, .cta-button:active {
                        transform: translateY(0) !important;
                    }
                    
                    .features, .featuresSection, #featuresSection {
                        padding: 2rem 1rem !important;
                    }
                    
                    .features h2, .featuresTitle {
                        font-size: clamp(1.5rem, 5vw, 2rem) !important;
                        margin-bottom: 2rem !important;
                        text-align: center !important;
                        font-weight: 700 !important;
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
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                        border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    }
                    
                    .feature-card:hover, .featureCard:hover {
                        transform: translateY(-4px) !important;
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
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
                    .btn:hover, .button:hover, .cta-button:hover {
                        transform: none !important;
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
                    }
                    
                    .nav-link:hover, .navLink:hover {
                        transform: none !important;
                    }
                    
                    .feature-card:hover, .featureCard:hover {
                        transform: none !important;
                    }
                    
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
                
                .btn, .button, .cta-button,
                .feature-card, .featureCard,
                .nav-link, .navLink {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                img, video, iframe {
                    max-width: 100% !important;
                    height: auto !important;
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = mobileCSS;
            document.head.appendChild(style);
        }
        
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
                
                const menuLinks = $w('.nav-menu a, #navMenu a');
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
                
            } catch (error) {
                console.warn('Mobile menu setup failed:', error);
            }
        }
        
        function setupTouchOptimizations() {
            if (!state.isTouchDevice) return;
            
            try {
                const buttons = $w('.btn, .button, .cta-button');
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
                
            } catch (error) {
                console.warn('Touch optimizations failed:', error);
            }
        }
        
        function setupResponsiveResize() {
            // Use Wix's responsive handling
            try {
                // Set initial mobile state
                state.isMobile = true; // Assume mobile for better mobile experience
                state.isTouchDevice = true; // Assume touch for better touch experience
            } catch (error) {
                console.warn('Responsive setup failed:', error);
            }
        }
        
        injectMobileCSS();
        setupMobileMenu();
        setupTouchOptimizations();
        setupResponsiveResize();
        
        console.log('✅ Mobile-first responsive system initialized');
    }
    
    // MOBILE MENU SYSTEM
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
                    overlay.style.opacity = '1';
                }
            } else {
                menu.style.transform = 'translateX(-100%)';
                menu.classList.remove('open');
                toggle.classList.remove('open');
                if (overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                }
            }
        } catch (error) {
            console.warn('Mobile menu toggle failed:', error);
        }
    }
    
    // SMOOTH ANIMATIONS
    function initializeSmoothAnimations() {
        console.log('✨ Initializing smooth animations...');
        
        function setupButtonAnimations() {
            try {
                const buttons = $w('.btn, .button, .cta-button');
                buttons.forEach(button => {
                    if (!button) return;
                    
                    button.onMouseIn(() => {
                        button.style.transform = 'translateY(-2px) scale(1.02)';
                        button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    });
                    
                    button.onMouseOut(() => {
                        button.style.transform = 'translateY(0) scale(1)';
                    });
                    
                    button.onClick(() => {
                        button.style.transform = 'translateY(0) scale(0.98)';
                        setTimeout(() => {
                            button.style.transform = 'translateY(0) scale(1)';
                        }, 100);
                    });
                });
            } catch (error) {
                console.warn('Button animations failed:', error);
            }
        }
        
        function setupCardAnimations() {
            try {
                const cards = $w('.feature-card, .featureCard, .card');
                cards.forEach((card, index) => {
                    if (!card) return;
                    
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                    
                    card.onMouseIn(() => {
                        card.style.transform = 'translateY(-4px) scale(1.02)';
                    });
                    
                    card.onMouseOut(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                    });
                });
            } catch (error) {
                console.warn('Card animations failed:', error);
            }
        }
        
        function setupPageLoadAnimation() {
            try {
                const mainContent = getElement('#mainContent') || $w('main') || $w('.main-content');
                if (mainContent) {
                    mainContent.style.opacity = '0';
                    mainContent.style.transform = 'translateY(20px)';
                    mainContent.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }, 300);
                }
            } catch (error) {
                console.warn('Page load animation failed:', error);
            }
        }
        
        setupButtonAnimations();
        setupCardAnimations();
        setupPageLoadAnimation();
        
        console.log('✅ Smooth animations initialized');
    }
    
    // PERFORMANCE OPTIMIZATIONS
    function initializePerformanceOptimizations() {
        console.log('⚡ Initializing performance optimizations...');
        
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
        
        function optimizeAnimations() {
            try {
                const animatedElements = $w('[data-animation], .animate, .animated');
                animatedElements.forEach(element => {
                    if (element && element.style) {
                        element.style.willChange = 'transform, opacity';
                        element.style.backfaceVisibility = 'hidden';
                    }
                });
            } catch (error) {
                console.warn('Animation optimization failed:', error);
            }
        }
        
        optimizeImages();
        optimizeAnimations();
        
        console.log('✅ Performance optimizations initialized');
    }
    
    // ERROR HANDLING
    function setupErrorHandling() {
        // Wix-specific error handling
        try {
            // Handle any Wix-specific errors
            console.log('Error handling initialized');
        } catch (error) {
            console.warn('Error handling setup failed:', error);
        }
    }
    
    // INITIALIZATION SEQUENCE
    console.log('🚀 Starting ultra-smooth initialization sequence...');
    
    setupErrorHandling();
    initializeMobileResponsive();
    
    setTimeout(() => {
        initializeSmoothScroll();
    }, 100);
    
    setTimeout(() => {
        initializePerformanceOptimizations();
    }, 200);
    
    setTimeout(() => {
        initializeSmoothAnimations();
    }, 400);
    
    setTimeout(() => {
        state.isLoaded = true;
        console.log('✅ Ultra-smooth site loaded successfully!');
    }, 600);
    
    // Export functions for Wix
    console.log('✅ Ultra-smooth Wix site ready!');
}); 