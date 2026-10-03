import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetHelper';

export default function Home() {
  const bgStyles = {
    '--bg-mobile': `url(${getAssetUrl('assets/home/background-home-mobile.jpg')})`,
    '--bg-tablet': `url(${getAssetUrl('assets/home/background-home-tablet.jpg')})`,
    '--bg-desktop': `url(${getAssetUrl('assets/home/background-home-desktop.jpg')})`,
  };

  return (
    <main
      style={bgStyles}
      className="bg-space-page min-h-screen pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-24 px-6 md:px-12 lg:px-24 flex items-center justify-center animate-fade-in"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-end">
        {/* Left Column: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="font-barlow-condensed tracking-heading-5 text-base md:text-xl lg:text-[28px] uppercase text-space-light">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair text-[80px] md:text-[150px] leading-tight md:leading-none uppercase text-white my-4 md:my-6">
            Space
          </h1>
          <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-relaxed max-w-[450px]">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        {/* Right Column: Explore Button */}
        <div className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <div className="relative group">
            {/* Subtle pulsate / expansion ring on hover */}
            <div 
              className="absolute -inset-10 md:-inset-16 lg:-inset-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none"
              aria-hidden="true"
            />
            <Link
              to="/destination"
              className="relative flex items-center justify-center w-36 h-36 md:w-60 md:h-60 lg:w-[274px] lg:h-[274px] rounded-full bg-white text-space-dark font-bellefair text-xl md:text-3xl lg:text-[32px] uppercase tracking-[2px] shadow-2xl transition-transform duration-300 group-hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              aria-label="Explore Destinations"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
