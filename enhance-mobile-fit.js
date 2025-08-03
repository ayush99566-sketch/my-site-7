// 🚀 Enhanced Mobile Fit Optimization Script
// This script ensures the application fits properly on all mobile screen sizes

const fs = require('fs');
const path = require('path');

// Enhanced mobile CSS for better fit
const enhancedMobileCSS = `
        /* Enhanced Mobile Responsiveness for Better Fit */
        @media (max-width: 768px) {
            /* Navigation adjustments */
            .nav {
                padding: 0.75rem 1rem;
            }
            
            .nav-container {
                padding: 0 0.5rem;
            }
            
            .nav-logo {
                font-size: 1.25rem;
            }
            
            .nav-menu {
                display: none;
            }
            
            .hamburger {
                display: flex;
            }
            
            /* Hero section mobile fit */
            .hero {
                min-height: 100vh;
                padding: 1rem;
                padding-top: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .hero-content {
                width: 100%;
                max-width: 100%;
                padding: 0 1rem;
            }
            
            .hero-title {
                font-size: clamp(1.75rem, 6vw, 2.5rem);
                line-height: 1.2;
                margin-bottom: 0.75rem;
            }
            
            .hero-subtitle {
                font-size: clamp(0.875rem, 4vw, 1.125rem);
                margin-bottom: 1.5rem;
            }
            
            /* Button container mobile fit */
            .btn-container {
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 0.75rem;
            }
            
            .btn {
                width: 100%;
                max-width: 280px;
                min-height: 48px;
                padding: 0.875rem 1.5rem;
                font-size: 1rem;
                text-align: center;
                touch-action: manipulation;
            }
            
            /* Features section mobile fit */
            .features {
                padding: 2rem 1rem;
            }
            
            .features h2 {
                font-size: clamp(1.5rem, 5vw, 2rem);
                margin-bottom: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
                gap: 1.25rem;
                padding: 0 0.5rem;
            }
            
            .feature-card {
                padding: 1.25rem;
                margin: 0;
            }
            
            .feature-card h3 {
                font-size: 1.125rem;
                margin-bottom: 0.75rem;
            }
            
            .feature-card p {
                font-size: 0.875rem;
                line-height: 1.5;
            }
        }
        
        /* Small mobile devices (iPhone SE, etc.) */
        @media (max-width: 375px) {
            .hero {
                padding: 0.75rem;
                padding-top: 60px;
            }
            
            .hero-title {
                font-size: clamp(1.5rem, 7vw, 2rem);
            }
            
            .hero-subtitle {
                font-size: clamp(0.75rem, 4.5vw, 1rem);
            }
            
            .btn {
                max-width: 260px;
                padding: 0.75rem 1.25rem;
                font-size: 0.875rem;
            }
            
            .features {
                padding: 1.5rem 0.75rem;
            }
            
            .features-grid {
                gap: 1rem;
                padding: 0 0.25rem;
            }
            
            .feature-card {
                padding: 1rem;
            }
        }
        
        /* Medium mobile devices (iPhone 12/13) */
        @media (min-width: 376px) and (max-width: 428px) {
            .hero-title {
                font-size: clamp(1.875rem, 6.5vw, 2.25rem);
            }
            
            .hero-subtitle {
                font-size: clamp(0.875rem, 4.5vw, 1.125rem);
            }
            
            .btn {
                max-width: 300px;
            }
        }
        
        /* Large mobile devices (iPhone Pro Max, etc.) */
        @media (min-width: 429px) and (max-width: 768px) {
            .hero-title {
                font-size: clamp(2rem, 6vw, 2.5rem);
            }
            
            .hero-subtitle {
                font-size: clamp(1rem, 4vw, 1.25rem);
            }
            
            .btn {
                max-width: 320px;
            }
        }
        
        /* Landscape mobile optimization */
        @media (max-width: 768px) and (orientation: landscape) {
            .hero {
                min-height: 85vh;
                padding-top: 60px;
            }
            
            .hero-title {
                font-size: clamp(1.5rem, 5vw, 2rem);
                margin-bottom: 0.5rem;
            }
            
            .hero-subtitle {
                font-size: clamp(0.75rem, 3.5vw, 1rem);
                margin-bottom: 1rem;
            }
            
            .btn-container {
                flex-direction: row;
                justify-content: center;
                gap: 1rem;
            }
            
            .btn {
                width: auto;
                max-width: 200px;
                min-width: 160px;
            }
            
            .features {
                padding: 1.5rem 1rem;
            }
            
            .features-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
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
            
            .feature-card:hover {
                transform: none;
            }
            
            /* Enhanced touch targets */
            .btn, .nav-link, .hamburger {
                min-height: 44px;
                min-width: 44px;
            }
        }
        
        /* Safe area support for notched devices */
        @supports (padding: max(0px)) {
            .nav {
                padding-left: max(1rem, env(safe-area-inset-left));
                padding-right: max(1rem, env(safe-area-inset-right));
            }
            
            .hero {
                padding-left: max(1rem, env(safe-area-inset-left));
                padding-right: max(1rem, env(safe-area-inset-right));
            }
            
            .features {
                padding-left: max(1rem, env(safe-area-inset-left));
                padding-right: max(1rem, env(safe-area-inset-right));
            }
        }
        
        /* Prevent horizontal scrolling */
        body {
            overflow-x: hidden;
            width: 100%;
        }
        
        /* Ensure proper container sizing */
        .nav-container,
        .hero-content,
        .features-grid {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }
        
        /* Mobile menu fit improvements */
        .mobile-menu {
            padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
        }
        
        .mobile-menu a {
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
`;

// Enhanced viewport meta tag
const enhancedViewportMeta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover">';

// Enhanced body CSS
const enhancedBodyCSS = `
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #ffffff;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            touch-action: manipulation;
            width: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }
`;

function enhanceMobileFit() {
    const deployReadyDir = './deploy-ready';
    const files = fs.readdirSync(deployReadyDir);
    
    console.log('🚀 Enhancing mobile fit for all pages...\n');
    
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(deployReadyDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            console.log(`📱 Enhancing mobile fit: ${file}`);
            
            // Update viewport meta tag
            content = content.replace(
                /<meta name="viewport"[^>]*>/,
                enhancedViewportMeta
            );
            
            // Update body CSS
            content = content.replace(
                /body\s*\{[^}]*\}/,
                enhancedBodyCSS.trim()
            );
            
            // Add enhanced mobile CSS
            if (!content.includes('Enhanced Mobile Responsiveness')) {
                const styleEnd = content.lastIndexOf('</style>');
                if (styleEnd !== -1) {
                    content = content.slice(0, styleEnd) + enhancedMobileCSS + content.slice(styleEnd);
                }
            }
            
            // Write updated content
            fs.writeFileSync(filePath, content);
            console.log(`   ✅ Enhanced mobile fit: ${file}`);
        }
    });
    
    console.log('\n🎉 Mobile fit enhancement completed!');
    console.log('\n📱 Mobile Fit Improvements Applied:');
    console.log('   - Enhanced viewport handling for all screen sizes');
    console.log('   - Better scaling for small, medium, and large mobile devices');
    console.log('   - Improved landscape orientation support');
    console.log('   - Safe area support for notched devices');
    console.log('   - Enhanced touch targets (44px minimum)');
    console.log('   - Prevented horizontal scrolling');
    console.log('   - Optimized content spacing and padding');
    console.log('   - Better button and text sizing for mobile');
    
    console.log('\n📋 Next Steps:');
    console.log('1. Test on various mobile devices and screen sizes');
    console.log('2. Verify content fits properly without horizontal scrolling');
    console.log('3. Check touch targets are easily accessible');
    console.log('4. Test in both portrait and landscape orientations');
    console.log('5. Deploy to Wix Studio');
}

// Run the enhancement
if (require.main === module) {
    enhanceMobileFit();
}

module.exports = { enhanceMobileFit }; 