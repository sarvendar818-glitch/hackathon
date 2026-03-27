import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Lock, Mail, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * YojnaSetu - Login Page
 * Design Philosophy: Clean, minimal sign-in form matching government portal standards
 * - Professional appearance with government branding
 * - Email and password validation
 * - Social login options
 * - Navigation back to home
 */

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would authenticate here and redirect
      alert('Sign in successful! (Demo)');
      setLocation('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-green-50 flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setLocation('/')}
        className="absolute top-8 left-8 flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back to Home</span>
      </motion.button>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex items-center space-x-2"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-lg flex items-center justify-center font-bold text-sm text-orange-600">
          YS
        </div>
        <span className="text-2xl font-bold text-gray-900">YojnaSetu</span>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
      >
        {/* Header */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 mx-auto shadow-lg">
          <LogIn className="w-7 h-7 text-orange-600" />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
          Sign in to YojnaSetu
        </h2>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Access government schemes and apply for benefits
        </p>

        {/* Form */}
        <form onSubmit={handleSignIn} className="w-full flex flex-col gap-4 mb-6">
          {/* Email Input */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <span className="absolute left-3 top-10 text-gray-400">
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="your.email@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-gray-900 text-sm transition"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <span className="absolute left-3 top-10 text-gray-400">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-gray-900 text-sm transition"
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg p-3"
            >
              {error}
            </motion.div>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-xs text-orange-600 hover:text-orange-700 font-medium transition"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-xs text-gray-400 font-medium">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3 w-full justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
            title="Sign in with Google"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
            title="Sign in with Facebook"
          >
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
            title="Sign in with Apple"
          >
            <img
              src="https://www.svgrepo.com/show/511330/apple-173.svg"
              alt="Apple"
              className="w-5 h-5"
            />
          </motion.button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-orange-600 hover:text-orange-700 font-semibold transition"
            >
              Create one
            </button>
          </p>
        </div>
      </motion.div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center text-xs text-gray-500 max-w-sm"
      >
        <p>
          By signing in, you agree to our{' '}
          <a href="#" className="text-orange-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-orange-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </div>
  );
}
