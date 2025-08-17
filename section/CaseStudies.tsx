/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fintech Payment Gateway",
      description: "Built a scalable payment infrastructure handling 5M+ daily transactions",
      results: "300% transaction growth",
      logo: "/logos/fintech-company.svg",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Healthcare Analytics Platform",
      description: "Developed AI-powered diagnostics with 95% accuracy rate",
      results: "40% operational efficiency gain",
      logo: "/logos/healthcare-company.svg",
      bgColor: "bg-emerald-900/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 3,
      title: "Retail Omnichannel System",
      description: "Unified 50+ physical stores with e-commerce platform",
      results: "2X revenue increase",
      logo: "/logos/retail-company.svg",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming businesses with measurable results across industries
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className={`group relative rounded-xl p-8 border ${caseStudy.borderColor} ${caseStudy.bgColor} backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.03]`}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl blur-sm"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6 border border-gray-700">
                  <img 
                    src={caseStudy.logo} 
                    alt={caseStudy.title} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.title}</h3>
                <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                <div className="text-orange-400 font-semibold">{caseStudy.results}</div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 hover:text-white transition-colors duration-300">
            View All Case Studies
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudiesSection;