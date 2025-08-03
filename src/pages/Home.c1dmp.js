// Smooth Performance JavaScript - Optimized for Zero Lag After Loading

// Initialize when DOM is ready
(function() {
    // Simple state management
    const state = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false,
        isLoaded: false
    };
    
    // Element cache for performance
    const elements = {};
    
    // Get element function with caching
    function getElement(selector) {
        if (!elements[selector]) {
            elements[selector] = document.querySelector(selector);
        }
        return elements[selector];
    }
    
    // Smooth mobile menu toggle
    function toggleMenu() {
        const menu = getElement('#navMenu');
        const toggle = getElement('#navMenuToggle');
        
        if (!menu || !toggle) return;
        
        state.isMenuOpen = !state.isMenuOpen;
        
        if (state.isMenuOpen) {
            menu.classList.add('active');
            toggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // OPTIMIZED scroll handler - Simplified for smooth scrolling
    let scrollTimeout;
    let lastScrollY = 0;
    function handleScroll() {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            const scrollY = window.scrollY;
            const nav = getElement('#navigation');
            
            if (nav) {
                // Only update nav if scroll position changed significantly
                if (Math.abs(scrollY - lastScrollY) > 5) {
                    const opacity = Math.min(scrollY / 100, 1);
                    nav.style.backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                    
                    // Simplified shadow update
                    if (scrollY > 10) {
                        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    } else {
                        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    }
                    
                    lastScrollY = scrollY;
                }
            }
            scrollTimeout = null;
        }, 32); // Reduced frequency for smoother performance
    }
    
    // Smooth scroll to element
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Initialize all functionality
    function init() {
        // Initialize mobile menu
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }
        
        // Initialize navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    smoothScroll(href);
                }
                if (state.isMenuOpen) {
                    toggleMenu();
                }
            });
        });
        
        // OPTIMIZED scroll handler - Passive listener for smooth scrolling
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initialize resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                state.isMobile = window.innerWidth < 768;
                if (!state.isMobile && state.isMenuOpen) {
                    toggleMenu();
                }
            }, 100);
        }, { passive: true });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            const menu = getElement('#navMenu');
            const toggle = getElement('#navMenuToggle');
            
            if (state.isMenuOpen && 
                menu && !menu.contains(e.target) && 
                toggle && !toggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.isMenuOpen) {
                toggleMenu();
            }
        });
        
        // Initialize button interactions
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            // Desktop hover effects
            button.addEventListener('mouseenter', () => {
                if (!state.isMobile) {
                    button.style.transform = 'translateY(-2px)';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                if (!state.isMobile) {
                    button.style.transform = 'translateY(0)';
                }
            });
            
            // Mobile touch feedback
            if (state.isMobile) {
                button.addEventListener('touchstart', () => {
                    button.style.transform = 'translateY(1px)';
                });
                
                button.addEventListener('touchend', () => {
                    setTimeout(() => {
                        button.style.transform = 'translateY(0)';
                    }, 150);
                });
            }
        });
        
        // REMOVED heavy content card animations that cause scroll lag
        // Cards will now render normally without intersection observer
        
        // Mark as loaded
        state.isLoaded = true;
        document.body.classList.add('loaded');
        
        console.log('Optimized smooth performance initialization complete');
    }
    
    // Wait for loading screen to complete
    function waitForLoadingComplete() {
        const mainContent = document.querySelector('.main-content');
        if (mainContent && mainContent.classList.contains('loaded')) {
            init();
        } else {
            setTimeout(waitForLoadingComplete, 100);
        }
    }
    
    // Start initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForLoadingComplete);
    } else {
        waitForLoadingComplete();
    }
    
    // Fallback initialization
    setTimeout(waitForLoadingComplete, 3000);
    
    // Export API
    window.siteApp = {
        toggleMenu,
        smoothScroll,
        state,
        elements
    };
})();
