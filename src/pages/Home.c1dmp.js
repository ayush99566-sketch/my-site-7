// Simplified JavaScript - No Hanging Operations

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
    
    // Simple mobile menu toggle
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
    
    // SIMPLIFIED scroll handler - Minimal operations
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            const scrollY = window.scrollY;
            const nav = getElement('#navigation');
            
            if (nav) {
                // Simple nav update only
                const opacity = Math.min(scrollY / 100, 1);
                nav.style.backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
            }
            scrollTimeout = null;
        }, 100); // Reduced frequency
    }
    
    // Simple scroll to element
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80;
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
        
        // SIMPLIFIED scroll handler - Passive listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Simple resize handler
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
        
        // SIMPLIFIED button interactions - No heavy effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            // Simple hover effects only
            button.addEventListener('mouseenter', () => {
                if (!state.isMobile) {
                    button.style.opacity = '0.8';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                if (!state.isMobile) {
                    button.style.opacity = '1';
                }
            });
        });
        
        // Mark as loaded
        state.isLoaded = true;
        document.body.classList.add('loaded');
        
        console.log('Simplified initialization complete - No hanging operations');
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
