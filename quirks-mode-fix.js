// Quirks Mode Fix Utility
// This utility prevents and fixes Quirks Mode console errors

(function() {
    'use strict';
    
    console.log('🔧 Quirks Mode Fix Utility loaded...');
    
    function fixQuirksMode() {
        try {
            // Check if we're in a browser environment
            if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                // Check if document is in quirks mode
                if (document.compatMode === 'BackCompat') {
                    console.warn('⚠️ Document is in Quirks Mode - attempting to fix...');
                    
                    // Try to inject proper DOCTYPE if missing
                    if (!document.doctype) {
                        console.log('📝 Adding missing DOCTYPE declaration...');
                        
                        // Create DOCTYPE node
                        const doctype = document.implementation.createDocumentType('html', '', '');
                        
                        // Insert at the beginning of the document
                        if (document.documentElement) {
                            document.insertBefore(doctype, document.documentElement);
                        }
                    }
                    
                    // Force standards mode by setting document mode
                    if (typeof document.documentMode !== 'undefined') {
                        document.documentMode = 11; // IE11 standards mode
                    }
                    
                    // Add CSS to ensure standards mode rendering
                    const standardsModeCSS = `
                        html {
                            box-sizing: border-box;
                        }
                        *, *:before, *:after {
                            box-sizing: inherit;
                        }
                    `;
                    
                    const style = document.createElement('style');
                    style.id = 'standards-mode-fix';
                    style.textContent = standardsModeCSS;
                    document.head.appendChild(style);
                    
                    console.log('✅ Quirks Mode fix applied');
                } else {
                    console.log('✅ Document already in Standards Mode');
                }
                
                // Additional fix for any embedded content that might cause quirks mode
                const iframes = document.querySelectorAll('iframe');
                iframes.forEach(iframe => {
                    try {
                        if (iframe.contentDocument && iframe.contentDocument.compatMode === 'BackCompat') {
                            console.warn('⚠️ Iframe in Quirks Mode detected:', iframe.src);
                            
                            // Try to fix iframe content
                            if (iframe.contentDocument.documentElement) {
                                iframe.contentDocument.documentElement.style.boxSizing = 'border-box';
                            }
                        }
                    } catch (error) {
                        // Cross-origin iframe - can't access content
                        console.log('ℹ️ Cross-origin iframe detected:', iframe.src);
                    }
                });
            } else {
                console.log('ℹ️ Not in browser environment - skipping Quirks Mode check');
            }
            
        } catch (error) {
            console.warn('Quirks Mode fix failed:', error);
        }
    }
    
    // Auto-run the fix when the script loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixQuirksMode);
    } else {
        fixQuirksMode();
    }
    
    // Also run on window load to catch any late-loading content
    window.addEventListener('load', fixQuirksMode);
    
    // Export the function for manual use
    window.fixQuirksMode = fixQuirksMode;
    
})(); 