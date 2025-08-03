# 📍 How to Find Custom HTML Element in Wix Studio

## 🎯 **Step-by-Step Guide**

### **Step 1: Open Wix Studio**
1. **Log into your Wix account**
2. **Click "My Sites"**
3. **Find your website and click "Edit Site"**
4. **This opens Wix Studio**

### **Step 2: Navigate to Your Page**
1. **In the left sidebar, click on "Pages"**
2. **Select the page you want to edit** (Home, Main, Master, etc.)
3. **The page editor will open**

### **Step 3: Add Custom HTML Element**

#### **Method 1: Using the Add Panel**
1. **Look for the "+" button** (usually in the top toolbar or left sidebar)
2. **Click the "+" button** to open the "Add Elements" panel
3. **In the search box, type "HTML"**
4. **Look for "Custom Code" or "HTML Code"**
5. **Click on it to add to your page**

#### **Method 2: Using the Elements Panel**
1. **In the left sidebar, look for "Elements" or "Add Elements"**
2. **Scroll down to find "Custom Code" section**
3. **Look for "HTML Code" or "Custom HTML"**
4. **Drag and drop it onto your page**

#### **Method 3: Using the Insert Menu**
1. **Click "Insert" in the top menu**
2. **Look for "Custom Code" or "HTML"**
3. **Select "HTML Code"**
4. **Click where you want to place it on the page**

### **Step 4: Configure the HTML Element**
1. **Once added, click on the HTML element**
2. **You'll see a settings panel on the right**
3. **Look for a text area or code editor**
4. **This is where you'll paste your optimized code**

### **Step 5: Paste Your Code**
1. **Open your optimized HTML file** (e.g., `deploy-ready/wix-compatible-home.html`)
2. **Select all the content** (Ctrl+A)
3. **Copy it** (Ctrl+C)
4. **Paste it into the HTML element** (Ctrl+V)
5. **Click "Save" or "Apply"**

## 🔍 **Visual Guide - Where to Look**

### **In Wix Studio Interface:**

```
┌─────────────────────────────────────┐
│ Wix Studio                          │
├─────────────────────────────────────┤
│ [Pages] [Elements] [Settings]       │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────┐  ┌──────────────┐  │
│  │   Pages     │  │   Elements   │  │
│  │             │  │              │  │
│  │ • Home      │  │ + Add        │  │
│  │ • Main      │  │              │  │
│  │ • Master    │  │ Custom Code  │  │
│  │ • Test      │  │   ↓          │  │
│  └─────────────┘  │ HTML Code    │  │
│                   └──────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### **Alternative Locations:**

#### **Option A: Top Toolbar**
```
┌─────────────────────────────────────┐
│ [+ Add] [Elements] [Pages] [Settings]│
└─────────────────────────────────────┘
```

#### **Option B: Left Sidebar**
```
┌─────────────────────────────────────┐
│ Pages                               │
│ Elements                            │
│   ┌─────────────────────────────┐   │
│   │ + Add Elements              │   │
│   │                             │   │
│   │ Custom Code                 │   │
│   │   └─ HTML Code              │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

## 🚨 **If You Can't Find Custom HTML**

### **Check Your Wix Plan:**
- **Free Plan**: Limited custom code options
- **Premium Plans**: Full access to custom HTML
- **Business Plans**: Advanced custom code features

### **Alternative Methods:**

#### **Method 1: Settings → Custom Code**
1. **Click "Settings" in the top menu**
2. **Look for "Custom Code" or "Advanced"**
3. **Click "Add Custom Code"**
4. **Select "HTML"**

#### **Method 2: Page Settings**
1. **Right-click on your page**
2. **Select "Page Settings"**
3. **Look for "Custom Code" tab**
4. **Add HTML code there**

#### **Method 3: Site Settings**
1. **Go to "Settings" → "Site Settings"**
2. **Look for "Custom Code" or "Advanced"**
3. **Add your HTML code**

## 📋 **Quick Commands to Get Your Code**

```bash
# Get the optimized code for any page
node deploy-to-wix.js show home-page
node deploy-to-wix.js show main-page
node deploy-to-wix.js show master-page
node deploy-to-wix.js show test-page
```

## 🎯 **Step-by-Step Deployment**

### **For Each Page:**
1. **Open the page in Wix Studio**
2. **Add Custom HTML element** (using steps above)
3. **Copy code from your deployment file**
4. **Paste into the HTML element**
5. **Save the page**
6. **Test in preview mode**
7. **Publish when ready**

## 🔧 **Troubleshooting**

### **If Custom HTML Not Available:**
1. **Upgrade your Wix plan** to get custom code access
2. **Use Wix Velo** for advanced customizations
3. **Contact Wix support** for assistance

### **If Code Doesn't Work:**
1. **Check browser console** (F12) for errors
2. **Use the minimal version** from `FIX_BUILD_ERRORS.md`
3. **Test in preview mode first**
4. **Clear browser cache** after changes

## 📞 **Need Help?**

### **If You Still Can't Find It:**
1. **Take a screenshot** of your Wix Studio interface
2. **Check your Wix plan** level
3. **Contact Wix support** with your specific issue
4. **Try the alternative methods** listed above

---

**Remember**: The Custom HTML element is essential for deploying your ultra-smooth optimizations. If you can't find it, you may need to upgrade your Wix plan or use alternative deployment methods. 