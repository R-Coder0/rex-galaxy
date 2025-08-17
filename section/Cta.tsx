'use client';
import ElegantFormPopup from '@/components/PopupForm';
import React,{useState}from 'react';

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className=" bg-gray-900">
      <div className=" mx-auto">
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-12 border border-gray-600">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Next Project?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s transform your ideas into reality with our expert development team. Get started today and see the difference experience makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
            <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
            {/* <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;