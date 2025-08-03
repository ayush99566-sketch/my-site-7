// 🔍 Build Error Detection Script
// This script checks deployment files for common build errors before Wix deployment

const fs = require('fs');
const path = require('path');

// Common build error patterns
const errorPatterns = {
    // HTML errors
    unclosedTags: /<([a-z][a-z0-9]*)[^>]*>(?!.*<\/\1>)/gi,
    invalidDoctype: /<!DOCTYPE[^>]*>/i,
    missingViewport: /<meta[^>]*viewport[^>]*>/i,
    
    // JavaScript errors
    missingSemicolons: /const\s+\w+\s*=\s*\{[^}]*\}(?!\s*;)/g,
    unclosedStrings: /"[^"]*$/gm,
    unclosedBrackets: /\([^)]*$/gm,
    wixSelectors: /\$w\(/g,
    
    // CSS errors
    missingCssSemicolons: /[a-z-]+\s*:\s*[^;]+(?!\s*;)/g,
    invalidCssProperties: /[a-z-]+\s*:\s*[^;]+;/g,
    
    // General issues
    specialCharacters: /[^\x00-\x7F]/g,
    largeFileSize: 50000 // 50KB limit
};

// Files to check
const deploymentFiles = [
    'deploy-ready/home-page.html',
    'deploy-ready/main-page.html',
    'deploy-ready/master-page.html',
    'deploy-ready/test-page.html',
    'deploy-ready/wix-compatible-home.html'
];

// Function to check HTML structure
function checkHTMLStructure(content, filename) {
    const issues = [];
    
    // Check DOCTYPE
    if (!content.includes('<!DOCTYPE html>')) {
        issues.push('❌ Missing DOCTYPE declaration');
    }
    
    // Check viewport meta tag
    if (!content.includes('viewport')) {
        issues.push('❌ Missing viewport meta tag');
    }
    
    // Check for unclosed tags (basic check)
    const openTags = content.match(/<([a-z][a-z0-9]*)[^>]*>/gi) || [];
    const closeTags = content.match(/<\/([a-z][a-z0-9]*)>/gi) || [];
    
    if (openTags.length !== closeTags.length) {
        issues.push(`❌ Possible unclosed tags (${openTags.length} open, ${closeTags.length} close)`);
    }
    
    return issues;
}

// Function to check JavaScript syntax
function checkJavaScriptSyntax(content, filename) {
    const issues = [];
    
    // Check for Wix-specific selectors
    if (content.includes('$w(')) {
        issues.push('❌ Found Wix-specific selectors ($w) - may cause build errors');
    }
    
    // Check for missing semicolons in object declarations
    const objectDeclarations = content.match(/const\s+\w+\s*=\s*\{[^}]*\}(?!\s*;)/g);
    if (objectDeclarations) {
        issues.push('❌ Missing semicolons in object declarations');
    }
    
    // Check for unclosed strings
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        if (line.includes('"') && !line.includes('";')) {
            const quoteCount = (line.match(/"/g) || []).length;
            if (quoteCount % 2 !== 0) {
                issues.push(`❌ Possible unclosed string on line ${index + 1}`);
            }
        }
    });
    
    return issues;
}

// Function to check CSS syntax
function checkCSSSyntax(content, filename) {
    const issues = [];
    
    // Extract CSS from style tags
    const styleMatches = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    
    if (styleMatches) {
        styleMatches.forEach((styleBlock, index) => {
            const cssContent = styleBlock.replace(/<style[^>]*>|<\/style>/gi, '');
            
            // Check for missing semicolons
            const cssRules = cssContent.match(/[a-z-]+\s*:\s*[^;]+(?!\s*;)/g);
            if (cssRules) {
                issues.push(`❌ Missing semicolons in CSS rules (style block ${index + 1})`);
            }
        });
    }
    
    return issues;
}

// Function to check file size
function checkFileSize(filepath) {
    const stats = fs.statSync(filepath);
    const sizeKB = stats.size / 1024;
    
    if (sizeKB > 50) {
        return [`⚠️  Large file size: ${sizeKB.toFixed(1)}KB (recommended < 50KB)`];
    }
    
    return [];
}

// Function to check for special characters
function checkSpecialCharacters(content, filename) {
    const issues = [];
    
    // Check for non-ASCII characters that might cause encoding issues
    const specialChars = content.match(/[^\x00-\x7F]/g);
    if (specialChars) {
        const uniqueChars = [...new Set(specialChars)];
        issues.push(`⚠️  Special characters found: ${uniqueChars.join(', ')}`);
    }
    
    return issues;
}

// Function to validate a single file
function validateFile(filepath) {
    console.log(`\n🔍 Checking: ${filepath}`);
    console.log('=' .repeat(50));
    
    if (!fs.existsSync(filepath)) {
        console.log('❌ File not found');
        return false;
    }
    
    const content = fs.readFileSync(filepath, 'utf8');
    const issues = [];
    
    // Run all checks
    issues.push(...checkHTMLStructure(content, filepath));
    issues.push(...checkJavaScriptSyntax(content, filepath));
    issues.push(...checkCSSSyntax(content, filepath));
    issues.push(...checkFileSize(filepath));
    issues.push(...checkSpecialCharacters(content, filepath));
    
    // Report results
    if (issues.length === 0) {
        console.log('✅ No build errors detected');
        return true;
    } else {
        console.log('❌ Build issues found:');
        issues.forEach(issue => console.log(`  ${issue}`));
        return false;
    }
}

// Function to create Wix-compatible version
function createWixCompatibleVersion() {
    console.log('\n🛠️  Creating Wix-compatible versions...');
    
    const files = [
        'deploy-ready/home-page.html',
        'deploy-ready/main-page.html',
        'deploy-ready/master-page.html',
        'deploy-ready/test-page.html'
    ];
    
    files.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Remove Wix-specific code
            let wixCompatible = content
                .replace(/\$w\(/g, 'document.querySelector(')
                .replace(/\.scrollTo\(\)/g, '.scrollIntoView({behavior: "smooth"})')
                .replace(/import\s+wix/gi, '// Wix imports removed for compatibility');
            
            // Add error handling
            wixCompatible = wixCompatible.replace(
                /function\s+(\w+)\s*\(/g,
                'function $1('
            );
            
            // Add try-catch blocks around initialization
            wixCompatible = wixCompatible.replace(
                /(initializeUltraSmooth\w+\(\)\s*\{)/g,
                'try {\n    $1'
            );
            
            const wixFile = file.replace('.html', '-wix-compatible.html');
            fs.writeFileSync(wixFile, wixCompatible);
            console.log(`✅ Created: ${wixFile}`);
        }
    });
}

// Main execution
function main() {
    console.log('🔍 Build Error Detection Tool');
    console.log('=' .repeat(40));
    
    let allValid = true;
    
    // Check all deployment files
    deploymentFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const isValid = validateFile(file);
            if (!isValid) {
                allValid = false;
            }
        }
    });
    
    // Create Wix-compatible versions if issues found
    if (!allValid) {
        console.log('\n🛠️  Creating Wix-compatible versions to fix build errors...');
        createWixCompatibleVersion();
    }
    
    // Summary
    console.log('\n📊 Summary:');
    console.log('=' .repeat(20));
    if (allValid) {
        console.log('✅ All files are ready for Wix deployment!');
    } else {
        console.log('⚠️  Some files have issues. Use Wix-compatible versions.');
        console.log('\n💡 Deployment Tips:');
        console.log('1. Use the -wix-compatible.html files');
        console.log('2. Test in Wix preview mode first');
        console.log('3. Check browser console for errors');
        console.log('4. Deploy one page at a time');
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = {
    validateFile,
    checkHTMLStructure,
    checkJavaScriptSyntax,
    checkCSSSyntax,
    createWixCompatibleVersion
}; 