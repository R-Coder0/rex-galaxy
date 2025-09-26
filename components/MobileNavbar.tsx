/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import ElegantFormPopup from './PopupForm';
import { useRouter } from 'next/navigation'; // Add this import

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

const RexGalaxyMobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [selectedMegaMenu, setSelectedMegaMenu] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter(); // Add this line

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setExpandedItems({});
      setSelectedMegaMenu(null);
      setSelectedCategory(null);
    }
  };

  const toggleItem = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const toggleMegaMenu = (label: string) => {
    setSelectedMegaMenu(selectedMegaMenu === label ? null : label);
    setSelectedCategory(null);
  };

  const handleLinkClick = (href: string) => {
    // Use router.push instead of window.location.href
    router.push(href);
    setIsOpen(false);
  };

  // Navigation items (same as desktop)
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
        { label: 'Company Culture', href: '/about/company-culture' },
        { label: 'Career', href: '/about/career' },
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

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-2xl sticky top-0 z-[900] border-b border-slate-600">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
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

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-[800] pt-20 overflow-y-auto transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="px-4 py-6">
          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <div key={`mobile-${item.label}-${index}`} className="border-b border-slate-700/50 pb-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => item.megaMenu ? toggleMegaMenu(item.label) : toggleItem(item.label)}
                      className="flex justify-between items-center w-full py-4 text-gray-200 hover:text-cyan-400 font-medium"
                    >
                      <span>{item.label}</span>
                      {expandedItems[item.label] || selectedMegaMenu === item.label ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>

                    {/* Regular Dropdown */}
                    {!item.megaMenu && expandedItems[item.label] && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem, dropIndex) => (
                          <button
                            key={`mobile-dropdown-${dropdownItem.label}-${dropIndex}`}
                            onClick={() => handleLinkClick(dropdownItem.href!)}
                            className="flex justify-between items-center w-full py-3 text-gray-300 hover:text-cyan-400"
                          >
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.isNew && (
                              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                NEW
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Mega Menu Dropdown */}
                    {item.megaMenu && selectedMegaMenu === item.label && (
                      <div className="pl-4 mt-2 space-y-4">
                        {item.dropdown?.map((category, categoryIndex) => (
                          <div key={`mobile-category-${category.category}-${categoryIndex}`}>
                            <button
                              onClick={() => setSelectedCategory(selectedCategory === category.category ? null : category.category || null)}
                              className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-cyan-400 font-medium"
                            >
                              <span>{category.category}</span>
                              {selectedCategory === category.category ? (
                                <ChevronDown className="w-5 h-5" />
                              ) : (
                                <ChevronRight className="w-5 h-5" />
                              )}
                            </button>

                            {selectedCategory === category.category && (
                              <div className="pl-4 space-y-2">
                                {category.items?.map((service, serviceIndex) => (
                                  <button
                                    key={`mobile-service-${service.label}-${serviceIndex}`}
                                    onClick={() => handleLinkClick(service.href)}
                                    className="flex justify-between items-center w-full py-2 text-gray-300 hover:text-cyan-400"
                                  >
                                    <span>{service.label}</span>
                                    {service.isNew && (
                                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                        NEW
                                      </span>
                                    )}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleLinkClick(item.href || '#')}
                    className="w-full text-left py-4 text-gray-200 hover:text-cyan-400 font-medium"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 px-2">
            <button
              onClick={() => {
                setShowForm(true);
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default RexGalaxyMobileNavbar;