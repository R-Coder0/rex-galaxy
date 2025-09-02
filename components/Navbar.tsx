/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ElegantFormPopup from './PopupForm';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
  megaMenu?: boolean;
}

interface DropdownItem {
  category?: string;
  items?: ServiceItem[];
  label?: string;
  href?: string;
  isNew?: boolean;
}

interface ServiceItem {
  label: string;
  href: string;
  isNew?: boolean;
}

const RexGalaxyNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);


  // const handleDropdownToggle = (label: string): void => {
  //   setActiveDropdown(activeDropdown === label ? null : label);
  //   setSelectedCategory(null);
  // };

  const closeDropdown = (): void => {
    setActiveDropdown(null);
    setSelectedCategory(null);
  };

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      megaMenu: true,
      dropdown: [
        {
          category: 'Software Solutions',
          items: [
            { label: 'Software Development', href: '/services/software-dev' },
            { label: 'Mobile App Development', href: '/services/mobile-dev' },
            { label: 'Application Modernization', href: '/services/app-modernization' },
            { label: 'Hire Dedicated Developers', href: '/services/hire-developers' },
            { label: 'UI/UX Services', href: '/services/ui-ux' },
            { label: 'SaaS Development', href: '/services/saas-dev' },
          ]
        },
        {
          category: 'Web Solutions',
          items: [
            { label: 'Web App Development', href: '/services/web-app' },
            { label: 'API Integration', href: '/services/api-integration' },
            { label: 'Cloud Consulting', href: '/services/cloud-consulting' },
            { label: 'DevOps Services', href: '/services/devops' },
          ]
        },
        {
          category: 'Enterprise Solutions',
          items: [
            { label: 'Enterprise Software', href: '/services/enterprise-software' },
            { label: 'Software Outsourcing', href: '/services/software-outsourcing' },
            { label: 'CRM Development', href: '/services/crm-development' },
            { label: 'ERP Software', href: '/services/erp-software' },
          ]
        }
      ]
    },
    {
      label: 'About',
      dropdown: [
        { label: 'About Us', href: '/about/company-overview' },
        // { label: 'Our Team', href: '/team' },
        { label: 'Company Culture', href: '/about/company-culture' },
        { label: 'Career', href: '/about/career' },
        // { label: 'Testimonials', href: '/testimonials' },
      ]
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
      ]
    },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleLinkClick = (href: string): void => {
    window.location.href = href;

    closeDropdown();
  };
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-2xl sticky top-0 z-[900] border-b border-slate-600 hidden md:block">
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleLinkClick('/')}
                className="flex items-center focus:outline-none"
              >
                <img
                  src="/logo.png"
                  alt="RexGalaxy Logo"
                  className="h-12 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveDropdown(item.label);
                    if (item.megaMenu && item.dropdown?.[0]?.category) {
                      setSelectedCategory(item.dropdown[0].category);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setSelectedCategory(null);
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center space-x-1 px-5 py-3 text-gray-200 hover:text-cyan-400 font-medium transition-all duration-300 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </button>

                      {/* Render normal dropdown here if not megaMenu */}
                      {!item.megaMenu && activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-1 bg-slate-800/95 backdrop-blur-lg border border-slate-600 shadow-xl z-50 rounded-lg min-w-[220px]">
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, dropIndex) => (
                              <button
                                key={`${dropdownItem.label}-${dropIndex}`}
                                onClick={() => handleLinkClick(dropdownItem.href!)}
                                className="group flex items-center justify-between text-gray-300 hover:text-cyan-400 w-full text-left px-4 py-3 hover:bg-slate-700/50 transition-all duration-200"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {dropdownItem.label}
                                </span>
                                {dropdownItem.isNew && (
                                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                    NEW
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(item.href || '#')}
                      className="px-5 py-3 text-gray-200 hover:text-cyan-400 font-medium transition-all duration-300 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>

            </div>
            <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
          </div>
        </div>

        {/* Enhanced Mega Menu Dropdown */}
        {navItems.map((item, index) => (
          item.megaMenu && item.dropdown && (
            <div
              key={`${item.label}-dropdown-${index}`}
              className={`absolute left-0 w-full bg-slate-800/95 backdrop-blur-lg border-b border-slate-600 shadow-2xl z-50 transition-all duration-300 ${activeDropdown === item.label
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
                }`}
              onMouseEnter={() => {
                setActiveDropdown(item.label);
                if (item.megaMenu && item.dropdown?.[0]?.category) {
                  setSelectedCategory(item.dropdown[0].category);
                }
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setSelectedCategory(null);
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex">
                  {/* Left Side - Categories */}
                  <div className="w-1/4 border-r border-slate-600/50 pr-8">
                    <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Categories</h3>
                    <div className="space-y-2">
                      {item.dropdown.map((category, categoryIndex) => (
                        <button
                          key={`category-${category.category}-${categoryIndex}`}
                          onClick={() => setSelectedCategory(category.category || null)}
                          className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${selectedCategory === category.category
                            ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 font-medium border-l-4 border-cyan-400'
                            : 'text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                            }`}
                        >
                          {category.category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Items for selected category */}
                  <div className="w-3/4 pl-8">
                    {selectedCategory && (
                      <div>
                        <h3 className="text-orange-400 font-semibold mb-6 text-lg">{selectedCategory}</h3>
                        <div className="grid grid-cols-4 gap-3">
                          {item.dropdown
                            .find(cat => cat.category === selectedCategory)
                            ?.items?.map((item, itemIndex) => (
                              <button
                                key={`item-${item.label}-${itemIndex}`}
                                onClick={() => handleLinkClick(item.href)}
                                className="group flex flex-col items-start text-gray-300 hover:text-cyan-400 hover:bg-slate-700/40 p-4 rounded-lg transition-all duration-300 text-left border border-transparent hover:border-slate-600/50 hover:shadow-lg"
                              >
                                <div className="flex items-center justify-between w-full mb-1">
                                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-200 text-sm">{item.label}</span>
                                  {item.isNew && (
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium ml-2">
                                      NEW
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  Learn more →
                                </span>
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        ))}

      </nav>

    </div>
  );
};

export default RexGalaxyNavbar;