import React from 'react';

export default function PageHeading({ number, title }) {
  return (
    <h1 className="font-barlow-condensed tracking-heading-5 text-base md:text-xl lg:text-[28px] uppercase text-center md:text-left text-white mb-8 md:mb-12 lg:mb-16">
      <span className="font-bold text-white/25 mr-4" aria-hidden="true">
        {number}
      </span>
      <span>{title}</span>
    </h1>
  );
}
