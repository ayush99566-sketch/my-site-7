// 🚀 Mobile Optimization Application Script
// This script automatically applies mobile optimizations to all pages

const fs = require('fs');
const path = require('path');

// Mobile optimization components
const safeWindowUtility = `
// 🛡️ Window Safety Utility (Injected for Wix SSR Compatibility)
const safeWindow = {
    exists: () => typeof window !== 'undefined',
    get: (property, fallback = null) => {
        return typeof window !== 'undefined' ? window[property] : fallback;
    },
    call: (method, ...args) => {
        if (typeof window !== 'undefined' && typeof window[method] === 'function') {
            return window[method](...args);
        }
        return null;
    },
    addEventListener: (event, handler, options) => {
        if (typeof window !== 'undefined') {
            window.addEventListener(event, handler, options);
        }
    },
    removeEventListener: (event, handler, options) => {
        if (typeof window !== 'undefined') {
            window.removeEventListener(event, handler, options);
        }
    },
    innerWidth: () => safeWindow.get('innerWidth', 1024),
    innerHeight: () => safeWindow.get('innerHeight', 768),
    scrollY: () => safeWindow.get('scrollY', 0),
    pageYOffset: () => safeWindow.get('pageYOffset', 0),
    scrollTo: (x, y) => {
        if (typeof window !== 'undefined') {
            window.scrollTo(x, y);
        }
    },
    isMobile: () => {
        const width = safeWindow.innerWidth();
        return width < 768;
    }
};
`;

const mobileMenuHTML = `
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" id="mobileMenu">
        <ul>
            <li><a href="#home" class="mobile-nav-link">Home</a></li>
            <li><a href="#features" class="mobile-nav-link">Features</a></li>
            <li><a href="#about" class="mobile-nav-link">About</a></li>
            <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
        </ul>
    </div>
`;

const hamburgerButton = `
            <button class="hamburger" id="hamburger" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
`;

const mobileCSS = `
        /* Mobile Menu Styles */
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
        
        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
            
            .hamburger {
                display: flex;
            }
            
            .hero {
                padding: 1rem;
                padding-top: 80px;
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
                min-height: 48px;
                min-width: 120px;
                touch-action: manipulation;
            }
            
            .features-grid, .testimonials-container {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .features, .testimonials, .contact {
                padding: 2rem 1rem;
            }
            
            .feature-card, .testimonial {
                padding: 1.5rem;
            }
            
            .hero-title {
                font-size: clamp(2rem, 5vw, 3.5rem);
            }
            
            .hero-subtitle {
                font-size: clamp(1rem, 3vw, 1.25rem);
            }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
            .btn:hover {
                transform: none;
                box-shadow: none;
            }
            
            .nav-link:hover {
                transform: none;
            }
            
            .feature-card:hover, .testimonial:hover {
                transform: none;
            }
        }
        
        /* Landscape mobile optimization */
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

const mobileJavaScript = `
        // Mobile menu functionality
        function initMobileMenu() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            
            if (!hamburger || !mobileMenu) return;
            
            // Toggle menu
            hamburger.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.contains('active');
                hamburger.classList.toggle('active', !isOpen);
                mobileMenu.classList.toggle('active', !isOpen);
                document.body.style.overflow = !isOpen ? 'hidden' : '';
            });
            
            // Close menu on link click
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu on outside click
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // Enhanced touch feedback
        function initTouchFeedback() {
            const buttons = document.querySelectorAll('.btn');
            const cards = document.querySelectorAll('.feature-card, .testimonial');
            
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
            
            cards.forEach(card => {
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
        
        // Initialize mobile features
        function initializeMobileFeatures() {
            initMobileMenu();
            initTouchFeedback();
            
            // Prevent zoom on double tap
            let lastTouchEnd = 0;
            document.addEventListener('touchend', (event) => {
                const now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                    event.preventDefault();
                }
                lastTouchEnd = now;
            }, false);
            
            console.log('📱 Mobile optimizations applied successfully!');
        }
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileFeatures);
        } else {
            initializeMobileFeatures();
        }
`;

function applyMobileOptimizations() {
    const deployReadyDir = './deploy-ready';
    const files = fs.readdirSync(deployReadyDir);
    
    console.log('🚀 Applying mobile optimizations to all pages...\n');
    
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(deployReadyDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            console.log(`📱 Processing: ${file}`);
            
            // Check if mobile optimizations are already applied
            if (content.includes('safeWindow') && content.includes('hamburger')) {
                console.log(`   ✅ Already optimized: ${file}`);
                return;
            }
            
            // Add SafeWindow utility if not present
            if (!content.includes('safeWindow')) {
                const scriptStart = content.indexOf('<script>');
                if (scriptStart !== -1) {
                    content = content.slice(0, scriptStart + 8) + '\n' + safeWindowUtility + content.slice(scriptStart + 8);
                }
            }
            
            // Add hamburger button to navigation
            if (!content.includes('hamburger')) {
                const navEnd = content.indexOf('</ul>', content.indexOf('.nav-menu'));
                if (navEnd !== -1) {
                    content = content.slice(0, navEnd + 5) + '\n' + hamburgerButton + content.slice(navEnd + 5);
                }
            }
            
            // Add mobile menu overlay
            if (!content.includes('mobile-menu')) {
                const navEnd = content.indexOf('</nav>');
                if (navEnd !== -1) {
                    content = content.slice(0, navEnd) + '\n' + mobileMenuHTML + content.slice(navEnd);
                }
            }
            
            // Add mobile CSS
            if (!content.includes('.hamburger')) {
                const styleEnd = content.indexOf('</style>');
                if (styleEnd !== -1) {
                    content = content.slice(0, styleEnd) + mobileCSS + content.slice(styleEnd);
                }
            }
            
            // Add mobile JavaScript
            if (!content.includes('initMobileMenu')) {
                const scriptEnd = content.lastIndexOf('</script>');
                if (scriptEnd !== -1) {
                    content = content.slice(0, scriptEnd) + mobileJavaScript + content.slice(scriptEnd);
                }
            }
            
            // Update viewport meta tag
            if (!content.includes('maximum-scale=5.0')) {
                content = content.replace(
                    /<meta name="viewport"[^>]*>/,
                    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">'
                );
            }
            
            // Add touch-action to body
            if (!content.includes('touch-action: manipulation')) {
                content = content.replace(
                    /body\s*\{/,
                    'body {\n            touch-action: manipulation;'
                );
            }
            
            // Write updated content
            fs.writeFileSync(filePath, content);
            console.log(`   ✅ Optimized: ${file}`);
        }
    });
    
    console.log('\n🎉 Mobile optimizations applied successfully to all pages!');
    console.log('\n📋 Next Steps:');
    console.log('1. Test all pages on mobile devices');
    console.log('2. Verify hamburger menu functionality');
    console.log('3. Check touch feedback on buttons and cards');
    console.log('4. Test responsive design across different screen sizes');
    console.log('5. Deploy to Wix Studio');
}

// Run the optimization
if (require.main === module) {
    applyMobileOptimizations();
}

module.exports = { applyMobileOptimizations }; 