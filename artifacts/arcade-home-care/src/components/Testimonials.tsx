'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah D.",
    stars: 5,
    text: "The caregivers at Arcade Home Care have been a blessing for our family. They care for my mom with genuine compassion and kindness.",
  },
  {
    name: "John M.",
    stars: 4,
    text: "We can't say enough good things about the professional and dedicated care they provided. It gave our family peace of mind.",
  },
  {
    name: "Linda R.",
    stars: 5,
    text: "From the very first call, we felt like family. The caregiver assigned to my father was patient, kind, and incredibly professional.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            A Safe Harbor for Those You Love Most
          </motion.h2>
          <div className="h-1 w-20 bg-[#1E6FB8] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50/80 to-green-50/80 p-8 rounded-2xl shadow-sm border border-white/50 relative"
            >
              <Quote className="w-8 h-8 text-[#1E6FB8]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2FAE66] text-[#2FAE66]" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-bold text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
