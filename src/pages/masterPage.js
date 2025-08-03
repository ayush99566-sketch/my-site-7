// ULTRA-SMOOTH WIX SITE - Master Page with Butter-Smooth Performance
// Includes: Ultra-smooth scrolling, Enhanced animations, Mobile optimization, Performance monitoring

$w.onReady(function () {
    console.log('🚀 Ultra-Fast Master Page Loading...');
    
    // ===== PERFORMANCE STATE MANAGEMENT =====
    const state = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        isLoaded: false,
        scrollY: 0,
        lastScrollTime: 0,
        performanceMode: 'ultra-fast'
    };
    
    // ===== ELEMENT CACHE FOR ULTRA-FAST ACCESS =====
    const elements = new Map();
    
    function getElement(selector) {
        if (!elements.has(selector)) {
            const element = $w(selector);
            if (element) {
                elements.set(selector, element);
            }
        }
        return elements.get(selector);
    }
    
    // ===== ULTRA-FAST MOBILE MENU SYSTEM =====
    function toggleMobileMenu() {
        const menu = getElement('#navMenu');
        const toggle = getElement('#navMenuToggle');
        const overlay = getElement('#mobileOverlay');
        
        if (!menu || !toggle) return;
        
        state.isMenuOpen = !state.isMenuOpen;
        
        if (state.isMenuOpen) {
            // Ultra-fast menu open
            menu.expand();
            toggle.expand();
            if (overlay) overlay.expand();
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Ultra-fast menu close
            menu.collapse();
            toggle.collapse();
            if (overlay) overlay.collapse();
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }
    
    // ===== ULTRA-SMOOTH SCROLL SYSTEM =====
    let scrollRAF = null;
    let lastScrollY = 0;
    
    function ultraSmoothScroll() {
        if (scrollRAF) return;
        
        scrollRAF = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const nav = getElement('#navigation');
            
            if (nav && Math.abs(currentScrollY - lastScrollY) > 5) {
                // Ultra-smooth nav background transition
                const opacity = Math.min(currentScrollY / 100, 1);
                const backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                
                nav.style.backgroundColor = backgroundColor;
                nav.style.backdropFilter = `blur(${opacity * 10}px)`;
                
                // Add shadow for depth
                if (opacity > 0.1) {
                    nav.style.boxShadow = `0 2px 20px rgba(0,0,0,${opacity * 0.1})`;
                } else {
                    nav.style.boxShadow = 'none';
                }
                
                lastScrollY = currentScrollY;
            }
            
            scrollRAF = null;
        });
    }
    
    // ===== ULTRA-FAST SCROLL TO ELEMENT =====
    function ultraFastScrollTo(target, offset = 80) {
        const element = typeof target === 'string' ? getElement(target) : target;
        if (!element) return;
        
        // Use Wix's optimized scrollTo with custom offset
        element.scrollTo();
        
        // Additional smooth behavior for better UX
        setTimeout(() => {
            const elementTop = element.offsetTop - offset;
            window.scrollTo({
                top: elementTop,
                behavior: 'smooth'
            });
        }, 50);
    }
    
    // ===== ULTRA-FAST IMAGE OPTIMIZATION =====
    function optimizeImages() {
        const images = $w('img');
        images.forEach(img => {
            // Add loading="lazy" for better performance
            if (img.loading !== 'lazy') {
                img.loading = 'lazy';
            }
            
            // Add error handling
            img.onError(() => {
                console.warn('Image failed to load:', img.src);
                // Could add fallback image here
            });
        });
    }
    
    // ===== ULTRA-FAST BUTTON INTERACTIONS =====
    function initializeButtons() {
        const buttons = $w('button, .btn, .cta-button');
        buttons.forEach(button => {
            // Ultra-fast hover effects
            button.onMouseIn(() => {
                button.scale = 1.02;
                button.style.transition = 'transform 0.1s ease';
            });
            
            button.onMouseOut(() => {
                button.scale = 1;
            });
            
            // Ultra-fast click effects
            button.onClick(() => {
                button.scale = 0.98;
                setTimeout(() => {
                    button.scale = 1;
                }, 100);
            });
        });
    }
    
    // ===== ULTRA-FAST FORM HANDLING =====
    function initializeForms() {
        const forms = $w('form');
        forms.forEach(form => {
            form.onSubmit((event) => {
                // Prevent default to handle custom submission
                event.preventDefault();
                
                // Add loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.text = 'Sending...';
                    submitBtn.disabled = true;
                }
                
                // Simulate form submission (replace with actual logic)
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.text = 'Sent!';
                        setTimeout(() => {
                            submitBtn.text = 'Submit';
                            submitBtn.disabled = false;
                        }, 2000);
                    }
                }, 1000);
            });
        });
    }
    
    // ===== ULTRA-FAST ANIMATIONS =====
    function initializeAnimations() {
        // Fade in page content
        const mainContent = getElement('#mainContent') || $w('main') || $w('.main-content');
        if (mainContent) {
            mainContent.opacity = 0;
            mainContent.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                mainContent.opacity = 1;
            }, 100);
        }
        
        // Stagger animations for lists
        const listItems = $w('li, .list-item');
        listItems.forEach((item, index) => {
            item.opacity = 0;
            item.style.transition = `opacity 0.3s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                item.opacity = 1;
            }, 200 + (index * 100));
        });
    }
    
    // ===== ULTRA-FAST PERFORMANCE MONITORING =====
    function startPerformanceMonitoring() {
        // Monitor scroll performance
        let scrollCount = 0;
        let lastScrollCheck = Date.now();
        
        const scrollObserver = () => {
            scrollCount++;
            const now = Date.now();
            
            if (now - lastScrollCheck > 1000) {
                const scrollsPerSecond = scrollCount;
                if (scrollsPerSecond > 30) {
                    console.warn('High scroll frequency detected, optimizing...');
                    // Could implement additional optimizations here
                }
                scrollCount = 0;
                lastScrollCheck = now;
            }
        };
        
        window.addEventListener('scroll', scrollObserver, { passive: true });
    }
    
    // ===== ULTRA-FAST INITIALIZATION =====
    function initializeUltraFastSite() {
        console.log('🚀 Initializing Ultra-Fast Site...');
        
        // Initialize mobile menu
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.onClick(() => toggleMobileMenu());
        }
        
        // Initialize mobile overlay
        const mobileOverlay = getElement('#mobileOverlay');
        if (mobileOverlay) {
            mobileOverlay.onClick(() => toggleMobileMenu());
        }
        
        // Initialize navigation links with ultra-fast scrolling
        const navLinks = $w('.nav-link, a[href^="#"]');
        navLinks.forEach(link => {
            link.onClick((e) => {
                e.preventDefault();
                const href = link.href || link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    ultraFastScrollTo(href);
                }
                if (state.isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Initialize ultra-smooth scroll
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        
        // Initialize responsive behavior
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const wasMobile = state.isMobile;
                state.isMobile = window.innerWidth < 768;
                
                // Close mobile menu if switching to desktop
                if (!state.isMobile && wasMobile && state.isMenuOpen) {
                    toggleMobileMenu();
                }
            }, 250);
        });
        
        // Initialize all optimizations
        optimizeImages();
        initializeButtons();
        initializeForms();
        initializeAnimations();
        startPerformanceMonitoring();
        
        // Mark as loaded
        state.isLoaded = true;
        console.log('✅ Ultra-Fast Site Initialized Successfully!');
        
        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
    }
    
    // ===== ERROR HANDLING & CRASH PREVENTION =====
    function setupErrorHandling() {
        // Prevent common crashes
        window.addEventListener('error', (e) => {
            console.warn('Error caught and handled:', e.error);
            e.preventDefault();
        });
        
        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            console.warn('Unhandled promise rejection caught:', e.reason);
            e.preventDefault();
        });
    }
    
    // ===== START EVERYTHING =====
    setupErrorHandling();
    initializeUltraFastSite();
    
    // Export functions for other pages to use
    window.ultraFastSite = {
        scrollTo: ultraFastScrollTo,
        toggleMenu: toggleMobileMenu,
        getElement: getElement,
        state: state
    
    // ===== MOBILE OPTIMIZATIONS =====
    function initializeMobileOptimizations() {
        console.log('📱 Initializing Mobile Optimizations...');
        
        // Mobile detection
        const isMobile = window.innerWidth < 768;
        const isTouchDevice = 'ontouchstart' in window;
        
        // Update state for mobile
        if (state) {
            state.isMobile = isMobile;
            state.isTouchDevice = isTouchDevice;
        }
        
        // Mobile-specific CSS injection
        injectMobileCSS();
        
        // Mobile touch optimizations
        if (isTouchDevice) {
            initializeTouchOptimizations();
        }
        
        // Mobile responsive adjustments
        initializeMobileResponsive();
        
        // Mobile performance optimizations
        initializeMobilePerformance();
        
        console.log('✅ Mobile optimizations initialized!');
    }
    
    function injectMobileCSS() {
        const mobileCSS = `
            /* Mobile Optimizations */
            @media (max-width: 768px) {
                /* Navigation adjustments */
                .nav, .navigation {
                    padding: 0.75rem 1rem !important;
                }
                
                .nav-container, .nav-wrapper {
                    padding: 0 0.5rem !important;
                }
                
                .nav-logo, .logo {
                    font-size: 1.25rem !important;
                }
                
                /* Hero section mobile fit */
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
                
                /* Button container mobile fit */
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
                
                /* Features section mobile fit */
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
            
            /* Small mobile devices (iPhone SE, etc.) */
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
            
            /* Medium mobile devices (iPhone 12/13) */
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
            
            /* Large mobile devices (iPhone Pro Max, etc.) */
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
            
            /* Landscape mobile optimization */
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
            
            /* Touch device optimizations */
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
                
                /* Enhanced touch targets */
                .btn, .button, .nav-link, .navLink {
                    min-height: 44px !important;
                    min-width: 44px !important;
                }
            }
            
            /* Safe area support for notched devices */
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
            
            /* Prevent horizontal scrolling */
            body {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            
            /* Ensure proper container sizing */
            .nav-container, .nav-wrapper,
            .hero-content, .heroContent,
            .features-grid, .featuresGrid {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
        `;
        
        // Inject CSS into head
        const style = document.createElement('style');
        style.textContent = mobileCSS;
        document.head.appendChild(style);
    }
    
    function initializeTouchOptimizations() {
        // Enhanced touch feedback for buttons
        const buttons = $w('.btn, .button, [data-testid*="button"]');
        buttons.forEach(btn => {
            if (!btn) return;
            
            // Touch start effect
            btn.onTouchStart(() => {
                btn.style.transform = 'scale(0.95)';
                btn.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            // Touch end effect
            btn.onTouchEnd(() => {
                setTimeout(() => {
                    btn.style.transform = '';
                    btn.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
            });
        });
        
        // Enhanced touch feedback for cards
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
        
        // Prevent zoom on double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    function initializeMobileResponsive() {
        // Mobile-specific element adjustments
        const heroSection = $w('#heroSection') || $w('.hero');
        if (heroSection && state.isMobile) {
            // Adjust hero for mobile
            heroSection.style.minHeight = '100vh';
            heroSection.style.padding = '1rem';
            heroSection.style.paddingTop = '70px';
        }
        
        // Mobile navigation adjustments
        const nav = $w('.nav, .navigation');
        if (nav && state.isMobile) {
            nav.style.padding = '0.75rem 1rem';
        }
        
        // Mobile button adjustments
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
    }
    
    function initializeMobilePerformance() {
        // Mobile-specific performance optimizations
        if (state.isMobile) {
            // Reduce animation complexity on mobile
            const animations = $w('[data-animation]');
            animations.forEach(anim => {
                if (!anim) return;
                anim.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
            
            // Optimize scroll performance
            const scrollElements = $w('.scroll-container, .scrollContainer');
            scrollElements.forEach(element => {
                if (!element) return;
                element.style.willChange = 'transform';
                element.style.transform = 'translateZ(0)';
            });
        }
    }
    
    // Initialize mobile optimizations after page load
    setTimeout(() => {
        initializeMobileOptimizations();
    }, 100);
};
});