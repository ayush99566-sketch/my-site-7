# 🚀 Wix Development Workflow Guide

## ⚠️ IMPORTANT: How to Prevent Code Loss

Your custom code keeps getting overwritten because you're editing in the wrong place. Here's the correct workflow:

---

## ✅ CORRECT WORKFLOW (Use This)

### 1. **ALWAYS Start Local Development**
```bash
npx @wix/cli dev
```
This opens the **local editor** where you should make all your changes.

### 2. **Edit Code Locally**
- Make changes in the local editor (not online)
- Test your changes locally
- Save your work

### 3. **Publish Changes**
```bash
npx @wix/cli publish
```
This pushes your local changes to your live site.

---

## ❌ WRONG WORKFLOW (Don't Do This)

- ❌ Editing directly in the online Wix editor
- ❌ Opening the online code section
- ❌ Making changes without using local development

---

## 🔧 If Your Code Gets Overwritten Again

### Quick Fix:
```bash
node restore-code.js
npx @wix/cli publish
```

### Manual Fix:
1. Copy code from `BACKUP_CUSTOM_CODE.md`
2. Paste into the appropriate files in `src/pages/`
3. Run `npx @wix/cli publish`

---

## 📁 Your Project Structure

```
my-site-7/
├── src/pages/
│   ├── masterPage.js          # Main site functionality
│   ├── Main Page.houvp.js     # Homepage features
│   ├── TEST_PAGE_MAIN.i8nzx.js # Development testing
│   └── TEST_TEST.a1699.js     # Comprehensive testing
├── BACKUP_CUSTOM_CODE.md      # Backup of all custom code
├── restore-code.js            # Auto-restore script
└── WIX_WORKFLOW.md           # This file
```

---

## 🎯 Key Commands

| Command | Purpose |
|---------|---------|
| `npx @wix/cli dev` | Start local development (ALWAYS use this) |
| `npx @wix/cli publish` | Publish local changes to live site |
| `npx @wix/cli whoami` | Check who you're logged in as |
| `node restore-code.js` | Restore custom code if overwritten |

---

## 🚨 Troubleshooting

### Problem: Code is blank again
**Solution:**
```bash
node restore-code.js
npx @wix/cli publish
```

### Problem: Local editor won't start
**Solution:**
```bash
npx @wix/cli logout
npx @wix/cli login
npx @wix/cli dev
```

### Problem: Changes not appearing on live site
**Solution:**
```bash
npx @wix/cli publish
```
Then wait a few minutes for changes to propagate.

---

## 💡 Pro Tips

1. **Always work locally** - Never edit in the online Wix editor
2. **Save frequently** - Your local changes are safe
3. **Test locally first** - Use the local preview before publishing
4. **Keep backups** - Use the backup files if needed
5. **Use the restore script** - It's faster than manual restoration

---

## 📞 Need Help?

If you're still having issues:
1. Check that you're logged in: `npx @wix/cli whoami`
2. Make sure you're in the right directory
3. Try the restore script: `node restore-code.js`
4. Publish your changes: `npx @wix/cli publish`

---

**Remember: Always use `npx @wix/cli dev` to start development!** 