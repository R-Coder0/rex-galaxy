import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading with Description */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Why Choose RexGalaxy Technologies?</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            With over 14+ years of experience in the software development industry, RexGalaxy Technologies is a trusted choice, backed by a proven track record of successful projects.
          </p>
        </div>

        {/* Features Grid - 3 columns layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Top Row */}
          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">One-Stop Solution</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              RexGalaxy Technologies provides a comprehensive one-stop solution, from cutting-edge software development to seamless integration and ongoing support, all under one roof, to fulfill your digital needs.
            </p>
          </div>

          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Leader in Outsourcing</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a trusted leader in software development outsourcing, delivering top-notch solutions to global clients with a proven track record of excellence in <span className="text-blue-400">offshore software development services</span>.
            </p>
          </div>

          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Quality Assurance</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our highly experienced, <span className="text-blue-400">skilled software developers</span> and experts can guarantee the top quality and usability of software, aligning it with the user&apos;s needs.
            </p>
          </div>

          {/* Bottom Row */}
          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Kick-Off in 5 Days or Less</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              RexGalaxy Technologies offers a swift kick-off to a project, initiating development in 5 days or less, ensuring that our client&apos;s digital aspirations become a reality at lightning speed.
            </p>
          </div>

          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Wide Tech Expertise</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jellyfish boasts wide tech expertise, spanning diverse domains and technologies, enabling us to tackle complex projects and deliver innovative solutions for every client.
            </p>
          </div>

          <div className="bg-gray-800 p-8  shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Quality Development and On-Time Delivery</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are committed to delivering quality development solutions that surpass expectations, ensuring both innovative excellence and on-time delivery for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;