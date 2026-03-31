'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Preserves independence and dignity",
  "More affordable than facility care",
  "Personalized non-medical care plans",
  "Family stays involved and informed",
  "Care for veterans in their own homes",
  "Serving your loved ones in the community",
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The Benefits of <span className="text-[#1E6FB8]">Home Care</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Arcade Home Care, we understand the challenges of caring for aging family members. Our professional in-home care services are designed to bring comfort and quality of life to your loved ones — personalized and tailored to the unique needs of each individual.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2FAE66] flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#services">
              <button className="bg-[#2FAE66] hover:bg-[#26964f] text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors shadow-md shadow-green-100">
                Learn More
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#1E6FB8]/10 rounded-[2rem] transform -rotate-3 -z-10"></div>
            <img
              src="/benefits-couple.png"
              alt="Happy elderly couple smiling together at home"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
