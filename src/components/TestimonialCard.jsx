import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

// Custom Google SVG icon component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const TestimonialCard = ({ name, text, rating = 5, delay = 0 }) => {
  // Extract initials from name
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-[#FFFBFB] rounded-2xl p-8 relative overflow-hidden shadow-smooth border border-gray-100 flex flex-col items-center hover:shadow-elevated transition-all"
    >
      {/* Top right Google badge cutout styling */}
      <div className="absolute top-0 right-0 w-14 h-14 bg-pink-100 rounded-bl-[2rem] flex items-start justify-end p-3 shadow-inner">
        <GoogleIcon />
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full bg-[#faeff1] text-pink-900 border border-pink-200 flex items-center justify-center font-bold text-2xl mb-4 mx-auto shadow-sm tracking-widest"
      >
        {initials}
      </motion.div>

      <h4 className="font-bold text-gray-800 text-lg text-center mb-2">{name}</h4>
      
      <div className="flex gap-1 justify-center mb-6">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-500 text-center text-sm leading-relaxed px-2">
        {text}
      </p>
    </motion.div>
  )
}

export default TestimonialCard
