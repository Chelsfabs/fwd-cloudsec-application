import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "../../../public/hero-caregiver.png"; // We can also use absolute path

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
              <span className="text-primary">Home Care</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Compassionate in-home support for seniors and disabled adults. Available 24/7, tailored to your loved one's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg h-auto shadow-lg shadow-secondary/30">
                  Get Started
                </Button>
              </a>
              <a href="tel:+19255750709">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg h-auto bg-white">
                  Call (925) 575-0709
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
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
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] md:h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,21.5,149.62,43.2,223.3,51.8,256.76,55.72,289.47,58.82,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
