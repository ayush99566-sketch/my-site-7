// ULTRA-FAST HOME PAGE - Landing Page with All Optimizations
// Includes: Hero animations, Features showcase, Performance monitoring, Mobile optimization

$w.onReady(function () {
    console.log('🚀 Ultra-Fast Home Page Loading...');
    
    // Wait for master page to be ready
    const waitForMasterPage = () => {
        if (window.ultraFastSite) {
            initializeUltraFastHomePage();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    function initializeUltraFastHomePage() {
        console.log('🏠 Initializing Ultra-Fast Home Page Features...');
        
        // ===== ULTRA-FAST HERO SECTION =====
        initializeHeroSection();
        
        // ===== ULTRA-FAST FEATURES SHOWCASE =====
        initializeFeaturesShowcase();
        
        // ===== ULTRA-FAST CALL-TO-ACTION =====
        initializeCallToAction();
        
        // ===== ULTRA-FAST SOCIAL PROOF =====
        initializeSocialProof();
        
        // ===== ULTRA-FAST PERFORMANCE MONITORING =====
        initializePerformanceMonitoring();
        
        console.log('✅ Ultra-Fast Home Page Initialized Successfully!');
    }
    
    // ===== ULTRA-FAST HERO SECTION =====
    function initializeHeroSection() {
        const heroSection = $w('#heroSection') || $w('.hero') || $w('[data-testid="hero"]');
        if (!heroSection) return;
        
        // Ultra-fast entrance animation
        heroSection.opacity = 0;
        heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroSection.style.transform = 'translateY(40px) scale(0.95)';
        
        // Trigger animation
        setTimeout(() => {
            heroSection.opacity = 1;
            heroSection.style.transform = 'translateY(0) scale(1)';
        }, 150);
        
        // Animate hero elements with stagger
        const heroElements = $w('#heroTitle, #heroSubtitle, #heroDescription, .hero-cta');
        heroElements.forEach((element, index) => {
            if (!element) return;
            
            element.opacity = 0;
            element.style.transition = `opacity 0.6s ease ${0.5 + (index * 0.2)}s, transform 0.6s ease ${0.5 + (index * 0.2)}s`;
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, 500 + (index * 200));
        });
        
        // Add interactive background effect
        const heroBackground = $w('#heroBackground') || heroSection;
        if (heroBackground) {
            heroBackground.onMouseMove((event) => {
                const rect = heroBackground.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                
                heroBackground.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
            });
            
            heroBackground.onMouseLeave(() => {
                heroBackground.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        }
    }
    
    // ===== ULTRA-FAST FEATURES SHOWCASE =====
    function initializeFeaturesShowcase() {
        const features = $w('.feature, .feature-card, [data-feature]');
        if (!features.length) return;
        
        // Create intersection observer for features
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const feature = entry.target;
                    
                    // Stagger animation for features
                    setTimeout(() => {
                        feature.style.opacity = '1';
                        feature.style.transform = 'translateY(0) scale(1)';
                        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    }, index * 150);
                    
                    // Add hover effects
                    feature.onMouseIn(() => {
                        feature.style.transform = 'translateY(-10px) scale(1.02)';
                        feature.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    });
                    
                    feature.onMouseOut(() => {
                        feature.style.transform = 'translateY(0) scale(1)';
                        feature.style.boxShadow = '';
                    });
                    
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
            feature.style.transform = 'translateY(50px) scale(0.9)';
            feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
            featureObserver.observe(feature);
        });
    }
    
    // ===== ULTRA-FAST CALL-TO-ACTION =====
    function initializeCallToAction() {
        const ctaButtons = $w('.cta-button, .btn-primary, .btn-cta');
        if (!ctaButtons.length) return;
        
        ctaButtons.forEach(button => {
            // Ultra-fast click handling
            button.onClick((event) => {
                event.preventDefault();
                console.log('🚀 Home CTA Clicked - Ultra-Fast Action');
                
                // Add click animation
                button.scale = 0.95;
                button.style.transition = 'transform 0.1s ease';
                
                setTimeout(() => {
                    button.scale = 1;
                }, 100);
                
                // Handle CTA action
                const buttonText = button.text || button.label || '';
                const href = button.href || button.link || '';
                
                if (href) {
                    // Navigate to URL
                    window.location.href = href;
                } else if (buttonText.toLowerCase().includes('get started')) {
                    // Scroll to signup section
                    ultraFastScrollTo('#signupSection', 100);
                } else if (buttonText.toLowerCase().includes('learn more')) {
                    // Scroll to features section
                    ultraFastScrollTo('#featuresSection', 100);
                } else if (buttonText.toLowerCase().includes('contact')) {
                    // Scroll to contact section
                    ultraFastScrollTo('#contactSection', 100);
                } else {
                    // Default action
                    showNotification('Action triggered: ' + buttonText, 'info');
                }
            });
            
            // Ultra-fast hover effects
            button.onMouseIn(() => {
                button.scale = 1.05;
                button.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
                button.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
            });
            
            button.onMouseOut(() => {
                button.scale = 1;
                button.style.boxShadow = '';
            });
        });
    }
    
    // ===== ULTRA-FAST SOCIAL PROOF =====
    function initializeSocialProof() {
        // Initialize testimonials
        const testimonials = $w('.testimonial, .review, [data-testimonial]');
        if (testimonials.length) {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.opacity = '0';
                testimonial.style.transform = 'translateX(50px)';
                testimonial.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                
                setTimeout(() => {
                    testimonial.style.opacity = '1';
                    testimonial.style.transform = 'translateX(0)';
                }, 1000 + (index * 200));
            });
        }
        
        // Initialize stats/counters
        const counters = $w('.counter, .stat, [data-counter]');
        if (counters.length) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target') || '1000');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.text = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.text = target.toLocaleString();
                    }
                };
                
                // Start counter when visible
                const counterObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            counterObserver.unobserve(entry.target);
                        }
                    });
                });
                
                counterObserver.observe(counter);
            });
        }
    }
    
    // ===== ULTRA-FAST PERFORMANCE MONITORING =====
    function initializePerformanceMonitoring() {
        // Monitor page load performance
        const loadTime = performance.now();
        console.log(`⚡ Home page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Monitor user interactions
        let interactionCount = 0;
        const interactionElements = $w('button, a, input, textarea');
        
        interactionElements.forEach(element => {
            element.onClick(() => {
                interactionCount++;
                if (interactionCount === 1) {
                    console.log('🎯 First user interaction detected');
                }
            });
        });
        
        // Monitor scroll performance
        let scrollEvents = 0;
        let lastScrollCheck = Date.now();
        
        window.addEventListener('scroll', () => {
            scrollEvents++;
            const now = Date.now();
            
            if (now - lastScrollCheck > 1000) {
                console.log(`📊 Scroll events per second: ${scrollEvents}`);
                scrollEvents = 0;
                lastScrollCheck = now;
            }
        }, { passive: true });
        
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log(`🎨 LCP: ${entry.startTime.toFixed(2)}ms`);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log(`⚡ FID: ${(entry.processingStart - entry.startTime).toFixed(2)}ms`);
                    }
                    if (entry.entryType === 'layout-shift') {
                        console.log(`📐 CLS: ${entry.value.toFixed(3)}`);
                    }
                });
            });
            
            observer.observe({ 
                entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
            });
        }
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
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // Start initialization
    waitForMasterPage();
});
