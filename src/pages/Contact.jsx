import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const formRef = useRef()
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#appointment-form') {
      const element = document.getElementById('appointment-form')
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general-checkup',
    date: '',
    time: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_d5eyx8j'
  const EMAILJS_TEMPLATE_ID = 'template_j0dqcwi'
  const EMAILJS_PUBLIC_KEY = 'r9XUcnl57IqmXxxK7'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const serviceLabels = {
      'general-checkup': 'General Check-up',
      'teeth-cleaning': 'Teeth Cleaning',
      'root-canal': 'Root Canal',
      'dental-implants': 'Dental Implants',
      'braces': 'Braces & Aligners',
      'cosmetic': 'Cosmetic Dentistry'
    }

    const templateParams = {
      to_name: 'Star Dental Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: serviceLabels[formData.service],
      appointment_date: formData.date,
      appointment_time: formData.time,
      message: formData.message || 'No additional message',
      reply_to: formData.email,
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'general-checkup',
          date: '',
          time: '',
          message: '',
        })
      }, 3000)

    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send appointment request. Please try again or call us directly.')

      setTimeout(() => {
        setError('')
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 8220962818',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'srqualitydent@gmail.com',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      info: '174, Pattamangala St, Pasupathi Street, Koranad, Mayiladuthurai, Tamil Nadu 609001',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      color: 'from-purple-400 to-purple-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            Get in <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? Ready to schedule an appointment? Contact us today!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-white rounded-2xl shadow-smooth"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{info.info}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section
        id="appointment-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-smooth"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Book an Appointment
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300"
              >
                ✓ Thank you! We'll contact you soon to confirm your appointment.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-300"
              >
                ⚠ {error}
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </motion.div>

              {/* Service Selection */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="general-checkup">General Check-up</option>
                  <option value="teeth-cleaning">Teeth Cleaning</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="dental-implants">Dental Implants</option>
                  <option value="braces">Braces & Aligners</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Date & Time */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Schedule Appointment'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map with your actual Google Maps iframe */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-smooth h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1771415832489!5m2!1sen!2sin!6m8!1m7!1sU4SGm1LBKFKyuI3jFP1uiA!2m2!1d11.09755494691257!2d79.65305712300473!3f234.0114!4f0!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Star Dental Location"
                className="w-full h-full"
              />
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-smooth"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Star Dental?
              </h3>
              <ul className="space-y-3">
                {[
                  '✓ Experienced, friendly dental team',
                  '✓ State-of-the-art technology',
                  '✓ Comfortable, welcoming environment',
                  '✓ Flexible scheduling options',
                  '✓ Comprehensive dental services',
                  '✓ Emergency same-day appointments',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 font-semibold flex items-center gap-2"
                  >
                    <span className="text-green-500 text-xl">{item.split('✓')[0]}✓</span>
                    {item.split('✓')[1]}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'How far in advance should I schedule?',
                a: 'We recommend booking 1-2 weeks in advance, but emergency appointments can often be arranged same-day.',
              },
              {
                q: 'Do you accept insurance?',
                a: 'Yes, we accept most major dental insurance plans. Contact us to verify your coverage.',
              },
              {
                q: 'Is parking available?',
                a: 'Yes, we have dedicated parking spaces for all patients with convenient access to our clinic.',
              },
              {
                q: 'What should I bring to my first appointment?',
                a: 'Bring your ID, insurance card, and any previous dental records. Arrive 10 minutes early for paperwork.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-smooth"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="text-2xl">❓</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact