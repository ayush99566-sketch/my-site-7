// ULTRA-SMOOTH WIX SITE - Master Page with Progressive Loading
// Prevents first-time loading crashes by loading features in phases
// ENHANCED: Fast Perceived Performance System

$w.onReady(function () {
    console.log('🚀 Progressive Master Page Loading with Fast Perceived Performance...');
    
    // Performance state management
    const state = {
        isLoaded: false,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        scrollY: 0,
        isMenuOpen: false,
        performance: {
            startTime: Date.now(),
            loadTime: 0,
            renderTime: 0
        },
        // NEW: Perceived performance tracking
        perceivedPerformance: {
            firstPaint: 0,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            timeToInteractive: 0,
            isAboveTheFoldLoaded: false,
            isCriticalPathComplete: false,
            userInteractions: 0,
            lastInteractionTime: 0
        }
    };
    
    // Element cache for fast access
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
    
    // NEW: FAST PERCEIVED PERFORMANCE SYSTEM
    function initializeFastPerceivedPerformance() {
        console.log('⚡ Initializing Fast Perceived Performance System...');
        
        // Track perceived performance metrics
        trackPerceivedPerformanceMetrics();
        
        // Implement immediate visual feedback
        implementImmediateVisualFeedback();
        
        // Setup skeleton loading
        setupSkeletonLoading();
        
        // Implement progressive image loading
        implementProgressiveImageLoading();
        
        // Setup instant interactions
        setupInstantInteractions();
        
        // Implement smart preloading
        implementSmartPreloading();
        
        console.log('✅ Fast Perceived Performance System initialized');
    }
    
    // Track perceived performance metrics
    function trackPerceivedPerformanceMetrics() {
        try {
            const startTime = performance.now();
            
            // First Paint (when first pixel appears)
            const firstPaint = () => {
                state.perceivedPerformance.firstPaint = performance.now() - startTime;
                console.log(`⚡ First Paint: ${state.perceivedPerformance.firstPaint.toFixed(2)}ms`);
            };
            
            // First Contentful Paint (when first content appears)
            const firstContentfulPaint = () => {
                state.perceivedPerformance.firstContentfulPaint = performance.now() - startTime;
                console.log(`⚡ First Contentful Paint: ${state.perceivedPerformance.firstContentfulPaint.toFixed(2)}ms`);
                
                // Mark above-the-fold as loaded
                state.perceivedPerformance.isAboveTheFoldLoaded = true;
                
                // Trigger visual feedback
                showAboveTheFoldLoaded();
            };
            
            // Largest Contentful Paint (when main content appears)
            const largestContentfulPaint = () => {
                state.perceivedPerformance.largestContentfulPaint = performance.now() - startTime;
                console.log(`⚡ Largest Contentful Paint: ${state.perceivedPerformance.largestContentfulPaint.toFixed(2)}ms`);
                
                // Mark critical path as complete
                state.perceivedPerformance.isCriticalPathComplete = true;
                
                // Trigger full site ready
                showFullSiteReady();
            };
            
            // Time to Interactive (when user can interact)
            const timeToInteractive = () => {
                state.perceivedPerformance.timeToInteractive = performance.now() - startTime;
                console.log(`⚡ Time to Interactive: ${state.perceivedPerformance.timeToInteractive.toFixed(2)}ms`);
            };
            
            // Trigger first paint immediately
            setTimeout(firstPaint, 50);
            
            // Trigger first contentful paint when content appears
            setTimeout(firstContentfulPaint, 200);
            
            // Trigger largest contentful paint when main content loads
            setTimeout(largestContentfulPaint, 500);
            
            // Trigger time to interactive when interactions are ready
            setTimeout(timeToInteractive, 800);
            
        } catch (error) {
            console.warn('Perceived performance tracking failed:', error);
        }
    }
    
    // Implement immediate visual feedback
    function implementImmediateVisualFeedback() {
        console.log('🎨 Implementing immediate visual feedback...');
        
        try {
            // Show loading indicator immediately
            showLoadingIndicator();
            
            // Implement instant hover effects
            implementInstantHoverEffects();
            
            // Setup immediate button feedback
            setupImmediateButtonFeedback();
            
            // Implement instant scroll feedback
            implementInstantScrollFeedback();
            
        } catch (error) {
            console.warn('Immediate visual feedback failed:', error);
        }
    }
    
    // Show loading indicator immediately
    function showLoadingIndicator() {
        try {
            // Create or find loading indicator
            let loadingIndicator = getElement('loadingIndicator');
            
            if (!loadingIndicator) {
                // Try to find any element that could serve as loading indicator
                const loadingIndicators = $w('loadingIndicator');
                const spinners = $w('spinner');
                const progressBars = $w('progress');
                
                if (loadingIndicators && loadingIndicators.length > 0) {
                    loadingIndicator = loadingIndicators[0];
                } else if (spinners && spinners.length > 0) {
                    loadingIndicator = spinners[0];
                } else if (progressBars && progressBars.length > 0) {
                    loadingIndicator = progressBars[0];
                }
            }
            
            if (loadingIndicator) {
                // Show immediately
                loadingIndicator.style.visibility = 'visible';
                loadingIndicator.style.opacity = '1';
                loadingIndicator.style.display = 'block';
                
                // Animate loading progress
                let progress = 0;
                const progressInterval = setInterval(() => {
                    progress += Math.random() * 15;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(progressInterval);
                        
                        // Hide loading indicator
                        setTimeout(() => {
                            loadingIndicator.style.opacity = '0';
                            setTimeout(() => {
                                loadingIndicator.style.display = 'none';
                            }, 300);
                        }, 500);
                    }
                    
                    // Update progress if element has progress property
                    if (loadingIndicator.progress !== undefined) {
                        loadingIndicator.progress = progress;
                    }
                    
                    // Update text if element has text property
                    if (loadingIndicator.text !== undefined) {
                        loadingIndicator.text = `Loading... ${Math.round(progress)}%`;
                    }
                }, 100);
            }
            
        } catch (error) {
            console.warn('Loading indicator failed:', error);
        }
    }
    
    // Implement instant hover effects
    function implementInstantHoverEffects() {
        try {
            // Get interactive elements individually
            const buttons = $w('btn');
            const navLinks = $w('navLink');
            const cards = $w('card');
            const featureCards = $w('featureCard');
            
            const allInteractiveElements = [
                ...(buttons || []),
                ...(navLinks || []),
                ...(cards || []),
                ...(featureCards || [])
            ];
            
            allInteractiveElements.forEach(element => {
                if (!element) return;
                
                // Add instant hover effect
                element.onMouseIn(() => {
                    element.style.transform = 'translateY(-2px) scale(1.02)';
                    element.style.transition = 'transform 0.1s ease';
                    element.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                });
                
                element.onMouseOut(() => {
                    element.style.transform = 'translateY(0) scale(1)';
                    element.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                });
                
                // Add instant click effect
                element.onClick(() => {
                    element.style.transform = 'translateY(0) scale(0.98)';
                    setTimeout(() => {
                        element.style.transform = 'translateY(0) scale(1)';
                    }, 100);
                });
            });
            
        } catch (error) {
            console.warn('Instant hover effects failed:', error);
        }
    }
    
    // Setup immediate button feedback
    function setupImmediateButtonFeedback() {
        try {
            const buttons = $w('button');
            const btnElements = $w('btn');
            
            const allButtons = [
                ...(buttons || []),
                ...(btnElements || [])
            ];
            
            allButtons.forEach(button => {
                if (!button) return;
                
                // Add simple click feedback (no DOM manipulation)
                button.onClick(() => {
                    // Simple scale effect
                    button.style.transform = 'scale(0.95)';
                    button.style.transition = 'transform 0.1s ease';
                    
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                    }, 100);
                });
            });
            
        } catch (error) {
            console.warn('Immediate button feedback failed:', error);
        }
    }
    
    // Implement instant scroll feedback
    function implementInstantScrollFeedback() {
        try {
            // Use Wix's built-in scroll handling instead of DOM
            const scrollElements = $w('scrollContainer');
            const mainContent = $w('mainContent');
            
            const allScrollElements = [
                ...(scrollElements || []),
                ...(mainContent || [])
            ];
            
            allScrollElements.forEach(element => {
                if (!element) return;
                
                element.onScroll(() => {
                    // Add scroll indicator immediately
                    showScrollIndicator();
                    
                    // Hide scroll indicator after scrolling stops
                    setTimeout(() => {
                        hideScrollIndicator();
                    }, 1000);
                });
            });
            
        } catch (error) {
            console.warn('Instant scroll feedback failed:', error);
        }
    }
    
    // Show scroll indicator
    function showScrollIndicator() {
        try {
            // Create or find scroll indicator
            let scrollIndicator = getElement('#scrollIndicator');
            
            if (!scrollIndicator) {
                // Try to find navigation or header
                const nav = getElement('#navigation') || $w('.nav, .navigation')[0];
                if (nav) {
                    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                    nav.style.transition = 'box-shadow 0.2s ease';
                }
            }
            
        } catch (error) {
            console.warn('Show scroll indicator failed:', error);
        }
    }
    
    // Hide scroll indicator
    function hideScrollIndicator() {
        try {
            const nav = getElement('#navigation') || $w('.nav, .navigation')[0];
            if (nav) {
                nav.style.boxShadow = 'none';
            }
        } catch (error) {
            console.warn('Hide scroll indicator failed:', error);
        }
    }
    
    // Setup skeleton loading
    function setupSkeletonLoading() {
        console.log('💀 Setting up skeleton loading...');
        
        try {
            // Create skeleton placeholders for content
            const contentElements = $w('[class*="content"], [class*="text"], [class*="title"], [class*="description"]');
            
            contentElements.forEach(element => {
                if (!element) return;
                
                // Store original content
                const originalText = element.text || element.innerHTML;
                
                // Create skeleton effect
                element.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
                element.style.backgroundSize = '200% 100%';
                element.style.animation = 'skeleton-loading 1.5s infinite';
                element.style.borderRadius = '4px';
                element.style.color = 'transparent';
                
                // Add skeleton animation CSS
                if (!document.querySelector('#skeleton-animation')) {
                    const style = document.createElement('style');
                    style.id = 'skeleton-animation';
                    style.textContent = `
                        @keyframes skeleton-loading {
                            0% { background-position: -200% 0; }
                            100% { background-position: 200% 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                // Reveal content after a delay
                setTimeout(() => {
                    element.style.background = 'none';
                    element.style.animation = 'none';
                    element.style.color = '';
                    element.style.borderRadius = '';
                    
                    // Restore original content
                    if (originalText) {
                        element.text = originalText;
                    }
                }, 800 + Math.random() * 400);
            });
            
        } catch (error) {
            console.warn('Skeleton loading failed:', error);
        }
    }
    
    // Implement progressive image loading
    function implementProgressiveImageLoading() {
        console.log('🖼️ Implementing progressive image loading...');
        
        try {
            const images = $w('img');
            
            images.forEach(img => {
                if (!img) return;
                
                // Set loading to lazy
                img.loading = 'lazy';
                
                // Add blur-up effect
                img.style.filter = 'blur(10px)';
                img.style.transition = 'filter 0.3s ease';
                
                // Create low-quality placeholder
                const placeholder = document.createElement('div');
                placeholder.style.position = 'absolute';
                placeholder.style.top = '0';
                placeholder.style.left = '0';
                placeholder.style.width = '100%';
                placeholder.style.height = '100%';
                placeholder.style.background = '#f0f0f0';
                placeholder.style.zIndex = '1';
                
                // Add placeholder to image container
                if (img.parentElement) {
                    img.parentElement.style.position = 'relative';
                    img.parentElement.appendChild(placeholder);
                }
                
                // Load image progressively
                img.onLoad(() => {
                    // Remove blur effect
                    img.style.filter = 'blur(0)';
                    
                    // Remove placeholder
                    if (placeholder.parentNode) {
                        placeholder.parentNode.removeChild(placeholder);
                    }
                });
                
                // Handle image errors
                img.onError(() => {
                    img.style.filter = 'none';
                    img.style.background = '#f0f0f0';
                    img.style.display = 'flex';
                    img.style.alignItems = 'center';
                    img.style.justifyContent = 'center';
                    img.style.color = '#999';
                    img.style.fontSize = '14px';
                    img.textContent = 'Image not available';
                });
            });
            
        } catch (error) {
            console.warn('Progressive image loading failed:', error);
        }
    }
    
    // Setup instant interactions
    function setupInstantInteractions() {
        console.log('⚡ Setting up instant interactions...');
        
        try {
            // Track user interactions
            const trackInteraction = () => {
                state.perceivedPerformance.userInteractions++;
                state.perceivedPerformance.lastInteractionTime = Date.now();
            };
            
            // Add instant feedback to all interactive elements
            const interactiveElements = $w('button, .btn, .button, a, .nav-link, .card, .feature-card');
            
            interactiveElements.forEach(element => {
                if (!element) return;
                
                // Add instant click feedback
                element.onClick(() => {
                    trackInteraction();
                    
                    // Add instant visual feedback
                    element.style.transform = 'scale(0.95)';
                    element.style.transition = 'transform 0.1s ease';
                    
                    setTimeout(() => {
                        element.style.transform = 'scale(1)';
                    }, 100);
                });
                
                // Add instant hover feedback
                element.onMouseIn(() => {
                    element.style.transform = 'scale(1.02)';
                    element.style.transition = 'transform 0.1s ease';
                });
                
                element.onMouseOut(() => {
                    element.style.transform = 'scale(1)';
                });
            });
            
        } catch (error) {
            console.warn('Instant interactions failed:', error);
        }
    }
    
    // Implement smart preloading
    function implementSmartPreloading() {
        console.log('🧠 Implementing smart preloading...');
        
        try {
            // Preload critical resources
            preloadCriticalResources();
            
            // Preload next likely interactions
            preloadNextInteractions();
            
            // Implement predictive loading
            implementPredictiveLoading();
            
        } catch (error) {
            console.warn('Smart preloading failed:', error);
        }
    }
    
    // Preload critical resources
    function preloadCriticalResources() {
        try {
            // Preload critical images
            const criticalImages = $w('img[src*="hero"], img[src*="main"], img[src*="logo"]');
            
            criticalImages.forEach(img => {
                if (img && img.src) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = img.src;
                    document.head.appendChild(link);
                }
            });
            
            // Preload critical fonts
            const fontLink = document.createElement('link');
            fontLink.rel = 'preload';
            fontLink.as = 'font';
            fontLink.type = 'font/woff2';
            fontLink.crossOrigin = 'anonymous';
            document.head.appendChild(fontLink);
            
        } catch (error) {
            console.warn('Critical resource preloading failed:', error);
        }
    }
    
    // Preload next likely interactions
    function preloadNextInteractions() {
        try {
            // Preload sections that are likely to be viewed next
            const nextSections = $w('[class*="section"]:not(:first-child)');
            
            nextSections.forEach(section => {
                if (!section) return;
                
                // Use Intersection Observer to preload when section comes into view
                if (typeof IntersectionObserver !== 'undefined') {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                // Preload this section's content
                                preloadSectionContent(entry.target);
                                observer.unobserve(entry.target);
                            }
                        });
                    }, { rootMargin: '100px' });
                    
                    observer.observe(section);
                }
            });
            
        } catch (error) {
            console.warn('Next interactions preloading failed:', error);
        }
    }
    
    // Preload section content
    function preloadSectionContent(section) {
        try {
            // Preload images in this section
            const images = section.querySelectorAll('img');
            images.forEach(img => {
                if (img.src) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = img.src;
                    document.head.appendChild(link);
                }
            });
            
        } catch (error) {
            console.warn('Section content preloading failed:', error);
        }
    }
    
    // Implement predictive loading
    function implementPredictiveLoading() {
        try {
            // Track user behavior to predict next actions
            let userPath = [];
            
            // Track clicks
            document.addEventListener('click', (e) => {
                const target = e.target;
                const selector = target.className || target.id || target.tagName;
                userPath.push(selector);
                
                // Keep only last 5 interactions
                if (userPath.length > 5) {
                    userPath.shift();
                }
                
                // Predict next action based on pattern
                predictNextAction(userPath);
            });
            
        } catch (error) {
            console.warn('Predictive loading failed:', error);
        }
    }
    
    // Predict next action
    function predictNextAction(userPath) {
        try {
            // Simple prediction based on common patterns
            const lastAction = userPath[userPath.length - 1];
            
            if (lastAction.includes('nav') || lastAction.includes('menu')) {
                // User is likely to navigate - preload navigation targets
                preloadNavigationTargets();
            } else if (lastAction.includes('button') || lastAction.includes('cta')) {
                // User is likely to take action - preload action results
                preloadActionResults();
            } else if (lastAction.includes('scroll')) {
                // User is scrolling - preload next sections
                preloadNextSections();
            }
            
        } catch (error) {
            console.warn('Next action prediction failed:', error);
        }
    }
    
    // Preload navigation targets
    function preloadNavigationTargets() {
        try {
            const navLinks = $w('a[href], .nav-link');
            navLinks.forEach(link => {
                if (link.href) {
                    // Preload the target page
                    const linkElement = document.createElement('link');
                    linkElement.rel = 'prefetch';
                    linkElement.href = link.href;
                    document.head.appendChild(linkElement);
                }
            });
        } catch (error) {
            console.warn('Navigation targets preloading failed:', error);
        }
    }
    
    // Preload action results
    function preloadActionResults() {
        try {
            // Preload common action results like forms, modals, etc.
            const actionElements = $w('[class*="modal"], [class*="form"], [class*="popup"]');
            actionElements.forEach(element => {
                if (element) {
                    element.style.visibility = 'hidden';
                    element.style.opacity = '0';
                    element.style.display = 'none';
                }
            });
        } catch (error) {
            console.warn('Action results preloading failed:', error);
        }
    }
    
    // Preload next sections
    function preloadNextSections() {
        try {
            const sections = $w('[class*="section"]');
            sections.forEach(section => {
                if (section && !section.style.visibility) {
                    // Preload section content
                    section.style.visibility = 'hidden';
                    section.style.opacity = '0';
                }
            });
        } catch (error) {
            console.warn('Next sections preloading failed:', error);
        }
    }
    
    // Show above-the-fold loaded
    function showAboveTheFoldLoaded() {
        console.log('📱 Above-the-fold content loaded');
        
        try {
            // Add visual feedback that above-the-fold is ready
            const aboveTheFoldElements = $w('[class*="hero"], [class*="header"], [class*="nav"]');
            
            aboveTheFoldElements.forEach(element => {
                if (element && element.style) {
                    element.style.animation = 'fadeInUp 0.5s ease';
                }
            });
            
            // Add fadeInUp animation CSS
            if (!document.querySelector('#fade-in-up-animation')) {
                const style = document.createElement('style');
                style.id = 'fade-in-up-animation';
                style.textContent = `
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
        } catch (error) {
            console.warn('Show above-the-fold loaded failed:', error);
        }
    }
    
    // Show full site ready
    function showFullSiteReady() {
        console.log('🚀 Full site ready');
        
        try {
            // Add visual feedback that site is fully ready
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (element && element.style) {
                    element.style.animation = 'fadeIn 0.3s ease';
                }
            });
            
            // Add fadeIn animation CSS
            if (!document.querySelector('#fade-in-animation')) {
                const style = document.createElement('style');
                style.id = 'fade-in-animation';
                style.textContent = `
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Mark site as fully loaded
            state.isLoaded = true;
            
            // Dispatch ready event
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
            }
            
        } catch (error) {
            console.warn('Show full site ready failed:', error);
        }
    }
    
    // Progressive loading system with Fast Perceived Performance
    function progressiveLoad() {
        console.log('📦 Starting progressive load with Fast Perceived Performance...');
        
        // Initialize Fast Perceived Performance System FIRST
        initializeFastPerceivedPerformance();
        
        // Phase 0: Critical functionality only
        loadCriticalElements();
        
        // Phase 1: Essential features (after 100ms)
        setTimeout(() => loadEssentialFeatures(), 100);
        
        // Phase 2: Enhanced features (after 300ms)
        setTimeout(() => loadEnhancedFeatures(), 300);
        
        // Phase 3: Full features (after 800ms)
        setTimeout(() => loadFullFeatures(), 800);
    }
    
    function loadCriticalElements() {
        console.log('🔧 Loading critical elements...');
        state.loadPhase = 0;
        
        // Only essential navigation
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.onClick(() => toggleMobileMenu());
        }
        
        // Basic error handling
        setupErrorHandling();
        
        console.log('✅ Critical elements loaded');
    }
    
    function loadEssentialFeatures() {
        console.log('⚡ Loading essential features...');
        state.loadPhase = 1;
        
        // Mobile menu overlay
        const mobileOverlay = getElement('#mobileOverlay');
        if (mobileOverlay) {
            mobileOverlay.onClick(() => toggleMobileMenu());
        }
        
        // Basic navigation links
        const navLinks = $w('.nav-link, a[href^="#"]');
        navLinks.forEach(link => {
            try {
                link.onClick((e) => {
                    e.preventDefault();
                    const href = link.href || link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        simpleScrollTo(href);
                    }
                    if (state.isMenuOpen) {
                        toggleMobileMenu();
                    }
                });
            } catch (error) {
                console.warn('Link setup failed:', error);
            }
        });
        
        // Basic responsive behavior
        setupBasicResponsive();
        
        console.log('✅ Essential features loaded');
    }
    
    function loadEnhancedFeatures() {
        console.log('🎨 Loading enhanced features...');
        state.loadPhase = 2;
        
        // Smooth scroll system
        setupSmoothScroll();
        
        // Basic animations
        setupBasicAnimations();
        
        // Image optimization
        optimizeImages();
        
        console.log('✅ Enhanced features loaded');
    }
    
    function loadFullFeatures() {
        console.log('🚀 Loading full features...');
        state.loadPhase = 3;
        
        // Enhanced animations
        setupEnhancedAnimations();
        
        // Performance monitoring
        startPerformanceMonitoring();
        
        // Mobile optimizations
        initializeMobileOptimizations();
        
        // Mark as fully loaded
        state.isLoaded = true;
        console.log('✅ Full site loaded successfully!');
        
        // Dispatch custom event for other scripts
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
        }
    }
    
    // Mobile menu system
    function toggleMobileMenu() {
        try {
            const menu = getElement('#navMenu');
            const toggle = getElement('#navMenuToggle');
            const overlay = getElement('#mobileOverlay');
            
            if (!menu || !toggle) return;
            
            state.isMenuOpen = !state.isMenuOpen;
            
            if (state.isMenuOpen) {
                menu.expand();
                toggle.expand();
                if (overlay) overlay.expand();
                document.body.style.overflow = 'hidden';
            } else {
                menu.collapse();
                toggle.collapse();
                if (overlay) overlay.collapse();
                document.body.style.overflow = '';
            }
        } catch (error) {
            console.warn('Menu toggle failed:', error);
        }
    }
    
    // Simple scroll system (Phase 1)
    function simpleScrollTo(target) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            element.scrollTo();
        } catch (error) {
            console.warn('Simple scroll failed:', error);
        }
    }
    
    // Smooth scroll system (Phase 2)
    function setupSmoothScroll() {
        if (state.scrollRAF) return;
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        }
    }
    
    function ultraSmoothScroll() {
        if (state.scrollRAF) return;
        
        state.scrollRAF = requestAnimationFrame(() => {
            try {
                const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
                const nav = getElement('#navigation');
                
                if (nav && Math.abs(currentScrollY - state.lastScrollY) > 5) {
                    const opacity = Math.min(currentScrollY / 100, 1);
                    const backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                    
                    nav.style.backgroundColor = backgroundColor;
                    nav.style.backdropFilter = `blur(${opacity * 10}px)`;
                    
                    if (opacity > 0.1) {
                        nav.style.boxShadow = `0 2px 20px rgba(0,0,0,${opacity * 0.1})`;
                    } else {
                        nav.style.boxShadow = 'none';
                    }
                    
                    state.lastScrollY = currentScrollY;
                }
            } catch (error) {
                console.warn('Smooth scroll failed:', error);
            }
            
            state.scrollRAF = null;
        });
    }
    
    // Ultra-fast scroll to element (Phase 3)
    function ultraFastScrollTo(target, offset = 80) {
        try {
            const element = typeof target === 'string' ? getElement(target) : target;
            if (!element) return;
            
            element.scrollTo();
            
            setTimeout(() => {
                const elementTop = element.offsetTop - offset;
                if (typeof window !== 'undefined') {
                    window.scrollTo({
                        top: elementTop,
                        behavior: 'smooth'
                    });
                }
            }, 50);
        } catch (error) {
            console.warn('Ultra-fast scroll failed:', error);
        }
    }
    
    // Image optimization
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
    
    // Basic animations (Phase 2)
    function setupBasicAnimations() {
        try {
            const mainContent = getElement('#mainContent') || $w('main') || $w('.main-content');
            if (mainContent) {
                mainContent.opacity = 0;
                mainContent.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    mainContent.opacity = 1;
                }, 200);
            }
        } catch (error) {
            console.warn('Basic animations failed:', error);
        }
    }
    
    // Enhanced animations (Phase 3)
    function setupEnhancedAnimations() {
        try {
            const buttons = $w('button, .btn, .cta-button');
            buttons.forEach(button => {
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
            
            const listItems = $w('li, .list-item');
            listItems.forEach((item, index) => {
                item.opacity = 0;
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    item.opacity = 1;
                }, 200 + (index * 100));
            });
        } catch (error) {
            console.warn('Enhanced animations failed:', error);
        }
    }
    
    // Basic responsive (Phase 1)
    function setupBasicResponsive() {
        let resizeTimeout;
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const wasMobile = state.isMobile;
                state.isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
                
                if (!state.isMobile && wasMobile && state.isMenuOpen) {
                    toggleMobileMenu();
                }
            }, 250);
            });
        }
    }
    
    // Performance monitoring
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
                        console.warn('High scroll frequency detected, optimizing...');
                    }
                    scrollCount = 0;
                    lastScrollCheck = now;
                }
            };
            
            if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollObserver, { passive: true });
        }
        } catch (error) {
            console.warn('Performance monitoring failed:', error);
        }
    }
    
    // Error handling & crash prevention
    function setupErrorHandling() {
        if (typeof window !== 'undefined') {
            window.addEventListener('error', (e) => {
                console.warn('Error caught and handled:', e.error);
                e.preventDefault();
            });
            
            window.addEventListener('unhandledrejection', (e) => {
                console.warn('Unhandled promise rejection caught:', e.reason);
                e.preventDefault();
            });
        }
        
        const originalWixFunction = typeof window !== 'undefined' ? window.$w : null;
        if (originalWixFunction) {
            typeof window !== 'undefined' ? window.$w = function(...args) {
                try {
                    return originalWixFunction.apply(this, args);
                } catch (error) {
                    console.warn('Wix function error:', error);
                    return null;
                }
            } : null;
        }
    }
    
    // Mobile optimizations
    function initializeMobileOptimizations() {
        console.log('📱 Initializing Mobile Optimizations...');
        
        try {
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
            const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in window : false;
            
            state.isMobile = isMobile;
            state.isTouchDevice = isTouchDevice;
            
            injectMobileCSS();
            
            if (isTouchDevice) {
                initializeTouchOptimizations();
            }
            
            initializeMobileResponsive();
            initializeMobilePerformance();
            
            console.log('✅ Mobile optimizations initialized!');
        } catch (error) {
            console.warn('Mobile optimizations failed:', error);
        }
    }
    
    function injectMobileCSS() {
        const mobileCSS = `
            @media (max-width: 768px) {
                .nav, .navigation {
                    padding: 0.75rem 1rem !important;
                }
                
                .nav-container, .nav-wrapper {
                    padding: 0 0.5rem !important;
                }
                
                .nav-logo, .logo {
                    font-size: 1.25rem !important;
                }
                
                .hero, .heroSection {
                    min-height: 100vh !important;
                    padding: 1rem !important;
                    padding-top: 70px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                
                .hero-content, .heroContent {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 1rem !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
                    line-height: 1.2 !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.875rem, 4vw, 1.125rem) !important;
                    margin-bottom: 1.5rem !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: column !important;
                    align-items: center !important;
                    width: 100% !important;
                    gap: 0.75rem !important;
                }
                
                .btn, .button {
                    width: 100% !important;
                    max-width: 280px !important;
                    min-height: 48px !important;
                    padding: 0.875rem 1.5rem !important;
                    font-size: 1rem !important;
                    text-align: center !important;
                    touch-action: manipulation !important;
                }
                
                .features, .featuresSection {
                    padding: 2rem 1rem !important;
                }
                
                .features h2, .featuresTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 2rem !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                    padding: 0 0.5rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 1.25rem !important;
                    margin: 0 !important;
                }
                
                .feature-card h3, .featureCard h3 {
                    font-size: 1.125rem !important;
                    margin-bottom: 0.75rem !important;
                }
                
                .feature-card p, .featureCard p {
                    font-size: 0.875rem !important;
                    line-height: 1.5 !important;
                }
            }
            
            @media (max-width: 375px) {
                .hero, .heroSection {
                    padding: 0.75rem !important;
                    padding-top: 60px !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.5rem, 7vw, 2rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.75rem, 4.5vw, 1rem) !important;
                }
                
                .btn, .button {
                    max-width: 260px !important;
                    padding: 0.75rem 1.25rem !important;
                    font-size: 0.875rem !important;
                }
                
                .features, .featuresSection {
                    padding: 1.5rem 0.75rem !important;
                }
                
                .features-grid, .featuresGrid {
                    gap: 1rem !important;
                    padding: 0 0.25rem !important;
                }
                
                .feature-card, .featureCard {
                    padding: 1rem !important;
                }
            }
            
            @media (min-width: 376px) and (max-width: 428px) {
                .hero-title, .heroTitle {
                    font-size: clamp(1.875rem, 6.5vw, 2.25rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.875rem, 4.5vw, 1.125rem) !important;
                }
                
                .btn, .button {
                    max-width: 300px !important;
                }
            }
            
            @media (min-width: 429px) and (max-width: 768px) {
                .hero-title, .heroTitle {
                    font-size: clamp(2rem, 6vw, 2.5rem) !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(1rem, 4vw, 1.25rem) !important;
                }
                
                .btn, .button {
                    max-width: 320px !important;
                }
            }
            
            @media (max-width: 768px) and (orientation: landscape) {
                .hero, .heroSection {
                    min-height: 85vh !important;
                    padding-top: 60px !important;
                }
                
                .hero-title, .heroTitle {
                    font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    margin-bottom: 0.5rem !important;
                }
                
                .hero-subtitle, .heroSubtitle {
                    font-size: clamp(0.75rem, 3.5vw, 1rem) !important;
                    margin-bottom: 1rem !important;
                }
                
                .btn-container, .buttonContainer {
                    flex-direction: row !important;
                    justify-content: center !important;
                    gap: 1rem !important;
                }
                
                .btn, .button {
                    width: auto !important;
                    max-width: 200px !important;
                    min-width: 160px !important;
                }
                
                .features, .featuresSection {
                    padding: 1.5rem 1rem !important;
                }
                
                .features-grid, .featuresGrid {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
                    gap: 1rem !important;
                }
            }
            
            @media (hover: none) and (pointer: coarse) {
                .btn:hover, .button:hover {
                    transform: none !important;
                    box-shadow: none !important;
                }
                
                .nav-link:hover, .navLink:hover {
                    transform: none !important;
                }
                
                .feature-card:hover, .featureCard:hover {
                    transform: none !important;
                }
                
                .btn, .button, .nav-link, .navLink {
                    min-height: 44px !important;
                    min-width: 44px !important;
                }
            }
            
            @supports (padding: max(0px)) {
                .nav, .navigation {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .hero, .heroSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
                
                .features, .featuresSection {
                    padding-left: max(1rem, env(safe-area-inset-left)) !important;
                    padding-right: max(1rem, env(safe-area-inset-right)) !important;
                }
            }
            
            body {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            
            .nav-container, .nav-wrapper,
            .hero-content, .heroContent,
            .features-grid, .featuresGrid {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = mobileCSS;
        document.head.appendChild(style);
    }
    
    function initializeTouchOptimizations() {
        try {
            const buttons = $w('.btn, .button, [data-testid*="button"]');
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
            
            const cards = $w('.feature-card, .featureCard, .card');
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
    
    function initializeMobileResponsive() {
        try {
            const heroSection = $w('#heroSection') || $w('.hero');
            if (heroSection && state.isMobile) {
                heroSection.style.minHeight = '100vh';
                heroSection.style.padding = '1rem';
                heroSection.style.paddingTop = '70px';
            }
            
            const nav = $w('.nav, .navigation');
            if (nav && state.isMobile) {
                nav.style.padding = '0.75rem 1rem';
            }
            
            const buttons = $w('.btn, .button');
            buttons.forEach(btn => {
                if (!btn || !state.isMobile) return;
                
                btn.style.width = '100%';
                btn.style.maxWidth = '280px';
                btn.style.minHeight = '48px';
                btn.style.padding = '0.875rem 1.5rem';
                btn.style.fontSize = '1rem';
                btn.style.textAlign = 'center';
                btn.style.touchAction = 'manipulation';
            });
        } catch (error) {
            console.warn('Mobile responsive failed:', error);
        }
    }
    
    function initializeMobilePerformance() {
        try {
            if (state.isMobile) {
                const animations = $w('[data-animation]');
                animations.forEach(anim => {
                    if (!anim) return;
                    anim.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                });
                
                const scrollElements = $w('.scroll-container, .scrollContainer');
                scrollElements.forEach(element => {
                    if (!element) return;
                    element.style.willChange = 'transform';
                    element.style.transform = 'translateZ(0)';
                });
            }
        } catch (error) {
            console.warn('Mobile performance failed:', error);
        }
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
        
        // Setup ultra-lightweight animations for service sections
        function setupUltraLightweightAnimations() {
            try {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Keep animations disabled for first load
                    element.style.animation = 'none';
                    element.style.transition = 'opacity 0.5s ease';
                    
                    // Simple fade in effect
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 200);
                    
                });
                
            } catch (error) {
                console.warn('Ultra-lightweight animations setup failed:', error);
            }
        }
        
        // Progressive re-enabling of features
        function progressiveReEnable() {
            console.log('🔄 Progressive re-enabling of features...');
            
            // Phase 1: Basic interactions (after 2 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable basic hover effects
                    element.onMouseIn(() => {
                        element.style.opacity = '0.95';
                    });
                    
                    element.onMouseOut(() => {
                        element.style.opacity = '1';
                    });
                });
                
                console.log('✅ Phase 1: Basic interactions enabled');
                
            }, 2000);
            
            // Phase 2: Light animations (after 4 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable light transitions
                    element.style.transition = 'opacity 0.3s ease, transform 0.2s ease';
                });
                
                console.log('✅ Phase 2: Light animations enabled');
                
            }, 4000);
            
            // Phase 3: Full features (after 6 seconds)
            setTimeout(() => {
                serviceState.serviceElements.forEach((element, key) => {
                    if (!element) return;
                    
                    // Enable full features
                    element.style.willChange = 'transform, opacity';
                    element.style.backfaceVisibility = 'hidden';
                });
                
                serviceState.isOptimized = true;
                serviceState.isFirstLoad = false;
                console.log('✅ Phase 3: Full features enabled');
                
            }, 6000);
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
        
        // Performance monitoring with aggressive thresholds
        function monitorPerformanceAggressively() {
            try {
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
                
            } catch (error) {
                console.warn('Performance monitoring failed:', error);
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
        
        // Step 3: Setup ultra-lightweight animations (200ms)
        setTimeout(() => {
            setupUltraLightweightAnimations();
        }, 200);
        
        // Step 4: Start performance monitoring (500ms)
        setTimeout(() => {
            monitorPerformanceAggressively();
        }, 500);
        
        // Step 5: Progressive re-enabling (2-6 seconds)
        progressiveReEnable();
        
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
        if (typeof window !== 'undefined') {
            window.section03Optimizer = {
                optimize: optimize03SectionImmediately,
                emergency: emergency03Optimization,
                getState: () => section03State
            };
        }
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
        
        // CONTINUOUS MONITORING to prevent black screen
        function startContinuousMonitoring() {
            console.log('👁️ Starting continuous monitoring for black screen prevention...');
            
            // Check every 50ms for potential issues
            setInterval(() => {
                try {
                    // Check if any "03" elements are causing issues
                    const elements03 = $w('[class*="03"], [id*="03"]');
                    if (elements03 && elements03.length > 0) {
                        elements03.forEach(element => {
                            if (element && element.style) {
                                // Ensure element is visible and not causing crashes
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.opacity = '1 !important';
                                element.style.visibility = 'visible !important';
                            }
                        });
                    }
                    
                    // Ensure body and html are visible
                    const body = $w('body');
                    const html = $w('html');
                    
                    if (body && body.length > 0) {
                        body.forEach(element => {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                        });
                    }
                    
                    if (html && html.length > 0) {
                        html.forEach(element => {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                        });
                    }
                    
                } catch (error) {
                    console.warn('Continuous monitoring error:', error);
                }
            }, 50);
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
        
        // Step 2: Start continuous monitoring (100ms)
        setTimeout(() => {
            startContinuousMonitoring();
        }, 100);
        
        // Step 3: Additional fix every 200ms
        setInterval(() => {
            fix03BalloonImmediately();
        }, 200);
        
        // Step 4: Emergency recovery trigger
        setTimeout(() => {
            emergencyRecovery();
        }, 1000);
        
        console.log('✅ "03" Balloon Black Screen Fix initialized');
        
        // Export for manual triggering
        if (typeof window !== 'undefined') {
            window.balloonFix = {
                fix: fix03BalloonImmediately,
                preserve: preserveBackgroundElements,
                emergency: emergencyRecovery,
                getState: () => balloonFixState
            };
        }
    }
    
    // Initialize the balloon fix
    initialize03BalloonFix();
    
    // COMPREHENSIVE PROGRESSIVE LOADING SYSTEM
    function initializeProgressiveLoadingSystem() {
        console.log('🚀 Initializing Comprehensive Progressive Loading System...');
        
        // Progressive loading state
        const progressiveState = {
            phase: 0,
            isLoaded: false,
            isVisible: false,
            loadStartTime: Date.now(),
            elementsLoaded: 0,
            totalElements: 0
        };
        
        // PHASE 1: Hide everything and prepare
        function phase1HideAndPrepare() {
            console.log('📦 Phase 1: Hiding everything and preparing...');
            
            try {
                // Hide ALL elements initially
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    progressiveState.totalElements = allElements.length;
                    
                    allElements.forEach((element, index) => {
                        if (element && element.style) {
                            // Hide element completely
                            element.style.visibility = 'hidden !important';
                            element.style.opacity = '0 !important';
                            element.style.display = 'none !important';
                            
                            // Disable all animations and effects
                            element.style.animation = 'none !important';
                            element.style.transition = 'none !important';
                            element.style.transform = 'none !important';
                            element.style.filter = 'none !important';
                            element.style.backdropFilter = 'none !important';
                            element.style.boxShadow = 'none !important';
                            element.style.willChange = 'auto !important';
                            element.style.backfaceVisibility = 'visible !important';
                            element.style.perspective = 'none !important';
                        }
                    });
                }
                
                // Show only essential elements (body, html)
                const essentialElements = $w('body, html');
                if (essentialElements && essentialElements.length > 0) {
                    essentialElements.forEach(element => {
                        if (element && element.style) {
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                        }
                    });
                }
                
                progressiveState.phase = 1;
                console.log('✅ Phase 1 completed: All elements hidden');
                
            } catch (error) {
                console.warn('Phase 1 failed:', error);
            }
        }
        
        // PHASE 2: Load critical elements
        function phase2LoadCritical() {
            console.log('🔧 Phase 2: Loading critical elements...');
            
            try {
                // Load critical elements first
                const criticalSelectors = [
                    'body', 'html', '[class*="background"]', '[id*="background"]',
                    '[class*="bg"]', '[id*="bg"]', '[class*="gradient"]', '[style*="gradient"]'
                ];
                
                criticalSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 2;
                console.log('✅ Phase 2 completed: Critical elements loaded');
                
            } catch (error) {
                console.warn('Phase 2 failed:', error);
            }
        }
        
        // PHASE 3: Load essential content
        function phase3LoadEssential() {
            console.log('📄 Phase 3: Loading essential content...');
            
            try {
                // Load essential content elements
                const essentialSelectors = [
                    '[class*="header"]', '[id*="header"]', '[class*="nav"]', '[id*="nav"]',
                    '[class*="main"]', '[id*="main"]', '[class*="content"]', '[id*="content"]',
                    '[class*="section"]', '[id*="section"]'
                ];
                
                essentialSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 3;
                console.log('✅ Phase 3 completed: Essential content loaded');
                
            } catch (error) {
                console.warn('Phase 3 failed:', error);
            }
        }
        
        // PHASE 4: Load enhanced elements
        function phase4LoadEnhanced() {
            console.log('✨ Phase 4: Loading enhanced elements...');
            
            try {
                // Load enhanced elements (excluding problematic ones)
                const enhancedSelectors = [
                    '[class*="text"]', '[id*="text"]', '[class*="title"]', '[id*="title"]',
                    '[class*="subtitle"]', '[id*="subtitle"]', '[class*="description"]', '[id*="description"]',
                    '[class*="button"]', '[id*="button"]', '[class*="cta"]', '[id*="cta"]'
                ];
                
                enhancedSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 4;
                console.log('✅ Phase 4 completed: Enhanced elements loaded');
                
            } catch (error) {
                console.warn('Phase 4 failed:', error);
            }
        }
        
        // PHASE 5: Load remaining elements (excluding problematic ones)
        function phase5LoadRemaining() {
            console.log('🎯 Phase 5: Loading remaining elements...');
            
            try {
                // Load all remaining elements except problematic ones
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Skip problematic elements for now
                            const className = element.className || '';
                            const id = element.id || '';
                            
                            // Skip "03" and heavy animation elements
                            if (className.includes('03') || id.includes('03') || 
                                className.includes('balloon') || id.includes('balloon') ||
                                className.includes('animate') || className.includes('animation')) {
                                return; // Skip these for now
                            }
                            
                            // Show element
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                            
                            progressiveState.elementsLoaded++;
                        }
                    });
                }
                
                progressiveState.phase = 5;
                console.log('✅ Phase 5 completed: Remaining elements loaded');
                
            } catch (error) {
                console.warn('Phase 5 failed:', error);
            }
        }
        
        // PHASE 6: Load problematic elements with special handling
        function phase6LoadProblematic() {
            console.log('🎈 Phase 6: Loading problematic elements with special handling...');
            
            try {
                // Load "03" and balloon elements with special handling
                const problematicSelectors = [
                    '[class*="03"]', '[id*="03"]', '[class*="balloon"]', '[id*="balloon"]',
                    '[class*="red"]', '[style*="red"]', '[class*="gradient"]', '[style*="gradient"]'
                ];
                
                problematicSelectors.forEach(selector => {
                    const elements = $w(selector);
                    if (elements && elements.length > 0) {
                        elements.forEach(element => {
                            if (element && element.style) {
                                // Show element but keep animations disabled
                                element.style.visibility = 'visible !important';
                                element.style.opacity = '1 !important';
                                element.style.display = 'block !important';
                                
                                // Keep heavy effects disabled
                                element.style.animation = 'none !important';
                                element.style.transition = 'none !important';
                                element.style.transform = 'none !important';
                                element.style.filter = 'none !important';
                                element.style.backdropFilter = 'none !important';
                                element.style.boxShadow = 'none !important';
                                
                                progressiveState.elementsLoaded++;
                            }
                        });
                    }
                });
                
                progressiveState.phase = 6;
                console.log('✅ Phase 6 completed: Problematic elements loaded with special handling');
                
            } catch (error) {
                console.warn('Phase 6 failed:', error);
            }
        }
        
        // PHASE 7: Final smooth reveal
        function phase7SmoothReveal() {
            console.log('🌟 Phase 7: Final smooth reveal...');
            
            try {
                // Enable smooth transitions for all elements
                const allElements = $w('*');
                if (allElements && allElements.length > 0) {
                    allElements.forEach(element => {
                        if (element && element.style) {
                            // Enable smooth transitions
                            element.style.transition = 'opacity 0.3s ease-in-out !important';
                            
                            // Ensure visibility
                            element.style.visibility = 'visible !important';
                            element.style.opacity = '1 !important';
                            element.style.display = 'block !important';
                        }
                    });
                }
                
                progressiveState.isLoaded = true;
                progressiveState.isVisible = true;
                
                const loadTime = Date.now() - progressiveState.loadStartTime;
                console.log(`✅ Phase 7 completed: Everything revealed smoothly in ${loadTime}ms`);
                console.log(`📊 Loaded ${progressiveState.elementsLoaded}/${progressiveState.totalElements} elements`);
                
            } catch (error) {
                console.warn('Phase 7 failed:', error);
            }
        }
        
        // Start progressive loading sequence
        console.log('🚀 Starting comprehensive progressive loading sequence...');
        
        // Phase 1: Hide everything (0ms)
        phase1HideAndPrepare();
        
        // Phase 2: Load critical elements (100ms)
        setTimeout(() => {
            phase2LoadCritical();
        }, 100);
        
        // Phase 3: Load essential content (300ms)
        setTimeout(() => {
            phase3LoadEssential();
        }, 300);
        
        // Phase 4: Load enhanced elements (500ms)
        setTimeout(() => {
            phase4LoadEnhanced();
        }, 500);
        
        // Phase 5: Load remaining elements (800ms)
        setTimeout(() => {
            phase5LoadRemaining();
        }, 800);
        
        // Phase 6: Load problematic elements (1200ms)
        setTimeout(() => {
            phase6LoadProblematic();
        }, 1200);
        
        // Phase 7: Final smooth reveal (1500ms)
        setTimeout(() => {
            phase7SmoothReveal();
        }, 1500);
        
        console.log('✅ Comprehensive Progressive Loading System initialized');
        
        // Export for manual control
        if (typeof window !== 'undefined') {
            window.progressiveLoader = {
                getState: () => progressiveState,
                forceReveal: phase7SmoothReveal,
                reload: () => {
                    progressiveState.phase = 0;
                    progressiveState.isLoaded = false;
                    progressiveState.isVisible = false;
                    progressiveState.elementsLoaded = 0;
                    progressiveState.loadStartTime = Date.now();
                    
                    // Restart sequence
                    phase1HideAndPrepare();
                    setTimeout(() => phase2LoadCritical(), 100);
                    setTimeout(() => phase3LoadEssential(), 300);
                    setTimeout(() => phase4LoadEnhanced(), 500);
                    setTimeout(() => phase5LoadRemaining(), 800);
                    setTimeout(() => phase6LoadProblematic(), 1200);
                    setTimeout(() => phase7SmoothReveal(), 1500);
                }
            };
        }
    }
    
    // Initialize the progressive loading system
    initializeProgressiveLoadingSystem();
    
    // WIX-COMPATIBLE DEBUGGING - Visual indicators instead of console logs
    console.log('🔍 WIX DEBUGGING: Progressive loading system initialized');
    
    // Create a visual debug element to show progress
    try {
        const debugElement = $w('#debugInfo') || createDebugElement();
        if (debugElement) {
            debugElement.text = '🚀 Progressive Loading: Initialized';
            debugElement.style.visibility = 'visible';
        }
    } catch (error) {
        console.log('🔍 WIX DEBUGGING: Could not create visual debug element');
    }
    
    // Check if progressive loader was created
    try {
        if (typeof window !== 'undefined' && window.progressiveLoader) {
            console.log('✅ WIX DEBUGGING: Progressive loader found');
            showDebugMessage('✅ Progressive loader found and working');
        } else {
            console.log('❌ WIX DEBUGGING: Progressive loader not found');
            showDebugMessage('❌ Progressive loader not found - using fallback');
            // Fallback: manually trigger the phases
            setTimeout(() => manualProgressiveLoad(), 100);
        }
    } catch (error) {
        console.log('🔍 WIX DEBUGGING: Error checking progressive loader');
        showDebugMessage('⚠️ Error checking progressive loader');
    }
    
    // Helper function to create debug element
    function createDebugElement() {
        try {
            // Try to create a text element for debugging
            const elements = $w('*');
            for (let element of elements) {
                if (element && element.text && element.id && element.id.includes('debug')) {
                    return element;
                }
            }
        } catch (error) {
            console.log('🔍 WIX DEBUGGING: Could not find debug element');
        }
        return null;
    }
    
    // Helper function to show debug messages
    function showDebugMessage(message) {
        try {
            // Try to show in any available text element
            const elements = $w('*');
            for (let element of elements) {
                if (element && element.text && element.visible) {
                    element.text = message;
                    break;
                }
            }
        } catch (error) {
            console.log('🔍 WIX DEBUGGING: Could not show debug message');
        }
    }
    
    // Manual progressive loading fallback
    function manualProgressiveLoad() {
        console.log('🔍 WIX DEBUGGING: Starting manual progressive loading...');
        showDebugMessage('🔄 Manual progressive loading started...');
        
        // Phase 1: Hide everything
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = '0';
                    }
                });
                showDebugMessage('📦 Phase 1: All elements hidden');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 1 failed');
            }
        }, 0);
        
        // Phase 2: Show critical elements
        setTimeout(() => {
            try {
                const criticalElements = $w('body, html, [class*="background"], [class*="bg"]');
                criticalElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('🔧 Phase 2: Critical elements shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 2 failed');
            }
        }, 200);
        
        // Phase 3: Show essential content
        setTimeout(() => {
            try {
                const essentialElements = $w('[class*="header"], [class*="nav"], [class*="main"], [class*="content"]');
                essentialElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('📄 Phase 3: Essential content shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 3 failed');
            }
        }, 400);
        
        // Phase 4: Show remaining elements
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('✨ Phase 4: All elements shown');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 4 failed');
            }
        }, 600);
        
        // Phase 5: Final reveal
        setTimeout(() => {
            try {
                const allElements = $w('*');
                allElements.forEach(element => {
                    if (element && element.style) {
                        element.style.transition = 'opacity 0.3s ease-in-out';
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                });
                showDebugMessage('🌟 Phase 5: Everything revealed smoothly!');
                console.log('✅ WIX DEBUGGING: Manual progressive loading completed');
            } catch (error) {
                console.log('🔍 WIX DEBUGGING: Phase 5 failed');
            }
        }, 800);
    }
    
    // Start progressive loading with Fast Perceived Performance
    progressiveLoad();
    
    // Initialize Fast Perceived Performance System
    initializeFastPerceivedPerformance();
    
    // Initialize Lightweight Animation Optimizer
    initializeLightweightAnimationOptimizer();
    
    // Export functions for other pages to use
    if (typeof window !== 'undefined') {
        window.ultraFastSite = {
            scrollTo: ultraFastScrollTo,
            toggleMenu: toggleMobileMenu,
            getElement: getElement,
            state: state,
            isReady: () => state.isLoaded,
            waitForReady: (callback) => {
                if (state.isLoaded) {
                    callback();
                } else {
                    if (typeof window !== 'undefined') {
                        window.addEventListener('ultraFastSiteReady', callback);
                    }
                }
            }
        };
    }
    
    // NEW: LIGHTWEIGHT ANIMATION OPTIMIZATION SYSTEM
    function initializeLightweightAnimationOptimizer() {
        console.log('🎬 Initializing Lightweight Animation Optimizer...');
        
        // Animation optimization state
        const animationState = {
            isOptimized: false,
            heavyAnimationsDisabled: false,
            gpuUsageReduced: false,
            frameRateOptimized: false,
            animationCount: 0,
            lastOptimization: 0
        };
        
        // Replace heavy animations with lightweight alternatives
        replaceHeavyAnimations();
        
        // Optimize GPU usage
        optimizeGPUUsage();
        
        // Implement frame rate optimization
        implementFrameRateOptimization();
        
        // Setup performance monitoring
        setupAnimationPerformanceMonitoring();
        
        // Implement adaptive animation quality
        implementAdaptiveAnimationQuality();
        
        console.log('✅ Lightweight Animation Optimizer initialized');
    }
    
    // Replace heavy animations with lightweight alternatives
    function replaceHeavyAnimations() {
        console.log('🔄 Replacing heavy animations with lightweight alternatives...');
        
        try {
            // Replace transform animations with opacity-only animations
            replaceTransformAnimations();
            
            // Replace complex CSS animations with simple transitions
            replaceComplexCSSAnimations();
            
            // Replace box-shadow animations with border animations
            replaceBoxShadowAnimations();
            
            // Replace filter animations with simple opacity
            replaceFilterAnimations();
            
            // Replace backdrop-filter animations
            replaceBackdropFilterAnimations();
            
        } catch (error) {
            console.warn('Animation replacement failed:', error);
        }
    }
    
    // Replace transform animations with opacity-only animations
    function replaceTransformAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Check if element has heavy transform animations
                const currentTransform = element.style.transform || '';
                const currentTransition = element.style.transition || '';
                
                // Replace scale transforms with opacity
                if (currentTransform.includes('scale') || currentTransition.includes('transform')) {
                    // Replace with lightweight opacity animation
                    element.style.transition = 'opacity 0.2s ease';
                    element.style.transform = 'none';
                    
                    // Update hover effects
                    element.onMouseIn = () => {
                        element.style.opacity = '0.9';
                    };
                    
                    element.onMouseOut = () => {
                        element.style.opacity = '1';
                    };
                    
                    // Update click effects
                    element.onClick = () => {
                        element.style.opacity = '0.8';
                        setTimeout(() => {
                            element.style.opacity = '1';
                        }, 100);
                    };
                    
                    console.log('✅ Replaced transform animation with opacity');
                }
                
                // Replace translateY animations
                if (currentTransform.includes('translateY') || currentTransition.includes('translateY')) {
                    element.style.transition = 'opacity 0.15s ease';
                    element.style.transform = 'none';
                    
                    element.onMouseIn = () => {
                        element.style.opacity = '0.95';
                    };
                    
                    element.onMouseOut = () => {
                        element.style.opacity = '1';
                    };
                    
                    console.log('✅ Replaced translateY animation with opacity');
                }
            });
            
        } catch (error) {
            console.warn('Transform animation replacement failed:', error);
        }
    }
    
    // Replace complex CSS animations with simple transitions
    function replaceComplexCSSAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Check for complex animations
                const currentAnimation = element.style.animation || '';
                const currentTransition = element.style.transition || '';
                
                // Replace complex animations with simple transitions
                if (currentAnimation.includes('fadeIn') || currentAnimation.includes('slideIn') || 
                    currentAnimation.includes('bounce') || currentAnimation.includes('pulse')) {
                    
                    // Replace with simple fade-in
                    element.style.animation = 'none';
                    element.style.transition = 'opacity 0.3s ease';
                    element.style.opacity = '0';
                    
                    // Trigger fade-in after a short delay
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 50);
                    
                    console.log('✅ Replaced complex animation with simple fade-in');
                }
                
                // Replace skeleton loading animations
                if (currentAnimation.includes('skeleton') || currentAnimation.includes('loading')) {
                    element.style.animation = 'none';
                    element.style.transition = 'opacity 0.2s ease';
                    element.style.opacity = '0.7';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 200);
                    
                    console.log('✅ Replaced skeleton animation with simple opacity');
                }
            });
            
        } catch (error) {
            console.warn('Complex CSS animation replacement failed:', error);
        }
    }
    
    // Replace box-shadow animations with border animations
    function replaceBoxShadowAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                const currentBoxShadow = element.style.boxShadow || '';
                const currentTransition = element.style.transition || '';
                
                // Replace box-shadow animations with border animations
                if (currentBoxShadow.includes('rgba') || currentTransition.includes('box-shadow')) {
                    // Remove box-shadow
                    element.style.boxShadow = 'none';
                    
                    // Add lightweight border animation
                    element.style.border = '1px solid transparent';
                    element.style.transition = 'border-color 0.2s ease, opacity 0.2s ease';
                    
                    // Update hover effects
                    element.onMouseIn = () => {
                        element.style.borderColor = 'rgba(0,0,0,0.1)';
                        element.style.opacity = '0.95';
                    };
                    
                    element.onMouseOut = () => {
                        element.style.borderColor = 'transparent';
                        element.style.opacity = '1';
                    };
                    
                    console.log('✅ Replaced box-shadow animation with border animation');
                }
            });
            
        } catch (error) {
            console.warn('Box-shadow animation replacement failed:', error);
        }
    }
    
    // Replace filter animations with simple opacity
    function replaceFilterAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                const currentFilter = element.style.filter || '';
                const currentTransition = element.style.transition || '';
                
                // Replace filter animations with opacity
                if (currentFilter.includes('blur') || currentFilter.includes('brightness') || 
                    currentFilter.includes('contrast') || currentTransition.includes('filter')) {
                    
                    // Remove heavy filters
                    element.style.filter = 'none';
                    element.style.transition = 'opacity 0.2s ease';
                    
                    // Update hover effects
                    element.onMouseIn = () => {
                        element.style.opacity = '0.9';
                    };
                    
                    element.onMouseOut = () => {
                        element.style.opacity = '1';
                    };
                    
                    console.log('✅ Replaced filter animation with opacity');
                }
            });
            
        } catch (error) {
            console.warn('Filter animation replacement failed:', error);
        }
    }
    
    // Replace backdrop-filter animations
    function replaceBackdropFilterAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                const currentBackdropFilter = element.style.backdropFilter || '';
                const currentTransition = element.style.transition || '';
                
                // Replace backdrop-filter animations
                if (currentBackdropFilter.includes('blur') || currentTransition.includes('backdrop-filter')) {
                    // Remove backdrop-filter
                    element.style.backdropFilter = 'none';
                    element.style.transition = 'opacity 0.2s ease';
                    
                    // Use simple background opacity instead
                    element.style.backgroundColor = 'rgba(255,255,255,0.9)';
                    
                    console.log('✅ Replaced backdrop-filter animation with background opacity');
                }
            });
            
        } catch (error) {
            console.warn('Backdrop-filter animation replacement failed:', error);
        }
    }
    
    // Optimize GPU usage
    function optimizeGPUUsage() {
        console.log('🎮 Optimizing GPU usage...');
        
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Disable hardware acceleration for non-critical elements
                element.style.willChange = 'auto';
                element.style.backfaceVisibility = 'visible';
                element.style.perspective = 'none';
                element.style.transformStyle = 'flat';
                
                // Use transform3d only when absolutely necessary
                if (element.style.transform && element.style.transform.includes('translateZ')) {
                    element.style.transform = element.style.transform.replace('translateZ(0)', '');
                }
                
                // Reduce layer creation
                element.style.isolation = 'auto';
                element.style.mixBlendMode = 'normal';
                
            });
            
            console.log('✅ GPU usage optimized');
            
        } catch (error) {
            console.warn('GPU optimization failed:', error);
        }
    }
    
    // Implement frame rate optimization
    function implementFrameRateOptimization() {
        console.log('📊 Implementing frame rate optimization...');
        
        try {
            // Reduce animation frame rate for better performance
            let lastFrameTime = 0;
            const targetFrameRate = 30; // Target 30fps instead of 60fps
            const frameInterval = 1000 / targetFrameRate;
            
            // Throttle animation updates
            function throttledAnimationUpdate(callback) {
                const currentTime = performance.now();
                
                if (currentTime - lastFrameTime >= frameInterval) {
                    callback();
                    lastFrameTime = currentTime;
                }
            }
            
            // Apply throttling to scroll animations
            const scrollElements = $w('*');
            scrollElements.forEach(element => {
                if (!element) return;
                
                const originalOnScroll = element.onScroll;
                if (originalOnScroll) {
                    element.onScroll = (event) => {
                        throttledAnimationUpdate(() => {
                            originalOnScroll(event);
                        });
                    };
                }
            });
            
            // Reduce transition durations for faster feel
            const allElements = $w('*');
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                const currentTransition = element.style.transition || '';
                
                // Reduce transition durations
                if (currentTransition.includes('0.3s') || currentTransition.includes('300ms')) {
                    element.style.transition = currentTransition.replace(/0\.3s|300ms/g, '0.15s');
                }
                
                if (currentTransition.includes('0.5s') || currentTransition.includes('500ms')) {
                    element.style.transition = currentTransition.replace(/0\.5s|500ms/g, '0.2s');
                }
                
                if (currentTransition.includes('0.8s') || currentTransition.includes('800ms')) {
                    element.style.transition = currentTransition.replace(/0\.8s|800ms/g, '0.3s');
                }
            });
            
            console.log('✅ Frame rate optimized to 30fps');
            
        } catch (error) {
            console.warn('Frame rate optimization failed:', error);
        }
    }
    
    // Setup animation performance monitoring
    function setupAnimationPerformanceMonitoring() {
        console.log('📈 Setting up animation performance monitoring...');
        
        try {
            let frameCount = 0;
            let lastTime = performance.now();
            let lowFrameRateCount = 0;
            
            function monitorFrameRate() {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    // Check if frame rate is too low
                    if (fps < 25) {
                        lowFrameRateCount++;
                        console.warn(`⚠️ Low frame rate detected: ${fps}fps`);
                        
                        // Apply emergency optimization if frame rate is consistently low
                        if (lowFrameRateCount >= 3) {
                            applyEmergencyAnimationOptimization();
                            lowFrameRateCount = 0;
                        }
                    } else {
                        lowFrameRateCount = 0;
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorFrameRate);
            }
            
            monitorFrameRate();
            
            console.log('✅ Animation performance monitoring active');
            
        } catch (error) {
            console.warn('Animation performance monitoring failed:', error);
        }
    }
    
    // Apply emergency animation optimization
    function applyEmergencyAnimationOptimization() {
        console.log('🚨 Applying emergency animation optimization...');
        
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Disable ALL animations
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
                
                // Remove all event handlers that might cause animations
                element.onMouseIn = null;
                element.onMouseOut = null;
                element.onClick = null;
                element.onScroll = null;
            });
            
            console.log('🚨 Emergency animation optimization applied');
            
        } catch (error) {
            console.warn('Emergency animation optimization failed:', error);
        }
    }
    
    // Implement adaptive animation quality
    function implementAdaptiveAnimationQuality() {
        console.log('🎯 Implementing adaptive animation quality...');
        
        try {
            // Detect device capabilities
            const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
            const isLowEndDevice = detectLowEndDevice();
            
            // Adjust animation quality based on device
            if (isMobile || isLowEndDevice) {
                applyLowQualityAnimations();
            } else {
                applyMediumQualityAnimations();
            }
            
            console.log('✅ Adaptive animation quality applied');
            
        } catch (error) {
            console.warn('Adaptive animation quality failed:', error);
        }
    }
    
    // Detect low-end device
    function detectLowEndDevice() {
        try {
            // Simple detection based on available memory and CPU cores
            if (typeof navigator !== 'undefined') {
                const memory = navigator.deviceMemory || 4; // Default to 4GB if not available
                const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores if not available
                
                return memory < 4 || cores < 4;
            }
            
            return false;
        } catch (error) {
            return false;
        }
    }
    
    // Apply low quality animations
    function applyLowQualityAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Use only opacity animations
                element.style.transition = 'opacity 0.1s ease';
                element.style.animation = 'none';
                element.style.transform = 'none';
                element.style.filter = 'none';
                element.style.backdropFilter = 'none';
                element.style.boxShadow = 'none';
                
                // Simple hover effect
                element.onMouseIn = () => {
                    element.style.opacity = '0.8';
                };
                
                element.onMouseOut = () => {
                    element.style.opacity = '1';
                };
            });
            
            console.log('✅ Low quality animations applied');
            
        } catch (error) {
            console.warn('Low quality animations failed:', error);
        }
    }
    
    // Apply medium quality animations
    function applyMediumQualityAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach(element => {
                if (!element || !element.style) return;
                
                // Use simple transitions
                element.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
                
                // Simple hover effects
                element.onMouseIn = () => {
                    element.style.opacity = '0.9';
                    element.style.transform = 'scale(1.01)';
                };
                
                element.onMouseOut = () => {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                };
            });
            
            console.log('✅ Medium quality animations applied');
            
        } catch (error) {
            console.warn('Medium quality animations failed:', error);
        }
    }
    
    // Create lightweight CSS animations
    function createLightweightCSSAnimations() {
        try {
            // Add lightweight CSS animations to document head
            if (typeof window !== 'undefined' && window.document) {
                const style = window.document.createElement('style');
                style.textContent = `
                    /* Lightweight fade-in animation */
                    @keyframes lightweightFadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    
                    /* Lightweight slide-in animation */
                    @keyframes lightweightSlideIn {
                        from { 
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to { 
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    /* Lightweight pulse animation */
                    @keyframes lightweightPulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.8; }
                    }
                    
                    /* Apply lightweight animations */
                    .lightweight-fade-in {
                        animation: lightweightFadeIn 0.3s ease;
                    }
                    
                    .lightweight-slide-in {
                        animation: lightweightSlideIn 0.3s ease;
                    }
                    
                    .lightweight-pulse {
                        animation: lightweightPulse 1s ease-in-out infinite;
                    }
                `;
                window.document.head.appendChild(style);
            }
            
        } catch (error) {
            console.warn('Lightweight CSS animations failed:', error);
        }
    }
    
    // Apply lightweight animations to elements
    function applyLightweightAnimations() {
        try {
            const allElements = $w('*');
            
            allElements.forEach((element, index) => {
                if (!element || !element.style) return;
                
                // Apply staggered lightweight animations
                setTimeout(() => {
                    element.style.animation = 'lightweightFadeIn 0.3s ease';
                    element.style.opacity = '1';
                }, index * 50); // Stagger by 50ms
            });
            
        } catch (error) {
            console.warn('Apply lightweight animations failed:', error);
        }
    }
}); 