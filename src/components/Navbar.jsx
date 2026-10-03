import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetHelper';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { num: '00', title: 'HOME', to: '/' },
    { num: '01', title: 'DESTINATION', to: '/destination' },
    { num: '02', title: 'CREW', to: '/crew' },
    { num: '03', title: 'TECHNOLOGY', to: '/technology' },
  ];

  return (
    <header className="relative z-50 flex items-center justify-between pt-6 md:pt-0 lg:pt-10 px-6 md:px-0 md:pl-10 lg:pl-14">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-space-light rounded-full"
        aria-label="Space Tourism Home"
      >
        <img
          src={getAssetUrl('assets/shared/logo.svg')}
          alt="Space Tourism Logo"
          className="w-10 h-10 md:w-12 md:h-12"
          width="48"
          height="48"
        />
      </NavLink>

      {/* Decorative desktop line */}
      <div 
        className="hidden lg:block h-[1px] bg-white/20 -mr-8 z-30 flex-grow max-w-[440px] xl:max-w-[473px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Desktop & Tablet Navigation */}
      <nav 
        className="hidden md:flex nav-glass items-center px-10 lg:px-24 md:h-24"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center space-x-9 lg:space-x-12 h-full">
          {navLinks.map((link) => (
            <li key={link.to} className="h-full flex items-center">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `h-full flex items-center border-b-[3px] font-barlow-condensed tracking-nav text-sm lg:text-base uppercase transition-all duration-200 focus-visible:outline-none focus-visible:text-white ${
                    isActive
                      ? 'border-white text-white font-medium'
                      : 'border-transparent text-space-light hover:text-white hover:border-white/50'
                  }`
                }
              >
                <span className="font-bold mr-2 hidden lg:inline text-white" aria-hidden="true">
                  {link.num}
                </span>
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden p-2 text-space-light hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Open Navigation Menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        <img
          src={getAssetUrl('assets/shared/icon-hamburger.svg')}
          alt=""
          className="w-6 h-5"
          width="24"
          height="21"
          aria-hidden="true"
        />
      </button>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed top-0 right-0 bottom-0 w-[68%] max-w-xs z-50 nav-glass flex flex-col p-8 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-14">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-space-light hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label="Close Navigation Menu"
          >
            <img
              src={getAssetUrl('assets/shared/icon-close.svg')}
              alt=""
              className="w-5 h-5"
              width="20"
              height="21"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav aria-label="Mobile Navigation Links">
          <ul className="flex flex-col space-y-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center py-1 font-barlow-condensed tracking-nav text-base uppercase transition-colors border-r-4 ${
                      isActive
                        ? 'border-white text-white font-medium'
                        : 'border-transparent text-space-light hover:text-white hover:border-white/50'
                    }`
                  }
                >
                  <span className="font-bold mr-3 text-white" aria-hidden="true">
                    {link.num}
                  </span>
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
