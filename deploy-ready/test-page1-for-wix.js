// Ultra-Smooth Test Page JavaScript - Development and Testing Features
// Includes: Ultra-smooth scrolling, Enhanced animations, Performance monitoring

$w.onReady(function () {
    // Test page functionality for development with ultra-smooth performance
    console.log('Ultra-Smooth Test page loaded - Development mode active');
    
    // Performance state management
    const state = {
        isMobile: window.innerWidth < 768,
        isScrolling: false,
        lastScrollY: 0,
        scrollRAF: null,
        performanceMode: 'ultra-smooth'
    };
    
    // Development tools and debugging
    const debugMode = true;
    
    if (debugMode) {
        // Add debug information to console
        console.log('Page elements found:', {
            buttons: $w('button').length,
            images: $w('img').length,
            text: $w('text').length,
            containers: $w('container').length
        });
        
        // Add ultra-smooth click tracking for all interactive elements
        const interactiveElements = $w('button, link, image');
        interactiveElements.forEach(element => {
            element.onClick(() => {
                console.log('Element clicked:', element.id || element.tagName);
                
                // Ultra-smooth click animation
                element.scale = 0.95;
                element.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    element.scale = 1;
                    element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
            });
        });
    }
    
    // Ultra-smooth form validation
    const testForm = $w('#testForm');
    if (testForm) {
        testForm.onSubmit((event) => {
            console.log('Ultra-Smooth Test form submitted');
            
            // Ultra-smooth form processing
            const submitButton = testForm.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.text;
                submitButton.text = 'Processing...';
                submitButton.style.opacity = '0.7';
                
                setTimeout(() => {
                    submitButton.text = 'Success!';
                    submitButton.style.background = '#28a745';
                    
                    setTimeout(() => {
                        submitButton.text = originalText;
                        submitButton.style.opacity = '1';
                        submitButton.style.background = '';
                    }, 2000);
                }, 1500);
            }
            
            // Add form validation logic here
            const formData = testForm.value;
            console.log('Form data:', formData);
        });
    }
    
    // Ultra-smooth animations and transitions
    const testElements = $w('.test-element');
    testElements.forEach(element => {
        // Add ultra-smooth test animations
        element.onMouseEnter(() => {
            element.opacity = 0.8;
            element.scale = 1.1;
            element.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        element.onMouseLeave(() => {
            element.opacity = 1;
            element.scale = 1;
            element.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // Ultra-smooth performance testing
    const startTime = performance.now();
    
    // Simulate some heavy operations for testing with ultra-smooth feedback
    setTimeout(() => {
        const endTime = performance.now();
        console.log(`Ultra-Smooth Page load performance: ${endTime - startTime}ms`);
        
        // Ultra-smooth performance indicator
        const performanceIndicator = document.createElement('div');
        performanceIndicator.textContent = `Load Time: ${(endTime - startTime).toFixed(2)}ms`;
        performanceIndicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #28a745;
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        document.body.appendChild(performanceIndicator);
        
        setTimeout(() => {
            performanceIndicator.style.opacity = '1';
            performanceIndicator.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            performanceIndicator.style.opacity = '0';
            performanceIndicator.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(performanceIndicator)) {
                    document.body.removeChild(performanceIndicator);
                }
            }, 500);
        }, 3000);
    }, 1000);
    
    // Ultra-smooth responsive behavior
    const testResponsive = () => {
        const isMobile = window.innerWidth < 768;
        console.log('Ultra-Smooth Responsive test - Mobile:', isMobile);
        
        // Adjust elements based on screen size with ultra-smooth transitions
        const responsiveElements = $w('.responsive');
        responsiveElements.forEach(element => {
            if (isMobile) {
                element.fontSize = '14px';
            } else {
                element.fontSize = '16px';
            }
            element.style.transition = 'font-size 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    };
    
    // Test on load and resize with ultra-smooth handling
    testResponsive();
    window.addEventListener('resize', () => {
        // Debounce resize events for ultra-smooth performance
        clearTimeout(state.resizeTimeout);
        state.resizeTimeout = setTimeout(testResponsive, 250);
    });
    
    // Ultra-smooth scroll system
    function initializeUltraSmoothScroll() {
        function ultraSmoothScroll() {
            if (state.scrollRAF) return;
            
            state.scrollRAF = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                // Ultra-smooth scroll-based animations
                if (Math.abs(currentScrollY - state.lastScrollY) > 5) {
                    const scrollElements = $w('.scroll-animate');
                    scrollElements.forEach(element => {
                        const rect = element.getBoundingClientRect();
                        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                        
                        if (isVisible) {
                            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                            element.style.opacity = Math.min(progress * 2, 1);
                            element.style.transform = `translateY(${Math.max(0, (1 - progress) * 20)}px)`;
                        }
                    });
                    
                    state.lastScrollY = currentScrollY;
                }
                
                state.scrollRAF = null;
            });
        }
        
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
    
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
}
    
    // Initialize ultra-smooth scroll system
    initializeUltraSmoothScroll();
    
    console.log('Ultra-Smooth Test page initialization complete');
});