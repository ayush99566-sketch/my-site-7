// Additional Test Page JavaScript - Comprehensive Testing

$w.onReady(function () {
    // Comprehensive testing functionality
    console.log('Additional test page loaded - Comprehensive testing active');
    
    // Test different Wix Velo features
    const testWixFeatures = () => {
        // Test dynamic content loading
        const dynamicContainer = $w('#dynamicContent');
        if (dynamicContainer) {
            // Simulate dynamic content loading
            setTimeout(() => {
                dynamicContainer.children[0].text = 'Dynamic content loaded successfully!';
            }, 2000);
        }
        
        // Test state management
        let testState = {
            counter: 0,
            lastAction: null
        };
        
        // Test counter functionality
        const counterButton = $w('#counterButton');
        const counterDisplay = $w('#counterDisplay');
        
        if (counterButton && counterDisplay) {
            counterButton.onClick(() => {
                testState.counter++;
                testState.lastAction = 'increment';
                counterDisplay.text = `Count: ${testState.counter}`;
                console.log('Counter updated:', testState);
            });
        }
        
        // Test data binding
        const dataElements = $w('.data-bound');
        dataElements.forEach(element => {
            element.onChange((event) => {
                console.log('Data changed:', event.target.value);
            });
        });
    };
    
    // Test user interactions
    const testUserInteractions = () => {
        // Test hover effects
        const hoverElements = $w('.hover-effect');
        hoverElements.forEach(element => {
            element.onMouseIn(() => {
                element.style.transform = 'translateY(-5px)';
            });
            
            element.onMouseOut(() => {
                element.style.transform = 'translateY(0)';
            });
        });
        
        // Test keyboard navigation
        document.addEventListener('keydown', (event) => {
            console.log('Key pressed:', event.key);
            
            // Test keyboard shortcuts
            if (event.ctrlKey && event.key === 't') {
                console.log('Test shortcut triggered');
            }
        });
        
        // Test touch events for mobile
        const touchElements = $w('.touch-enabled');
        touchElements.forEach(element => {
            element.onTouchStart(() => {
                console.log('Touch started on:', element.id);
            });
        });
    };
    
    // Test performance and optimization
    const testPerformance = () => {
        // Monitor memory usage
        if (performance.memory) {
            console.log('Memory usage:', {
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                limit: performance.memory.jsHeapSizeLimit
            });
        }
        
        // Test image loading performance
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
        // Test focus management
        const focusableElements = $w('button, link, input, textarea');
        focusableElements.forEach(element => {
            element.onFocus(() => {
                console.log('Element focused:', element.id);
            });
            
            element.onBlur(() => {
                console.log('Element blurred:', element.id);
            });
        });
        
        // Test screen reader compatibility
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
        // Simulate potential errors
        const nonExistentElement = $w('#nonExistentElement');
        if (nonExistentElement) {
            nonExistentElement.onClick(() => {});
        }
    } catch (error) {
        console.log('Error handling test - Caught error:', error.message);
    }
    
    console.log('Comprehensive test page initialization complete');
});
