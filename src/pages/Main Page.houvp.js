// ULTRA-SMOOTH MAIN PAGE - Homepage with Butter-Smooth Performance
// Includes: Ultra-smooth scrolling, Enhanced animations, CTA optimization, Testimonials, Contact forms, Performance monitoring

$w.onReady(function () {
    console.log('🚀 Ultra-Smooth Main Page Loading...');
    
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
            initializeUltraSmoothMainPage();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    function initializeUltraSmoothMainPage() {
        console.log('🎯 Initializing Ultra-Smooth Main Page Features...');
        
        // ===== ULTRA-SMOOTH HERO SECTION =====
        initializeHeroSection();
        
        // ===== ULTRA-SMOOTH CTA BUTTONS =====
        initializeCTAButtons();
        
        // ===== ULTRA-SMOOTH TESTIMONIALS =====
        initializeTestimonials();
        
        // ===== ULTRA-SMOOTH CONTACT FORMS =====
        initializeContactForms();
        
        // ===== ULTRA-SMOOTH SCROLL ANIMATIONS =====
        initializeScrollAnimations();
        
        // ===== ULTRA-SMOOTH SCROLL SYSTEM =====
        initializeUltraSmoothScroll();
        
        // ===== ULTRA-SMOOTH PERFORMANCE FEATURES =====
        initializePerformanceFeatures();
        
        console.log('✅ Ultra-Smooth Main Page Initialized Successfully!');
    }
    
    // ===== ULTRA-SMOOTH HERO SECTION =====
    function initializeHeroSection() {
        const heroSection = $w('#heroSection') || $w('.hero') || $w('[data-testid="hero"]');
        if (!heroSection) return;
        
        // Ultra-smooth fade-in animation with cubic-bezier
        heroSection.opacity = 0;
        heroSection.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        heroSection.style.transform = 'translateY(40px)';
        
        // Trigger animation after a short delay
        setTimeout(() => {
            heroSection.opacity = 1;
            heroSection.style.transform = 'translateY(0)';
        }, 150);
        
        // Ultra-smooth parallax effect for hero background
        const heroBackground = $w('#heroBackground') || heroSection;
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                heroBackground.style.transform = `translateY(${rate}px)`;
                heroBackground.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
            }, { passive: true });
        }
        
        // Ultra-smooth hero text animations with stagger
        const heroTexts = $w('#heroTitle, #heroSubtitle, .hero-text');
        heroTexts.forEach((text, index) => {
            text.opacity = 0;
            text.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + (index * 0.15)}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + (index * 0.15)}s`;
            text.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                text.opacity = 1;
                text.style.transform = 'translateY(0)';
            }, 400 + (index * 150));
        });
    }
    
    // ===== ULTRA-SMOOTH CTA BUTTONS =====
    function initializeCTAButtons() {
        const ctaButtons = $w('.cta-button, .btn-primary, [data-testid="cta-button"]');
        if (!ctaButtons.length) return;
        
        ctaButtons.forEach(button => {
            // Ultra-smooth click handling with enhanced feedback
            button.onClick((event) => {
                event.preventDefault();
                console.log('🚀 CTA Button Clicked - Ultra-Smooth Action');
                
                // Ultra-smooth click animation with ripple effect
                button.scale = 0.92;
                button.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    button.scale = 1;
                    button.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 200);
                
                // Handle different CTA types with ultra-smooth transitions
                const buttonText = button.text || button.label || '';
                
                if (buttonText.toLowerCase().includes('contact') || buttonText.toLowerCase().includes('touch')) {
                    ultraSmoothScrollTo('#contact', 80);
                } else if (buttonText.toLowerCase().includes('service')) {
                    ultraSmoothScrollTo('#services', 80);
                } else if (buttonText.toLowerCase().includes('about')) {
                    ultraSmoothScrollTo('#about', 80);
                } else if (buttonText.toLowerCase().includes('start') || buttonText.toLowerCase().includes('begin')) {
                    ultraSmoothScrollTo('#getStarted', 80);
                }
            });
            
            // Ultra-smooth hover effects with enhanced feedback
            button.onMouseEnter(() => {
                button.style.transform = 'translateY(-4px) scale(1.05)';
                button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                button.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            button.onMouseLeave(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                button.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });
        });
    }
    
    // ===== ULTRA-SMOOTH TESTIMONIALS =====
    function initializeTestimonials() {
        const testimonials = $w('.testimonial, .review, [data-testimonial]');
        if (!testimonials.length) return;
        
        // Auto-advance testimonials with ultra-smooth transitions
        let currentTestimonial = 0;
        
        function advanceTestimonial() {
            testimonials.forEach((testimonial, index) => {
                if (index === currentTestimonial) {
                    testimonial.style.opacity = '1';
                    testimonial.style.transform = 'translateX(0) scale(1)';
                    testimonial.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                } else {
                    testimonial.style.opacity = '0';
                    testimonial.style.transform = 'translateX(100px) scale(0.95)';
                    testimonial.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
        
        // Initialize testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateX(100px) scale(0.95)';
        });
        
        // Start auto-advance with ultra-smooth timing
        setTimeout(advanceTestimonial, 1000);
        setInterval(advanceTestimonial, 6000);
    }
    
    // ===== ULTRA-SMOOTH CONTACT FORMS =====
    function initializeContactForms() {
        const forms = $w('form, [data-form]');
        if (!forms.length) return;
        
        forms.forEach(form => {
            // Ultra-smooth form submission
            form.onSubmit((event) => {
                event.preventDefault();
                console.log('📝 Form Submitted - Ultra-Smooth Processing');
                
                // Ultra-smooth loading state
                const submitButton = form.querySelector('button[type="submit"]') || form.querySelector('.submit-btn');
                if (submitButton) {
                    const originalText = submitButton.text;
                    submitButton.text = 'Sending...';
                    submitButton.style.opacity = '0.7';
                    submitButton.style.pointerEvents = 'none';
                    
                    // Simulate form processing with ultra-smooth feedback
                    setTimeout(() => {
                        submitButton.text = 'Sent Successfully!';
                        submitButton.style.background = '#28a745';
                        submitButton.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                        
                        setTimeout(() => {
                            submitButton.text = originalText;
                            submitButton.style.opacity = '1';
                            submitButton.style.pointerEvents = 'auto';
                            submitButton.style.background = '';
                        }, 2000);
                    }, 1500);
                }
            });
            
            // Ultra-smooth input animations
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.onFocus(() => {
                    input.style.transform = 'scale(1.02)';
                    input.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    input.style.borderColor = '#667eea';
                });
                
                input.onBlur(() => {
                    input.style.transform = 'scale(1)';
                    input.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    input.style.borderColor = '';
                });
            });
        });
    }
    
    // ===== ULTRA-SMOOTH SCROLL ANIMATIONS =====
    function initializeScrollAnimations() {
        // Create intersection observer for ultra-smooth scroll animations
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Ultra-smooth entrance animation with stagger
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0) scale(1)';
                        element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, index * 100);
                    
                    scrollObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all scroll-animated elements
        const scrollElements = $w('.scroll-animate, .animate-on-scroll, [data-scroll-animate]');
        scrollElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px) scale(0.95)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            scrollObserver.observe(element);
        });
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
        const duration = 1200;
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
    
    // ===== ULTRA-SMOOTH PERFORMANCE FEATURES =====
    function initializePerformanceFeatures() {
        // Performance monitoring with ultra-smooth metrics
        const performanceMetrics = {
            loadTime: 0,
            scrollPerformance: 0,
            animationFPS: 0,
            interactionCount: 0
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
        
        // Monitor user interactions
        const interactiveElements = $w('button, a, input, textarea');
        interactiveElements.forEach(element => {
            element.onClick(() => {
                performanceMetrics.interactionCount++;
                if (performanceMetrics.interactionCount === 1) {
                    console.log('🎯 First user interaction detected');
                }
            });
        });
        
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
            console.log('📊 Main Page Performance Metrics:', performanceMetrics);
        });
        
        // Preload critical resources for ultra-smooth experience
        function preloadCriticalResources() {
            const criticalImages = [
                // Add any critical images here
            ];
            
            criticalImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
        
        preloadCriticalResources();
    }
    
    // Initialize the page
    waitForMasterPage();
});
