import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Karthik Subramanian',
      text: 'I visited Star Dental in Mayiladuthurai for a severe toothache. The doctor was incredibly patient and explained the root canal process clearly. It was completely painless. Highly recommend their services!',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Priya Rajendran',
      text: 'The clinic is exceptionally clean and well-maintained. I got my teeth whitening done here, and the results are fantastic. The staff is very polite and makes you feel right at home.',
      rating: 5,
      image: '👩',
    },
    {
      name: 'Ramesh Krishnan',
      text: 'My father needed dentures, and we were quite anxious about the procedure. The team at Star Dental handled everything with so much care. He is very comfortable with his new teeth now. Thank you!',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Anjali Desai',
      text: 'I have always been terrified of dentists, but the approach here changed my mind entirely. From the reception to the actual extraction, everything was smooth and professional.',
      rating: 5,
      image: '👩',
    },
    {
      name: 'Vikram Natarajan',
      text: 'Got my ceramic braces fixed here. They explained the cost and duration upfront, with no hidden charges. Very transparent and trustworthy dental clinic in Koranad.',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Lakshmi Narayan',
      text: 'Brought my 5-year-old daughter for a cavity filling. The dentist was so gentle and playful that she did not cry even once. Brilliant pediatric care!',
      rating: 5,
      image: '👩',
    },
    {
      name: 'Manoj Kumar',
      text: 'Had to get an emergency wisdom tooth extraction. They accommodated me immediately. The procedure was quick, and the post-op care instructions were very helpful.',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Shalini Venkat',
      text: 'Best dental clinic in Mayiladuthurai! I go here for my regular scaling and check-ups. They use modern equipment, and the hygiene standards are top-notch.',
      rating: 5,
      image: '👩',
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
            Patient <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Testimonials</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Hear from our happy patients about their experience at Star Dental
          </motion.p>
        </div>
      </motion.section>

      {/* Rating Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '4.9/5', label: 'Average Rating' },
              { number: '1000+', label: 'Happy Patients' },
              { number: '98%', label: 'Recommend Us' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Section */}
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
            Why Patients Trust Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✨', title: 'Expertise', desc: 'Expert dentists with years of experience' },
              { icon: '🛡️', title: 'Safety', desc: 'Strict sterilization and safety protocols' },
              { icon: '💖', title: 'Care', desc: 'Compassionate, patient-centered approach' },
              { icon: '⚡', title: 'Technology', desc: 'Latest equipment and treatment methods' },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-smooth text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  className="text-5xl mb-4"
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Join Thousands of Satisfied Patients</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Star Dental difference today
          </p>
          <Link to="/contact#appointment-form">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-500 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Schedule Your Appointment Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Testimonials
