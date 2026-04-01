'use client';

import Link from "next/link";
import { Facebook, Twitter, Mail, MapPin, Phone, Globe, Printer } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <img
              src="/arcade-logo.png"
              alt="Arcade Home Care LLC"
              className="h-20 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Quality non-medical home care for seniors, disabled adults, and veterans in the Bay Area.
            </p>
            <p className="text-[#2FAE66] italic text-sm font-medium">...We are committed to Serve</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/#services' },
                { label: 'Benefits', href: '/#benefits' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#2FAE66] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              {['Personal Care', 'Dementia Care', 'Veteran Care', '24/7 Support', 'Recovery Care', 'Housekeeping', 'Companionship'].map((service) => (
                <li key={service}>
                  <Link href="/#services" className="text-gray-400 hover:text-[#2FAE66] transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2FAE66] shrink-0 mt-0.5" />
                <span>6701 Koll Center Pkwy<br />Pleasanton, CA 94566</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2FAE66] shrink-0" />
                <a href="tel:+19255750709" className="hover:text-white transition-colors">
                  (925) 575-0709
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-[#2FAE66] shrink-0" />
                <span>Fax: (925) 266-3220</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#2FAE66] shrink-0" />
                <a href="https://www.arcadehomecare.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.arcadehomecare.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2FAE66] shrink-0" />
                <a href="mailto:info@arcadehomecare.com" className="hover:text-white transition-colors">
                  info@arcadehomecare.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2FAE66] transition-all text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2FAE66] transition-all text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Arcade Home Care LLC. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
