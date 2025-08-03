// 🔧 Window Error Fix Script for Wix Deployment
// This script fixes "window is not defined" errors in deployment files

const fs = require('fs');
const path = require('path');

// Window safety utility code to inject
const windowSafetyCode = `
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

// Window reference replacements
const windowReplacements = [
    { from: 'window.innerWidth', to: 'safeWindow.innerWidth()' },
    { from: 'window.innerHeight', to: 'safeWindow.innerHeight()' },
    { from: 'window.scrollY', to: 'safeWindow.scrollY()' },
    { from: 'window.pageYOffset', to: 'safeWindow.pageYOffset()' },
    { from: 'window.scrollTo', to: 'safeWindow.scrollTo' },
    { from: 'window.addEventListener', to: 'safeWindow.addEventListener' },
    { from: 'window.removeEventListener', to: 'safeWindow.removeEventListener' }
];

// Function to fix a single file
function fixWindowErrors(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Check if window safety code is already present
    if (!content.includes('safeWindow')) {
        // Find the script tag and inject window safety code
        const scriptTagMatch = content.match(/<script[^>]*>/);
        if (scriptTagMatch) {
            const scriptStart = content.indexOf(scriptTagMatch[0]) + scriptTagMatch[0].length;
            content = content.slice(0, scriptStart) + '\n' + windowSafetyCode + '\n' + content.slice(scriptStart);
            hasChanges = true;
        }
    }

    // Replace window references
    windowReplacements.forEach(replacement => {
        const regex = new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        if (regex.test(content)) {
            content = content.replace(regex, replacement.to);
            hasChanges = true;
        }
    });

    // Fix specific patterns
    const specificFixes = [
        // Fix mobile detection
        {
            from: /isMobile:\s*window\.innerWidth\s*<\s*768/g,
            to: 'isMobile: safeWindow.isMobile()'
        },
        // Fix scroll position checks
        {
            from: /window\.scrollY\s*>\s*50/g,
            to: 'safeWindow.scrollY() > 50'
        }
    ];

    specificFixes.forEach(fix => {
        if (fix.from.test(content)) {
            content = content.replace(fix.from, fix.to);
            hasChanges = true;
        }
    });

    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed window errors in: ${path.basename(filePath)}`);
        return true;
    } else {
        console.log(`ℹ️  No changes needed in: ${path.basename(filePath)}`);
        return false;
    }
}

// Function to fix all deployment files
function fixAllDeploymentFiles() {
    const deployReadyDir = 'deploy-ready';
    const files = [
        'home-page.html',
        'home-page-wix-compatible.html',
        'main-page.html',
        'main-page-wix-compatible.html',
        'master-page.html',
        'master-page-wix-compatible.html',
        'test-page.html',
        'test-page-wix-compatible.html',
        'index.html',
        'cpu-monitor.html'
    ];

    console.log('🔧 Fixing window reference errors in deployment files...\n');

    let fixedCount = 0;
    files.forEach(file => {
        const filePath = path.join(deployReadyDir, file);
        if (fixWindowErrors(filePath)) {
            fixedCount++;
        }
    });

    console.log(`\n🎉 Fixed ${fixedCount} files with window reference errors!`);
    console.log('✅ Your deployment files are now Wix SSR compatible!');
}

// Create a backup before making changes
function createBackup() {
    const deployReadyDir = 'deploy-ready';
    const backupDir = 'deploy-ready-backup-' + Date.now();
    
    if (!fs.existsSync(deployReadyDir)) {
        console.log('❌ deploy-ready directory not found');
        return false;
    }

    // Copy deploy-ready directory to backup
    const { execSync } = require('child_process');
    try {
        execSync(`cp -r "${deployReadyDir}" "${backupDir}"`, { stdio: 'inherit' });
        console.log(`✅ Backup created: ${backupDir}`);
        return true;
    } catch (error) {
        console.log('⚠️  Could not create backup, but continuing...');
        return false;
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--backup')) {
        createBackup();
    }
    
    fixAllDeploymentFiles();
    
    console.log('\n📋 NEXT STEPS:');
    console.log('1. Test your fixed files locally');
    console.log('2. Deploy to Wix Studio');
    console.log('3. The "window is not defined" error should be resolved!');
}

module.exports = {
    fixWindowErrors,
    fixAllDeploymentFiles,
    createBackup
}; 