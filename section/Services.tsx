'use client';
import React from 'react';
import { Code, BarChart2, Cloud, Cpu, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "Software Development",
      description: "We specialize in software development and customized solutions, utilizing the latest technologies (blockchain, web3, ML, AI) and industry best practices to help businesses achieve their digital goals."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
      title: "Data Analytics",
      description: "Unlock the potential of data through advanced visualization and our team of expert data analysts. Our data analytics services harness cutting-edge technology to extract actionable insights and customize solutions for your business's success."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: "Cloud Engineering",
      description: "Our cloud engineering services facilitate the re-platforming, re-hosting, and re-engineering of applications, optimizing them for cloud environments. You can harness the power of the cloud to effectively address intricate business challenges."
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: "Application Modernization",
      description: "Our application modernization services can breathe new life into your existing software, enhancing performance, security, and user experience. We're committed to supporting you every step of the way on your application modernization journey."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "AI Development",
      description: "Our AI services bring expertise and experience in natural language processing, machine learning, automated ML, generative AI, responsible AI, and more to help you deliver innovative solutions at scale."
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-500" />,
      title: "DevOps Services",
      description: "With our DevOps services and solutions, we optimize workflows with automation and collaboration, ensuring efficient software delivery. Our certified DevOps experts incorporate best practices to enhance scalability and reliability in the ever-evolving tech landscape."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our Offerings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-6 border border-slate-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;