import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialsProps {
  darkMode: boolean;
}

const TestimonialSection: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      content: 'UIVibe transformed our online presence completely. Their attention to detail and technical expertise is unmatched. Our website now converts 3x better!',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, E-Shop Pro',
      company: 'E-Shop Pro',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      content: 'The e-commerce platform they built for us is incredible. Sales increased by 250% in the first month. The team is professional and delivers on time.',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Creative Agency',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      content: 'Working with UIVibe was a game-changer. They understood our vision perfectly and created a website that truly represents our brand. Highly recommended!',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            Client Testimonials
          </span>
          
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Happy Clients
            </span>{' '}
            Say
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Do not just take our word for it. Here is what our satisfied clients 
            have to say about working with UIVibe.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '100+', label: 'Satisfied Clients' },
            { number: '10+', label: 'Countries Served' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote size={24} className={`${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Image
                width={120}
                height={120}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </div>
                </div>
                <Image
                width={1200}
                height={1200}
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-10 h-10 rounded object-cover opacity-60"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-flex flex-col items-center p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Join Our Success Stories?
            </h3>
            <p className={`mb-6 max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Lets create something amazing together and make your business the next success story.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Start Your Project Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;