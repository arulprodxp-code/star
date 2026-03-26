import { motion } from 'framer-motion'

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -15, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-smooth hover:shadow-elevated transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col h-full"
    >
      {icon && icon.includes('.') ? (
        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-50 relative">
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="p-8 pb-0">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="text-5xl mb-4 inline-block"
          >
            {icon}
          </motion.div>
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-1 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <div className="mt-auto">
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            className="h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
