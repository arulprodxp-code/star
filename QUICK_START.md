# ⚡ QUICK START GUIDE

## 🚀 In 3 Minutes

### Step 1: Install
```bash
npm install
```

### Step 2: Run
```bash
npm run dev
```

### Step 3: Open Browser
```
http://localhost:5173
```

---

## 📋 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📂 Key Files to Edit

### Update Clinic Info
- **Clinic Name**: `src/components/Navigation.jsx`, `src/components/Footer.jsx`
- **Phone/Email**: `src/components/Footer.jsx`, `src/pages/Contact.jsx`
- **Address**: `src/pages/Contact.jsx`

### Update Services
- `src/pages/Home.jsx` (line ~30)
- `src/pages/Services.jsx` (line ~15)

### Update Doctors
- `src/pages/Home.jsx` (line ~100)
- `src/pages/Doctors.jsx` (line ~20)

### Customize Colors
- `tailwind.config.js` (line ~7)
- `src/index.css`

---

## 🎨 Color Palette

```css
Primary Blue:      #0EA5E9
Secondary Green:   #10B981
Accent Mint:       #F0FDFA
Text Dark:         #1F2937
Background:        #FFFFFF
```

---

## 🔗 Website Pages

| Page | Route | File |
|------|-------|------|
| Home | / | `src/pages/Home.jsx` |
| About | /about | `src/pages/About.jsx` |
| Services | /services | `src/pages/Services.jsx` |
| Doctors | /doctors | `src/pages/Doctors.jsx` |
| Testimonials | /testimonials | `src/pages/Testimonials.jsx` |
| Gallery | /gallery | `src/pages/Gallery.jsx` |
| Contact | /contact | `src/pages/Contact.jsx` |

---

## 🎬 Animation Classes

```jsx
// Fade In
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}

// Slide Up
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}

// Scale
initial={{ scale: 0.8 }}
whileInView={{ scale: 1 }}

// Hover Lift
whileHover={{ y: -10 }}
```

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| npm install fails | `npm cache clean --force && npm install` |
| Port in use | `npm run dev -- --port 3000` |
| Module not found | Delete `node_modules` and reinstall |
| Styling not working | Clear cache and rebuild |

---

## 📱 Responsive Breakpoints

```
Mobile:  < 768px
Tablet:  768px - 1024px  
Desktop: > 1024px
```

Use Tailwind prefix: `md:`, `lg:`, `xl:`

---

## 🎯 Popular Customizations

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
primary: '#FF6B6B'  // Change from blue to red
```

### Add New Service
In `src/pages/Home.jsx`:
```javascript
{
  icon: '🦷',
  title: 'Your Service',
  description: 'Your description'
}
```

### Replace Emoji with Image
```jsx
// Before
<div className="text-9xl">😁</div>

// After
<img src="/image.jpg" alt="alt text" className="w-full h-full" />
```

### Add Google Map
In `src/pages/Contact.jsx`:
```jsx
<iframe 
  src="https://maps.google.com/..." 
  width="100%" 
  height="400"
  loading="lazy"
/>
```

---

## 🚀 Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Connect dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
gh-pages -d dist
```

---

## 📚 Component Usage

### Use ServiceCard
```jsx
<ServiceCard 
  icon="🦷"
  title="Service Name"
  description="Service description"
/>
```

### Use DoctorCard
```jsx
<DoctorCard
  name="Dr. Name"
  specialty="Specialty"
  experience={10}
  image="👨‍⚕️"
/>
```

### Use TestimonialCard
```jsx
<TestimonialCard
  name="Patient Name"
  text="Review text"
  rating={5}
  image="👨"
/>
```

---

## 🔍 Useful CSS Classes

### Shadows
- `shadow-smooth` - Light shadow
- `shadow-elevated` - Heavy shadow

### Glass Effect
- `glass-effect` - Frosted glass look

### Float Animation
- `float-animation` - Floating element

### Gradients
```html
from-blue-500 to-green-500
bg-gradient-to-r
bg-clip-text text-transparent
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update clinic name
- [ ] Update phone and email
- [ ] Add real images (replace emojis)
- [ ] Add Google Map embed
- [ ] Connect contact form to backend
- [ ] Test all pages mobile view
- [ ] Test all links and forms
- [ ] Check for typos
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

---

## 📞 Support Resources

- React Docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- Vite: https://vitejs.dev

---

**🎉 You're all set! Happy coding!**

**For detailed help, see SETUP_GUIDE.md and PROJECT_SUMMARY.md**
