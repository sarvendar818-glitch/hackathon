import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Users, Zap, Shield } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * YojnaSetu - Government Schemes Portal
 * Design Philosophy: Professional Government Portal with Full-Width Banner Hero
 * - Full-width India Gate banner image at top (1/3 vertical height)
 * - Overlay heading text on the image
 * - Descriptive content below the banner
 * - Clean white background with strategic accent colors (saffron, white, green)
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedScheme, setExpandedScheme] = useState<number | null>(null);

  const handleApplyNow = () => {
    setLocation('/form');
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Schemes', href: '#schemes' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const schemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Jan Dhan Yojana',
      description: 'Financial inclusion for all households through universal access to banking services.',
      icon: '🏦',
      details: 'Provides zero-balance bank accounts, RuPay debit cards, and accidental insurance coverage.'
    },
    {
      id: 2,
      title: 'Ayushman Bharat',
      description: 'Health insurance scheme providing coverage up to ₹5 lakhs per family per year.',
      icon: '⚕️',
      details: 'Covers hospitalization expenses for secondary and tertiary care for 50 crore beneficiaries.'
    },
    {
      id: 3,
      title: 'Pradhan Mantri Awas Yojana',
      description: 'Affordable housing scheme for economically weaker sections of society.',
      icon: '🏠',
      details: 'Provides financial assistance and subsidy for home construction and purchase.'
    },
    {
      id: 4,
      title: 'Skill India Mission',
      description: 'Vocational training and skill development for youth employment.',
      icon: '🎓',
      details: 'Aims to train 40 crore citizens in various skills by 2022 for better employment opportunities.'
    },
  ];

  const policies = [
    { title: 'Data Privacy', description: 'Your personal information is protected under DISHA framework' },
    { title: 'Transparency', description: 'All government schemes are publicly accessible and documented' },
    { title: 'Accessibility', description: 'Services available in 22 Indian languages for all citizens' },
    { title: 'Security', description: 'Multi-layer security protocols ensure safe transactions' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-lg flex items-center justify-center font-bold text-sm text-orange-600">
              YS
            </div>
            <span className="text-xl font-bold text-gray-900">YojnaSetu</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleApplyNow}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow cursor-pointer"
          >
            Apply Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-orange-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button onClick={handleApplyNow} className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium cursor-pointer">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Full-Width Banner Hero Section */}
      <section id="home" className="relative w-full h-screen pt-20 flex items-center justify-center overflow-hidden" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663468105408/U2FWKMt4GNg7UXfzJG85su/indainflag_13c359a8.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />

        {/* Overlay Content - Heading Text */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-transparent text-white rounded-full text-sm font-semibold mb-6"
          >
            Government of India Initiative
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-3xl drop-shadow-lg"
          >
            Empowering
            <br />
            <span className="text-orange-300">Every Citizen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Access comprehensive government schemes and welfare programs designed to uplift every section of society.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all hover:shadow-xl">
              Explore Schemes
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Content Below Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663468105408/U2FWKMt4GNg7UXfzJG85su/indiagate_b7376b37.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mb-4"
              >
                <FileText size={32} className="text-orange-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Simple Process</h3>
              <p className="text-gray-200">Easy-to-follow application steps for all schemes</p>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4"
              >
                <Users size={32} className="text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Wide Reach</h3>
              <p className="text-gray-200">Services for all sections of society</p>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-4"
              >
                <Zap size={32} className="text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Approval</h3>
              <p className="text-gray-200">Quick processing and disbursement</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-200 text-lg">
              <span className="font-bold text-white">50M+ citizens</span> have already benefited from our government schemes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Government Schemes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive welfare programs designed to support every citizen's growth and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme, index) => (
              <motion.div
                key={scheme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{scheme.icon}</div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform ${
                        expandedScheme === scheme.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>

                  {expandedScheme === scheme.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">{scheme.details}</p>
                      <button className="mt-4 text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                        Apply for this scheme →
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose YojnaSetu?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your gateway to government benefits with transparency and ease
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: 'Simple Process', description: 'Easy-to-follow application steps' },
              { icon: Users, title: 'Wide Reach', description: 'Services for all sections of society' },
              { icon: Zap, title: 'Fast Approval', description: 'Quick processing and disbursement' },
              { icon: Shield, title: 'Secure & Safe', description: 'Protected with government security' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-4 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4"
                >
                  <feature.icon size={32} className="text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparency, security, and accessibility at the core of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-100 hover:border-orange-200 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of citizens who have benefited from government schemes. Apply now and take the first step towards a better future.
            </p>
            <motion.button
              onClick={handleApplyNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Apply for Schemes
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">YojnaSetu</h3>
              <p className="text-sm">Empowering every citizen through government schemes and welfare programs.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">Schemes</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 YojnaSetu. Government of India Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
