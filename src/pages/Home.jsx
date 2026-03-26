import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Award, Users, Heart } from 'lucide-react'
import { Link } from 'react-router-dom' // Add this import
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/hero-image.png',
    '/slide-1.png',
    '/slide-2.png',
    '/slide-3.png',
    '/slide-4.png',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])
  const services = [
    {
      icon: '/general_checkup.png',
      title: 'General Check-up',
      description: 'Regular dental examinations and cleaning to maintain optimal oral health',
    },
    {
      icon: '/teeth_cleaning.png',
      title: 'Teeth Cleaning',
      description: 'Professional teeth cleaning to remove plaque and tartar buildup',
    },
    {
      icon: '/root_canal.png',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment to save infected or damaged teeth',
    },
    {
      icon: '/dental_implants.png',
      title: 'Dental Implants',
      description: 'State-of-the-art implant solutions for missing teeth restoration',
    },
    {
      icon: '/braces_aligners.png',
      title: 'Braces & Aligners',
      description: 'Orthodontic solutions for perfect Star alignment and bite correction',
    },
    {
      icon: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and Star makeover treatments',
    },
  ]

  const doctors = [
    {
      name: 'Dr. Saif Anwar',
      specialty: 'Chief Dental Surgeon',
      experience: 15,
      image: '/doctor.png',
      email: 'drsaif@star.dental',
    },
  ]

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
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Dentists',
      description: '20+ years combined experience',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Compassionate, stress-free treatments',
    },
    {
      icon: Users,
      title: '1000+ Happy Patients',
      description: '5-star reviews and testimonials',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden w-full">
        {/* Background Slider */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay for text readability */}
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your Smile, <br className="md:hidden" />
              <span className="text-blue-400">
                Our Priority
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Experience premium dental care with modern technology and compassionate professionals. We're dedicated to creating beautiful, healthy Stars.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Hero Book Appointment Button */}
              <Link to="/contact#appointment-form">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-bold text-lg border border-transparent shadow-lg"
                >
                  Book Appointment
                </motion.button>
              </Link>

              {/* Learn More Button */}
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="text-white/80" size={32} />
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your needs with state-of-the-art technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
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
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            Why Choose Star Dental
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white rounded-2xl shadow-smooth text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-300 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Featured Doctor Section */}
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

            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            Meet Our Expert Doctor
          </motion.h2>

          <div className="max-w-sm mx-auto">
            <DoctorCard
              name={doctors[0].name}
              specialty={doctors[0].specialty}
              experience={doctors[0].experience}
              image={doctors[0].image}
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
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
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            What Our Patients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={index * 0.1}
              />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Brighter Star?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and experience the difference of premium dental care.
          </p>

          {/* CTA Book Appointment Button - Updated */}
          <Link to="/contact#appointment-form">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-500 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Book Your Appointment Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home