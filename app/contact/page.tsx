'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Software Development',
    'Mobile App Development',
    'Web Solutions',
    'UI/UX Services',
    'SaaS Development',
    'Application Modernization',
    'Enterprise Solutions',
    'Hire Dedicated Developers'
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'info@rexgalaxy.com',
      subContent: 'support@rexgalaxy.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subContent: '+1 (555) 987-6543'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: 'A 40, Ithum Tower A, 6th Floor, 606, Noida,',
      subContent: ' Uttar Pradesh 201301'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your ideas into digital reality? Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-2 bg-orange-500/20 rounded-full text-orange-400 border border-orange-500/30">
              Free Consultation
            </div>
            <div className="px-6 py-2 bg-teal-500/20 rounded-full text-teal-400 border border-teal-500/30">
              24/7 Support
            </div>
            <div className="px-6 py-2 bg-blue-500/20 rounded-full text-blue-400 border border-blue-500/30">
              Global Delivery
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  We&apos;re here to help you bring your vision to life. Reach out to us through any of the channels below, and let&apos;s start building something extraordinary together.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                        <p className="text-teal-400 font-medium">{info.content}</p>
                        <p className="text-slate-400">{info.subContent}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-xl p-8 border border-orange-500/20 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h3>
                <p className="text-slate-300 text-center mb-6">
                  Schedule a free consultation with our experts and discover how we can help transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300">
                    Contact Us
                  </button> */}
                  <button className="px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300">
                    Know More About Us
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                  Start Your Project
                </span>
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
                  <p className="text-slate-300">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">Project Description *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
              Find Us Here
            </span>
          </h2>
          <div className="bg-slate-700 rounded-2xl overflow-hidden border border-slate-600 shadow-2xl">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0830313310507!2d77.3699283755006!3d28.627273475667618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce506a25025d3%3A0xdcfea1184d800e5e!2sRexGalaxy%20Technology!5e0!3m2!1sen!2sin!4v1753722938073!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
              

              
              {/* View Larger Map Button */}
              <div className="absolute bottom-4 right-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 shadow-lg">
                  View Larger Map
                </button>
              </div>
            </div>
          </div>
          

        </div>
      </div>



    </div>
  );
};

export default ContactPage;