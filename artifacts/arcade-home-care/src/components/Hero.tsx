'use client';

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative bg-slate-50 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Trusted Elderly <br className="hidden md:block" />
              <span className="text-[#1E6FB8]">Home Care</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
              Quality non-medical in-home care for seniors, disabled adults, and veterans. Available 24/7, tailored to your loved one's unique needs.
            </p>
            <p className="text-base text-[#2FAE66] font-semibold italic mb-8">
              ...We are committed to Serve
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <button className="w-full sm:w-auto bg-[#2FAE66] hover:bg-[#26964f] text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors shadow-lg shadow-green-200">
                  Get Started
                </button>
              </a>
              <a href="tel:+19255750709">
                <button className="w-full sm:w-auto border-2 border-[#1E6FB8] text-[#1E6FB8] hover:bg-blue-50 bg-white font-semibold rounded-full px-8 py-4 text-lg transition-colors">
                  Call (925) 575-0709
                </button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2FAE66] inline-block"></span>
                <span>Veterans Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E6FB8] inline-block"></span>
                <span>Elderly Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
                <span>Non-Medical</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6FB8]/20 to-[#2FAE66]/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="/hero-caregiver.png"
              alt="Caregiver embracing elderly couple outdoors"
              className="rounded-3xl shadow-xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] md:h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,21.5,149.62,43.2,223.3,51.8,256.76,55.72,289.47,58.82,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
