// 🚀 Mobile Enhancement Script for TRYB Studios
// This script adds advanced mobile optimizations to existing pages

class MobileEnhancer {
    constructor() {
        this.state = {
            isMobile: window.innerWidth < 768,
            isMenuOpen: false,
            isScrolling: false,
            lastScrollY: 0,
            scrollRAF: null
        };
        
        this.init();
    }
    
    init() {
        this.createMobileMenu();
        this.enhanceTouchInteractions();
        this.addMobileOptimizations();
        this.setupEventListeners();
        this.logMobileStatus();
    }
    
    createMobileMenu() {
        // Create hamburger button
        const nav = document.querySelector('.nav-container');
        if (!nav) return;
        
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.id = 'hamburger';
        hamburger.setAttribute('aria-label', 'Toggle mobile menu');
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        // Create mobile menu overlay
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.id = 'mobileMenu';
        
        const menuList = document.createElement('ul');
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const li = document.createElement('li');
            const mobileLink = document.createElement('a');
            mobileLink.href = link.href;
            mobileLink.textContent = link.textContent;
            mobileLink.className = 'mobile-nav-link';
            li.appendChild(mobileLink);
            menuList.appendChild(li);
        });
        
        mobileMenu.appendChild(menuList);
        
        // Add to DOM
        nav.appendChild(hamburger);
        document.body.appendChild(mobileMenu);
        
        // Add CSS for mobile menu
        this.addMobileMenuCSS();
    }
    
    addMobileMenuCSS() {
        const style = document.createElement('style');
        style.textContent = `
            .hamburger {
                display: none;
                flex-direction: column;
                cursor: pointer;
                padding: 0.5rem;
                background: none;
                border: none;
                z-index: 1001;
            }
            
            .hamburger span {
                width: 25px;
                height: 3px;
                background: #333;
                margin: 3px 0;
                transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border-radius: 2px;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
            
            .mobile-menu {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .mobile-menu.active {
                opacity: 1;
                visibility: visible;
            }
            
            .mobile-menu ul {
                list-style: none;
                text-align: center;
            }
            
            .mobile-menu li {
                margin: 2rem 0;
            }
            
            .mobile-menu a {
                font-size: 1.5rem;
                font-weight: 600;
                color: #333;
                text-decoration: none;
                padding: 1rem 2rem;
                display: block;
                border-radius: 12px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .mobile-menu a:hover {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                transform: scale(1.05);
            }
            
            @media (max-width: 768px) {
                .nav-menu {
                    display: none;
                }
                
                .hamburger {
                    display: flex;
                }
                
                .btn {
                    min-height: 48px;
                    min-width: 120px;
                    touch-action: manipulation;
                }
                
                .btn-container {
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                
                .btn {
                    width: 100%;
                    max-width: 300px;
                    text-align: center;
                }
                
                .hero-title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                }
                
                .hero-subtitle {
                    font-size: clamp(1rem, 3vw, 1.25rem);
                }
                
                .features-grid {
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                
                .features {
                    padding: 2rem 1rem;
                }
                
                .feature-card {
                    padding: 1.5rem;
                }
            }
            
            @media (hover: none) and (pointer: coarse) {
                .btn:hover {
                    transform: none;
                    box-shadow: none;
                }
                
                .nav-link:hover {
                    transform: none;
                }
                
                .feature-card:hover {
                    transform: none;
                }
            }
            
            @media (max-width: 768px) and (orientation: landscape) {
                .hero {
                    min-height: 80vh;
                    padding-top: 60px;
                }
                
                .hero-title {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                }
                
                .hero-subtitle {
                    font-size: clamp(0.875rem, 2.5vw, 1rem);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    enhanceTouchInteractions() {
        // Enhanced touch feedback for buttons
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
            }, { passive: true });
            
            btn.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
            }, { passive: true });
        });
        
        // Add touch feedback to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
            }, { passive: true });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 150);
            }, { passive: true });
        });
    }
    
    addMobileOptimizations() {
        // Add mobile-specific viewport meta tag if not present
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
            document.head.appendChild(viewport);
        }
        
        // Add touch-action to body for better scrolling
        document.body.style.touchAction = 'manipulation';
        
        // Optimize for mobile performance
        if (this.state.isMobile) {
            document.documentElement.style.setProperty('--scroll-behavior', 'auto');
        }
    }
    
    setupEventListeners() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        if (hamburger && mobileMenu) {
            // Toggle menu
            hamburger.addEventListener('click', () => {
                this.state.isMenuOpen = !this.state.isMenuOpen;
                hamburger.classList.toggle('active', this.state.isMenuOpen);
                mobileMenu.classList.toggle('active', this.state.isMenuOpen);
                document.body.style.overflow = this.state.isMenuOpen ? 'hidden' : '';
            });
            
            // Close menu on link click
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.state.isMenuOpen = false;
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu on outside click
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    this.state.isMenuOpen = false;
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.state.isMenuOpen) {
                    this.state.isMenuOpen = false;
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Handle swipe gestures for mobile menu
            let startY = 0;
            let currentY = 0;
            
            mobileMenu.addEventListener('touchstart', (e) => {
                startY = e.touches[0].clientY;
            }, { passive: true });
            
            mobileMenu.addEventListener('touchmove', (e) => {
                currentY = e.touches[0].clientY;
            }, { passive: true });
            
            mobileMenu.addEventListener('touchend', () => {
                const swipeDistance = startY - currentY;
                if (swipeDistance > 50 && this.state.isMenuOpen) {
                    this.state.isMenuOpen = false;
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }, { passive: true });
        }
        
        // Handle resize events
        window.addEventListener('resize', () => {
            this.state.isMobile = window.innerWidth < 768;
        }, { passive: true });
        
        // Prevent zoom on double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    logMobileStatus() {
        console.log('📱 Mobile Enhancement Status:');
        console.log(`   - Mobile detected: ${this.state.isMobile ? 'Yes' : 'No'}`);
        console.log(`   - Screen width: ${window.innerWidth}px`);
        console.log(`   - Touch support: ${('ontouchstart' in window) ? 'Yes' : 'No'}`);
        console.log(`   - Device pixel ratio: ${window.devicePixelRatio || 1}`);
        console.log('✅ Mobile optimizations applied successfully!');
    }
}

// Initialize mobile enhancement when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MobileEnhancer();
    });
} else {
    new MobileEnhancer();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileEnhancer;
} 