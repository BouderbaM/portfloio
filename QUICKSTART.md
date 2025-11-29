# 🚀 Quick Start Guide

## Getting Started with Your Portfolio

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies
```bash
cd c:\xamp\htdocs\portfloio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:5173/**

### 3. Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

---

## 📸 Customization Guide

### Adding Your Professional Headshot

**File**: `src/components/Hero.jsx`

Find this section:
```jsx
<div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center...">
```

Replace with:
```jsx
<img 
  src="/your-photo.jpg" 
  alt="Mohamed Bouderba" 
  className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg shadow-lg object-cover"
/>
```

Place your photo in the `public/` folder (create it if it doesn't exist).

### Adding Project Screenshots

**File**: `src/components/Projects.jsx`

In the `projects` array, update the `image` field:
```javascript
const projects = [
  {
    id: 1,
    // ... other fields
    image: '/path/to/your-screenshot.jpg', // Update this
  },
  // ... other projects
];
```

### Updating Contact Information

All contact info is already configured in the components:
- **Email**: bouderbamohamed99@gmail.com ✅
- **Phone**: +213 796-497-579 ✅
- **LinkedIn**: linkedin.com/in/mohamed-bouderba-4ba74a351/ ✅
- **Facebook**: facebook.com/bdm.mohame ✅

The links are fully functional and ready to use.

### Changing Colors

**File**: `tailwind.config.js`

Current color scheme:
- **Primary**: Dark Blue (`#0f172a`)
- **Accent**: Cyan (`#0ea5e9`)

To customize, modify the `colors` section in `tailwind.config.js`.

---

## 📱 Testing Responsiveness

The portfolio is fully responsive. Test on different devices:
- **Desktop**: 1920px, 1440px
- **Tablet**: 768px
- **Mobile**: 375px, 425px

You can use your browser's Developer Tools (F12) to test different screen sizes.

---

## 🌐 Deployment Guide

### Deploy to AlmaLinux Server

1. **Build locally**:
```bash
npm run build
```

2. **Upload to server**:
```bash
scp -r dist/ user@your-server.com:/var/www/portfolio
```

3. **Configure web server** (Nginx):
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Optional: Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

4. **Restart Nginx**:
```bash
sudo systemctl restart nginx
```

---

## ✅ Checklist Before Going Live

- [ ] Add professional headshot
- [ ] Add project screenshots
- [ ] Verify all social links work
- [ ] Test on mobile/tablet/desktop
- [ ] Set up HTTPS (Let's Encrypt)
- [ ] Configure domain name
- [ ] Test form submissions (if adding)
- [ ] Set up analytics (optional)

---

## 📚 File Structure Summary

```
portfloio/
├── src/
│   ├── components/
│   │   ├── Header.jsx       - Navigation & mobile menu
│   │   ├── Hero.jsx         - Introduction section
│   │   ├── Skills.jsx       - Technical skills
│   │   ├── Projects.jsx     - Project showcase
│   │   ├── CTA.jsx          - Call-to-action
│   │   └── Footer.jsx       - Footer with social links
│   ├── App.jsx              - Main component
│   ├── main.jsx             - Entry point
│   └── index.css            - Global styles
├── public/                  - Static files (add photos here)
├── index.html               - HTML template
├── package.json             - Dependencies
├── vite.config.js           - Vite config
├── tailwind.config.js       - Tailwind config
└── README.md                - Full documentation
```

---

## 🆘 Troubleshooting

### Issue: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Issue: CSS not loading properly
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
npm run dev
```

### Issue: Build fails
```bash
# Check for errors
npm run build
```

---

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your skills and projects.

**Need help?** Refer to:
- `README.md` - Full documentation
- `src/components/` - Individual component code
- Tailwind CSS docs: https://tailwindcss.com
- React docs: https://react.dev

**Good luck! 🚀**
