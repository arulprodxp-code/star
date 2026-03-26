# Star Dental - Modern Dental Clinic Website

A beautiful, modern dental clinic website built with React, Vite, Tailwind CSS, and Framer Motion, featuring an antigravity UI design style.

## Features

✨ **Modern Design**
- Clean, premium aesthetic with light color palette
- Antigravity floating cards and UI elements
- Smooth scroll and micro-animations
- Fully responsive (mobile + desktop)

🦷 **Complete Pages**
- Home - Hero section with floating cards, services preview, testimonials
- About - Clinic story, team info, statistics
- Services - Comprehensive list of all dental services
- Doctors - Meet the expert team with detailed profiles
- Testimonials - Patient reviews and success stories
- Gallery - Before & after, clinic facilities, team photos
- Contact - Appointment booking form and contact information

🎨 **UI Components**
- Navigation Bar with mobile menu
- Service Cards with hover effects
- Doctor Cards with contact options
- Testimonial Cards with ratings
- Footer with clinic information and social links

⚡ **Technologies**
- React 18 with Hooks
- Vite - Lightning fast build tool
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Advanced animations
- React Router - Client-side routing
- Lucide Icons - Beautiful SVG icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Top navbar with mobile menu
│   ├── Footer.jsx          # Footer with clinic info
│   ├── ServiceCard.jsx     # Reusable service card component
│   ├── DoctorCard.jsx      # Doctor profile cards
│   └── TestimonialCard.jsx # Patient testimonial cards
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # About the clinic
│   ├── Services.jsx        # Services listing
│   ├── Doctors.jsx         # Doctor profiles
│   ├── Testimonials.jsx    # Patient reviews
│   ├── Gallery.jsx         # Photo gallery
│   └── Contact.jsx         # Contact & appointment form
├── App.jsx                 # Main app with router
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Key Features Implemented

### Antigravity UI Design
- Floating cards with smooth animations
- Elements that appear to levitate and respond to user interaction
- Scroll-triggered animations with Framer Motion
- Gradient backgrounds and glassmorphism effects

### Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- Flexible grid and flexbox layouts
- Touch-friendly navigation

### Animations
- Page transition animations
- Card hover effects with lift and shadow
- Smooth scroll behavior
- Icon rotation and scaling on hover
- Staggered animations for lists

### Components
All components are reusable and follow React best practices with proper props typing and composition.

## Customization

### Colors
Edit `tailwind.config.js` to change the primary, secondary, and accent colors.

### Content
All text content is easy to find and customize in each respective component/page file.

### Images
Replace emoji placeholders with actual images by modifying the relevant components.

### Services & Products
Update the service list in `src/pages/Home.jsx` and `src/pages/Services.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Smooth animations using GPU acceleration
- Code splitting for faster page loads

## License

MIT License - Feel free to use this project for your dental clinic or modify as needed.

## Support

For questions or issues, please refer to the component files for detailed implementation or check the Framer Motion and Tailwind CSS documentation.

---

Built with ❤️ for beautiful Stars
