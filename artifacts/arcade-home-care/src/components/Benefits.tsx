import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Benefits() {
  const benefits = [
    "Preserves independence and dignity",
    "More affordable than facility care",
    "Personalized care plans",
    "Family stays involved"
  ];

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
              The Benefits of <span className="text-primary">Home Care</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that the best care happens where your loved ones feel most comfortable: at home. Our personalized, compassionate approach ensures they receive the attention they need while remaining in familiar surroundings.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#services">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg h-auto">
                Learn More
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform -rotate-3 -z-10"></div>
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
