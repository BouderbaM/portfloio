# Mohamed Bouderba - Software Engineer Portfolio

A modern, responsive, and professional portfolio website built with React and Tailwind CSS. Showcasing 5 years of full-stack development experience with expertise in Laravel, React, and Node.js.

## 🚀 Features

- **Responsive Design**: Flawlessly responsive on desktop, tablet, and mobile devices
- **Modern UI**: Built with React and Tailwind CSS for a clean, professional appearance
- **Hero Section**: Eye-catching introduction with professional summary
- **Skills Showcase**: Organized display of technical expertise across back-end, front-end, systems, and other areas
- **Project Portfolio**: Card-based layout showcasing 4 major projects with descriptions, technologies, and modal details
- **Call-to-Action**: Strong engagement section with direct contact methods
- **Smooth Navigation**: Sticky header with smooth scrolling navigation
- **Social Integration**: Direct links to LinkedIn, Facebook, and email
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Project Structure

```
portfloio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Hero.jsx            # Hero section with intro and CTA
│   │   ├── Skills.jsx          # Technical skills showcase
│   │   ├── Projects.jsx        # Project portfolio with modal
│   │   ├── CTA.jsx             # Call-to-action and contact
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **CSS Processing**: PostCSS + Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Install Tailwind CSS dependencies** (if not already included):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## 🏗 Build for Production

Build the project:
```bash
npm run build
```

This generates an optimized build in the `dist/` directory ready for deployment.

Preview the build:
```bash
npm run preview
```

## 📝 Content Overview

### Header/Navigation
- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Quick links to all sections

### Hero Section
- Professional introduction
- 5-year experience highlight
- Professional headshot placeholder (ready for image upload)
- Call-to-action buttons

### Skills Section
Four skill categories with icons:
- **Back-end**: PHP, Laravel, Node.js
- **Front-end**: JavaScript, React, Tailwind CSS
- **Systems & DevOps**: Linux (AlmaLinux), Web Server Hosting & Management
- **Other**: Computer & Telephony Networks

### Projects Section
Four featured projects:
1. **Citizen Complaints Portal** - Government portal for citizen grievances
2. **Vehicle Gray Card Management** - State-level vehicle registration system
3. **Employee & Leave Management** - Internal HR application
4. **Annual Inventory Management** - Stock tracking and audit system

Each project includes:
- Descriptive summary
- Technology stack badges
- Screenshot placeholder
- Modal view with details

### Contact & CTA
- Eye-catching call-to-action section
- Direct contact methods:
  - Email: bouderbamohamed99@gmail.com
  - Phone: +213 796-497-579
  - LinkedIn: linkedin.com/in/mohamed-bouderba-4ba74a351/
  - Facebook: facebook.com/bdm.mohame

## 🎨 Color Scheme

- **Primary**: Dark Blue/Slate (#0f172a, #1e293b)
- **Accent**: Cyan (#0ea5e9, #06b6d4)
- **Secondary**: Various gradients for visual interest

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Important Links

Replace these with actual links in the components:
- Email: `bouderbamohamed99@gmail.com`
- LinkedIn: `linkedin.com/in/mohamed-bouderba-4ba74a351/`
- Facebook: `facebook.com/bdm.mohame`
- Phone: `+213 796-497-579`

## 🖼 Adding Your Photo

To add the professional headshot:
1. Go to `src/components/Hero.jsx`
2. Replace the placeholder div with an img tag:
```jsx
<img 
  src="/path-to-your-photo.jpg" 
  alt="Mohamed Bouderba" 
  className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg shadow-lg object-cover"
/>
```

## 📸 Adding Project Screenshots

For each project in the `projects` array in `src/components/Projects.jsx`:
1. Update the `image` property with the actual image URL
2. The modal will display screenshots when "View Details & Screenshots" is clicked

## 🚀 Deployment

### Deployment on AlmaLinux Server

1. **Build the project**:
```bash
npm run build
```

2. **Copy the `dist/` folder** to your web server:
```bash
scp -r dist/ user@your-server:/var/www/portfolio
```

3. **Configure your web server** (Nginx/Apache):

**Nginx example**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. **Set up HTTPS** using Let's Encrypt (recommended)

## 📄 License

© 2024 Mohamed Bouderba. All rights reserved.

## 🤝 Contact

For inquiries, reach out via:
- **Email**: bouderbamohamed99@gmail.com
- **Phone**: +213 796-497-579
- **LinkedIn**: linkedin.com/in/mohamed-bouderba-4ba74a351/
- **Facebook**: facebook.com/bdm.mohame

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
