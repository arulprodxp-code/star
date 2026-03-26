import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full glass-effect z-50 px-4 md:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
          >
            🦷 Star Dental
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.span
                whileHover={{ color: '#0EA5E9' }}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Desktop Book Appointment Button - Now wrapped in Link */}
        <Link to="/contact#appointment-form">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Book Appointment
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden mt-4 py-4 bg-white rounded-xl shadow-lg"
        >
          {navItems.map((item) => (
            <motion.div key={item.path} variants={itemVariants}>
              <Link to={item.path}>
                <motion.p
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-500 font-medium px-4 py-2 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.p>
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile Book Appointment Button - Now wrapped in Link */}
          <Link to="/contact#appointment-form">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
              className="w-11/12 mx-auto mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold block"
            >
              Book Appointment
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation