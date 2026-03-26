import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '2010', label: 'Founded' },
    { number: '1000+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '10M+', label: 'Stars Created' },
  ]

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
    <div className="pt-20">
      {/* About Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[60vh] flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Star Dental</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Since 2010, we've been dedicated to providing exceptional dental care with a personal touch and cutting-edge technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-elevated"
            >
              <img
                src="/teeth.png"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Our Story
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Founded in 2010, Star Dental has been a beacon of excellence in oral healthcare. What started as a small clinic has grown into a premier full-service dental practice led by Dr. Saif Anwar and a dedicated staff of professionals.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is simple: to provide world-class dental care in a comfortable, welcoming environment. We believe that every patient deserves to have a beautiful, healthy Star, and we're committed to making that a reality.
              </p>
              <p className="text-lg leading-relaxed">
                Over the past 14 years, we've treated over 1000 patients and created countless Stars. Our success is measured not just in the procedures we perform, but in the confidence and satisfaction of our patients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-smooth text-center"
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-elevated"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To transform Stars by providing exceptional, compassionate dental care using the latest technology and techniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-green-500 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted dental clinic known for excellence, innovation, and patient care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-indigo-500 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, integrity, compassion, and patient-centered care in everything we do.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          >
            Our team of experienced dentists and support staff are committed to providing you with the best possible care in a comfortable, friendly environment.
          </motion.p>

          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-elevated mb-16 relative h-[400px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src="/real.png"
                alt="Our Team"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['👨‍⚕️ Dentists', '👩‍⚕️ Hygienists', '💼 Support Staff'].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-smooth text-center"
              >
                <div className="text-6xl mb-4">{role.split(' ')[0]}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{role.split(' ')[1]}</h3>
                <p className="text-gray-600">
                  Dedicated professionals working together to ensure your comfort and satisfaction.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
