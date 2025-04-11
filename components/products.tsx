'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "./waitlist-form";

const Products = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="w-full mx-auto md:px-8 px-4 py-16">
      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:h-full mb-16 flex flex-col justify-between py-6">
          <div className="mb-6 lg:mb-0">
            <h1 className="md:text-5xl text-3xl font-semibold text-[#37373740] mb-4">
              Our full site is on the way—
            </h1>
            <h2 className="text-xl md:text-3xl text-[#978163] max-w-xl font-semibold">
              but two of our flagship products are already live and ready to
              use.
            </h2>
          </div>
          <h3 className="md:text-3xl text-xl text-[#767676] lg:mb-4">
            Want early access to Neural Nexus or other MicroSaaS tools?
          </h3>
          <div className="mt-8">
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#2F2C28] text-white px-9 py-5 rounded-full hover:bg-[#3F3F3B] transition-colors cursor-pointer"
            >
              Join The Waitlist
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12">
          {/* Lawbit Card */}
          <div className="flex flex-col justify-between bg-white md:p-10 p-6 rounded-2xl">
            <div className="space-y-4">
              <Image
                src="/images/lawbit.svg"
                alt="Lawbit Logo"
                width={50}
                height={50}
              />
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#2A2A2A]">Lawbit</h2>
              <h3 className="text-xl text-[#343434] font-semibold">AI for Legal Intelligence</h3>
              <p className="text-[#343434] text-sm lg:text-lg">
                LawBit simplifies contract creation and analysis with AI-powered
                accuracy. Effortlessly draft, review, and optimize legal
                documents in seconds.
              </p>
            </div>
            <Link
              href="https://lawbit.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit hover:cursor-pointer"
            >
              <button className="bg-[#2F2C28] text-white px-10 py-4 rounded-full hover:bg-[#3F3F3B] transition-colors mt-6 w-fit cursor-pointer">
                Try Now
              </button>
            </Link>
          </div>

          {/* Rovyk Card */}
          <div className="flex flex-col justify-between bg-white md:p-10 p-6 rounded-2xl">
            <div className="space-y-4">
              <Image
                src="/images/rovyk.svg"
                alt="Rovyk Logo"
                width={50}
                height={50}
              />
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#2A2A2A]">Rovyk</h2>
              <h3 className="text-xl text-[#343434] font-semibold">AI Powerhouse</h3>
              <p className="text-[#343434] text-sm lg:text-lg">
                Rovyk lets you seamlessly switch between top AI models—all in
                one place, effortlessly, making your workflow smoother and more
                efficient.
              </p>
            </div>
            <Link
              href="https://rovyk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit hover:cursor-pointer"
            >
              <button className="bg-[#2F2C28] text-white px-10 py-4 rounded-full hover:bg-[#3F3F3B] transition-colors mt-6 w-fit cursor-pointer">
                Try Now
              </button>
            </Link>
          </div>
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
