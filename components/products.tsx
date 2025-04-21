'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "./waitlist-form";
import { motion } from "framer-motion";

const Products = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="w-full mx-auto md:px-8 px-4 py-16">
      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        {/* Left Column - First Row */}
        <motion.div 
          className="lg:h-full mb-16 flex flex-col justify-between py-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 lg:mb-0">
            <motion.h1 
              className="md:text-5xl text-3xl font-semibold text-[#37373740] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Our full site is on the way—
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-3xl text-[#978163] max-w-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              but two of our flagship products are already live and ready to
              use.
            </motion.h2>
          </div>
          <motion.h3 
            className="md:text-3xl text-xl text-[#767676] lg:mb-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Want early access to NeuralNod or other MicroSaaS tools?
          </motion.h3>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#2F2C28] text-white px-9 py-5 rounded-full hover:bg-[#3F3F3B] hover:shadow-[0_5px_0_0_#C6AEA3] transition-all cursor-pointer"
            >
              Join The Waitlist
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12">
          {/* Lawbit Card */}
          <motion.div 
            className="flex flex-col justify-between bg-white md:p-10 p-6 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/lawbit.svg"
                  alt="Lawbit Logo"
                  width={50}
                  height={50}
                />
              </motion.div>
              <motion.h2 
                className="text-2xl lg:text-4xl font-semibold text-[#2A2A2A]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Lawbit
              </motion.h2>
              <motion.h3 
                className="text-xl text-[#343434] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                AI for Legal Intelligence
              </motion.h3>
              <motion.p 
                className="text-[#343434] text-sm lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                LawBit simplifies contract creation and analysis with AI-powered
                accuracy. Effortlessly draft, review, and optimize legal
                documents in seconds.
              </motion.p>
            </div>
            <Link
              href="https://lawbit.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit hover:cursor-pointer"
            >
              <motion.button 
                className="bg-[#2F2C28] text-white px-10 py-4 rounded-full hover:bg-[#3F3F3B] hover:shadow-[0_5px_0_0_#C6AEA3] transition-all mt-6 w-fit cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Try Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Rovyk Card */}
          <motion.div 
            className="flex flex-col justify-between bg-white md:p-10 p-6 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/rovyk.svg"
                  alt="Rovyk Logo"
                  width={50}
                  height={50}
                />
              </motion.div>
              <motion.h2 
                className="text-2xl lg:text-4xl font-semibold text-[#2A2A2A]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Rovyk
              </motion.h2>
              <motion.h3 
                className="text-xl text-[#343434] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                AI Powerhouse
              </motion.h3>
              <motion.p 
                className="text-[#343434] text-sm lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Rovyk lets you seamlessly switch between top AI models—all in
                one place, effortlessly, making your workflow smoother and more
                efficient.
              </motion.p>
            </div>
            <Link
              href="https://rovyk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit hover:cursor-pointer"
            >
              <motion.button 
                className="bg-[#2F2C28] text-white px-10 py-4 rounded-full hover:bg-[#3F3F3B] hover:shadow-[0_5px_0_0_#C6AEA3] transition-all mt-6 w-fit cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Try Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onOpenChange={setIsWaitlistOpen} 
      />
    </div>
  );
};

export default Products;
