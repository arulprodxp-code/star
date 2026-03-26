import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const DoctorCard = ({ name, specialty, experience, image, email, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -20 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-smooth hover:shadow-elevated transition-all"
    >
      {/* Avatar Placeholder */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-64 bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center text-6xl overflow-hidden"
      >
        {image && image.includes('.') ? (
          <img src={image} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          image || '👨‍⚕️'
        )}
      </motion.div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-500 font-semibold mb-2">{specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{experience} years experience</p>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={16} />
            Email
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-green-100 text-green-600 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default DoctorCard
