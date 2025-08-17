'use client';
import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { 
      name: "Healthcare",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </svg>
      ),
      color: "text-blue-400"
    },
    { 
      name: "EdTech",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      color: "text-purple-400"
    },
    { 
      name: "Fintech",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      color: "text-green-400"
    },
    { 
      name: "Proptech",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path fill="currentColor" d="M7 12h2v5H7zm4-7h2v12h-2zm4 5h2v7h-2z"/>
        </svg>
      ),
      color: "text-red-400"
    },
    { 
      name: "Retail",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"/>
        </svg>
      ),
      color: "text-yellow-400"
    },
    { 
      name: "Transport",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42z"/>
        </svg>
      ),
      color: "text-orange-400"
    },
    { 
      name: "Telecom",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M17 7l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17c.39-.39.39-1.02 0-1.41L13.41 12L17 8.42c.39-.39.39-1.03 0-1.42zm-4-1.17l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
        </svg>
      ),
      color: "text-indigo-400"
    },
    { 
      name: "Automotive",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
          <circle fill="currentColor" cx="7.5" cy="14.5" r="1.5"/>
          <circle fill="currentColor" cx="16.5" cy="14.5" r="1.5"/>
        </svg>
      ),
      color: "text-cyan-400"
    },
    { 
      name: "Insurtech",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
        </svg>
      ),
      color: "text-emerald-400"
    },
    { 
      name: "Travel & Hospitality",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
        </svg>
      ),
      color: "text-pink-400"
    },
    { 
      name: "Facility Management",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2z"/>
        </svg>
      ),
      color: "text-amber-400"
    },
    { 
      name: "Media & Entertainment",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/>
        </svg>
      ),
      color: "text-violet-400"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto">
            We serve a diverse range of industries, catering to a wide spectrum of fields and sectors.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-sm  p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.03] hover:z-10"
            >
              <div className={`mb-6 ${industry.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
              <p className="text-gray-400 text-sm">Custom solutions tailored for {industry.name.toLowerCase()} sector</p>
              
              {/* Hover effect elements */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-md"></div>
                <div className="absolute inset-0 border-2 border-blue-400/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;