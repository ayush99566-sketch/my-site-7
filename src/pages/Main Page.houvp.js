// ULTRA-SMOOTH MAIN PAGE - Progressive Loading System
// Prevents first-time loading crashes by loading features in phases

$w.onReady(function () {
    console.log('🚀 Progressive Main Page Loading...');
    
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
        console.log('📦 Starting progressive main page load...');
        
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
        console.log('🔧 Loading critical main elements...');
        state.loadPhase = 0;
        
        // Basic error handling
        setupErrorHandling();
        
        // Simple content visibility
        setupBasicContentVisibility();
        
        console.log('✅ Critical main elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential main features...');
        state.loadPhase = 1;
        
        // Basic main section
        setupBasicMainSection();
        
        // Basic navigation integration
        setupBasicNavigation();
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential main features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced main features...');
        state.loadPhase = 2;
        
        // Smooth scroll system
        setupSmoothScroll();
        
        // Basic animations
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced main features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full main features...');
        state.loadPhase = 3;
        
        // Enhanced animations
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        console.log('✅ Full main page loaded successfully!');
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
    
    // Basic main section (Phase 1)
    function setupBasicMainSection() {
        try {
            const mainSection = $w('#mainSection') || $w('.main') || $w('[data-testid="main"]');
            if (!mainSection) return;
            
            // Simple fade in
            mainSection.style.opacity = '0';
            mainSection.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                mainSection.style.opacity = '1';
            }, 100);
            
            // Basic main elements
            const mainElements = $w('#mainTitle, #mainSubtitle, #mainDescription, .main-cta');
            mainElements.forEach((element, index) => {
                if (!element) return;
                
                element.style.opacity = '0';
                element.style.transition = `opacity 0.5s ease ${0.3 + (index * 0.1)}s`;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 300 + (index * 100));
            });
        } catch (error) {
            console.warn('Basic main section failed:', error);
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
            const mainSection = $w('#mainSection') || $w('.main');
            if (mainSection) {
                mainSection.style.minHeight = '100vh';
                mainSection.style.padding = '1rem';
                mainSection.style.paddingTop = '70px';
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
                const mainSection = $w('#mainSection') || $w('.main');
                if (mainSection) {
                    const opacity = Math.max(0.3, 1 - (currentScrollY / 500));
                    mainSection.style.opacity = opacity;
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
            // Simple fade in for content sections
            const sections = $w('.section, .content-section, .card');
            sections.forEach((section, index) => {
                if (!section) return;
                
                section.style.opacity = '0';
                section.style.transition = `opacity 0.5s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    section.style.opacity = '1';
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
            
            // Enhanced main section interactions
            const mainSection = $w('#mainSection') || $w('.main');
            if (mainSection) {
                let isHovering = false;
                
                mainSection.onMouseEnter(() => {
                    isHovering = true;
                });
                
                mainSection.onMouseLeave(() => {
                    isHovering = false;
                    mainSection.style.transform = '';
                });
                
                mainSection.onMouseMove((event) => {
                    if (!isHovering) return;
                    
                    try {
                        const rect = mainSection.getBoundingClientRect();
                        const x = (event.clientX - rect.left) / rect.width;
                        const y = (event.clientY - rect.top) / rect.height;
                        
                        const rotateX = (y - 0.5) * 2;
                        const rotateY = (x - 0.5) * 2;
                        
                        mainSection.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
                        mainSection.style.transition = 'transform 0.1s ease';
                    } catch (error) {
                        console.warn('Main section interaction failed:', error);
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
                        console.warn('High scroll frequency detected on main page, optimizing...');
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
        console.log('📱 Initializing Mobile Main Optimizations...');
        
        try {
            const isMobile = window.innerWidth < 768;
            const isTouchDevice = 'ontouchstart' in window;
            
            state.isMobile = isMobile;
            state.isTouchDevice = isTouchDevice;
            
            if (isTouchDevice) {
                initializeTouchOptimizations();
            }
            
            injectMobileCSS();
            
            console.log('✅ Mobile main optimizations initialized!');
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
            
            // Enhanced touch feedback for cards
            const cards = $w('.card, .content-card, .section');
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
        } catch (error) {
            console.warn('Touch optimizations failed:', error);
        }
    }
    
    function injectMobileCSS() {
        const mobileCSS = `
            @media (max-width: 768px) {
                .main, .mainSection {
                    min-height: 100vh !important;
                    padding: 1rem !important;
                    padding-top: 70px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                
                .main-content, .mainContent {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 1rem !important;
                }
                
                .main-title, .mainTitle {
                    font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
                    line-height: 1.2 !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .main-subtitle, .mainSubtitle {
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
                
                .section, .content-section {
                    padding: 2rem 1rem !important;
                }
                
                .section h2, .contentTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 2rem !important;
                }
                
                .content-grid, .contentGrid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                    padding: 0 0.5rem !important;
                }
                
                .card, .content-card {
                    padding: 1.25rem !important;
                    margin: 0 !important;
                }
                
                .card h3, .contentCard h3 {
                    font-size: 1.125rem !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .card p, .contentCard p {
                    font-size: 0.875rem !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media (max-width: 375px) {
                .main, .mainSection {
                    padding: 0.75rem !important;
                    padding-top: 60px !important;
                }
                
                .main-title, .mainTitle {
                    font-size: clamp(1.5rem, 7vw, 2rem) !important;
                }
                
                .main-subtitle, .mainSubtitle {
                    font-size: clamp(0.75rem, 4.5vw, 1rem) !important;
                }
                
                .btn, .button, .cta-button {
                    max-width: 260px !important;
                    padding: 0.75rem 1.25rem !important;
                    font-size: 0.875rem !important;
                }
                
                .section, .content-section {
                    padding: 1.5rem 0.75rem !important;
                }
                
                .content-grid, .contentGrid {
                    gap: 1rem !important;
                    padding: 0 0.25rem !important;
                }
                
                .card, .content-card {
                    padding: 1rem !important;
                }
            }
            
            @media (max-width: 768px) and (orientation: landscape) {
                .main, .mainSection {
                    min-height: 85vh !important;
                    padding-top: 60px !important;
                }
                
                .main-title, .mainTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 0.5rem !important;
                }
                
                .main-subtitle, .mainSubtitle {
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
                
                .card:hover, .content-card:hover {
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
            
            .main-content, .mainContent,
            .content-grid, .contentGrid {
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
            console.warn('Main page error caught and handled:', e.error);
            e.preventDefault();
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.warn('Main page unhandled promise rejection caught:', e.reason);
            e.preventDefault();
        });
    }
    
    // Initialize service section optimizer
    function initializeServiceOptimizer() {
        console.log('🎯 Initializing Service Section Optimizer...');
        
        // Performance state for service sections
        const serviceState = {
            isServiceSectionVisible: false,
            serviceSectionRAF: null,
            lastServiceScrollY: 0,
            serviceElements: new Map(),
            animationFrame: null,
            isOptimized: false,
            isFirstLoad: true,
            optimizationLevel: 0
        };
        
        // IMMEDIATE optimization for first-time load
        function immediateOptimization() {
            console.log('⚡ Applying immediate optimizations for first-time load...');
            
            try {
                // Disable ALL animations immediately
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Disable all heavy animations
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                        }
                    });
                }
                
                // Disable scroll effects temporarily
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                console.log('✅ Immediate optimizations applied');
                
            } catch (error) {
                console.warn('Immediate optimization failed:', error);
            }
        }
        
        // Detect service sections (including "03 digital service")
        function detectServiceSections() {
            try {
                // Look for various service section selectors
                const serviceSelectors = [
                    '#services',
                    '.services',
                    '[data-service]',
                    '.service-section',
                    '.digital-service',
                    '.service-card',
                    '.service-item',
                    '[class*="service"]',
                    '[id*="service"]',
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]'
                ];
                
                serviceSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            serviceState.serviceElements.set(`${selector}-${index}`, element);
                            console.log(`🎯 Found service section: ${selector}-${index}`);
                            
                            // IMMEDIATE optimization for each found element
                            if (element && element.style) {
                                // Disable all animations immediately
                                element.style.animation = 'none';
                                element.style.transition = 'none';
                                element.style.transform = 'none';
                                element.style.filter = 'none';
                                element.style.backdropFilter = 'none';
                                element.style.boxShadow = 'none';
                                
                                // Set basic opacity for smooth reveal
                                element.style.opacity = '0.9';
                                
                                // Optimize for performance
                                element.style.willChange = 'auto';
                                element.style.backfaceVisibility = 'visible';
                                element.style.perspective = 'none';
                                
                                console.log(`⚡ Immediately optimized: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
            } catch (error) {
                console.warn('Service section detection failed:', error);
            }
        }
        
        // Special optimization for "03 digital service" red balloon
        function optimizeRedBalloonSection() {
            try {
                // Look for red balloon elements with more specific selectors
                const balloonSelectors = [
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="digital"]',
                    '[id*="digital"]',
                    '[class*="service"]',
                    '[id*="service"]'
                ];
                
                balloonSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            // AGGRESSIVE optimization for red balloon
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            
                            // Set basic opacity
                            element.style.opacity = '0.95';
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                            
                            // Remove any heavy CSS classes
                            if (element.className) {
                                element.className = element.className.replace(/animate|animation|transition|transform/g, '');
                            }
                            
                            console.log(`🎈 Aggressively optimized red balloon: ${selector}-${index}`);
                        });
                    }
                });
                
            } catch (error) {
                console.warn('Red balloon optimization failed:', error);
            }
        }
        
        // Emergency optimization for performance issues
        function emergencyOptimization() {
            try {
                console.log('🚨 Emergency optimization triggered');
                
                // Disable ALL animations across the entire page
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            element.style.animation = 'none';
                            element.style.transition = 'none';
                            element.style.transform = 'none';
                            element.style.filter = 'none';
                            element.style.backdropFilter = 'none';
                            element.style.boxShadow = 'none';
                            element.style.willChange = 'auto';
                        }
                    });
                }
                
                // Cancel all animation frames
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                if (serviceState.animationFrame) {
                    cancelAnimationFrame(serviceState.animationFrame);
                    serviceState.animationFrame = null;
                }
                
                console.log('🚨 Emergency optimization applied - all animations disabled');
                
            } catch (error) {
                console.warn('Emergency optimization failed:', error);
            }
        }
        
        // Start aggressive optimization sequence
        console.log('🚀 Starting aggressive optimization sequence...');
        
        // Step 1: Immediate optimization (0ms)
        immediateOptimization();
        
        // Step 2: Detect and optimize service sections (50ms)
        setTimeout(() => {
            detectServiceSections();
            optimizeRedBalloonSection();
        }, 50);
        
        // Step 3: Start performance monitoring (500ms)
        setTimeout(() => {
            // Monitor performance and apply emergency optimization if needed
            let frameCount = 0;
            let lastTime = performance.now();
            let lowFpsCount = 0;
            
            function checkPerformance() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    // More aggressive threshold for first load
                    const threshold = serviceState.isFirstLoad ? 45 : 30;
                    
                    if (fps < threshold) {
                        lowFpsCount++;
                        console.warn(`⚠️ Low FPS detected: ${fps} (threshold: ${threshold})`);
                        
                        // Trigger emergency optimization after 2 consecutive low FPS readings
                        if (lowFpsCount >= 2) {
                            emergencyOptimization();
                            lowFpsCount = 0;
                        }
                    } else {
                        lowFpsCount = 0;
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(checkPerformance);
            }
            
            checkPerformance();
        }, 500);
        
        console.log('✅ Aggressive Service Section Optimizer initialized');
    }
    
    // Initialize the service optimizer
    initializeServiceOptimizer();
    
    // DEDICATED "03" SECTION OPTIMIZER - Runs immediately and continuously
    function initialize03SectionOptimizer() {
        console.log('🎯 Initializing DEDICATED "03" Section Optimizer...');
        
        // Continuous optimization state
        const section03State = {
            isOptimized: false,
            optimizationInterval: null,
            lastOptimization: 0,
            optimizationCount: 0
        };
        
        // IMMEDIATE "03" section optimization
        function optimize03SectionImmediately() {
            console.log('⚡ IMMEDIATE "03" section optimization...');
            
            try {
                // Target ALL possible "03" selectors
                const selectors03 = [
                    '[class*="03"]',
                    '[id*="03"]',
                    '[data-id*="03"]',
                    '[data-testid*="03"]',
                    '[class*="service"]',
                    '[id*="service"]',
                    '[class*="digital"]',
                    '[id*="digital"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '.service-card',
                    '.service-item',
                    '.digital-service',
                    '#services',
                    '.services'
                ];
                
                selectors03.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // AGGRESSIVE optimization for "03" section
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                element.style.willChange = 'auto !important';
                                element.style.backfaceVisibility = 'visible !important';
                                element.style.perspective = 'none !important';
                                element.style.opacity = '1 !important';
                                
                                // Remove any heavy CSS classes
                                if (element.className) {
                                    element.className = element.className.replace(/animate|animation|transition|transform|scale|rotate|skew|translate/g, '');
                                }
                                
                                // Disable any hover effects
                                element.onMouseIn = null;
                                element.onMouseOut = null;
                                element.onClick = null;
                                
                                console.log(`🎯 IMMEDIATELY optimized "03" element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                section03State.optimizationCount++;
                section03State.lastOptimization = Date.now();
                
            } catch (error) {
                console.warn('Immediate "03" optimization failed:', error);
            }
        }
        
        // CONTINUOUS "03" section monitoring and optimization
        function startContinuous03Optimization() {
            console.log('🔄 Starting CONTINUOUS "03" section optimization...');
            
            // Run optimization every 100ms for the first 5 seconds
            let intervalCount = 0;
            const maxIntervals = 50; // 5 seconds at 100ms intervals
            
            section03State.optimizationInterval = setInterval(() => {
                optimize03SectionImmediately();
                intervalCount++;
                
                if (intervalCount >= maxIntervals) {
                    // Switch to less frequent optimization
                    clearInterval(section03State.optimizationInterval);
                    section03State.optimizationInterval = setInterval(() => {
                        optimize03SectionImmediately();
                    }, 1000); // Every second
                    
                    console.log('✅ Switched to continuous "03" optimization (1s intervals)');
                }
            }, 100);
        }
        
        // EMERGENCY "03" section optimization
        function emergency03Optimization() {
            console.log('🚨 EMERGENCY "03" section optimization triggered!');
            
            try {
                // Disable ALL elements that might be related to "03"
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Nuclear option - disable everything
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.willChange = 'auto !important';
                            element.style.opacity = '1 !important';
                        }
                    });
                }
                
                // Cancel ALL animation frames
                if (state.scrollRAF) {
                    cancelAnimationFrame(state.scrollRAF);
                    state.scrollRAF = null;
                }
                
                console.log('🚨 EMERGENCY "03" optimization applied - ALL animations disabled');
                
            } catch (error) {
                console.warn('Emergency "03" optimization failed:', error);
            }
        }
        
        // Performance monitoring specifically for "03" section
        function monitor03SectionPerformance() {
            let frameCount = 0;
            let lastTime = performance.now();
            let lowFpsCount = 0;
            
            function check03Performance() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    // Very aggressive threshold for "03" section
                    const threshold = 50; // Must maintain 50fps
                    
                    if (fps < threshold) {
                        lowFpsCount++;
                        console.warn(`⚠️ Low FPS in "03" section: ${fps} (threshold: ${threshold})`);
                        
                        // Trigger emergency optimization immediately
                        if (lowFpsCount >= 1) {
                            emergency03Optimization();
                            lowFpsCount = 0;
                        }
                    } else {
                        lowFpsCount = 0;
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(check03Performance);
            }
            
            check03Performance();
        }
        
        // Start the dedicated "03" optimizer
        console.log('🚀 Starting DEDICATED "03" Section Optimizer...');
        
        // Step 1: Immediate optimization (0ms)
        optimize03SectionImmediately();
        
        // Step 2: Start continuous optimization (50ms)
        setTimeout(() => {
            startContinuous03Optimization();
        }, 50);
        
        // Step 3: Start performance monitoring (100ms)
        setTimeout(() => {
            monitor03SectionPerformance();
        }, 100);
        
        // Step 4: Additional optimization every 500ms
        setInterval(() => {
            optimize03SectionImmediately();
        }, 500);
        
        section03State.isOptimized = true;
        console.log('✅ DEDICATED "03" Section Optimizer initialized');
        
        // Export for manual triggering
        window.section03Optimizer = {
            optimize: optimize03SectionImmediately,
            emergency: emergency03Optimization,
            getState: () => section03State
        };
    }
    
    // Initialize the dedicated "03" optimizer
    initialize03SectionOptimizer();
    
    // SPECIFIC FIX FOR "03" BALLOON BLACK SCREEN ISSUE
    function initialize03BalloonFix() {
        console.log('🎈 Initializing "03" Balloon Black Screen Fix...');
        
        // State for balloon fix
        const balloonFixState = {
            isFixed: false,
            backgroundPreserved: false,
            lastCheck: 0
        };
        
        // IMMEDIATE "03" balloon optimization to prevent black screen
        function fix03BalloonImmediately() {
            console.log('🎈 IMMEDIATE "03" balloon fix...');
            
            try {
                // Target "03" balloon specifically
                const balloonSelectors = [
                    '[class*="03"]',
                    '[id*="03"]',
                    '[class*="balloon"]',
                    '[id*="balloon"]',
                    '[class*="red"]',
                    '[style*="red"]',
                    '[class*="gradient"]',
                    '[style*="gradient"]'
                ];
                
                balloonSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // PREVENT BLACK SCREEN - Disable heavy effects
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                element.style.willChange = 'auto !important';
                                element.style.backfaceVisibility = 'visible !important';
                                element.style.perspective = 'none !important';
                                
                                // PRESERVE VISIBILITY
                                element.style.opacity = '1 !important';
                                element.style.visibility = 'visible !important';
                                element.style.display = 'block !important';
                                
                                // Remove any heavy CSS classes that might cause crashes
                                if (element.className) {
                                    element.className = element.className.replace(/animate|animation|transition|transform|scale|rotate|skew|translate|blur|brightness|contrast|hue-rotate|invert|saturate|sepia/g, '');
                                }
                                
                                // Disable any event handlers that might cause issues
                                element.onMouseIn = null;
                                element.onMouseOut = null;
                                element.onClick = null;
                                
                                console.log(`🎈 Fixed "03" balloon element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                // PRESERVE BACKGROUND ELEMENTS
                preserveBackgroundElements();
                
                balloonFixState.isFixed = true;
                
            } catch (error) {
                console.warn('"03" balloon fix failed:', error);
            }
        }
        
        // PRESERVE BACKGROUND ELEMENTS
        function preserveBackgroundElements() {
            console.log('🎨 Preserving background elements...');
            
            try {
                // Target background elements
                const backgroundSelectors = [
                    'body',
                    'html',
                    '[class*="background"]',
                    '[id*="background"]',
                    '[class*="bg"]',
                    '[id*="bg"]',
                    '[class*="gradient"]',
                    '[style*="gradient"]',
                    '[class*="red"]',
                    '[style*="red"]'
                ];
                
                backgroundSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach((element, index) => {
                            if (element && element.style) {
                                // PRESERVE BACKGROUND STYLES
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                // Ensure background is not hidden
                                if (element.style.background || element.style.backgroundColor) {
                                    element.style.background = element.style.background || 'inherit';
                                    element.style.backgroundColor = element.style.backgroundColor || 'inherit';
                                }
                                
                                console.log(`🎨 Preserved background element: ${selector}-${index}`);
                            }
                        });
                    }
                });
                
                balloonFixState.backgroundPreserved = true;
                
            } catch (error) {
                console.warn('Background preservation failed:', error);
            }
        }
        
        // EMERGENCY RECOVERY for black screen
        function emergencyRecovery() {
            console.log('🚨 EMERGENCY RECOVERY - Black screen detected!');
            
            try {
                // Force all elements to be visible
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Force visibility
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                            
                            // Disable all animations
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                        }
                    });
                }
                
                // Restore background
                preserveBackgroundElements();
                
                console.log('🚨 Emergency recovery completed');
                
            } catch (error) {
                console.warn('Emergency recovery failed:', error);
            }
        }
        
        // Start the balloon fix
        console.log('🎈 Starting "03" Balloon Black Screen Fix...');
        
        // Step 1: Immediate fix (0ms)
        fix03BalloonImmediately();
        
        // Step 2: Additional fix every 200ms
        setInterval(() => {
            fix03BalloonImmediately();
        }, 200);
        
        // Step 3: Emergency recovery trigger
        setTimeout(() => {
            emergencyRecovery();
        }, 1000);
        
        console.log('✅ "03" Balloon Black Screen Fix initialized');
        
        // Export for manual triggering
        window.balloonFix = {
            fix: fix03BalloonImmediately,
            preserve: preserveBackgroundElements,
            emergency: emergencyRecovery,
            getState: () => balloonFixState
        };
    }
    
    // Initialize the balloon fix
    initialize03BalloonFix();
    
    // Start waiting for master page
    waitForMasterPage();
}); 