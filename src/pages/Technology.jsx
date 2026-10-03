import React, { useState } from 'react';
import PageHeading from '../components/PageHeading';
import { getAssetUrl } from '../utils/assetHelper';
import siteData from '../data/data.json';

export default function Technology() {
  const technologies = siteData.technology;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = technologies[selectedIdx];

  const bgStyles = {
    '--bg-mobile': `url(${getAssetUrl('assets/technology/background-technology-mobile.jpg')})`,
    '--bg-tablet': `url(${getAssetUrl('assets/technology/background-technology-tablet.jpg')})`,
    '--bg-desktop': `url(${getAssetUrl('assets/technology/background-technology-desktop.jpg')})`,
  };

  return (
    <main
      style={bgStyles}
      className="bg-space-page min-h-screen pt-28 md:pt-36 lg:pt-48 pb-14 px-0 md:px-0 lg:pl-24 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
        <PageHeading number="03" title="Space launch 101" />
      </div>

      <div className="max-w-[1440px] ml-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6 md:mt-12">
        {/* Technology Image (Order 1 on Mobile/Tablet, Order 2 on Desktop) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-end">
          <picture key={current.name} className="w-full flex justify-center lg:justify-end animate-fade-in">
            {/* Desktop uses portrait image */}
            <source
              media="(min-width: 1024px)"
              srcSet={getAssetUrl(current.images.portrait)}
            />
            {/* Tablet & Mobile use landscape image */}
            <img
              src={getAssetUrl(current.images.landscape)}
              alt={current.name}
              className="w-full lg:w-auto h-[170px] md:h-[310px] lg:h-[500px] object-cover lg:rounded-l-lg shadow-2xl"
              loading="eager"
            />
          </picture>
        </div>

        {/* Controls & Content (Order 2 on Mobile/Tablet, Order 1 on Desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-14 px-6 md:px-12 lg:px-0">
          {/* Numbered Indicators (1, 2, 3) */}
          <div
            role="tablist"
            aria-label="Technology Steps"
            className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-8 flex-shrink-0"
          >
            {technologies.map((tech, idx) => (
              <button
                key={tech.name}
                role="tab"
                id={`tech-tab-${idx}`}
                aria-controls={`tech-panel-${idx}`}
                aria-selected={selectedIdx === idx}
                aria-label={`Step ${idx + 1}: ${tech.name}`}
                onClick={() => setSelectedIdx(idx)}
                className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full font-bellefair text-base md:text-2xl lg:text-[32px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  selectedIdx === idx
                    ? 'bg-white text-space-dark border-white font-medium shadow-lg'
                    : 'text-white bg-transparent border-white/25 hover:border-white'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Description Content */}
          <div
            id={`tech-panel-${selectedIdx}`}
            role="tabpanel"
            aria-labelledby={`tech-tab-${selectedIdx}`}
            key={current.name}
            className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in"
          >
            <span className="font-barlow-condensed tracking-subhead-1 text-sm md:text-base uppercase text-space-light">
              The terminology...
            </span>
            <h2 className="font-bellefair text-2xl md:text-[40px] lg:text-[56px] leading-tight uppercase text-white my-2 md:my-4">
              {current.name}
            </h2>
            <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-relaxed max-w-[470px]">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
