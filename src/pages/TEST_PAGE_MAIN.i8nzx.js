// ULTRA-SMOOTH TEST PAGE 1 - Progressive Loading System
// Prevents first-time loading crashes by loading features in phases

$w.onReady(function () {
    console.log('🚀 Progressive Test Page 1 Loading...');
    
    // Performance state management
    const state = {
        isMobile: window.innerWidth < 768,
        isScrolling: false,
        lastScrollY: 0,
        scrollRAF: null,
        performanceMode: 'progressive',
        loadPhase: 0 // 0: critical, 1: essential, 2: enhanced, 3: full
    };
    
    // Wait for master page to be ready
    const waitForMasterPage = () => {
        if (window.ultraFastSite) {
            progressiveLoad();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    // Progressive loading system
    function progressiveLoad() {
        console.log('📦 Starting progressive test page 1 load...');
        
        // Phase 0: Critical functionality only
        loadCriticalElements();
        
        // Phase 1: Essential features (after 150ms)
        setTimeout(() => loadEssentialFeatures(), 150);
        
        // Phase 2: Enhanced features (after 400ms)
        setTimeout(() => loadEnhancedFeatures(), 400);
        
        // Phase 3: Full features (after 1000ms)
        setTimeout(() => loadFullFeatures(), 1000);
    }
    
    function loadCriticalElements() {
        console.log('🔧 Loading critical test page 1 elements...');
        state.loadPhase = 0;
        
        // Basic error handling
        setupErrorHandling();
        
        // Simple content visibility
        setupBasicContentVisibility();
        
        console.log('✅ Critical test page 1 elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential test page 1 features...');
        state.loadPhase = 1;
        
        // Basic test section
        setupBasicTestSection();
        
        // Basic navigation integration
        setupBasicNavigation();
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential test page 1 features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced test page 1 features...');
        state.loadPhase = 2;
        
        // Smooth scroll system
        setupSmoothScroll();
        
        // Basic animations
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced test page 1 features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full test page 1 features...');
        state.loadPhase = 3;
        
        // Enhanced animations
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        console.log('✅ Full test page 1 loaded successfully!');
    }
    
    // Basic content visibility (Phase 0)
    function setupBasicContentVisibility() {
        try {
            const mainContent = $w('#mainContent') || $w('main') || $w('.main-content');
            if (mainContent) {
                mainContent.style.opacity = '1';
                mainContent.style.visibility = 'visible';
            }
        } catch (error) {
            console.warn('Basic content visibility failed:', error);
        }
    }
    
    // Basic test section (Phase 1)
    function setupBasicTestSection() {
        try {
            const testSection = $w('#testSection') || $w('.test') || $w('[data-testid="test"]');
            if (!testSection) return;
            
            // Simple fade in
            testSection.style.opacity = '0';
            testSection.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                testSection.style.opacity = '1';
            }, 100);
            
            // Basic test elements
            const testElements = $w('#testTitle, #testSubtitle, #testDescription, .test-cta');
            testElements.forEach((element, index) => {
                if (!element) return;
                
                element.style.opacity = '0';
                element.style.transition = `opacity 0.5s ease ${0.3 + (index * 0.1)}s`;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 300 + (index * 100));
            });
        } catch (error) {
            console.warn('Basic test section failed:', error);
        }
    }
    
    // Basic navigation integration (Phase 1)
    function setupBasicNavigation() {
        try {
            // Use master page scroll function if available
            if (window.ultraFastSite && window.ultraFastSite.scrollTo) {
                const ctaButtons = $w('.cta-button, .btn-primary, [data-testid*="cta"]');
                ctaButtons.forEach(button => {
                    if (!button) return;
                    
                    button.onClick((e) => {
                        e.preventDefault();
                        const target = button.getAttribute('data-target') || button.getAttribute('href');
                        if (target && target.startsWith('#')) {
                            window.ultraFastSite.scrollTo(target);
                        }
                    });
                });
            }
        } catch (error) {
            console.warn('Basic navigation failed:', error);
        }
    }
    
    // Basic responsive (Phase 1)
    function setupBasicResponsive() {
        try {
            let resizeTimeout;
            window.addEventListener('resize', () => {
                if (resizeTimeout) clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const wasMobile = state.isMobile;
                    state.isMobile = window.innerWidth < 768;
                    
                    // Basic mobile adjustments
                    if (state.isMobile) {
                        adjustForMobile();
                    }
                }, 250);
            });
            
            // Initial mobile check
            if (state.isMobile) {
                adjustForMobile();
            }
        } catch (error) {
            console.warn('Basic responsive failed:', error);
        }
    }
    
    function adjustForMobile() {
        try {
            const testSection = $w('#testSection') || $w('.test');
            if (testSection) {
                testSection.style.minHeight = '100vh';
                testSection.style.padding = '1rem';
                testSection.style.paddingTop = '70px';
            }
            
            const buttons = $w('.btn, .button, .cta-button');
            buttons.forEach(btn => {
                if (!btn) return;
                btn.style.width = '100%';
                btn.style.maxWidth = '280px';
                btn.style.minHeight = '48px';
                btn.style.padding = '0.875rem 1.5rem';
                btn.style.fontSize = '1rem';
                btn.style.textAlign = 'center';
            });
        } catch (error) {
            console.warn('Mobile adjustment failed:', error);
        }
    }
    
    // Smooth scroll system (Phase 2)
    function setupSmoothScroll() {
        try {
            if (state.scrollRAF) return;
            window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        } catch (error) {
            console.warn('Smooth scroll setup failed:', error);
        }
    }
    
    function ultraSmoothScroll() {
        if (state.scrollRAF) return;
        
        state.scrollRAF = requestAnimationFrame(() => {
            try {
                const currentScrollY = window.scrollY;
                
                // Update state
                state.lastScrollY = currentScrollY;
                
                // Basic scroll effects
                const testSection = $w('#testSection') || $w('.test');
                if (testSection) {
                    const opacity = Math.max(0.3, 1 - (currentScrollY / 500));
                    testSection.style.opacity = opacity;
                }
                
            } catch (error) {
                console.warn('Smooth scroll failed:', error);
            }
            
            state.scrollRAF = null;
        });
    }
    
    // Basic animations (Phase 2)
    function setupBasicAnimations() {
        try {
            // Simple fade in for test content
            const testContent = $w('.test-content, .test-item, .card');
            testContent.forEach((item, index) => {
                if (!item) return;
                
                item.style.opacity = '0';
                item.style.transition = `opacity 0.5s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 200 + (index * 100));
            });
        } catch (error) {
            console.warn('Basic animations failed:', error);
        }
    }
    
    // Image optimization (Phase 2)
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
    
    // Enhanced animations (Phase 3)
    function setupEnhancedAnimations() {
        try {
            // Enhanced button interactions
            const buttons = $w('button, .btn, .cta-button');
            buttons.forEach(button => {
                if (!button) return;
                
                button.onMouseIn(() => {
                    button.scale = 1.02;
                    button.style.transition = 'transform 0.1s ease';
                });
                
                button.onMouseOut(() => {
                    button.scale = 1;
                });
                
                button.onClick(() => {
                    button.scale = 0.98;
                    setTimeout(() => {
                        button.scale = 1;
                    }, 100);
                });
            });
            
            // Enhanced test section interactions
            const testSection = $w('#testSection') || $w('.test');
            if (testSection) {
                let isHovering = false;
                
                testSection.onMouseEnter(() => {
                    isHovering = true;
                });
                
                testSection.onMouseLeave(() => {
                    isHovering = false;
                    testSection.style.transform = '';
                });
                
                testSection.onMouseMove((event) => {
                    if (!isHovering) return;
                    
                    try {
                        const rect = testSection.getBoundingClientRect();
                        const x = (event.clientX - rect.left) / rect.width;
                        const y = (event.clientY - rect.top) / rect.height;
                        
                        const rotateX = (y - 0.5) * 2;
                        const rotateY = (x - 0.5) * 2;
                        
                        testSection.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
                        testSection.style.transition = 'transform 0.1s ease';
                    } catch (error) {
                        console.warn('Test section interaction failed:', error);
                    }
                });
            }
        } catch (error) {
            console.warn('Enhanced animations failed:', error);
        }
    }
    
    // Performance monitoring (Phase 3)
    function startPerformanceMonitoring() {
        try {
            let scrollCount = 0;
            let lastScrollCheck = Date.now();
            
            const scrollObserver = () => {
                scrollCount++;
                const now = Date.now();
                
                if (now - lastScrollCheck > 1000) {
                    const scrollsPerSecond = scrollCount;
                    if (scrollsPerSecond > 30) {
                        console.warn('High scroll frequency detected on test page 1, optimizing...');
                    }
                    scrollCount = 0;
                    lastScrollCheck = now;
                }
            };
            
            window.addEventListener('scroll', scrollObserver, { passive: true });
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
        }
    }
    
    // Mobile optimizations (Phase 3)
    function initializeMobileOptimizations() {
        console.log('📱 Initializing Mobile Test Page 1 Optimizations...');
        
        try {
            const isMobile = window.innerWidth < 768;
            const isTouchDevice = 'ontouchstart' in window;
            
            state.isMobile = isMobile;
            state.isTouchDevice = isTouchDevice;
            
            if (isTouchDevice) {
                initializeTouchOptimizations();
            }
            
            injectMobileCSS();
            
            console.log('✅ Mobile test page 1 optimizations initialized!');
        } catch (error) {
            console.warn('Mobile optimizations failed:', error);
        }
    }
    
    function initializeTouchOptimizations() {
        try {
            // Enhanced touch feedback for buttons
            const buttons = $w('.btn, .button, .cta-button, [data-testid*="button"]');
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
            
            // Enhanced touch feedback for test items
            const testItems = $w('.test-item, .test-content, .card');
            testItems.forEach(item => {
                if (!item) return;
                
                item.onTouchStart(() => {
                    item.style.transform = 'scale(0.98)';
                    item.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
                });
                
                item.onTouchEnd(() => {
                    setTimeout(() => {
                        item.style.transform = '';
                        item.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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
        } catch (error) {
            console.warn('Touch optimizations failed:', error);
        }
    }
    
    function injectMobileCSS() {
        const mobileCSS = `
            @media (max-width: 768px) {
                .test, .testSection {
                    min-height: 100vh !important;
                    padding: 1rem !important;
                    padding-top: 70px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                
                .test-content, .testContent {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 1rem !important;
                }
                
                .test-title, .testTitle {
                    font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
                    line-height: 1.2 !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .test-subtitle, .testSubtitle {
                    font-size: clamp(0.875rem, 4vw, 1.125rem) !important;
                    margin-bottom: 1.5rem !important;
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
                    touch-action: manipulation !important;
                }
                
                .test-content, .test-item {
                    padding: 2rem 1rem !important;
                }
                
                .test-content h2, .testTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 2rem !important;
                }
                
                .test-grid, .testGrid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                    padding: 0 0.5rem !important;
                }
                
                .test-item, .card {
                    padding: 1.25rem !important;
                    margin: 0 !important;
                }
                
                .test-item h3, .card h3 {
                    font-size: 1.125rem !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .test-item p, .card p {
                    font-size: 0.875rem !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media (max-width: 375px) {
                .test, .testSection {
                    padding: 0.75rem !important;
                    padding-top: 60px !important;
                }
                
                .test-title, .testTitle {
                    font-size: clamp(1.5rem, 7vw, 2rem) !important;
                }
                
                .test-subtitle, .testSubtitle {
                    font-size: clamp(0.75rem, 4.5vw, 1rem) !important;
                }
                
                .btn, .button, .cta-button {
                    max-width: 260px !important;
                    padding: 0.75rem 1.25rem !important;
                    font-size: 0.875rem !important;
                }
                
                .test-content, .test-item {
                    padding: 1.5rem 0.75rem !important;
                }
                
                .test-grid, .testGrid {
                    gap: 1rem !important;
                    padding: 0 0.25rem !important;
                }
                
                .test-item, .card {
                    padding: 1rem !important;
                }
            }
            
            @media (max-width: 768px) and (orientation: landscape) {
                .test, .testSection {
                    min-height: 85vh !important;
                    padding-top: 60px !important;
                }
                
                .test-title, .testTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 0.5rem !important;
                }
                
                .test-subtitle, .testSubtitle {
                    font-size: clamp(0.75rem, 3.5vw, 1rem) !important;
                    margin-bottom: 1rem !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: row !important;
                    justify-content: center !important;
                    gap: 1rem !important;
                }
                
                .btn, .button, .cta-button {
                    width: auto !important;
                    max-width: 200px !important;
                    min-width: 160px !important;
                }
            }
            
            @media (hover: none) and (pointer: coarse) {
                .btn:hover, .button:hover, .cta-button:hover {
                    transform: none !important;
                    box-shadow: none !important;
                }
                
                .test-item:hover, .card:hover {
                    transform: none !important;
                }
                
                .btn, .button, .cta-button {
                    min-height: 44px !important;
                    min-width: 44px !important;
                }
            }
            
            body {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            
            .test-content, .testContent,
            .test-grid, .testGrid {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = mobileCSS;
        document.head.appendChild(style);
    }
    
    // Error handling & crash prevention
    function setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.warn('Test page 1 error caught and handled:', e.error);
            e.preventDefault();
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.warn('Test page 1 unhandled promise rejection caught:', e.reason);
            e.preventDefault();
        });
    }
    
    // Start waiting for master page
    waitForMasterPage();
}); 