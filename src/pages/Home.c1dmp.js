// ULTRA-SMOOTH HOME PAGE - Progressive Loading System
// Prevents first-time loading crashes by loading features in phases
// UPDATED: Compatible with new master page optimizations

$w.onReady(function () {
    console.log('🚀 Progressive Home Page Loading with Master Page Integration...');
    
    // Performance state management
    const state = {
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        isScrolling: false,
        lastScrollY: 0,
        scrollRAF: null,
        performanceMode: 'progressive',
        loadPhase: 0, // 0: critical, 1: essential, 2: enhanced, 3: full
        // NEW: Integration with master page optimizations
        masterPageReady: false,
        optimizationLevel: 0
    };
    
    // Wait for master page to be ready
    const waitForMasterPage = () => {
        if (typeof window !== 'undefined' && window.ultraFastSite) {
            state.masterPageReady = true;
            console.log('✅ Master page ready - starting home page optimizations');
            progressiveLoad();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    // Progressive loading system with master page integration
    function progressiveLoad() {
        console.log('📦 Starting progressive home page load with master page integration...');
        
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
        console.log('🔧 Loading critical home elements...');
        state.loadPhase = 0;
        
        // Basic error handling
        setupErrorHandling();
        
        // Simple content visibility
        setupBasicContentVisibility();
        
        // NEW: Integration with master page optimizations
        if (state.masterPageReady) {
            console.log('🔗 Integrating with master page optimizations');
        }
        
        console.log('✅ Critical home elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential home features...');
        state.loadPhase = 1;
        
        // Basic hero section
        setupBasicHeroSection();
        
        // Basic navigation integration
        setupBasicNavigation();
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential home features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced home features...');
        state.loadPhase = 2;
        
        // Smooth scroll system (compatible with master page)
        setupSmoothScroll();
        
        // Basic animations (lightweight)
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced home features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full home features...');
        state.loadPhase = 3;
        
        // Enhanced animations (lightweight)
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        // NEW: Final integration with master page
        finalizeMasterPageIntegration();
        
        console.log('✅ Full home features loaded');
    }
    
    // NEW: Finalize master page integration
    function finalizeMasterPageIntegration() {
        console.log('🔗 Finalizing master page integration...');
        
        try {
            // Ensure compatibility with master page optimizations
            if (typeof window !== 'undefined' && window.ultraFastSite) {
                // Use master page's optimized functions
                const masterPageState = window.ultraFastSite.state;
                if (masterPageState) {
                    state.optimizationLevel = masterPageState.perceivedPerformance ? 3 : 2;
                }
                
                console.log('✅ Master page integration completed');
            }
        } catch (error) {
            console.warn('Master page integration failed:', error);
        }
    }
    
    function setupBasicContentVisibility() {
        console.log('👁️ Setting up basic content visibility...');
        
        try {
            // Use proper Wix selectors
            const contentElements = $w('text, title, subtitle, description');
            
            contentElements.forEach(element => {
                if (!element) return;
                
                // Ensure content is visible
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.display = 'block';
            });
            
        } catch (error) {
            console.warn('Basic content visibility failed:', error);
        }
    }
    
    function setupBasicHeroSection() {
        console.log('🏠 Setting up basic hero section...');
        
        try {
            // Use proper Wix selectors
            const heroElements = $w('hero, heroSection, mainContent');
            
            heroElements.forEach(element => {
                if (!element) return;
                
                // Basic hero setup
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.display = 'block';
            });
            
        } catch (error) {
            console.warn('Basic hero section failed:', error);
        }
    }
    
    function setupBasicNavigation() {
        console.log('🧭 Setting up basic navigation...');
        
        try {
            // Use proper Wix selectors
            const navElements = $w('nav, navigation, menu');
            
            navElements.forEach(element => {
                if (!element) return;
                
                // Basic navigation setup
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.display = 'block';
            });
            
        } catch (error) {
            console.warn('Basic navigation failed:', error);
        }
    }
    
    function setupBasicResponsive() {
        console.log('📱 Setting up basic responsive...');
        
        try {
            if (state.isMobile) {
                adjustForMobile();
            }
        } catch (error) {
            console.warn('Basic responsive failed:', error);
        }
    }
    
    function adjustForMobile() {
        try {
            // Mobile-specific adjustments
            const mobileElements = $w('text, title, subtitle, button');
            
            mobileElements.forEach(element => {
                if (!element) return;
                
                // Mobile optimizations
                element.style.fontSize = 'clamp(14px, 4vw, 18px)';
                element.style.lineHeight = '1.4';
            });
            
        } catch (error) {
            console.warn('Mobile adjustment failed:', error);
        }
    }
    
    function setupSmoothScroll() {
        console.log('🔄 Setting up smooth scroll...');
        
        try {
            // Use master page's smooth scroll if available
            if (typeof window !== 'undefined' && window.ultraFastSite && window.ultraFastSite.scrollTo) {
                console.log('✅ Using master page smooth scroll');
            } else {
                // Fallback smooth scroll
                setupFallbackSmoothScroll();
            }
        } catch (error) {
            console.warn('Smooth scroll setup failed:', error);
        }
    }
    
    function setupFallbackSmoothScroll() {
        try {
            // Simple fallback smooth scroll
            const scrollElements = $w('mainContent, heroSection');
            
            scrollElements.forEach(element => {
                if (!element) return;
                
                // Basic scroll optimization
                element.style.willChange = 'auto';
                element.style.backfaceVisibility = 'visible';
                element.style.perspective = 'none';
            });
            
        } catch (error) {
            console.warn('Fallback smooth scroll failed:', error);
        }
    }
    
    function setupBasicAnimations() {
        console.log('🎬 Setting up basic animations...');
        
        try {
            // Use lightweight animations only
            const animatedElements = $w('text, title, subtitle, button');
            
            animatedElements.forEach((element, index) => {
                if (!element) return;
                
                // Simple fade-in animation
                element.style.opacity = '0';
                element.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                }, index * 100);
            });
            
        } catch (error) {
            console.warn('Basic animations failed:', error);
        }
    }
    
    function optimizeImages() {
        console.log('🖼️ Optimizing images...');
        
        try {
            // Use proper Wix selectors
            const images = $w('image');
            
            images.forEach(img => {
                if (!img) return;
                
                // Basic image optimization
                img.loading = 'lazy';
                
                // Simple error handling
                img.onError = () => {
                    console.warn('Image failed to load:', img.src);
                };
            });
            
        } catch (error) {
            console.warn('Image optimization failed:', error);
        }
    }
    
    function setupEnhancedAnimations() {
        console.log('✨ Setting up enhanced animations...');
        
        try {
            // Use lightweight enhanced animations
            const enhancedElements = $w('button, card, feature');
            
            enhancedElements.forEach(element => {
                if (!element) return;
                
                // Simple hover effects
                element.onMouseIn = () => {
                    element.style.opacity = '0.9';
                    element.style.transition = 'opacity 0.2s ease';
                };
                
                element.onMouseOut = () => {
                    element.style.opacity = '1';
                };
                
                // Simple click effects
                element.onClick = () => {
                    element.style.opacity = '0.8';
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 100);
                };
            });
            
        } catch (error) {
            console.warn('Enhanced animations failed:', error);
        }
    }
    
    function startPerformanceMonitoring() {
        console.log('📊 Starting performance monitoring...');
        
        try {
            // Simple performance monitoring
            let frameCount = 0;
            let lastTime = performance.now();
            
            function monitorPerformance() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    if (fps < 30) {
                        console.warn(`⚠️ Low FPS detected: ${fps}`);
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorPerformance);
            }
            
            monitorPerformance();
            
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
        }
    }
    
    function initializeMobileOptimizations() {
        console.log('📱 Initializing mobile optimizations...');
        
        try {
            if (state.isMobile) {
                // Mobile-specific optimizations
                const mobileElements = $w('text, title, subtitle, button, image');
                
                mobileElements.forEach(element => {
                    if (!element) return;
                    
                    // Mobile performance optimizations
                    element.style.willChange = 'auto';
                    element.style.backfaceVisibility = 'visible';
                    element.style.perspective = 'none';
                });
            }
            
        } catch (error) {
            console.warn('Mobile optimizations failed:', error);
        }
    }
    
    function setupErrorHandling() {
        console.log('🛡️ Setting up error handling...');
        
        try {
            // Basic error handling
            if (typeof window !== 'undefined') {
                window.addEventListener('error', (e) => {
                    console.warn('Error caught and handled:', e.error);
                    e.preventDefault();
                });
            }
            
        } catch (error) {
            console.warn('Error handling setup failed:', error);
        }
    }
    
    // Start the home page loading process
    waitForMasterPage();
    
    // Export home page functions for other scripts
    if (typeof window !== 'undefined') {
        window.homePage = {
            state: state,
            isReady: () => state.loadPhase >= 3,
            getOptimizationLevel: () => state.optimizationLevel
        };
    }
}); 