import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';

interface NewsletterProps {
  darkMode: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    }, 1500);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Background Pattern */}
          <div className={`relative rounded-3xl overflow-hidden ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
          }`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-8 md:p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6"
              >
                <Mail size={32} className="text-white" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Stay Updated with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Latest Trends
                  </span>
                </h2>
                
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Join our community to get the latest web design trends, development tips, 
                  template updates, and exclusive insights delivered to your inbox.
                </p>
              </motion.div>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
              >
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        disabled={isLoading}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center space-x-3 text-green-500"
                  >
                    <CheckCircle size={24} />
                    <span className="text-lg font-medium">Successfully Subscribed!</span>
                  </motion.div>
                )}

                <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 gap-6 mt-12"
              >
                {[
                  { title: 'Weekly Tips', description: 'Get expert web development tips' },
                  { title: 'New Templates', description: 'First access to our latest designs' },
                  { title: 'Industry News', description: 'Stay updated with tech trends' },
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {benefit.title}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {benefit.description}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;