#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Wix Code Restore Script');
console.log('==========================\n');

// Custom code content for each file
const customCode = {
    'masterPage.js': `// Custom JavaScript for Wix Site - Performance Optimized

$w.onReady(function () {
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
            elements[selector] = $w(selector);
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
            menu.expand();
            toggle.expand();
        } else {
            menu.collapse();
            toggle.collapse();
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
                const opacity = Math.min(scrollY / 100, 1);
                nav.style.backgroundColor = \`rgba(255, 255, 255, \${opacity * 0.95})\`;
            }
            scrollTimeout = null;
        }, 100);
    }
    
    // Simple scroll to element
    function smoothScroll(target) {
        const element = $w(target);
        if (element) {
            element.scrollTo();
        }
    }
    
    // Initialize all functionality
    function init() {
        // Initialize mobile menu
        const menuToggle = getElement('#navMenuToggle');
        if (menuToggle) {
            menuToggle.onClick(() => toggleMenu());
        }
        
        // Initialize navigation links
        const navLinks = $w('.nav-link');
        navLinks.forEach(link => {
            link.onClick((e) => {
                e.preventDefault();
                const href = link.link;
                if (href && href.startsWith('#')) {
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
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.isMenuOpen) {
                toggleMenu();
            }
        });
        
        // SIMPLIFIED button interactions - No heavy effects
        const buttons = $w('.btn');
        buttons.forEach(button => {
            button.onMouseIn(() => {
                if (!state.isMobile) {
                    button.opacity = 0.8;
                }
            });
            
            button.onMouseOut(() => {
                if (!state.isMobile) {
                    button.opacity = 1;
                }
            });
        });
        
        // Mark as loaded
        state.isLoaded = true;
        console.log('Wix Velo initialization complete - Performance optimized');
    }
    
    // Initialize immediately since Wix handles DOM ready
    init();
    
    // Export API for global access
    window.siteApp = {
        toggleMenu,
        smoothScroll,
        state,
        elements
    };
});`,

    'Main Page.houvp.js': `// Main Page JavaScript - Homepage Customizations

$w.onReady(function () {
    console.log('Main page loaded - Initializing custom features');
    
    // Initialize hero section animations
    const heroSection = $w('#heroSection');
    if (heroSection) {
        heroSection.opacity = 0;
        setTimeout(() => {
            heroSection.opacity = 1;
        }, 300);
    }
    
    // Initialize call-to-action buttons
    const ctaButtons = $w('.cta-button');
    ctaButtons.forEach(button => {
        button.onClick(() => {
            console.log('CTA button clicked');
        });
        
        button.onMouseIn(() => {
            button.scale = 1.05;
        });
        
        button.onMouseOut(() => {
            button.scale = 1;
        });
    });
    
    // Initialize testimonials slider if present
    const testimonialSlider = $w('#testimonialSlider');
    if (testimonialSlider) {
        setInterval(() => {
            testimonialSlider.next();
        }, 5000);
    }
    
    // Initialize contact form if present
    const contactForm = $w('#contactForm');
    if (contactForm) {
        contactForm.onSubmit((event) => {
            console.log('Contact form submitted');
        });
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = $w('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.onClick((event) => {
            event.preventDefault();
            const targetId = link.href.split('#')[1];
            const targetElement = $w(\`#\${targetId}\`);
            if (targetElement) {
                targetElement.scrollTo();
            }
        });
    });
    
    // Performance optimization: Lazy load images
    const lazyImages = $w('img[data-src]');
    lazyImages.forEach(img => {
        img.src = img.getAttribute('data-src');
    });
    
    console.log('Main page initialization complete');
});`,

    'TEST_PAGE_MAIN.i8nzx.js': `// Test Page JavaScript - Development and Testing Features

$w.onReady(function () {
    console.log('Test page loaded - Development mode active');
    
    const debugMode = true;
    
    if (debugMode) {
        console.log('Page elements found:', {
            buttons: $w('button').length,
            images: $w('img').length,
            text: $w('text').length,
            containers: $w('container').length
        });
        
        const interactiveElements = $w('button, link, image');
        interactiveElements.forEach(element => {
            element.onClick(() => {
                console.log('Element clicked:', element.id || element.tagName);
            });
        });
    }
    
    // Test form validation
    const testForm = $w('#testForm');
    if (testForm) {
        testForm.onSubmit((event) => {
            console.log('Test form submitted');
            const formData = testForm.value;
            console.log('Form data:', formData);
        });
    }
    
    // Test animations and transitions
    const testElements = $w('.test-element');
    testElements.forEach(element => {
        element.onMouseIn(() => {
            element.opacity = 0.8;
            element.scale = 1.1;
        });
        
        element.onMouseOut(() => {
            element.opacity = 1;
            element.scale = 1;
        });
    });
    
    // Performance testing
    const startTime = performance.now();
    setTimeout(() => {
        const endTime = performance.now();
        console.log(\`Page load performance: \${endTime - startTime}ms\`);
    }, 1000);
    
    // Test responsive behavior
    const testResponsive = () => {
        const isMobile = window.innerWidth < 768;
        console.log('Responsive test - Mobile:', isMobile);
        
        const responsiveElements = $w('.responsive');
        responsiveElements.forEach(element => {
            if (isMobile) {
                element.fontSize = '14px';
            } else {
                element.fontSize = '16px';
            }
        });
    };
    
    testResponsive();
    window.addEventListener('resize', testResponsive);
    
    console.log('Test page initialization complete');
});`,

    'TEST_TEST.a1699.js': `// Additional Test Page JavaScript - Comprehensive Testing

$w.onReady(function () {
    console.log('Additional test page loaded - Comprehensive testing active');
    
    // Test different Wix Velo features
    const testWixFeatures = () => {
        const dynamicContainer = $w('#dynamicContent');
        if (dynamicContainer) {
            setTimeout(() => {
                dynamicContainer.children[0].text = 'Dynamic content loaded successfully!';
            }, 2000);
        }
        
        let testState = {
            counter: 0,
            lastAction: null
        };
        
        const counterButton = $w('#counterButton');
        const counterDisplay = $w('#counterDisplay');
        
        if (counterButton && counterDisplay) {
            counterButton.onClick(() => {
                testState.counter++;
                testState.lastAction = 'increment';
                counterDisplay.text = \`Count: \${testState.counter}\`;
                console.log('Counter updated:', testState);
            });
        }
        
        const dataElements = $w('.data-bound');
        dataElements.forEach(element => {
            element.onChange((event) => {
                console.log('Data changed:', event.target.value);
            });
        });
    };
    
    // Test user interactions
    const testUserInteractions = () => {
        const hoverElements = $w('.hover-effect');
        hoverElements.forEach(element => {
            element.onMouseIn(() => {
                element.style.transform = 'translateY(-5px)';
            });
            
            element.onMouseOut(() => {
                element.style.transform = 'translateY(0)';
            });
        });
        
        document.addEventListener('keydown', (event) => {
            console.log('Key pressed:', event.key);
            
            if (event.ctrlKey && event.key === 't') {
                console.log('Test shortcut triggered');
            }
        });
        
        const touchElements = $w('.touch-enabled');
        touchElements.forEach(element => {
            element.onTouchStart(() => {
                console.log('Touch started on:', element.id);
            });
        });
    };
    
    // Test performance and optimization
    const testPerformance = () => {
        if (performance.memory) {
            console.log('Memory usage:', {
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                limit: performance.memory.jsHeapSizeLimit
            });
        }
        
        const images = $w('img');
        images.forEach(img => {
            img.onLoad(() => {
                console.log('Image loaded:', img.src);
            });
            
            img.onError(() => {
                console.error('Image failed to load:', img.src);
            });
        });
    };
    
    // Test accessibility features
    const testAccessibility = () => {
        const focusableElements = $w('button, link, input, textarea');
        focusableElements.forEach(element => {
            element.onFocus(() => {
                console.log('Element focused:', element.id);
            });
            
            element.onBlur(() => {
                console.log('Element blurred:', element.id);
            });
        });
        
        const screenReaderElements = $w('[aria-label]');
        screenReaderElements.forEach(element => {
            console.log('Screen reader element:', element.getAttribute('aria-label'));
        });
    };
    
    // Initialize all tests
    testWixFeatures();
    testUserInteractions();
    testPerformance();
    testAccessibility();
    
    // Test error handling
    try {
        const nonExistentElement = $w('#nonExistentElement');
        if (nonExistentElement) {
            nonExistentElement.onClick(() => {});
        }
    } catch (error) {
        console.log('Error handling test - Caught error:', error.message);
    }
    
    console.log('Comprehensive test page initialization complete');
});`
};

// Function to restore code
function restoreCode() {
    const pagesDir = path.join(__dirname, 'src', 'pages');
    
    if (!fs.existsSync(pagesDir)) {
        console.log('❌ Pages directory not found. Make sure you\'re in the correct project directory.');
        return;
    }
    
    console.log('📁 Found pages directory. Checking files...\n');
    
    let restoredCount = 0;
    
    for (const [filename, code] of Object.entries(customCode)) {
        const filepath = path.join(pagesDir, filename);
        
        if (fs.existsSync(filepath)) {
            const currentContent = fs.readFileSync(filepath, 'utf8');
            
            // Check if file contains default template
            if (currentContent.includes('API Reference: https://www.wix.com/velo/reference/api-overview/introduction') ||
                currentContent.includes('Write your JavaScript here') ||
                currentContent.includes('Click \'Preview\' to run your code')) {
                
                // Restore custom code
                fs.writeFileSync(filepath, code);
                console.log(`✅ Restored: ${filename}`);
                restoredCount++;
            } else {
                console.log(`✅ Already custom: ${filename}`);
            }
        } else {
            console.log(`⚠️  Not found: ${filename}`);
        }
    }
    
    console.log(`\n🎉 Restoration complete! ${restoredCount} files restored.`);
    
    if (restoredCount > 0) {
        console.log('\n📝 Next steps:');
        console.log('1. Run: npx @wix/cli publish');
        console.log('2. Always use: npx @wix/cli dev (for local editing)');
        console.log('3. Never edit directly in the online Wix editor');
    }
}

// Run the restore
restoreCode(); 