import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='w-full bg-[url("/images/hero.jpg")] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center mx-auto gap-4 md:py-24 py-12 rounded-3xl'>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src="/images/neural-paths.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className="md:text-4xl text-2xl font-bold text-white uppercase tracking-widest ">Neural Paths</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-white mt-4">
        <h2 className="text-sm lg:text-lg">AI Analytics, Reimagined for Real Businesses</h2>
        <p className='text-3xl lg:text-7xl font-semibold text-white max-w-6xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight'>Something intelligent is loading...</p>
        <p className="text-sm lg:text-lg">We&apos;re building something powerful.</p>
      </div>
    </div>
  );
};

export default Hero;
