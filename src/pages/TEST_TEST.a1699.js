// ULTRA-SMOOTH TEST PAGE - Progressive Loading System
// Prevents first-time loading crashes by loading features in phases
// UPDATED: Latest optimizations with Gradient & Video Optimization System
// FIXED: 03 Balloon to Trybs Project Modal Transition Lag

$w.onReady(function () {
    console.log('🚀 Progressive Test Page Loading with Master Page Integration...');
    
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
            console.log('✅ Master page ready - starting test page optimizations');
            progressiveLoad();
        } else {
            setTimeout(waitForMasterPage, 50);
        }
    };
    
    // Progressive loading system with master page integration
    function progressiveLoad() {
        console.log('📦 Starting progressive test page load with master page integration...');
        
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
        console.log('🔧 Loading critical test elements...');
        state.loadPhase = 0;
        
        // Basic error handling
        setupErrorHandling();
        
        // Simple content visibility
        setupBasicContentVisibility();
        
        // NEW: Integration with master page optimizations
        if (state.masterPageReady) {
            console.log('🔗 Integrating with master page optimizations');
        }
        
        console.log('✅ Critical test elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential test features...');
        state.loadPhase = 1;
        
        // Basic test section
        setupBasicTestSection();
        
        // Basic navigation integration
        setupBasicNavigation();
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential test features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced test features...');
        state.loadPhase = 2;
        
        // Smooth scroll system (compatible with master page)
        setupSmoothScroll();
        
        // Basic animations (lightweight)
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced test features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full test features...');
        state.loadPhase = 3;
        
        // Enhanced animations (lightweight)
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        // NEW: Final integration with master page
        finalizeMasterPageIntegration();
        
        console.log('✅ Full test features loaded');
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
    
    function setupBasicTestSection() {
        console.log('🧪 Setting up basic test section...');
        
        try {
            // Use proper Wix selectors
            const testElements = $w('mainContent, testSection, content');
            
            testElements.forEach(element => {
                if (!element) return;
                
                // Basic test section setup
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.display = 'block';
            });
            
        } catch (error) {
            console.warn('Basic test section failed:', error);
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
            const scrollElements = $w('mainContent, testSection');
            
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
    
    // NEW: SMART PRE-INITIALIZATION SYSTEM
    function initializeSmartPreInitialization() {
        console.log('🚀 Initializing Smart Pre-Initialization System for Test Page...');
        
        // Phase 1: Immediate optimization (simulate post-refresh state)
        applyImmediatePostRefreshOptimization();
        
        // Phase 2: Progressive feature enabling
        setTimeout(() => {
            enableProgressiveFeatures();
        }, 100);
        
        // Phase 3: Full optimization
        setTimeout(() => {
            enableFullOptimizations();
        }, 500);
        
        // Phase 4: 03 Balloon to Trybs transition optimization
        setTimeout(() => {
            optimize03ToTrybsTransition();
        }, 1000);
        
        console.log('✅ Smart Pre-Initialization System initialized for Test Page');
    }
    
    // Apply immediate post-refresh optimization
    function applyImmediatePostRefreshOptimization() {
        console.log('⚡ Applying immediate post-refresh optimization for Test Page...');
        
        try {
            // Simulate the optimized state that exists after refresh
            const allElements = $w('*');
            if (allElements && allElements.length > 0) {
                allElements.forEach(element => {
                    if (element && element.style) {
                        // Apply the same optimizations that work after refresh
                        element.style.animation = 'none !important';
                        element.style.transition = 'opacity 0.3s ease !important';
                        element.style.transform = 'none !important';
                        element.style.filter = 'none !important';
                        element.style.backdropFilter = 'none !important';
                        element.style.boxShadow = 'none !important';
                        element.style.willChange = 'auto !important';
                        element.style.backfaceVisibility = 'visible !important';
                        element.style.perspective = 'none !important';
                        element.style.opacity = '1 !important';
                        element.style.visibility = 'visible !important';
                    }
                });
            }
            
            console.log('✅ Immediate post-refresh optimization applied for Test Page');
            
        } catch (error) {
            console.warn('Immediate post-refresh optimization failed for Test Page:', error);
        }
    }
    
    // Enable progressive features
    function enableProgressiveFeatures() {
        console.log('🎯 Enabling progressive features for Test Page...');
        
        try {
            // Enable light interactions
            const interactiveElements = $w('button, .btn, .button, a, .nav-link, .card, .feature-card');
            
            if (interactiveElements && interactiveElements.length > 0) {
                interactiveElements.forEach(element => {
                    if (element && element.style) {
                        // Enable light hover effects
                        element.onMouseIn(() => {
                            element.style.opacity = '0.9';
                            element.style.transition = 'opacity 0.2s ease';
                        });
                        
                        element.onMouseOut(() => {
                            element.style.opacity = '1';
                        });
                        
                        // Enable light click effects
                        element.onClick(() => {
                            element.style.transform = 'scale(0.98)';
                            element.style.transition = 'transform 0.1s ease';
                            
                            setTimeout(() => {
                                element.style.transform = 'scale(1)';
                            }, 100);
                        });
                    }
                });
            }
            
            console.log('✅ Progressive features enabled for Test Page');
            
        } catch (error) {
            console.warn('Progressive features failed for Test Page:', error);
        }
    }
    
    // Enable full optimizations
    function enableFullOptimizations() {
        console.log('🚀 Enabling full optimizations for Test Page...');
        
        try {
            // Gradually enable animations and effects
            const allElements = $w('*');
            allElements.forEach(element => {
                if (element && element.style) {
                    // Enable light transitions
                    element.style.transition = 'opacity 0.3s ease, transform 0.2s ease';
                    element.style.willChange = 'auto';
                }
            });
            
            console.log('✅ Full optimizations enabled for Test Page');
            
        } catch (error) {
            console.warn('Full optimizations failed for Test Page:', error);
        }
    }
    
    // Optimize 03 Balloon to Trybs transition specifically
    function optimize03ToTrybsTransition() {
        console.log('🎈🎯 Optimizing 03 Balloon to Trybs transition for Test Page...');
        
        try {
            // Pre-optimize 03 balloon elements
            const balloonSelectors = [
                '[class*="03"]', '[id*="03"]', '[class*="balloon"]', '[id*="balloon"]',
                '[class*="red"]', '[style*="red"]', '[class*="gradient"]', '[style*="gradient"]'
            ];
            
            balloonSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach(element => {
                        if (element && element.style) {
                            // Optimize 03 balloon elements for smooth transition
                            element.style.animation = 'none !important';
                            element.style.transition = 'opacity 0.3s ease !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.opacity = '1 !important';
                            element.style.visibility = 'visible !important';
                            element.style.willChange = 'auto !important';
                        }
                    });
                }
            });
            
            // Pre-optimize Trybs project elements
            const trybsSelectors = [
                '[class*="trbys"]', '[id*="trbys"]', '[class*="project"]', '[id*="project"]'
            ];
            
            trybsSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach(element => {
                        if (element && element.style) {
                            // Pre-optimize Trybs elements for smooth reveal
                            element.style.animation = 'none !important';
                            element.style.transition = 'opacity 0.5s ease !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.opacity = '0.9 !important';
                            element.style.visibility = 'visible !important';
                            element.style.willChange = 'auto !important';
                        }
                    });
                }
            });
            
            console.log('✅ 03 Balloon to Trybs transition optimized for Test Page');
            
        } catch (error) {
            console.warn('03 Balloon to Trybs optimization failed for Test Page:', error);
        }
    }
    
    // NEW: GRADIENT & VIDEO OPTIMIZATION SYSTEM
    function initializeGradientAndVideoOptimizer() {
        console.log('🎨🎬 Initializing Gradient & Video Optimization System for Test Page...');
        
        // Phase 1: Immediate gradient optimization
        optimizeGradientsImmediately();
        
        // Phase 2: Video optimization
        setTimeout(() => {
            optimizeVideosProgressive();
        }, 200);
        
        // Phase 3: Progressive gradient re-enabling
        setTimeout(() => {
            enableProgressiveGradients();
        }, 1000);
        
        // Phase 4: Full video loading
        setTimeout(() => {
            enableFullVideoLoading();
        }, 2000);
        
        console.log('✅ Gradient & Video Optimization System initialized for Test Page');
    }
    
    // Optimize gradients immediately
    function optimizeGradientsImmediately() {
        console.log('🎨 Optimizing gradients immediately for Test Page...');
        
        try {
            // Find all gradient elements
            const gradientSelectors = [
                '[style*="gradient"]',
                '[class*="gradient"]',
                '[id*="gradient"]',
                '[style*="linear-gradient"]',
                '[style*="radial-gradient"]',
                '[style*="conic-gradient"]',
                '[class*="bg-gradient"]',
                '[class*="gradient-bg"]'
            ];
            
            gradientSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach(element => {
                        if (element && element.style) {
                            // Replace gradients with solid colors for immediate performance
                            const originalBackground = element.style.background || element.style.backgroundColor;
                            
                            // Extract dominant color from gradient or use fallback
                            let solidColor = '#f0f0f0'; // Light gray fallback
                            
                            if (originalBackground) {
                                // Try to extract color from gradient
                                if (originalBackground.includes('linear-gradient')) {
                                    // Extract first color from linear gradient
                                    const colorMatch = originalBackground.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|rgb\([^)]+\)/);
                                    if (colorMatch) {
                                        solidColor = colorMatch[0];
                                    }
                                } else if (originalBackground.includes('radial-gradient')) {
                                    // Extract first color from radial gradient
                                    const colorMatch = originalBackground.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|rgb\([^)]+\)/);
                                    if (colorMatch) {
                                        solidColor = colorMatch[0];
                                    }
                                } else {
                                    solidColor = originalBackground;
                                }
                            }
                            
                            // Apply solid color instead of gradient
                            element.style.background = solidColor;
                            element.style.backgroundImage = 'none';
                            element.style.backgroundGradient = 'none';
                            
                            // Store original gradient for later restoration
                            element.dataset.originalGradient = originalBackground;
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                            
                            console.log(`🎨 Optimized gradient element for Test Page: ${selector}`);
                        }
                    });
                }
            });
            
            console.log('✅ Gradients optimized for immediate performance on Test Page');
            
        } catch (error) {
            console.warn('Gradient optimization failed for Test Page:', error);
        }
    }
    
    // Optimize videos progressively
    function optimizeVideosProgressive() {
        console.log('🎬 Optimizing videos progressively for Test Page...');
        
        try {
            // Find all video elements
            const videoSelectors = [
                'video',
                '[class*="video"]',
                '[id*="video"]',
                '[data-video]',
                '[class*="player"]',
                '[id*="player"]',
                'iframe[src*="youtube"]',
                'iframe[src*="vimeo"]',
                'iframe[src*="video"]'
            ];
            
            videoSelectors.forEach(selector => {
                const elements = $w(selector);
                if (elements && elements.length > 0) {
                    elements.forEach(element => {
                        if (element) {
                            // Phase 1: Replace with placeholder
                            replaceVideoWithPlaceholder(element);
                            
                            // Phase 2: Load video progressively
                            setTimeout(() => {
                                loadVideoProgressive(element);
                            }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
                        }
                    });
                }
            });
            
            console.log('✅ Videos optimized for progressive loading on Test Page');
            
        } catch (error) {
            console.warn('Video optimization failed for Test Page:', error);
        }
    }
    
    // Replace video with placeholder
    function replaceVideoWithPlaceholder(element) {
        try {
            // Store original video data
            element.dataset.originalVideo = element.outerHTML;
            
            // Create lightweight placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'video-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                position: relative;
                overflow: hidden;
            `;
            
            // Add play button
            const playButton = document.createElement('div');
            playButton.innerHTML = '▶';
            playButton.style.cssText = `
                width: 60px;
                height: 60px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            // Add loading text
            const loadingText = document.createElement('div');
            loadingText.textContent = 'Loading Video...';
            loadingText.style.cssText = `
                position: absolute;
                bottom: 10px;
                left: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
            `;
            
            placeholder.appendChild(playButton);
            placeholder.appendChild(loadingText);
            
            // Replace element with placeholder
            if (element.parentNode) {
                element.parentNode.replaceChild(placeholder, element);
                placeholder.dataset.originalElement = element.dataset.originalVideo;
            }
            
        } catch (error) {
            console.warn('Video placeholder creation failed for Test Page:', error);
        }
    }
    
    // Load video progressively
    function loadVideoProgressive(placeholder) {
        try {
            // Get original video data
            const originalVideoHTML = placeholder.dataset.originalElement;
            if (!originalVideoHTML) return;
            
            // Create new video element
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalVideoHTML;
            const newVideo = tempDiv.firstChild;
            
            // Optimize video settings
            if (newVideo.tagName === 'VIDEO') {
                newVideo.preload = 'metadata';
                newVideo.loading = 'lazy';
                newVideo.muted = true;
                newVideo.playsInline = true;
                
                // Add error handling
                newVideo.onError = () => {
                    console.warn('Video failed to load for Test Page, keeping placeholder');
                };
            }
            
            // Replace placeholder with optimized video
            if (placeholder.parentNode) {
                placeholder.parentNode.replaceChild(newVideo, placeholder);
                
                // Load video after a short delay
                setTimeout(() => {
                    if (newVideo.tagName === 'VIDEO') {
                        newVideo.load();
                    }
                }, 500);
            }
            
        } catch (error) {
            console.warn('Progressive video loading failed for Test Page:', error);
        }
    }
    
    // Enable progressive gradients
    function enableProgressiveGradients() {
        console.log('🎨 Enabling progressive gradients for Test Page...');
        
        try {
            // Gradually restore gradients with performance optimizations
            const gradientElements = $w('[data-original-gradient]');
            if (gradientElements && gradientElements.length > 0) {
                gradientElements.forEach((element, index) => {
                    if (element && element.dataset.originalGradient) {
                        setTimeout(() => {
                            // Restore original gradient
                            element.style.background = element.dataset.originalGradient;
                            
                            // Optimize for performance
                            element.style.willChange = 'auto';
                            element.style.backfaceVisibility = 'visible';
                            element.style.perspective = 'none';
                            
                            // Add smooth transition
                            element.style.transition = 'background 0.5s ease';
                            
                            console.log(`🎨 Restored gradient element ${index + 1} for Test Page`);
                        }, index * 100); // 100ms delay between each gradient
                    }
                });
            }
            
            console.log('✅ Progressive gradients enabled for Test Page');
            
        } catch (error) {
            console.warn('Progressive gradient enabling failed for Test Page:', error);
        }
    }
    
    // Enable full video loading
    function enableFullVideoLoading() {
        console.log('🎬 Enabling full video loading for Test Page...');
        
        try {
            // Find any remaining placeholders and load videos
            const placeholders = document.querySelectorAll('.video-placeholder');
            placeholders.forEach(placeholder => {
                loadVideoProgressive(placeholder);
            });
            
            console.log('✅ Full video loading enabled for Test Page');
            
        } catch (error) {
            console.warn('Full video loading failed for Test Page:', error);
        }
    }
    
    // Initialize the smart pre-initialization system
    initializeSmartPreInitialization();
    
    // Initialize gradient and video optimizer
    initializeGradientAndVideoOptimizer();
    
    // Start the test page loading process
    waitForMasterPage();
    
    // Export test page functions for other scripts
    if (typeof window !== 'undefined') {
        window.testPage = {
            state: state,
            isReady: () => state.loadPhase >= 3,
            getOptimizationLevel: () => state.optimizationLevel
        };
    }
}); 