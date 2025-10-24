import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode 
                ? 'bg-gray-800 text-blue-400 border border-gray-700' 
                : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}>
              ✨ Creative Web Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            We Design, Develop &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deliver Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Your trusted partner for modern websites, templates & corporate web solutions. 
            We transform ideas into interactive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>Get a Free Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className={`group flex items-center space-x-2 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
              darkMode 
                ? 'text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600' 
                : 'text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400'
            }`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Play size={16} className="text-white ml-1" />
              </div>
              <span>View Templates</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-gray-600' : 'border-gray-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 ${
            darkMode ? 'bg-gray-600' : 'bg-gray-400'
          }`} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;