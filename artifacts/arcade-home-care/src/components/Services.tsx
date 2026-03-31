'use client';

import { motion } from "framer-motion";
import { Heart, BrainCircuit, Home, Clock, Activity, Users, Shield } from "lucide-react";

const services = [
  {
    title: "Personal Care",
    description: "Assistance with bathing, grooming, dressing, and daily medication reminders.",
    icon: Heart,
  },
  {
    title: "Dementia Care",
    description: "Specialized, patient support for individuals living with Alzheimer's or dementia.",
    icon: BrainCircuit,
  },
  {
    title: "Housekeeping",
    description: "Light cleaning, laundry, and nutritious meal preparation to maintain a safe home.",
    icon: Home,
  },
  {
    title: "24/7 Support",
    description: "Around-the-clock care providing complete peace of mind for your family.",
    icon: Clock,
  },
  {
    title: "Recovery Care",
    description: "Dedicated assistance during post-surgery or illness recovery periods.",
    icon: Activity,
  },
  {
    title: "Veteran Care",
    description: "Specialized in-home care and support for veterans from the comfort of their home.",
    icon: Shield,
  },
  {
    title: "Companionship",
    description: "Meaningful social engagement, conversation, and emotional support.",
    icon: Users,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Helping seniors, veterans, and disabled adults stay safe, comfortable, and independent at home.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#1E6FB8]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-[#1E6FB8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
