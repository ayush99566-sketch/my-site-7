/**
 * Media Error Fix - Prevents AbortError from play() interruptions
 * 
 * This script fixes the common error:
 * "AbortError: The play() request was interrupted by a call to pause()"
 * 
 * This error typically occurs in Wix sites or any site with HTML5 media elements
 * when rapid play/pause calls happen, often due to user interactions or page navigation.
 */

(function() {
    'use strict';
    
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
        return;
    }
    
    // Override HTMLMediaElement play() method to handle AbortError
    if (typeof HTMLMediaElement !== 'undefined') {
        const originalPlay = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function() {
            return originalPlay.call(this).catch(error => {
                // Ignore AbortError as it's expected when play() is interrupted by pause()
                if (error.name === 'AbortError') {
                    console.log('Media play() interrupted by pause() - this is normal behavior');
                    return Promise.resolve();
                }
                // Re-throw other errors
                throw error;
            });
        };
    }

    // Handle any existing media elements
    function handleExistingMedia() {
        const mediaElements = document.querySelectorAll('video, audio');
        mediaElements.forEach(media => {
            // Add error event listener
            media.addEventListener('error', function(e) {
                if (e.target.error && e.target.error.code === 4) {
                    // MEDIA_ELEMENT_ERROR_ABORTED
                    console.log('Media element aborted - this is normal');
                }
            });
            
            // Add abort event listener
            media.addEventListener('abort', function(e) {
                console.log('Media element aborted - this is normal');
            });
        });
    }

    // Global error handler for unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && event.reason.name === 'AbortError' && 
            event.reason.message && event.reason.message.includes('play()')) {
            event.preventDefault();
            console.log('Prevented AbortError from play() interruption');
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleExistingMedia);
    } else {
        handleExistingMedia();
    }

    // Also handle dynamically added media elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
                        handleExistingMedia();
                    } else if (node.querySelectorAll) {
                        const mediaElements = node.querySelectorAll('video, audio');
                        if (mediaElements.length > 0) {
                            handleExistingMedia();
                        }
                    }
                }
            });
        });
    });

    // Start observing for dynamically added media elements
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Media Error Fix loaded successfully');
})(); 