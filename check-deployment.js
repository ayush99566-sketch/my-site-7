// 🔍 Deployment Verification Script
// This script helps verify if your optimized changes are live on the main website

const fs = require('fs');
const https = require('https');
const http = require('http');

// Configuration
const config = {
    // Add your Wix website URL here
    websiteUrl: 'https://your-wix-site.wixsite.com', // Replace with your actual Wix URL
    checkInterval: 5000, // Check every 5 seconds
    maxChecks: 10 // Maximum number of checks
};

// Performance indicators to look for in the deployed code
const performanceIndicators = [
    'ultraSmoothScroll',
    'cubic-bezier(0.4, 0, 0.2, 1)',
    'requestAnimationFrame',
    'scroll-behavior: smooth',
    'backdrop-filter: blur',
    'transform: translateZ(0)',
    'performance monitoring',
    'ultra-smooth'
];

// Function to check if website is live
function checkWebsiteStatus(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        
        const req = protocol.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve({
                    status: res.statusCode,
                    content: data,
                    headers: res.headers
                });
            });
        });
        
        req.on('error', (error) => {
            reject(error);
        });
        
        req.setTimeout(10000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

// Function to analyze website content for performance indicators
function analyzePerformanceIndicators(content) {
    const analysis = {
        found: [],
        missing: [],
        score: 0
    };
    
    performanceIndicators.forEach(indicator => {
        if (content.includes(indicator)) {
            analysis.found.push(indicator);
            analysis.score += 1;
        } else {
            analysis.missing.push(indicator);
        }
    });
    
    return analysis;
}

// Function to check deployment status
async function checkDeploymentStatus() {
    console.log('🔍 Checking deployment status...');
    console.log('=' .repeat(50));
    
    try {
        // Check if website is accessible
        console.log(`📡 Checking website: ${config.websiteUrl}`);
        const response = await checkWebsiteStatus(config.websiteUrl);
        
        if (response.status === 200) {
            console.log('✅ Website is live and accessible');
            
            // Analyze content for performance indicators
            const analysis = analyzePerformanceIndicators(response.content);
            
            console.log('\n📊 Performance Analysis:');
            console.log(`Score: ${analysis.score}/${performanceIndicators.length}`);
            
            if (analysis.found.length > 0) {
                console.log('\n✅ Found optimization indicators:');
                analysis.found.forEach(item => {
                    console.log(`  ✓ ${item}`);
                });
            }
            
            if (analysis.missing.length > 0) {
                console.log('\n❌ Missing optimization indicators:');
                analysis.missing.forEach(item => {
                    console.log(`  ✗ ${item}`);
                });
            }
            
            // Determine deployment status
            const deploymentPercentage = (analysis.score / performanceIndicators.length) * 100;
            
            console.log('\n🎯 Deployment Status:');
            if (deploymentPercentage >= 80) {
                console.log('🟢 FULLY DEPLOYED - Your ultra-smooth optimizations are live!');
            } else if (deploymentPercentage >= 50) {
                console.log('🟡 PARTIALLY DEPLOYED - Some optimizations detected');
            } else {
                console.log('🔴 NOT DEPLOYED - Optimizations not found on live site');
            }
            
            console.log(`📈 Deployment Score: ${deploymentPercentage.toFixed(1)}%`);
            
        } else {
            console.log(`❌ Website returned status: ${response.status}`);
        }
        
    } catch (error) {
        console.log(`❌ Error checking website: ${error.message}`);
        console.log('\n💡 Troubleshooting tips:');
        console.log('1. Make sure your Wix website URL is correct');
        console.log('2. Check if your website is published');
        console.log('3. Verify the website is accessible');
    }
}

// Function to monitor deployment over time
async function monitorDeployment() {
    console.log('🔄 Starting deployment monitoring...');
    console.log(`⏱️  Checking every ${config.checkInterval/1000} seconds`);
    console.log(`🔄 Maximum checks: ${config.maxChecks}`);
    console.log('=' .repeat(50));
    
    let checkCount = 0;
    
    const monitor = setInterval(async () => {
        checkCount++;
        console.log(`\n📊 Check ${checkCount}/${config.maxChecks}`);
        
        await checkDeploymentStatus();
        
        if (checkCount >= config.maxChecks) {
            clearInterval(monitor);
            console.log('\n🏁 Monitoring complete!');
        }
    }, config.checkInterval);
}

// Function to show deployment files status
function showDeploymentFilesStatus() {
    console.log('\n📁 Deployment Files Status:');
    console.log('=' .repeat(30));
    
    const files = [
        'deploy-ready/home-page.html',
        'deploy-ready/main-page.html',
        'deploy-ready/master-page.html',
        'deploy-ready/test-page.html'
    ];
    
    files.forEach(file => {
        const exists = fs.existsSync(file);
        const size = exists ? fs.statSync(file).size : 0;
        const status = exists ? '✅ Ready' : '❌ Missing';
        console.log(`${file.padEnd(35)} ${status} (${size} bytes)`);
    });
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('🔍 Deployment Verification Tool');
        console.log('=' .repeat(40));
        showDeploymentFilesStatus();
        checkDeploymentStatus();
    } else if (args[0] === 'monitor') {
        monitorDeployment();
    } else if (args[0] === 'files') {
        showDeploymentFilesStatus();
    } else {
        console.log('Usage:');
        console.log('  node check-deployment.js           - Check deployment status');
        console.log('  node check-deployment.js monitor   - Monitor deployment over time');
        console.log('  node check-deployment.js files     - Show deployment files status');
        console.log('\n⚠️  IMPORTANT: Update the websiteUrl in the script with your actual Wix URL');
    }
}

module.exports = {
    checkDeploymentStatus,
    monitorDeployment,
    showDeploymentFilesStatus
}; 