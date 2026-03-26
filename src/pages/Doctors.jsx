import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Saif Anwar',
      specialty: 'Chief Dental Surgeon',
      experience: 15,
      image: '/doctor.png',
      email: 'drsaif@star.dental',
      bio: 'Dr. Saif Anwar specializes in comprehensive dental care with a focus on patient comfort. He earned his DDS from a prestigious dental school and has 15 years of clinical experience. He is dedicated to transforming smiles and providing world-class treatments.',
    },
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
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Expert Dentists</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Highly trained professionals dedicated to your dental health and beautiful Star
          </motion.p>
        </div>
      </motion.section>

      {/* Doctors Grid */}
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
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                specialty={doctor.specialty}
                experience={doctor.experience}
                image={doctor.image}
                email={doctor.email}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Doctor Details Section */}
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
            Doctor Profiles
          </motion.h2>

          <div className="space-y-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-smooth hover:shadow-elevated transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center text-6xl mb-4 overflow-hidden"
                    >
                      {doctor.image && doctor.image.includes('.') ? (
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        doctor.image || '👨‍⚕️'
                      )}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-500 font-semibold text-center">
                      {doctor.specialty}
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {doctor.bio}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800">Experience</p>
                        <p className="text-gray-600">{doctor.experience} years</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Specialization</p>
                        <p className="text-gray-600">{doctor.specialty}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Contact</p>
                        <p className="text-blue-500">{doctor.email}</p>
                      </div>
                    </div>

                    <Link to="/contact#appointment-form">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold"
                      >
                        Request Appointment
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Qualifications Section */}
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
            Our Credentials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Board Certified', desc: 'All dentists are board certified and licensed' },
              { title: 'Continuing Education', desc: 'Regular training in latest techniques and technology' },
              { title: 'Professional Memberships', desc: 'Active members of dental associations and societies' },
            ].map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-smooth text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-5xl mb-4"
                >
                  ✓
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600">{credential.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Doctors
