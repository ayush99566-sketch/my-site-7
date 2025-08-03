// ULTRA-FAST MAIN PAGE - Homepage with All Optimizations
// Includes: Hero animations, CTA optimization, Testimonials, Contact forms, Performance monitoring

$w.onReady(function () {
    console.log('🚀 Ultra-Fast Main Page Loading...');
    
    // Wait for master page to be ready
    const waitForMasterPage = () => {
        if (window.ultraFastSite) {
            initializeUltraFastMainPage();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    function initializeUltraFastMainPage() {
        console.log('🎯 Initializing Ultra-Fast Main Page Features...');
        
        // ===== ULTRA-FAST HERO SECTION =====
        initializeHeroSection();
        
        // ===== ULTRA-FAST CTA BUTTONS =====
        initializeCTAButtons();
        
        // ===== ULTRA-FAST TESTIMONIALS =====
        initializeTestimonials();
        
        // ===== ULTRA-FAST CONTACT FORMS =====
        initializeContactForms();
        
        // ===== ULTRA-FAST SCROLL ANIMATIONS =====
        initializeScrollAnimations();
        
        // ===== ULTRA-FAST PERFORMANCE FEATURES =====
        initializePerformanceFeatures();
        
        console.log('✅ Ultra-Fast Main Page Initialized Successfully!');
    }
    
    // ===== ULTRA-FAST HERO SECTION =====
    function initializeHeroSection() {
        const heroSection = $w('#heroSection') || $w('.hero') || $w('[data-testid="hero"]');
        if (!heroSection) return;
        
        // Ultra-fast fade-in animation
        heroSection.opacity = 0;
        heroSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroSection.style.transform = 'translateY(20px)';
        
        // Trigger animation after a short delay
        setTimeout(() => {
            heroSection.opacity = 1;
            heroSection.style.transform = 'translateY(0)';
        }, 100);
        
        // Add parallax effect for hero background
        const heroBackground = $w('#heroBackground') || heroSection;
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroBackground.style.transform = `translateY(${rate}px)`;
            }, { passive: true });
        }
        
        // Animate hero text elements
        const heroTexts = $w('#heroTitle, #heroSubtitle, .hero-text');
        heroTexts.forEach((text, index) => {
            text.opacity = 0;
            text.style.transition = `opacity 0.5s ease ${0.3 + (index * 0.2)}s, transform 0.5s ease ${0.3 + (index * 0.2)}s`;
            text.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                text.opacity = 1;
                text.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }
    
    // ===== ULTRA-FAST CTA BUTTONS =====
    function initializeCTAButtons() {
        const ctaButtons = $w('.cta-button, .btn-primary, [data-testid="cta-button"]');
        if (!ctaButtons.length) return;
        
    ctaButtons.forEach(button => {
            // Ultra-fast click handling
            button.onClick((event) => {
                event.preventDefault();
                console.log('🚀 CTA Button Clicked - Ultra-Fast Action');
                
                // Add ultra-fast click animation
                button.scale = 0.95;
                button.style.transition = 'transform 0.1s ease';
                
                setTimeout(() => {
                    button.scale = 1;
                }, 100);
                
                // Handle different CTA types
                const buttonText = button.text || button.label || '';
                const href = button.href || button.link || '';
                
                if (href) {
                    // Navigate to URL
                    window.location.href = href;
                } else if (buttonText.toLowerCase().includes('contact')) {
                    // Scroll to contact section
                    ultraFastScrollTo('#contactSection', 100);
                } else if (buttonText.toLowerCase().includes('learn')) {
                    // Scroll to about section
                    ultraFastScrollTo('#aboutSection', 100);
                } else {
                    // Default action - could trigger modal or form
                    console.log('CTA action:', buttonText);
                }
            });
            
            // Ultra-fast hover effects
        button.onMouseIn(() => {
            button.scale = 1.05;
                button.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
                button.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        });
        
        button.onMouseOut(() => {
            button.scale = 1;
                button.style.boxShadow = '';
            });
        });
    }
    
    // ===== ULTRA-FAST TESTIMONIALS =====
    function initializeTestimonials() {
        const testimonialSlider = $w('#testimonialSlider') || $w('.testimonials-slider');
        if (!testimonialSlider) return;
        
        // Auto-advance testimonials with ultra-fast transitions
        let currentSlide = 0;
        const totalSlides = testimonialSlider.children ? testimonialSlider.children.length : 3;
        
        function advanceTestimonial() {
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Ultra-fast slide transition
            testimonialSlider.style.transition = 'transform 0.3s ease';
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Auto-advance every 4 seconds
        setInterval(advanceTestimonial, 4000);
        
        // Add manual navigation
        const testimonialDots = $w('.testimonial-dot, .slider-dot');
        testimonialDots.forEach((dot, index) => {
            dot.onClick(() => {
                currentSlide = index;
                testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    });
    }
    
    // ===== ULTRA-FAST CONTACT FORMS =====
    function initializeContactForms() {
        const contactForms = $w('#contactForm, .contact-form, form');
        if (!contactForms.length) return;
        
        contactForms.forEach(form => {
            // Ultra-fast form submission
            form.onSubmit((event) => {
                event.preventDefault();
                console.log('📧 Ultra-Fast Form Submission');
                
                // Get form data
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]') || $w('#submitButton');
                
                // Add loading state
                if (submitBtn) {
                    const originalText = submitBtn.text;
                    submitBtn.text = 'Sending...';
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = '0.7';
                }
                
                // Simulate ultra-fast form processing
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.text = 'Sent Successfully! ✅';
                        submitBtn.style.background = '#28a745';
                        
                        // Reset form
                        form.reset();
                        
                        // Reset button after 3 seconds
                        setTimeout(() => {
                            submitBtn.text = submitBtn.originalText || 'Send Message';
                            submitBtn.disabled = false;
                            submitBtn.style.opacity = '1';
                            submitBtn.style.background = '';
                        }, 3000);
                    }
                    
                    // Show success message
                    showNotification('Message sent successfully!', 'success');
                }, 1000);
            });
            
            // Add real-time validation
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.onInput(() => {
                    validateInput(input);
                });
            });
        });
    }
    
    // ===== ULTRA-FAST SCROLL ANIMATIONS =====
    function initializeScrollAnimations() {
        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        const animatedElements = $w('.animate-on-scroll, .fade-in, [data-animate]');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // ===== ULTRA-FAST PERFORMANCE FEATURES =====
    function initializePerformanceFeatures() {
        // Lazy load images
        const lazyImages = $w('img[data-src]');
        lazyImages.forEach(img => {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.getAttribute('data-src');
                        image.classList.remove('lazy');
                        imageObserver.unobserve(image);
                    }
                });
            });
            
            imageObserver.observe(img);
        });
        
        // Preload critical resources
        preloadCriticalResources();
        
        // Monitor page performance
        monitorPagePerformance();
    }
    
    // ===== HELPER FUNCTIONS =====
    function ultraFastScrollTo(target, offset = 80) {
        if (window.ultraFastSite && window.ultraFastSite.scrollTo) {
            window.ultraFastSite.scrollTo(target, offset);
        } else {
            // Fallback
            const element = $w(target);
            if (element) {
                element.scrollTo();
            }
        }
    }
    
    function validateInput(input) {
        const value = input.value;
        const type = input.type;
        
        // Remove previous validation classes
        input.classList.remove('valid', 'invalid');
        
        // Basic validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                input.classList.add('valid');
            } else {
                input.classList.add('invalid');
            }
        } else if (type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (phoneRegex.test(value.replace(/\s/g, ''))) {
                input.classList.add('valid');
            } else {
                input.classList.add('invalid');
            }
        } else if (value.length > 0) {
            input.classList.add('valid');
        }
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#007bff'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    function preloadCriticalResources() {
        // Preload critical CSS and JS
        const criticalResources = [
            // Add your critical resources here
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            document.head.appendChild(link);
        });
    }
    
    function monitorPagePerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        }
    }
    
    // Start initialization
    waitForMasterPage();
});
