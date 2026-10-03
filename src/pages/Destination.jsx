import React, { useState } from 'react';
import PageHeading from '../components/PageHeading';
import { getAssetUrl } from '../utils/assetHelper';
import siteData from '../data/data.json';

export default function Destination() {
  const destinations = siteData.destinations;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = destinations[selectedIdx];

  const bgStyles = {
    '--bg-mobile': `url(${getAssetUrl('assets/destination/background-destination-mobile.jpg')})`,
    '--bg-tablet': `url(${getAssetUrl('assets/destination/background-destination-tablet.jpg')})`,
    '--bg-desktop': `url(${getAssetUrl('assets/destination/background-destination-desktop.jpg')})`,
  };

  return (
    <main
      style={bgStyles}
      className="bg-space-page min-h-screen pt-28 md:pt-36 lg:pt-48 pb-14 px-6 md:px-12 lg:px-24 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <PageHeading number="01" title="Pick your destination" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-6 md:mt-12">
          {/* Planet Visual */}
          <div className="flex justify-center items-center">
            <picture key={current.name} className="animate-fade-scale">
              <source srcSet={getAssetUrl(current.images.webp)} type="image/webp" />
              <img
                src={getAssetUrl(current.images.png)}
                alt={`Surface of ${current.name}`}
                className="w-44 h-44 md:w-72 md:h-72 lg:w-[445px] lg:h-[445px] object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.08)] hover:scale-105 transition-transform duration-700"
                width="445"
                height="445"
                loading="eager"
              />
            </picture>
          </div>

          {/* Planet Information */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tabs List */}
            <div
              role="tablist"
              aria-label="Destinations"
              className="flex space-x-6 md:space-x-9 mb-6"
            >
              {destinations.map((dest, idx) => (
                <button
                  key={dest.name}
                  role="tab"
                  id={`tab-${dest.name.toLowerCase()}`}
                  aria-controls={`panel-${dest.name.toLowerCase()}`}
                  aria-selected={selectedIdx === idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`pb-3 font-barlow-condensed tracking-nav text-sm md:text-base uppercase border-b-[3px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                    selectedIdx === idx
                      ? 'border-white text-white font-medium'
                      : 'border-transparent text-space-light hover:text-white hover:border-white/50'
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <div
              id={`panel-${current.name.toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.name.toLowerCase()}`}
              key={current.name}
              className="animate-fade-in w-full flex flex-col items-center lg:items-start"
            >
              <h2 className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] leading-tight uppercase text-white my-1 md:my-3">
                {current.name}
              </h2>
              <p className="font-barlow text-space-light text-[15px] md:text-base leading-relaxed max-w-[445px]">
                {current.description}
              </p>

              {/* Decorative separator line */}
              <div className="h-[1px] bg-white/10 w-full max-w-[445px] my-8 md:my-10" />

              {/* Stats Footer */}
              <div className="w-full max-w-[445px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-2">
                <div>
                  <span className="block font-barlow-condensed tracking-subhead-1 text-sm uppercase text-space-light mb-2">
                    Avg. Distance
                  </span>
                  <span className="font-bellefair text-[28px] uppercase text-white">
                    {current.distance}
                  </span>
                </div>
                <div>
                  <span className="block font-barlow-condensed tracking-subhead-1 text-sm uppercase text-space-light mb-2">
                    Est. Travel Time
                  </span>
                  <span className="font-bellefair text-[28px] uppercase text-white">
                    {current.travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
