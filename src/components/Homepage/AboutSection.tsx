import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';
import Image from 'next/image';

interface AboutProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutProps> = ({ darkMode }) => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Creative designers & skilled developers working together'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We focus on delivering results that matter to your business'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every project meets the highest standards of excellence'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising on quality'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                darkMode 
                  ? 'bg-gray-700 text-blue-400 border border-gray-600' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                About UIVibe
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              We are a team of creative designers & developers turning{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ideas into reality
              </span>
            </h2>

            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With over 5 years of experience in the digital space, UIVibe has been crafting 
              exceptional web experiences for businesses worldwide. We combine creativity with 
              technical expertise to deliver solutions that not only look great but perform 
              exceptionally.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                width={1296}
                height={96}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    100+ Projects
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Successfully Delivered
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;