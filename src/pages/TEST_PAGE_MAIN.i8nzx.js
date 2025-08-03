// Test Page JavaScript - Development and Testing Features

$w.onReady(function () {
    // Test page functionality for development
    console.log('Test page loaded - Development mode active');
    
    // Development tools and debugging
    const debugMode = true;
    
    if (debugMode) {
        // Add debug information to console
        console.log('Page elements found:', {
            buttons: $w('button').length,
            images: $w('img').length,
            text: $w('text').length,
            containers: $w('container').length
        });
        
        // Add click tracking for all interactive elements
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
            // Add form validation logic here
            const formData = testForm.value;
            console.log('Form data:', formData);
        });
    }
    
    // Test animations and transitions
    const testElements = $w('.test-element');
    testElements.forEach(element => {
        // Add test animations
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
    
    // Simulate some heavy operations for testing
    setTimeout(() => {
        const endTime = performance.now();
        console.log(`Page load performance: ${endTime - startTime}ms`);
    }, 1000);
    
    // Test responsive behavior
    const testResponsive = () => {
        const isMobile = window.innerWidth < 768;
        console.log('Responsive test - Mobile:', isMobile);
        
        // Adjust elements based on screen size
        const responsiveElements = $w('.responsive');
        responsiveElements.forEach(element => {
            if (isMobile) {
                element.fontSize = '14px';
            } else {
                element.fontSize = '16px';
            }
        });
    };
    
    // Test on load and resize
    testResponsive();
    window.addEventListener('resize', testResponsive);
    
    console.log('Test page initialization complete');
});
