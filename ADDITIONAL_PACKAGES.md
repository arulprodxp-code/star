# Additional Dependencies & Packages

## Optional Packages You May Want to Add

### Icons - Already Used in Project
```bash
npm install lucide-react
```
Icons used throughout: Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Award, Heart, Users, Star, Maximize2

### Forms & Validation
```bash
npm install react-hook-form zod
```

### HTTP Client
```bash
npm install axios
```

### Date/Time Picker
```bash
npm install react-datepicker
```

### Toast Notifications
```bash
npm install react-hot-toast
```

### Image Optimization
```bash
npm install next-image-export-optimizer
```

### Scroll Animations (Alternative to Framer)
```bash
npm install aos
```

### Swiper Carousel
```bash
npm install swiper
```

## Already Installed (package.json)

✅ react@18.2.0
✅ react-dom@18.2.0
✅ react-router-dom@6.22.0
✅ framer-motion@10.16.4
✅ vite@5.0.8
✅ tailwindcss@3.4.1
✅ postcss@8.4.32
✅ autoprefixer@10.4.17
✅ @vitejs/plugin-react@4.2.1

## Integration Examples

### Add Toast Notifications
```bash
npm install react-hot-toast
```

Then in your component:
```jsx
import { Toaster, toast } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      {/* your app */}
    </>
  );
}

// Use in components:
const handleSubmit = () => {
  toast.success('Appointment booked!');
};
```

### Add Form Validation
```bash
npm install react-hook-form
```

Then in Contact.jsx:
```jsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('name', { required: true })} />
    {errors.name && <span>This field is required</span>}
  </form>
);
```

### Add Date Picker
```bash
npm install react-datepicker
```

Then in Contact.jsx:
```jsx
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

<DatePicker
  selected={date}
  onChange={(date) => setDate(date)}
  minDate={new Date()}
/>
```

### Connect to Backend

In Contact.jsx, update handleSubmit:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://your-api.com/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitted(true);
      toast.success('Appointment booked successfully!');
    } else {
      toast.error('Failed to book appointment');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('An error occurred');
  }
};
```

## Environment Variables

Create `.env.local` file:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=Star Dental
```

Use in code:
```jsx
const API_URL = import.meta.env.VITE_API_URL;
```

## Performance Optimizations

### Lazy Load Images
```jsx
<img loading="lazy" src="image.jpg" alt="description" />
```

### Code Splitting with React Router
```jsx
const Services = lazy(() => import('./pages/Services'));

<Suspense fallback={<Loading />}>
  <Services />
</Suspense>
```

### Environment-specific Builds
```bash
npm run build -- --mode production
npm run dev -- --mode development
```

## Deployment Environment Variables

### Vercel
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "envPrefix": "VITE_"
}
```

### Netlify
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  functions = "functions"
  publish = "dist"

[dev]
  command = "npm run dev"
  port = 3000
```

---

**Note**: All necessary packages are already configured in `package.json`. Just run `npm install` to get started!
