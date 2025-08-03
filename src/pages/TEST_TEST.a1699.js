// Ultra-Smooth Additional Test Page JavaScript - Comprehensive Testing
// Includes: Ultra-smooth scrolling, Enhanced animations, Performance monitoring, Accessibility

$w.onReady(function () {
    // Comprehensive testing functionality with ultra-smooth performance
    console.log('Ultra-Smooth Additional test page loaded - Comprehensive testing active');
    
    // Performance state management
    const state = {
        isMobile: window.innerWidth < 768,
        isScrolling: false,
        lastScrollY: 0,
        scrollRAF: null,
        performanceMode: 'ultra-smooth',
        testState: {
            counter: 0,
            lastAction: null
        }
    };
    
    // Test different Wix Velo features with ultra-smooth performance
    const testWixFeatures = () => {
        // Test dynamic content loading with ultra-smooth transitions
        const dynamicContainer = $w('#dynamicContent');
        if (dynamicContainer) {
            // Simulate dynamic content loading with ultra-smooth animation
            setTimeout(() => {
                const contentElement = dynamicContainer.children[0];
                if (contentElement) {
                    contentElement.style.opacity = '0';
                    contentElement.style.transform = 'translateY(20px)';
                    contentElement.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    contentElement.text = 'Ultra-Smooth Dynamic content loaded successfully!';
                    
                    setTimeout(() => {
                        contentElement.style.opacity = '1';
                        contentElement.style.transform = 'translateY(0)';
                    }, 100);
                }
            }, 2000);
        }
        
        // Test counter functionality with ultra-smooth animations
        const counterButton = $w('#counterButton');
        const counterDisplay = $w('#counterDisplay');
        
        if (counterButton && counterDisplay) {
            counterButton.onClick(() => {
                state.testState.counter++;
                state.testState.lastAction = 'increment';
                
                // Ultra-smooth counter animation
                counterButton.scale = 0.95;
                counterButton.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    counterButton.scale = 1;
                    counterButton.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
                
                // Ultra-smooth counter display update
                counterDisplay.style.transform = 'scale(1.1)';
                counterDisplay.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
                counterDisplay.text = `Count: ${state.testState.counter}`;
                
                setTimeout(() => {
                    counterDisplay.style.transform = 'scale(1)';
                }, 200);
                
                console.log('Ultra-Smooth Counter updated:', state.testState);
            });
        }
        
        // Test data binding with ultra-smooth feedback
        const dataElements = $w('.data-bound');
        dataElements.forEach(element => {
            element.onChange((event) => {
                console.log('Ultra-Smooth Data changed:', event.target.value);
                
                // Ultra-smooth validation feedback
                element.style.borderColor = '#28a745';
                element.style.transition = 'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    element.style.borderColor = '';
                }, 1000);
            });
        });
    };
    
    // Test user interactions with ultra-smooth performance
    const testUserInteractions = () => {
        // Test ultra-smooth hover effects
        const hoverElements = $w('.hover-effect');
        hoverElements.forEach(element => {
            element.onMouseEnter(() => {
                element.style.transform = 'translateY(-8px) scale(1.02)';
                element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            element.onMouseLeave(() => {
                element.style.transform = 'translateY(0) scale(1)';
                element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });
        });
        
        // Test ultra-smooth keyboard navigation
        document.addEventListener('keydown', (event) => {
            console.log('Ultra-Smooth Key pressed:', event.key);
            
            // Test keyboard shortcuts with ultra-smooth feedback
            if (event.ctrlKey && event.key === 't') {
                console.log('Ultra-Smooth Test shortcut triggered');
                
                // Ultra-smooth visual feedback
                const feedback = document.createElement('div');
                feedback.textContent = 'Test Shortcut Activated!';
                feedback.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #667eea;
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    font-size: 16px;
                    z-index: 10000;
                    opacity: 0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                `;
                
                document.body.appendChild(feedback);
                
                setTimeout(() => {
                    feedback.style.opacity = '1';
                }, 100);
                
                setTimeout(() => {
                    feedback.style.opacity = '0';
                    setTimeout(() => {
                        if (document.body.contains(feedback)) {
                            document.body.removeChild(feedback);
                        }
                    }, 300);
                }, 2000);
            }
        });
        
        // Test ultra-smooth touch events for mobile
        const touchElements = $w('.touch-enabled');
        touchElements.forEach(element => {
            element.onTouchStart(() => {
                console.log('Ultra-Smooth Touch started on:', element.id);
                
                // Ultra-smooth touch feedback
                element.style.transform = 'scale(0.95)';
                element.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            element.onTouchEnd(() => {
                element.style.transform = 'scale(1)';
                element.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    };
    
    // Test ultra-smooth performance and optimization
    const testPerformance = () => {
        // Monitor memory usage with ultra-smooth tracking
        if (performance.memory) {
            console.log('Ultra-Smooth Memory usage:', {
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                limit: performance.memory.jsHeapSizeLimit
            });
        }
        
        // Test ultra-smooth image loading performance
        const images = $w('img');
        images.forEach(img => {
            img.onLoad(() => {
                console.log('Ultra-Smooth Image loaded:', img.src);
                
                // Ultra-smooth image entrance animation
                img.style.opacity = '0';
                img.style.transform = 'scale(0.95)';
                img.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 100);
            });
            
            img.onError(() => {
                console.error('Ultra-Smooth Image failed to load:', img.src);
                
                // Ultra-smooth error feedback
                img.style.opacity = '0.5';
                img.style.filter = 'grayscale(100%)';
            });
        });
        
        // Monitor ultra-smooth scroll performance
        let scrollCount = 0;
        let lastScrollTime = performance.now();
        
        window.addEventListener('scroll', () => {
            scrollCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastScrollTime > 1000) {
                console.log(`Ultra-Smooth Scroll events per second: ${scrollCount}`);
                scrollCount = 0;
                lastScrollTime = currentTime;
            }
        }, { passive: true });
    };
    
    // Test ultra-smooth accessibility features
    const testAccessibility = () => {
        // Test focus management with ultra-smooth transitions
        const focusableElements = $w('button, a, input, textarea, select');
        focusableElements.forEach(element => {
            element.onFocus(() => {
                element.style.outline = '2px solid #667eea';
                element.style.outlineOffset = '2px';
                element.style.transition = 'outline 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            element.onBlur(() => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
        
        // Test ultra-smooth screen reader announcements
        const announceToScreenReader = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.style.cssText = `
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            `;
            announcement.textContent = message;
            
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                if (document.body.contains(announcement)) {
                    document.body.removeChild(announcement);
                }
            }, 1000);
        };
        
        // Test ultra-smooth color contrast
        const testColorContrast = () => {
            const textElements = $w('text, p, h1, h2, h3, h4, h5, h6');
            textElements.forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const color = computedStyle.color;
                const backgroundColor = computedStyle.backgroundColor;
                
                // Simple contrast check (in real implementation, use a proper contrast library)
                console.log(`Ultra-Smooth Color contrast for ${element.id}:`, { color, backgroundColor });
            });
        };
        
        testColorContrast();
    };
    
    // Initialize ultra-smooth scroll system
    function initializeUltraSmoothScroll() {
        function ultraSmoothScroll() {
            if (state.scrollRAF) return;
            
            state.scrollRAF = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                // Ultra-smooth scroll-based animations
                if (Math.abs(currentScrollY - state.lastScrollY) > 5) {
                    const scrollElements = $w('.scroll-animate, .parallax');
                    scrollElements.forEach(element => {
                        const rect = element.getBoundingClientRect();
                        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                        
                        if (isVisible) {
                            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                            const opacity = Math.min(progress * 2, 1);
                            const translateY = Math.max(0, (1 - progress) * 30);
                            
                            element.style.opacity = opacity;
                            element.style.transform = `translateY(${translateY}px)`;
                            element.style.transition = 'opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
                        }
                    });
                    
                    state.lastScrollY = currentScrollY;
                }
                
                state.scrollRAF = null;
            });
        }
        
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
    }
    
    // Initialize all ultra-smooth test features
    testWixFeatures();
    testUserInteractions();
    testPerformance();
    testAccessibility();
    initializeUltraSmoothScroll();
    
    console.log('Ultra-Smooth Comprehensive test page initialization complete');
});
