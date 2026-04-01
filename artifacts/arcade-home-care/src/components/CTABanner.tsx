'use client';

import { motion } from "framer-motion";
import { Phone, Globe } from "lucide-react";

export function CTABanner() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E6FB8] to-[#2FAE66]"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Need Elderly Care Today?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-medium">
            Quality non-medical care in the comfort of home. We also provide care for veterans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="tel:+19255750709"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-xs uppercase tracking-wider">Phone</p>
                <span className="text-2xl md:text-3xl font-black text-white">
                  (925) 575-0709
                </span>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <a
              href="tel:+19252663220"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-xs uppercase tracking-wider">Fax</p>
                <span className="text-2xl md:text-3xl font-black text-white">
                  (925) 266-3220
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@arcadehomecare.com"
              className="bg-white text-[#1E6FB8] hover:bg-gray-100 font-bold rounded-full px-10 py-4 text-lg shadow-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://www.arcadehomecare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.arcadehomecare.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
