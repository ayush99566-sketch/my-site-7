// SIMPLIFIED ULTRA-SMOOTH HOME PAGE
// Optimized to prevent crashes and ensure smooth functioning

$w.onReady(function () {
    console.log('🚀 Simplified Home Page Loading...');
    
    // Simple state management
    const state = {
        isLoaded: false,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        isMenuOpen: false
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
    
    // CRASH PREVENTION - Disable all heavy animations
    function preventCrashes() {
        console.log('🛡️ Preventing crashes on Home page...');
        
        try {
            const allElements = $w('*');
            if (allElements && allElements.length > 0) {
                allElements.forEach(element => {
                    if (element && element.style) {
                        // Disable all animations and heavy effects
                        element.style.animation = 'none !important';
                        element.style.transition = 'none !important';
                        element.style.transform = 'none !important';
                        element.style.filter = 'none !important';
                        element.style.backdropFilter = 'none !important';
                        element.style.boxShadow = 'none !important';
                        element.style.willChange = 'auto !important';
                        element.style.backfaceVisibility = 'visible !important';
                        element.style.perspective = 'none !important';
                        
                        // Ensure visibility
                        element.style.visibility = 'visible !important';
                        element.style.opacity = '1 !important';
                        element.style.display = 'block !important';
                    }
                });
            }
            
            console.log('✅ Crash prevention applied to Home page');
            
        } catch (error) {
            console.warn('Crash prevention failed on Home page:', error);
        }
    }
    
    // ERROR HANDLING
    function setupErrorHandling() {
        if (typeof window !== 'undefined') {
            window.addEventListener('error', (e) => {
                console.warn('Error caught and handled on Home page:', e.error);
                e.preventDefault();
            });
            
            window.addEventListener('unhandledrejection', (e) => {
                console.warn('Unhandled promise rejection caught on Home page:', e.reason);
                e.preventDefault();
            });
        }
    }
    
    // HERO SECTION SETUP
    function setupHeroSection() {
        console.log('🏠 Setting up hero section...');
        
        try {
            // Hero section elements
            const heroSection = getElement('#heroSection') || $w('.hero')[0];
            const heroTitle = getElement('#heroTitle') || $w('.hero-title')[0];
            const heroSubtitle = getElement('#heroSubtitle') || $w('.hero-subtitle')[0];
            const heroButtons = $w('.hero-button, .cta-button, .btn');
            
            if (heroSection) {
                // Ensure hero section is visible
                heroSection.style.visibility = 'visible';
                heroSection.style.opacity = '1';
                heroSection.style.display = 'block';
            }
            
            if (heroTitle) {
                // Ensure title is visible
                heroTitle.style.visibility = 'visible';
                heroTitle.style.opacity = '1';
            }
            
            if (heroSubtitle) {
                // Ensure subtitle is visible
                heroSubtitle.style.visibility = 'visible';
                heroSubtitle.style.opacity = '1';
            }
            
            // Setup hero buttons
            heroButtons.forEach(button => {
                if (!button) return;
                
                // Ensure button is visible
                button.style.visibility = 'visible';
                button.style.opacity = '1';
                button.style.display = 'block';
                
                // Add simple click feedback
                button.onClick(() => {
                    button.style.opacity = '0.8';
                    setTimeout(() => {
                        button.style.opacity = '1';
                    }, 100);
                });
            });
            
            console.log('✅ Hero section setup complete');
            
        } catch (error) {
            console.warn('Hero section setup failed:', error);
        }
    }
    
    // FEATURES SECTION SETUP
    function setupFeaturesSection() {
        console.log('✨ Setting up features section...');
        
        try {
            // Features section elements
            const featuresSection = getElement('#featuresSection') || $w('.features')[0];
            const featureCards = $w('.feature-card, .featureCard, .card');
            
            if (featuresSection) {
                // Ensure features section is visible
                featuresSection.style.visibility = 'visible';
                featuresSection.style.opacity = '1';
                featuresSection.style.display = 'block';
            }
            
            // Setup feature cards
            featureCards.forEach((card, index) => {
                if (!card) return;
                
                // Ensure card is visible
                card.style.visibility = 'visible';
                card.style.opacity = '1';
                card.style.display = 'block';
                
                // Add simple hover effect
                card.onMouseIn(() => {
                    card.style.opacity = '0.9';
                    card.style.transition = 'opacity 0.2s ease';
                });
                
                card.onMouseOut(() => {
                    card.style.opacity = '1';
                });
            });
            
            console.log('✅ Features section setup complete');
            
        } catch (error) {
            console.warn('Features section setup failed:', error);
        }
    }
    
    // IMAGE OPTIMIZATION
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
    
    // MOBILE OPTIMIZATIONS
    function setupMobileOptimizations() {
        console.log('📱 Setting up mobile optimizations for Home page...');
        
        try {
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
            const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in window : false;
            
            state.isMobile = isMobile;
            
            if (isTouchDevice) {
                // Touch optimizations
                const buttons = $w('.btn, .button, [data-testid*="button"]');
                buttons.forEach(btn => {
                    if (!btn) return;
                    
                    btn.onTouchStart(() => {
                        btn.style.opacity = '0.8';
                        btn.style.transition = 'opacity 0.15s ease';
                    });
                    
                    btn.onTouchEnd(() => {
                        setTimeout(() => {
                            btn.style.opacity = '1';
                        }, 150);
                    });
                });
            }
            
            // Responsive behavior
            let resizeTimeout;
            if (typeof window !== 'undefined') {
                window.addEventListener('resize', () => {
                    if (resizeTimeout) clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        const wasMobile = state.isMobile;
                        state.isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
                        
                        // Adjust layout for mobile
                        if (state.isMobile) {
                            adjustForMobile();
                        }
                    }, 250);
                });
            }
            
            console.log('✅ Mobile optimizations complete for Home page');
            
        } catch (error) {
            console.warn('Mobile optimizations failed for Home page:', error);
        }
    }
    
    // ADJUST FOR MOBILE
    function adjustForMobile() {
        try {
            if (!state.isMobile) return;
            
            // Adjust hero section for mobile
            const heroSection = getElement('#heroSection') || $w('.hero')[0];
            if (heroSection) {
                heroSection.style.minHeight = '100vh';
                heroSection.style.padding = '1rem';
                heroSection.style.paddingTop = '70px';
            }
            
            // Adjust buttons for mobile
            const buttons = $w('.btn, .button');
            buttons.forEach(btn => {
                if (!btn) return;
                
                btn.style.width = '100%';
                btn.style.maxWidth = '280px';
                btn.style.minHeight = '48px';
                btn.style.padding = '0.875rem 1.5rem';
                btn.style.fontSize = '1rem';
                btn.style.textAlign = 'center';
                btn.style.touchAction = 'manipulation';
            });
            
        } catch (error) {
            console.warn('Mobile adjustment failed:', error);
        }
    }
    
    // ENABLE SMOOTH TRANSITIONS (after everything is loaded)
    function enableSmoothTransitions() {
        try {
            const allElements = $w('*');
            allElements.forEach(element => {
                if (element && element.style) {
                    // Enable smooth transitions
                    element.style.transition = 'opacity 0.3s ease-in-out, transform 0.2s ease';
                    
                    // Ensure visibility
                    element.style.visibility = 'visible';
                    element.style.opacity = '1';
                    element.style.display = 'block';
                }
            });
        } catch (error) {
            console.warn('Enable smooth transitions failed:', error);
        }
    }
    
    // MAIN INITIALIZATION
    function initialize() {
        console.log('🚀 Starting simplified Home page initialization...');
        
        // Step 1: Prevent crashes immediately
        preventCrashes();
        
        // Step 2: Setup error handling
        setupErrorHandling();
        
        // Step 3: Setup hero section
        setupHeroSection();
        
        // Step 4: Setup features section
        setupFeaturesSection();
        
        // Step 5: Optimize images
        optimizeImages();
        
        // Step 6: Setup mobile optimizations
        setupMobileOptimizations();
        
        // Step 7: Enable smooth transitions after a delay
        setTimeout(() => {
            enableSmoothTransitions();
            state.isLoaded = true;
            
            console.log('✅ Simplified Home page initialization complete!');
        }, 1000);
    }
    
    // Start initialization
    initialize();
    
    console.log('✅ Simplified Home Page initialized!');
}); 