// ULTRA-SMOOTH HOME PAGE - Landing Page with Butter-Smooth Performance
// Includes: Ultra-smooth scrolling, Enhanced animations, Performance monitoring, Mobile optimization

$w.onReady(function () {
    console.log('🚀 Ultra-Smooth Home Page Loading...');
    
    // Performance state management
    const state = {
        isMobile: window.innerWidth < 768,
        isScrolling: false,
        lastScrollY: 0,
        scrollRAF: null,
        performanceMode: 'ultra-smooth'
    };
    
    // Wait for master page to be ready
    const waitForMasterPage = () => {
        if (window.ultraFastSite) {
            initializeUltraSmoothHomePage();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    function initializeUltraSmoothHomePage() {
        console.log('🏠 Initializing Ultra-Smooth Home Page Features...');
        
        // ===== ULTRA-SMOOTH HERO SECTION =====
        initializeHeroSection();
        
        // ===== ULTRA-SMOOTH FEATURES SHOWCASE =====
        initializeFeaturesShowcase();
        
        // ===== ULTRA-SMOOTH CALL-TO-ACTION =====
        initializeCallToAction();
        
        // ===== ULTRA-SMOOTH SOCIAL PROOF =====
        initializeSocialProof();
        
        // ===== ULTRA-SMOOTH SCROLL SYSTEM =====
        initializeUltraSmoothScroll();
        
        // ===== ULTRA-SMOOTH PERFORMANCE MONITORING =====
        initializePerformanceMonitoring();
        
        console.log('✅ Ultra-Smooth Home Page Initialized Successfully!');
    }
    
    // ===== ULTRA-SMOOTH HERO SECTION =====
    function initializeHeroSection() {
        const heroSection = $w('#heroSection') || $w('.hero') || $w('[data-testid="hero"]');
        if (!heroSection) return;
        
        // Ultra-smooth entrance animation with cubic-bezier
        heroSection.opacity = 0;
        heroSection.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
        heroSection.style.transform = 'translateY(60px) scale(0.95)';
        
        // Trigger animation with delay
        setTimeout(() => {
            heroSection.opacity = 1;
            heroSection.style.transform = 'translateY(0) scale(1)';
        }, 200);
        
        // Stagger animation for hero elements with ultra-smooth timing
        const heroElements = $w('#heroTitle, #heroSubtitle, #heroDescription, .hero-cta');
        heroElements.forEach((element, index) => {
            if (!element) return;
            
            element.opacity = 0;
            element.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + (index * 0.15)}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + (index * 0.15)}s`;
            element.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                element.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, 600 + (index * 150));
        });
        
        // Ultra-smooth interactive background effect
        const heroBackground = $w('#heroBackground') || heroSection;
        if (heroBackground) {
            let isHovering = false;
            
            heroBackground.onMouseMove((event) => {
                if (!isHovering) return;
                
                const rect = heroBackground.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                
                // Ultra-smooth 3D transform
                const rotateX = (y - 0.5) * 3;
                const rotateY = (x - 0.5) * 3;
                
                heroBackground.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                heroBackground.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            heroBackground.onMouseEnter(() => {
                isHovering = true;
                heroBackground.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            heroBackground.onMouseLeave(() => {
                isHovering = false;
                heroBackground.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                heroBackground.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        }
    }
    
    // ===== ULTRA-SMOOTH FEATURES SHOWCASE =====
    function initializeFeaturesShowcase() {
        const features = $w('.feature, .feature-card, [data-feature]');
        if (!features.length) return;
        
        // Create intersection observer for ultra-smooth feature animations
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const feature = entry.target;
                    
                    // Stagger animation with ultra-smooth timing
                    setTimeout(() => {
                        feature.style.opacity = '1';
                        feature.style.transform = 'translateY(0) scale(1)';
                        feature.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                        
                        // Add hover effects for ultra-smooth interaction
                        feature.onMouseEnter(() => {
                            feature.style.transform = 'translateY(-8px) scale(1.02)';
                            feature.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                        });
                        
                        feature.onMouseLeave(() => {
                        feature.style.transform = 'translateY(0) scale(1)';
                            feature.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    });
                    }, index * 100);
                    
                    featureObserver.unobserve(feature);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all features
        features.forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(40px) scale(0.95)';
            feature.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            featureObserver.observe(feature);
        });
    }
    
    // ===== ULTRA-SMOOTH CALL-TO-ACTION =====
    function initializeCallToAction() {
        const ctaButtons = $w('.cta-button, .btn-primary, [data-testid="cta-button"]');
        if (!ctaButtons.length) return;
        
        ctaButtons.forEach(button => {
            // Ultra-smooth click handling with ripple effect
            button.onClick((event) => {
                event.preventDefault();
                console.log('🚀 CTA Button Clicked - Ultra-Smooth Action');
                
                // Ultra-smooth click animation
                button.scale = 0.95;
                button.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    button.scale = 1;
                    button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
                
                // Handle different CTA types with ultra-smooth transitions
                const buttonText = button.text || button.label || '';
                
                if (buttonText.toLowerCase().includes('contact') || buttonText.toLowerCase().includes('touch')) {
                    ultraSmoothScrollTo('#contact', 80);
                } else if (buttonText.toLowerCase().includes('service')) {
                    ultraSmoothScrollTo('#services', 80);
                } else if (buttonText.toLowerCase().includes('about')) {
                    ultraSmoothScrollTo('#about', 80);
                }
            });
            
            // Ultra-smooth hover effects
            button.onMouseEnter(() => {
                button.style.transform = 'translateY(-3px) scale(1.05)';
                button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            button.onMouseLeave(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }
    
    // ===== ULTRA-SMOOTH SOCIAL PROOF =====
    function initializeSocialProof() {
        const testimonials = $w('.testimonial, .review, [data-testimonial]');
        if (!testimonials.length) return;
        
        // Auto-advance testimonials with ultra-smooth transitions
        let currentTestimonial = 0;
        
        function advanceTestimonial() {
            testimonials.forEach((testimonial, index) => {
                if (index === currentTestimonial) {
                    testimonial.style.opacity = '1';
                    testimonial.style.transform = 'translateX(0)';
                    testimonial.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                } else {
                    testimonial.style.opacity = '0';
                    testimonial.style.transform = 'translateX(100px)';
                    testimonial.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
        
        // Initialize testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateX(100px)';
        });
        
        // Start auto-advance
        setTimeout(advanceTestimonial, 1000);
        setInterval(advanceTestimonial, 5000);
    }
    
    // ===== ULTRA-SMOOTH SCROLL SYSTEM =====
    function initializeUltraSmoothScroll() {
        // Ultra-smooth scroll handling with RAF
        function ultraSmoothScroll() {
            if (state.scrollRAF) return;
            
            state.scrollRAF = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const nav = $w('#navigation') || $w('.nav');
                
                // Ultra-smooth navigation background change
                if (nav && Math.abs(currentScrollY - state.lastScrollY) > 5) {
                    const opacity = Math.min(currentScrollY / 100, 1);
                    
                    if (currentScrollY > 50) {
                        nav.style.background = `rgba(255, 255, 255, ${opacity * 0.98})`;
                        nav.style.backdropFilter = `blur(${opacity * 20}px)`;
                        nav.style.boxShadow = `0 4px 20px rgba(0,0,0,${opacity * 0.1})`;
                    } else {
                        nav.style.background = 'rgba(255, 255, 255, 0.95)';
                        nav.style.backdropFilter = 'blur(10px)';
                        nav.style.boxShadow = 'none';
                    }
                    
                    state.lastScrollY = currentScrollY;
                }
                
                state.scrollRAF = null;
            });
        }
        
        // Add scroll listener with passive option for ultra-smooth performance
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        
    }
    
    // ===== ULTRA-SMOOTH SCROLL TO FUNCTION =====
    // Define ultraSmoothScrollTo function globally to avoid build errors
    function ultraSmoothScrollTo(target, offset = 80) {
        const element = typeof target === 'string' ? $w(target) : target;
        if (!element) return;
        
        const targetPosition = element.offsetTop - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // ===== ULTRA-SMOOTH PERFORMANCE MONITORING =====
    function initializePerformanceMonitoring() {
        // Performance monitoring with ultra-smooth metrics
        const performanceMetrics = {
            loadTime: 0,
            scrollPerformance: 0,
            animationFPS: 0
        };
        
        // Monitor scroll performance
        let scrollCount = 0;
        let lastScrollTime = performance.now();
        
        window.addEventListener('scroll', () => {
            scrollCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastScrollTime > 1000) {
                performanceMetrics.scrollPerformance = scrollCount;
                scrollCount = 0;
                lastScrollTime = currentTime;
            }
        }, { passive: true });
        
        // Monitor animation performance
        let frameCount = 0;
        let lastFrameTime = performance.now();
        
        function monitorAnimationFPS() {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastFrameTime > 1000) {
                performanceMetrics.animationFPS = frameCount;
                frameCount = 0;
                lastFrameTime = currentTime;
            }
            
            requestAnimationFrame(monitorAnimationFPS);
        }
        
        requestAnimationFrame(monitorAnimationFPS);
        
        // Log performance metrics
        window.addEventListener('load', () => {
            performanceMetrics.loadTime = performance.now();
            console.log('📊 Performance Metrics:', performanceMetrics);
        });
    
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
    
    // Initialize the page
    waitForMasterPage();
});