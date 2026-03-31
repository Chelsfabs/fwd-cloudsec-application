import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      
      {/* Decorative circles */}
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
          <p className="text-white/90 text-lg md:text-xl mb-4 font-medium">
            Call us directly to speak with a care coordinator.
          </p>
          <a href="tel:+19255750709" className="block mb-8 hover:opacity-90 transition-opacity">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tight">
              (925) 575-0709
            </span>
          </a>
          <a href="mailto:info@arcadehomecare.com">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg h-auto font-bold shadow-lg">
              Contact Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
