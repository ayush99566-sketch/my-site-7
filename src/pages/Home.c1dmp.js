// Ultra-Fast Loading JavaScript - Minimal and Optimized

// Simple initialization without heavy operations
(function() {
    // Minimal state management
    const state = {
        isMobile: window.innerWidth < 768,
        isMenuOpen: false
    };
    
    // Simple element cache
    const elements = {};
    
    // Get element function
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
    
    // Simple scroll handler - minimal processing
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            const nav = getElement('#navigation');
            if (nav) {
                const scrollY = window.scrollY;
                const opacity = Math.min(scrollY / 100, 1);
                nav.style.backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
            }
            scrollTimeout = null;
        }, 16); // 60fps
    }
    
    // Simple smooth scroll
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Initialize when DOM is ready
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
        
        // Initialize scroll handler
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
        
        // Hide loading indicator
        const loadingIndicator = getElement('#loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
            }, 200);
        }
        
        // Mark as loaded
        document.body.classList.add('loaded');
        
        console.log('Ultra-fast initialization complete');
    }
    
    // Initialize when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Fallback initialization
    setTimeout(init, 1000);
    
    // Export minimal API
    window.siteApp = {
        toggleMenu,
        smoothScroll,
        state
    };
})();
