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
    }
    
    // Initialize ultra-smooth scroll system
    initializeUltraSmoothScroll();
    
    console.log('Ultra-Smooth Test page initialization complete');
});
