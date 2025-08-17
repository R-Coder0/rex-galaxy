/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const TechStackSection = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", icon: "/tech-icons/react.svg" },
        { name: "Next.js", icon: "/tech-icons/next.svg" },
        { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
        { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" }
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: "/tech-icons/node.svg" },
        { name: "Python", icon: "/tech-icons/python.svg" },
        { name: "Java   ", icon: "/tech-icons/java.svg" },
        { name: "PHP", icon: "/tech-icons/php.svg" }
      ]
    },
    {
      name: "DevOps & Cloud",
      technologies: [
        { name: "AWS", icon: "/tech-icons/aws.svg" },
        { name: "Docker", icon: "/tech-icons/docker.svg" },
        { name: "Kubernetes", icon: "/tech-icons/kubernetes.svg" },
        { name: "Microsoft Azure", icon: "/tech-icons/azure.svg" }
      ]
    },
    {
      name: "AI/ML",
      technologies: [
        { name: "TensorFlow", icon: "/tech-icons/tensorflow.svg" },
        { name: "PyTorch", icon: "/tech-icons/pytorch.svg" },
        { name: "OpenAI", icon: "/tech-icons/openai.svg" },
        { name: "LangChain", icon: "/tech-icons/langchain.svg" }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge tools and technologies powering our solutions
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center p-1.5">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "Blockchain", "Web3", "PostgreSQL", "MongoDB", 
              "Redis", "Git", "CI/CD", "Microservices",
              "Serverless", "React Native", "Flutter", "Solidity"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;