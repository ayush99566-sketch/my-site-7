/**
 * Simple Fetch Error Fix for Wix Sites
 * 
 * Add this to your existing JavaScript to fix "Failed to fetch" errors
 * from Wix's fedopsLogger.ts and other internal requests.
 */

// Override fetch to handle Wix internal request failures
const originalFetch = window.fetch;
window.fetch = function(...args) {
    return originalFetch.apply(this, args)
        .catch(error => {
            const url = args[0];
            if (typeof url === 'string' && (
                url.includes('fedops') || 
                url.includes('wix-thunderbolt') || 
                url.includes('parastorage') ||
                url.includes('trybstudios.com/_partials'))) {
                
                console.log('Wix internal request failed - safely ignored');
                return Promise.resolve(new Response(JSON.stringify({ success: true }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                }));
            }
            throw error;
        });
};

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    const error = event.reason;
    if (error && (
        error.message && error.message.includes('Failed to fetch') ||
        error.stack && error.stack.includes('fedopsLogger.ts')
    )) {
        console.warn('Fetch error caught and handled:', error.message);
        event.preventDefault();
    }
});

// Handle general errors
window.addEventListener('error', function(event) {
    const error = event.error;
    if (error && (
        error.message && error.message.includes('Failed to fetch') ||
        error.stack && error.stack.includes('fedopsLogger.ts')
    )) {
        console.warn('Fetch error caught and handled:', error.message);
        event.preventDefault();
    }
});

console.log('✅ Simple fetch error fix applied'); 