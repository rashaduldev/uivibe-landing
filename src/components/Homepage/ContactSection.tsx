import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'react-toastify';

interface ContactProps {
  darkMode: boolean;
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC<ContactProps> = ({ darkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Thanks! We\'ll get back to you soon.');
      reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@uivibe.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 888 949 7372',
      description: 'Sun - Thu from 8am to 5pm',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '23 Design Street, Creative City, CC 152',
      description: 'Come say hello at our office',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Sun - Thu: 8am - 5pm',
      description: 'Weekend support available',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const subjects = [
    'Website Design',
    'Website Development',
    'Template Purchase',
    'Corporate Solution',
    'SEO Services',
    'Support & Maintenance',
    'Other'
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            Get In Touch
          </span>
          
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Lets Start Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Next Project
            </span>
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to transform your digital presence? Get in touch with us today 
            and lets discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h4>
                    <p className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {info.content}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`mt-8 p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800' 
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle size={24} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Response Guarantee
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent matters, do not hesitate to call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send us a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent Successfully!
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject *
                  </label>
                  <select
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } ${errors.subject ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;