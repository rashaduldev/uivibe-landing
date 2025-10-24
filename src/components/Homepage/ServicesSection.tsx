import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Layout, 
  Building, 
  Search, 
  Headphones,
  ArrowRight 
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const ServicesSection: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Beautiful UI/UX design and branding that captures your vision',
      features: ['UI/UX Design', 'Brand Identity', 'Responsive Design', 'Prototyping'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern web development with cutting-edge technologies',
      features: ['React/Next.js', 'Laravel/PHP', 'Node.js', 'Database Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layout,
      title: 'Template Design',
      description: 'Ready-to-use templates for quick deployment',
      features: ['Landing Pages', 'E-commerce', 'Portfolio', 'Business Sites'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Building,
      title: 'Corporate Solutions',
      description: 'Custom business portals and enterprise applications',
      features: ['Admin Dashboards', 'CRM Systems', 'Business Portals', 'API Integration'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and performance',
      features: ['Technical SEO', 'Performance Optimization', 'Analytics Setup', 'Speed Optimization'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Ongoing support to keep your website running smoothly',
      features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Backup Services'],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            darkMode 
              ? 'bg-gray-800 text-blue-400 border border-gray-700' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            Our Services
          </span>
          
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Complete Digital Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From concept to launch, we provide end-to-end web solutions that drive results 
            and exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`text-sm flex items-center ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`group/btn flex items-center space-x-2 text-sm font-medium transition-colors ${
                darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
              }`}>
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-flex p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Ready to Start Your Project?
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Lets discuss how we can help bring your vision to life
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;