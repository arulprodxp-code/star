import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: '/general_checkup.png',
      title: 'General Check-up',
      description: 'Comprehensive oral examination including digital X-rays and dental assessment. We check for cavities, gum disease, and other dental issues. Regular check-ups help prevent problems before they become serious.',
    },
    {
      icon: '/teeth_cleaning.png',
      title: 'Teeth Cleaning',
      description: 'Professional cleaning to remove plaque and tartar buildup. Our hygienists use state-of-the-art ultrasonic scalers and polishing techniques for a fresh, clean Star. Includes fluoride treatment.',
    },
    {
      icon: '/root_canal.png',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment to remove infected or damaged pulp from inside the tooth. Followed by filling and restoration to save your natural tooth and eliminate pain.',
    },
    {
      icon: '/dental_implants.png',
      title: 'Dental Implants',
      description: 'Permanent replacement solution for missing teeth. Titanium implants are surgically placed and topped with custom crowns that look and function like natural teeth.',
    },
    {
      icon: '/braces_aligners.png',
      title: 'Braces & Aligners',
      description: 'Orthodontic solutions to straighten teeth and correct bite problems. We offer traditional braces and clear aligners. Treatment transforms your Star while improving oral health.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      title: 'Cosmetic Dentistry',
      description: 'Enhance your Star with teeth whitening, porcelain veneers, bonding, and Star makeovers. Our cosmetic treatments combine art and science for beautiful, natural-looking results.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
            Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Dental Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive dental solutions tailored to meet every patient's unique needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
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
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
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
            Our Treatment Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Consultation', desc: 'Initial exam & discussion of your needs' },
              { number: '02', title: 'Planning', desc: 'Create personalized treatment plan' },
              { number: '03', title: 'Treatment', desc: 'Perform procedures with care' },
              { number: '04', title: 'Follow-up', desc: 'Ensure optimal results & satisfaction' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-smooth text-center relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>

                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Section */}
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
            Advanced Technology
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🔬', title: 'Digital X-Ray', desc: 'Low radiation digital imaging for precise diagnostics' },
              { icon: '😁', title: 'Intraoral Camera', desc: 'See exactly what the dentist sees during treatment' },
              { icon: '⚡', title: 'Laser Treatment', desc: 'Painless laser procedures for gum disease and whitening' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-smooth text-center"
              >
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to experience our premium dental services?
          </p>
          <Link to="/contact#appointment-form">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-500 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Schedule Your Appointment
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Services
