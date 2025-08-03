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
    
    // Smooth scroll handler with throttling
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            const nav = getElement('#navigation');
            if (nav) {
                const scrollY = window.scrollY;
                const opacity = Math.min(scrollY / 100, 1);
                nav.style.backgroundColor = `rgba(255, 255, 255, ${opacity * 0.95})`;
                
                // Add shadow when scrolled
                if (scrollY > 10) {
                    nav.style.boxShadow = `0 4px 20px rgba(0, 0, 0, ${Math.min(scrollY / 200, 0.15)})`;
                } else {
                    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            }
            scrollTimeout = null;
        }, 16); // 60fps
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
        
        // Initialize content card animations
        const cards = document.querySelectorAll('.content-card');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
        
        // Mark as loaded
        state.isLoaded = true;
        document.body.classList.add('loaded');
        
        console.log('Smooth performance initialization complete');
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
