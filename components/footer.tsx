'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="w-full bg-[url('/images/footer.jpg')] bg-cover bg-top bg-no-repeat px-4 py-10 shadow-[0_-8px_0_0_#7E7367] rounded-t-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 2.8,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="max-w-[1920px] mx-auto md:px-15">
        <div className="flex flex-col justify-between items-start h-full gap-10">
          {/* Logo and Tagline */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/neural-paths-footer.svg"
              alt="Neural Paths Logo"
              width={64}
              height={64}
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="text-white font-semibold text-base sm:text-xl md:text-2xl">Neural Paths</span>
              <span className="text-[#64594E] hidden sm:inline border-l text-xs sm:text-sm md:text-base border-[#FFFFFF]/10 px-4">Where data meets neural intelligence</span>
            </div>
          </motion.div>

          {/* Links and Copyright */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full md:pt-10 space-y-4 sm:space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex space-x-2 text-[#8C8376] text-lg sm:text-sm">
              <Link href="/terms" className="hover:text-white transition-colors underline cursor-pointer">
                Terms of use
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors underline cursor-pointer">
                Privacy Policy
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-[#B4B0AA] text-xs sm:text-sm">
              <span>Copyright 2025. All rights reserved.</span>
              <span className="hidden sm:inline">Neural Paths</span>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm">
              <span className='text-[#988C7D]'>A thing by</span>
              <span className="ml-1 text-white font-semibold">NEURAL PATHS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;