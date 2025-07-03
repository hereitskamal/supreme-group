"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="text-center text-white z-10 relative">
        <p className="text-14 lg:text-[24px] mb-5 text-white/90">
          Driven by performance
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-3">
          Soft Trims and  <span style={{color: 'rgb(0, 191, 255)'}}>NVH Solutions</span>
        </h1>
        <p className="text-3xl md:text-5xl text-white/80">
          for seamless rides
        </p>
      </div>
    </section>
  );
};

export default HeroSection;