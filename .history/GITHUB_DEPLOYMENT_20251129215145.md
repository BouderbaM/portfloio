# 🚀 GitHub Pages Deployment Guide

## Your Portfolio URL
Once deployed, your portfolio will be available at:
```
https://BouderbaM.github.io/portfloio
```

## ✅ Configuration Complete
The following files have been automatically updated with your GitHub username (BouderbaM):
- ✅ `package.json` - Added homepage and deployment scripts
- ✅ `vite.config.js` - Added base path configuration

## 🎯 Next Steps (Copy & Paste Commands)

### Step 1: Install gh-pages (one time only)
```powershell
npm install --save-dev gh-pages
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfloio`
3. Choose **Public**
4. Click **Create repository**

### Step 3: Connect your project to GitHub
Copy and paste these commands in PowerShell (one at a time):

```powershell
git init
git add .
git commit -m "Initial commit: Mohamed Bouderba Portfolio"
git branch -M main
git remote add origin https://github.com/BouderbaM/portfloio.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```powershell
npm run deploy
```

### Step 5: Enable GitHub Pages in Repository Settings
1. Go to: https://github.com/BouderbaM/portfloio/settings
2. Click **Pages** in the left menu
3. Under **Source**, select **Deploy from a branch**
4. Choose **Branch**: `gh-pages` and **Folder**: `/ (root)`
5. Click **Save**

## ✨ Done!
After a few seconds, your portfolio will be live at:
```
https://BouderbaM.github.io/portfloio
```

Share this link with your friends! 🎉

## 📝 For Future Updates
Every time you make changes and want to update your live portfolio:

```powershell
# Commit your changes
git add .
git commit -m "Update: [describe your changes]"
git push

# Deploy to GitHub Pages
npm run deploy
```

## 🔗 Quick Links
- Your Portfolio: https://BouderbaM.github.io/portfloio
- Your GitHub Repo: https://github.com/BouderbaM/portfloio
- GitHub Pages Docs: https://pages.github.com/

---

**Note**: Make sure you have Git installed on your computer. If not, download it from https://git-scm.com/
