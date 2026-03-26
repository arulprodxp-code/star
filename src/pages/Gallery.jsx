import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('before-after')

  const galleryItems = {
    'before-after': [
      { title: 'Star Transformation 1', category: 'Cosmetic' },
      { title: 'Star Transformation 2', category: 'Cosmetic' },
      { title: 'Star Transformation 3', category: 'Cosmetic' },
      { title: 'Star Transformation 4', category: 'Cosmetic' },
      { title: 'Teeth Whitening 1', category: 'Whitening' },
      { title: 'Teeth Whitening 2', category: 'Whitening' },
    ],
    'clinic': [
      { title: 'Reception Area', category: 'Facility' },
      { title: 'Treatment Room', category: 'Facility' },
      { title: 'Waiting Area', category: 'Facility' },
      { title: 'Sterilization Lab', category: 'Facility' },
      { title: 'Modern Equipment', category: 'Equipment' },
      { title: 'Digital X-Ray', category: 'Equipment' },
    ],
    'team': [
      { title: 'Dr. Saif Anwar', category: 'Team' },
      { title: 'Dental Assistant', category: 'Team' },
      { title: 'Hygienist', category: 'Team' },
      { title: 'Receptionist', category: 'Team' },
      { title: 'Support Team', category: 'Team' },
      { title: 'Team Event', category: 'Team' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[50vh] flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            See our state-of-the-art facilities and amazing Star transformations
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-4"
      >
        <div className="max-w-7xl mx-auto flex gap-4 justify-center flex-wrap">
          {[
            { id: 'before-after', label: 'Before & After' },
            { id: 'clinic', label: 'Our Clinic' },
            { id: 'team', label: 'Our Team' },
          ].map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-500'
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {galleryItems[selectedCategory].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
                className="group relative overflow-hidden rounded-2xl shadow-smooth cursor-pointer"
              >
                {/* Placeholder Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="h-64 bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center text-6xl overflow-hidden"
                >
                  {selectedCategory === 'before-after' && '😁'}
                  {selectedCategory === 'clinic' && '🏥'}
                  {selectedCategory === 'team' && '👥'}
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.category}</p>
                </motion.div>

                {/* Hover Effect Ring */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Before & After Cases' },
              { number: '10', label: 'Treatment Rooms' },
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Stars Created' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-smooth text-center"
              >
                <motion.h3
                  className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Facilities Highlight */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            State-of-the-Art Facility
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🏛️', title: 'Modern Building', desc: 'New, spacious, and well-designed clinic' },
              { icon: '💇', title: 'Comfortable Chairs', desc: 'Ergonomic seating for patient comfort' },
              { icon: '🔬', title: 'Advanced Lab', desc: 'On-site sterilization and lab facilities' },
              { icon: '🎵', title: 'Relaxing Ambiance', desc: 'Soothing music and calming environment' },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-smooth"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-4"
                >
                  {facility.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Schedule Your Visit</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our modern facility and see the difference quality care makes
          </p>
          <Link to="/contact#appointment-form">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-500 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Book Your Appointment
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Gallery
