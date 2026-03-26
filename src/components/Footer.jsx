import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              🦷 Star Dental
            </h3>
            <p className="text-gray-300 mb-4">
              Providing excellent dental care with modern technology and compassion since 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Doctors', path: '/doctors' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span>+91 8220962818</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span>srqualitydent@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-1" />
                <span>174, Pattamangala St, Pasupathi Street, Koranad, Mayiladuthurai, Tamil Nadu 609001</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-8 text-center text-gray-300"
        >
          <p>&copy; 2026 Star Dental Clinic. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with arul
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
