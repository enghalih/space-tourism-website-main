import React, { useState } from 'react';
import PageHeading from '../components/PageHeading';
import { getAssetUrl } from '../utils/assetHelper';
import siteData from '../data/data.json';

export default function Crew() {
  const crewMembers = siteData.crew;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = crewMembers[selectedIdx];

  const bgStyles = {
    '--bg-mobile': `url(${getAssetUrl('assets/crew/background-crew-mobile.jpg')})`,
    '--bg-tablet': `url(${getAssetUrl('assets/crew/background-crew-tablet.jpg')})`,
    '--bg-desktop': `url(${getAssetUrl('assets/crew/background-crew-desktop.jpg')})`,
  };

  return (
    <main
      style={bgStyles}
      className="bg-space-page min-h-screen pt-28 md:pt-36 lg:pt-48 pb-12 lg:pb-0 px-6 md:px-12 lg:px-24 flex flex-col justify-between animate-fade-in"
    >
      <div className="max-w-7xl w-full mx-auto flex-grow flex flex-col">
        <PageHeading number="02" title="Meet your crew" />

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-end">
          {/* Crew Info (Left Side on Desktop, Order 2 on Mobile) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pb-8 lg:pb-24">
            <div
              key={current.name}
              id={`crew-panel-${selectedIdx}`}
              role="tabpanel"
              aria-labelledby={`crew-tab-${selectedIdx}`}
              className="animate-fade-in flex flex-col items-center lg:items-start"
            >
              <h2 className="font-bellefair text-base md:text-2xl lg:text-[32px] uppercase text-white/50">
                {current.role}
              </h2>
              <p className="font-bellefair text-2xl md:text-[40px] lg:text-[56px] leading-tight uppercase text-white mt-1 md:mt-3 mb-4 md:mb-6">
                {current.name}
              </p>
              <p className="font-barlow text-space-light text-[15px] md:text-base lg:text-lg leading-relaxed max-w-[460px] min-h-[90px] md:min-h-[110px]">
                {current.bio}
              </p>
            </div>

            {/* Pagination Dots */}
            <div
              role="tablist"
              aria-label="Crew Members"
              className="flex space-x-4 md:space-x-6 mt-8 md:mt-10"
            >
              {crewMembers.map((member, idx) => (
                <button
                  key={member.name}
                  role="tab"
                  id={`crew-tab-${idx}`}
                  aria-controls={`crew-panel-${idx}`}
                  aria-selected={selectedIdx === idx}
                  aria-label={`Select crew member ${member.name} (${member.role})`}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    selectedIdx === idx
                      ? 'bg-white scale-110'
                      : 'bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Crew Image (Right Side on Desktop, Order 1 on Mobile) */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 border-b border-white/20 md:border-b-0">
            <picture key={current.name} className="animate-fade-in flex justify-center">
              <source srcSet={getAssetUrl(current.images.webp)} type="image/webp" />
              <img
                src={getAssetUrl(current.images.png)}
                alt={`${current.role} ${current.name}`}
                className="max-h-[300px] md:max-h-[460px] lg:max-h-[600px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>
    </main>
  );
}
