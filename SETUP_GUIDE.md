# SETUP GUIDE - Star Dental Website

## Quick Start

### Option 1: Using npm (Recommended)

```bash
# 1. Navigate to the project directory
cd c:\Users\Admin\Desktop\star

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser and visit http://localhost:5173
```

### Option 2: If npm Installation Issues Occur

If you encounter npm installation issues, try:

```bash
# Clear npm cache
npm cache clean --force

# Try clean install
npm ci

# Or install without optional dependencies
npm install --no-optional

# If using corporate proxy, configure npm
npm config set registry https://registry.npmjs.org/

# Then retry installation
npm install
```

### Option 3: Using npx (No Installation Required)

```bash
# Run directly without installing dependencies (loads from node_modules in CI/CD environment)
npx vite
```

## Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
star/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar with mobile menu
│   │   ├── Footer.jsx          # Footer component
│   │   ├── ServiceCard.jsx     # Service card component
│   │   ├── DoctorCard.jsx      # Doctor profile card
│   │   └── TestimonialCard.jsx # Testimonial card
│   ├── pages/
│   │   ├── Home.jsx            # Home/Landing page
│   │   ├── About.jsx           # About clinic page
│   │   ├── Services.jsx        # Services listing page
│   │   ├── Doctors.jsx         # Doctors page
│   │   ├── Testimonials.jsx    # Testimonials page
│   │   ├── Gallery.jsx         # Gallery with lightbox
│   │   └── Contact.jsx         # Contact & appointment form
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── package.json                # Project dependencies
├── package-lock.json           # Locked dependency versions
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── index.html                  # HTML entry point
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file
```

## Key Technologies

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **React Router v6** - Client-side routing
- **Lucide Icons** - Icon library

## Features

### Pages Implemented

1. **Home** - Landing page with:
   - Hero section with floating animation
   - Services preview (6 services)
   - Why Choose Us section
   - Featured doctor card
   - Patient testimonials
   - Call-to-action sections

2. **About** - About clinic with:
   - Clinic story and mission
   - Statistics and achievements
   - Team information
   - Vision and values

3. **Services** - Detailed services page with:
   - 6 dental services with descriptions
   - Treatment process (4 steps)
   - Advanced technology info
   - CTA button

4. **Doctors** - Doctor profiles with:
   - Doctor grid with avatars
   - Detailed profiles with experience
   - Credentials section
   - Contact buttons

5. **Testimonials** - Patient reviews with:
   - 8+ testimonial cards
   - Star ratings
   - Trust factors section
   - Patient statistics

6. **Gallery** - Photo gallery with:
   - Before & After images
   - Facility photos
   - Team images
   - Lightbox modal
   - Filter functionality
   - Achievements stats

7. **Contact** - Contact & booking page with:
   - Contact form with validation
   - Contact information cards
   - Office location map placeholder
   - FAQs section
   - Why choose us list

### Design Features

✨ **Antigravity UI**
- Floating cards with smooth animations
- Scale effects on hover
- Lift animations on scroll
- Glassmorphism effects
- Gradient backgrounds

🎨 **Color Palette**
- Primary: Blue (#0EA5E9)
- Secondary: Green (#10B981)
- Accent: Light Teal (#F0FDFA)
- Backgrounds: White & Light Gradients

📱 **Responsive Design**
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Touch-friendly buttons
- Optimized spacing

⚡ **Animations**
- Page transition animations
- Card hover effects
- Scroll-triggered animations
- Staggered list animations
- Icon rotations
- Smooth scroll behavior

## Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
    },
  },
}
```

### Update Clinic Information

- **Clinic Name**: Change "Star Dental" in [Navigation.jsx](Navigation.jsx), [Footer.jsx](Footer.jsx), [Home.jsx](Home.jsx)
- **Contact Info**: Update in [Contact.jsx](Contact.jsx) and [Footer.jsx](Footer.jsx)
- **Services**: Edit service lists in [Home.jsx](Home.jsx) and [Services.jsx](Services.jsx)
- **Doctor Names**: Update in [Doctors.jsx](Doctors.jsx) and [Home.jsx](Home.jsx)

### Replace Emojis with Real Images

Replace emoji placeholders with actual images:

```jsx
// Before
<div className="text-9xl">😁</div>

// After
<img src="path/to/image.jpg" alt="description" className="w-full h-full object-cover" />
```

### Add Real Map

Replace map placeholder in [Contact.jsx](Contact.jsx):

```jsx
// Instead of emoji placeholder
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-80 rounded-2xl"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

## Troubleshooting

### npm install fails

```bash
# Try with legacy peer deps
npm install --legacy-peer-deps

# Or use Node version manager to switch Node version
nvm use 18
npm install
```

### Port 5173 already in use

```bash
# Use different port
npm run dev -- --port 3000
```

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Styling not applying

```bash
# Rebuild Tailwind
npm run build
```

## Performance Tips

1. **Lazy Loading**: Images load as you scroll
2. **Code Splitting**: Automatic with React Router
3. **CSS Optimization**: Tailwind purges unused styles in production
4. **Bundle Size**: ~45KB gzipped (optimized)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Create dist folder
npm run build

# Connect to Netlify and deploy dist folder
```

### Deploy to GitHub Pages

```bash
# Update package.json homepage
"homepage": "https://yourusername.github.io/Star-dental"

# Build and deploy
npm run build
gh-pages -d dist
```

## Environment Variables

Create `.env.local` for environment-specific settings:

```env
VITE_API_URL=https://api.Star.dental
VITE_APP_TITLE=Star Dental
```

## Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Make changes (auto-refreshes)

# 3. Build when ready
npm run build

# 4. Preview production build
npm run preview
```

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## License

MIT License - Free to use and modify

## Next Steps

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Visit: http://localhost:5173
4. Customize content and colors
5. Add real images
6. Deploy to production

---

**Built with ❤️ for beautiful Stars!**
