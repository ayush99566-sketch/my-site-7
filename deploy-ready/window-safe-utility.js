// 🛡️ Window Safety Utility for Wix SSR Compatibility
// This utility prevents "window is not defined" errors during server-side rendering

// Safe window object access
const safeWindow = {
    // Check if window exists before accessing
    exists: () => typeof window !== 'undefined',
    
    // Safe property access with fallback
    get: (property, fallback = null) => {
        return typeof window !== 'undefined' ? window[property] : fallback;
    },
    
    // Safe method calls
    call: (method, ...args) => {
        if (typeof window !== 'undefined' && typeof window[method] === 'function') {
            return window[method](...args);
        }
        return null;
    },
    
    // Safe event listener addition
    addEventListener: (event, handler, options) => {
        if (typeof window !== 'undefined') {
            window.addEventListener(event, handler, options);
        }
    },
    
    // Safe event listener removal
    removeEventListener: (event, handler, options) => {
        if (typeof window !== 'undefined') {
            window.removeEventListener(event, handler, options);
        }
    },
    
    // Common window properties with safe access
    innerWidth: () => safeWindow.get('innerWidth', 1024),
    innerHeight: () => safeWindow.get('innerHeight', 768),
    scrollY: () => safeWindow.get('scrollY', 0),
    pageYOffset: () => safeWindow.get('pageYOffset', 0),
    
    // Safe scroll methods
    scrollTo: (x, y) => {
        if (typeof window !== 'undefined') {
            window.scrollTo(x, y);
        }
    },
    
    // Safe resize detection
    isMobile: () => {
        const width = safeWindow.innerWidth();
        return width < 768;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = safeWindow;
} 