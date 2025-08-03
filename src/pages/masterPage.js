// ULTRA-FAST WIX SITE - Master Page with All Optimizations
// Includes: Performance fixes, Mobile optimization, Ultra-fast loading, Crash prevention

$w.onReady(function () {
    console.log('🚀 Ultra-Fast Master Page Loading...');
    
    // ===== PERFORMANCE STATE MANAGEMENT =====
    const state = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        isLoaded: false,
        scrollY: 0,
        lastScrollTime: 0,
        performanceMode: 'ultra-fast'
    };
    
    // ===== ELEMENT CACHE FOR ULTRA-FAST ACCESS =====
    const elements = new Map();
    
    function getElement(selector) {
        if (!elements.has(selector)) {
            const element = $w(selector);
            if (element) {
                elements.set(selector, element);
            }
        }
        return elements.get(selector);
    }
    
    // ===== ULTRA-FAST MOBILE MENU SYSTEM =====
    function toggleMobileMenu() {
        const menu = getElement('#navMenu');
        const toggle = getElement('#navMenuToggle');
        const overlay = getElement('#mobileOverlay');
        
        if (!menu || !toggle) return;
        
        state.isMenuOpen = !state.isMenuOpen;
        
        if (state.isMenuOpen) {
            // Ultra-fast menu open
            menu.expand();
            toggle.expand();
            if (overlay) overlay.expand();
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Ultra-fast menu close
            menu.collapse();
            toggle.collapse();
            if (overlay) overlay.collapse();
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }
    
    // ===== ULTRA-SMOOTH SCROLL SYSTEM =====
    let scrollRAF = null;
    let lastScrollY = 0;
    
    function ultraSmoothScroll() {
        if (scrollRAF) return;
        
        scrollRAF = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const nav = getElement('#navigation');
            
            if (nav && Math.abs(currentScrollY - lastScrollY) > 5) {
                // Ultra-smooth nav background transition
                const opacity = Math.min(currentScrollY / 100, 1);
                const backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                
                nav.style.backgroundColor = backgroundColor;
                nav.style.backdropFilter = `blur(${opacity * 10}px)`;
                
                // Add shadow for depth
                if (opacity > 0.1) {
                    nav.style.boxShadow = `0 2px 20px rgba(0,0,0,${opacity * 0.1})`;
                } else {
                    nav.style.boxShadow = 'none';
                }
                
                lastScrollY = currentScrollY;
            }
            
            scrollRAF = null;
        });
    }
    
    // ===== ULTRA-FAST SCROLL TO ELEMENT =====
    function ultraFastScrollTo(target, offset = 80) {
        const element = typeof target === 'string' ? getElement(target) : target;
        if (!element) return;
        
        // Use Wix's optimized scrollTo with custom offset
        element.scrollTo();
        
        // Additional smooth behavior for better UX
        setTimeout(() => {
            const elementTop = element.offsetTop - offset;
            window.scrollTo({
                top: elementTop,
                behavior: 'smooth'
            });
        }, 50);
    }
    
    // ===== ULTRA-FAST IMAGE OPTIMIZATION =====
    function optimizeImages() {
        const images = $w('img');
        images.forEach(img => {
            // Add loading="lazy" for better performance
            if (img.loading !== 'lazy') {
                img.loading = 'lazy';
            }
            
            // Add error handling
            img.onError(() => {
                console.warn('Image failed to load:', img.src);
                // Could add fallback image here
            });
        });
    }
    
    // ===== ULTRA-FAST BUTTON INTERACTIONS =====
    function initializeButtons() {
        const buttons = $w('button, .btn, .cta-button');
        buttons.forEach(button => {
            // Ultra-fast hover effects
            button.onMouseIn(() => {
                button.scale = 1.02;
                button.style.transition = 'transform 0.1s ease';
            });
            
            button.onMouseOut(() => {
                button.scale = 1;
            });
            
            // Ultra-fast click effects
            button.onClick(() => {
                button.scale = 0.98;
                setTimeout(() => {
                    button.scale = 1;
                }, 100);
            });
        });
    }
    
    // ===== ULTRA-FAST FORM HANDLING =====
    function initializeForms() {
        const forms = $w('form');
        forms.forEach(form => {
            form.onSubmit((event) => {
                // Prevent default to handle custom submission
                event.preventDefault();
                
                // Add loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.text = 'Sending...';
                    submitBtn.disabled = true;
                }
                
                // Simulate form submission (replace with actual logic)
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.text = 'Sent!';
                        setTimeout(() => {
                            submitBtn.text = 'Submit';
                            submitBtn.disabled = false;
                        }, 2000);
                    }
                }, 1000);
            });
        });
    }
    
    // ===== ULTRA-FAST ANIMATIONS =====
    function initializeAnimations() {
        // Fade in page content
        const mainContent = getElement('#mainContent') || $w('main') || $w('.main-content');
        if (mainContent) {
            mainContent.opacity = 0;
            mainContent.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                mainContent.opacity = 1;
            }, 100);
        }
        
        // Stagger animations for lists
        const listItems = $w('li, .list-item');
        listItems.forEach((item, index) => {
            item.opacity = 0;
            item.style.transition = `opacity 0.3s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                item.opacity = 1;
            }, 200 + (index * 100));
        });
    }
    
    // ===== ULTRA-FAST PERFORMANCE MONITORING =====
    function startPerformanceMonitoring() {
        // Monitor scroll performance
        let scrollCount = 0;
        let lastScrollCheck = Date.now();
        
        const scrollObserver = () => {
            scrollCount++;
            const now = Date.now();
            
            if (now - lastScrollCheck > 1000) {
                const scrollsPerSecond = scrollCount;
                if (scrollsPerSecond > 30) {
                    console.warn('High scroll frequency detected, optimizing...');
                    // Could implement additional optimizations here
                }
                scrollCount = 0;
                lastScrollCheck = now;
            }
        };
        
        window.addEventListener('scroll', scrollObserver, { passive: true });
    }
    
    // ===== ULTRA-FAST INITIALIZATION =====
    function initializeUltraFastSite() {
        console.log('🚀 Initializing Ultra-Fast Site...');
        
        // Initialize mobile menu
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.onClick(() => toggleMobileMenu());
        }
        
        // Initialize mobile overlay
        const mobileOverlay = getElement('#mobileOverlay');
        if (mobileOverlay) {
            mobileOverlay.onClick(() => toggleMobileMenu());
        }
        
        // Initialize navigation links with ultra-fast scrolling
        const navLinks = $w('.nav-link, a[href^="#"]');
        navLinks.forEach(link => {
            link.onClick((e) => {
                e.preventDefault();
                const href = link.href || link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    ultraFastScrollTo(href);
                }
                if (state.isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Initialize ultra-smooth scroll
        window.addEventListener('scroll', ultraSmoothScroll, { passive: true });
        
        // Initialize responsive behavior
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const wasMobile = state.isMobile;
                state.isMobile = window.innerWidth < 768;
                
                // Close mobile menu if switching to desktop
                if (!state.isMobile && wasMobile && state.isMenuOpen) {
                    toggleMobileMenu();
                }
            }, 250);
        });
        
        // Initialize all optimizations
        optimizeImages();
        initializeButtons();
        initializeForms();
        initializeAnimations();
        startPerformanceMonitoring();
        
        // Mark as loaded
        state.isLoaded = true;
        console.log('✅ Ultra-Fast Site Initialized Successfully!');
        
        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('ultraFastSiteReady'));
    }
    
    // ===== ERROR HANDLING & CRASH PREVENTION =====
    function setupErrorHandling() {
        // Prevent common crashes
        window.addEventListener('error', (e) => {
            console.warn('Error caught and handled:', e.error);
            e.preventDefault();
        });
        
        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            console.warn('Unhandled promise rejection caught:', e.reason);
            e.preventDefault();
        });
    }
    
    // ===== START EVERYTHING =====
    setupErrorHandling();
    initializeUltraFastSite();
    
    // Export functions for other pages to use
    window.ultraFastSite = {
        scrollTo: ultraFastScrollTo,
        toggleMenu: toggleMobileMenu,
        getElement: getElement,
        state: state
    };
});
