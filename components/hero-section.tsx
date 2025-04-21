'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      <motion.div 
        className='absolute inset-0 bg-[url("/images/hero.jpg")] bg-cover bg-center bg-no-repeat'
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div 
        className="relative w-full flex flex-col justify-center items-center mx-auto gap-4 md:py-24 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="flex flex-col justify-center items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/neural-paths.svg"
              alt="logo"
              width={100}
              height={100}
              priority
            />
          </motion.div>
          <motion.h1 
            className="md:text-4xl text-2xl font-bold text-white uppercase tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Neural Arc
          </motion.h1>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center items-center gap-4 text-white mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2 
            className="text-sm lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            AI Analytics, Reimagined for Real Businesses
          </motion.h2>
          <motion.p 
            className='text-3xl lg:text-7xl font-semibold text-white max-w-6xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Something intelligent is loading...
          </motion.p>
          <motion.p 
            className="text-sm lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            We&apos;re building something powerful.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
