# 🔧 Build Error Troubleshooting Guide

## 🚨 **Common Wix Build Errors & Solutions**

### 1. **HTML Validation Errors**

**Error**: `Invalid HTML structure`
**Solution**:
- Check for unclosed tags
- Verify proper DOCTYPE declaration
- Ensure all elements are properly nested

**Quick Fix**:
```html
<!-- Make sure your HTML starts with: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### 2. **JavaScript Syntax Errors**

**Error**: `Unexpected token` or `SyntaxError`
**Solution**:
- Check for missing semicolons
- Verify bracket matching
- Look for unclosed strings

**Common Issues**:
```javascript
// ❌ Wrong - missing semicolon
const state = {
    fps: 0,
    loadTime: 0
}

// ✅ Correct
const state = {
    fps: 0,
    loadTime: 0
};
```

### 3. **CSS Validation Errors**

**Error**: `Invalid CSS property`
**Solution**:
- Check for missing semicolons in CSS
- Verify property names are correct
- Ensure vendor prefixes are used properly

**Example**:
```css
/* ❌ Wrong - missing semicolon */
.nav {
    backdrop-filter: blur(20px)
    -webkit-backdrop-filter: blur(20px)
}

/* ✅ Correct */
.nav {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
```

### 4. **Wix Velo Compatibility Issues**

**Error**: `WixElementSelector not found`
**Solution**:
- Replace Wix-specific selectors with standard DOM selectors
- Use `document.querySelector()` instead of Wix selectors

**Fix**:
```javascript
// ❌ Wix-specific (may cause errors)
$w('#heroSection').scrollTo();

// ✅ Standard DOM (compatible)
document.querySelector('#heroSection').scrollIntoView({
    behavior: 'smooth'
});
```

### 5. **File Size Limits**

**Error**: `File too large`
**Solution**:
- Compress CSS and JavaScript
- Remove unnecessary whitespace
- Split large files into smaller chunks

### 6. **Character Encoding Issues**

**Error**: `Invalid character encoding`
**Solution**:
- Ensure UTF-8 encoding
- Check for special characters
- Use HTML entities for special symbols

## 🔍 **Step-by-Step Debugging**

### Step 1: Validate Your Code
```bash
# Check HTML files for syntax errors
node -c deploy-ready/home-page.html
node -c deploy-ready/main-page.html
node -c deploy-ready/master-page.html
node -c deploy-ready/test-page.html
```

### Step 2: Test Individual Components
1. **Test HTML structure** in a browser
2. **Check JavaScript** in browser console
3. **Validate CSS** using online validators

### Step 3: Wix-Specific Checks
1. **Remove Wix dependencies** from custom code
2. **Use standard DOM APIs** instead of Wix APIs
3. **Test in Wix preview mode**

## 🛠️ **Quick Fixes for Common Issues**

### Issue 1: JavaScript Errors
```javascript
// Add error handling
try {
    // Your code here
    initializeUltraSmoothScroll();
} catch (error) {
    console.log('Error initializing:', error);
}
```

### Issue 2: CSS Compatibility
```css
/* Add vendor prefixes */
.nav {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    -moz-backdrop-filter: blur(20px);
}
```

### Issue 3: HTML Structure
```html
<!-- Ensure proper structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultra-Smooth Page</title>
    <style>
        /* Your CSS here */
    </style>
</head>
<body>
    <!-- Your content here -->
    <script>
        // Your JavaScript here
    </script>
</body>
</html>
```

## 📋 **Deployment Checklist**

### Before Deploying:
- [ ] Validate HTML structure
- [ ] Check JavaScript syntax
- [ ] Verify CSS compatibility
- [ ] Remove Wix-specific code
- [ ] Test in browser preview
- [ ] Check file sizes

### During Deployment:
- [ ] Copy code carefully (no extra characters)
- [ ] Save each page individually
- [ ] Test each page before moving to next
- [ ] Clear browser cache after changes

### After Deployment:
- [ ] Test all pages live
- [ ] Check mobile responsiveness
- [ ] Verify performance metrics
- [ ] Test smooth scrolling

## 🚨 **Emergency Fixes**

### If Build Fails Completely:
1. **Start with minimal code**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>Test Page</h1>
    <script>
        console.log('Working!');
    </script>
</body>
</html>
```

2. **Add features gradually**:
   - Add CSS first
   - Then basic JavaScript
   - Finally advanced features

3. **Test each addition** before proceeding

## 📞 **Getting Help**

### If Errors Persist:
1. **Check Wix Studio console** for specific error messages
2. **Use browser developer tools** to debug
3. **Test code in separate HTML file** first
4. **Contact Wix support** if platform-specific issues

### Debug Commands:
```bash
# Check file syntax
node -c deploy-ready/home-page.html

# Validate HTML structure
# Use online HTML validator

# Test JavaScript
# Use browser console
```

---

**Need immediate help?** Share the specific error message and I'll provide targeted solutions! 