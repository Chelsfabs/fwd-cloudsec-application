'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Heart, Shield, Users, Star, Phone, MapPin, Globe, Printer } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every client deserves to be treated with dignity, respect, and genuine care. We approach every home as if it were our own family.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Our caregivers are thoroughly screened and trained to provide dependable, professional care you can count on — day or night.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description: "We keep families connected and informed, working together to create personalized care plans that honor each individual's needs.",
  },
  {
    icon: Star,
    title: "Committed to Serve",
    description: "Our motto is not just words — it is a daily promise. We are committed to serving veterans, seniors, and communities with excellence.",
  },
];

const services = [
  "Personal Care — bathing, grooming, dressing, and medication reminders",
  "Dementia & Alzheimer's Care — specialized support for memory care needs",
  "Veteran Care — dedicated in-home support for those who served our country",
  "Housekeeping — light cleaning, laundry, and nutritious meal preparation",
  "24/7 Support — around-the-clock care for complete peace of mind",
  "Recovery Care — post-surgery and illness recovery assistance",
  "Companionship — meaningful engagement and emotional support",
  "Elderly Care in Homes and Communities — supporting independence wherever they live",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#1E6FB8] to-[#0d4f8a] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2FAE66] blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-white rounded-2xl px-8 py-4 mb-8 shadow-xl">
                <img
                  src="/arcade-logo.png"
                  alt="Arcade Home Care LLC"
                  className="h-24 w-auto object-contain mx-auto"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                About Arcade Home Care
              </h1>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed italic font-medium">
                ...We are committed to Serve
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-bold text-[#2FAE66] uppercase tracking-widest mb-4">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Quality Non-Medical Care<br />
                  <span className="text-[#1E6FB8]">in the Comfort of Home</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Arcade Home Care LLC is a licensed non-medical home care agency dedicated to providing compassionate, professional, and reliable in-home care services. We serve seniors, disabled adults, and veterans — allowing them to remain in the comfort of their own homes and communities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe that every individual deserves to age with dignity and independence. Our experienced caregivers are trained to deliver personalized support that adapts to the unique needs of each client and their family.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From personal care and companionship to specialized veteran support, our mission is simple: to bring peace of mind to families and quality of life to those we serve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-10 border border-blue-100"
              >
                <div className="text-center mb-8">
                  <img
                    src="/arcade-logo.png"
                    alt="Arcade Home Care LLC"
                    className="h-24 w-auto object-contain mx-auto"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-3xl font-extrabold text-[#1E6FB8]">24/7</span>
                    <span className="text-gray-700 font-medium">Available around the clock</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-3xl font-extrabold text-[#2FAE66]">100%</span>
                    <span className="text-gray-700 font-medium">Non-medical, in-home care</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#1E6FB8] shrink-0" />
                    <span className="text-gray-700 font-medium">Veterans care specialists</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#2FAE66] shrink-0" />
                    <span className="text-gray-700 font-medium">Elderly & community care</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block text-sm font-bold text-[#2FAE66] uppercase tracking-widest mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Serving Those Who Need Us Most
              </h2>
              <blockquote className="text-xl md:text-2xl text-[#1E6FB8] font-semibold italic mb-8 border-l-4 border-[#2FAE66] pl-6 text-left">
                &ldquo;We provide quality non-medical care in the comfort of home — for veterans who served our country, for the elderly in their homes and communities, and for all those who deserve to live with dignity and independence.&rdquo;
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Arcade Home Care LLC, we understand that choosing a home care provider is one of the most important decisions a family can make. That&apos;s why we hold ourselves to the highest standards of professionalism, compassion, and reliability — because your loved ones deserve nothing less.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-bold text-[#2FAE66] uppercase tracking-widest mb-4">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Care Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2FAE66] shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm font-medium leading-relaxed">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-bold text-[#2FAE66] uppercase tracking-widest mb-4">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Sets Us Apart
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-[#1E6FB8]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-bold text-[#2FAE66] uppercase tracking-widest mb-4">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                We&apos;re Here to Help
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to start a conversation about care? Reach out to our team today — we&apos;re available 24/7.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="tel:+19255750709"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-[#1E6FB8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-[#1E6FB8] font-bold text-lg">(925) 575-0709</p>
                <p className="text-gray-500 text-sm mt-1">Fax: (925) 266-3220</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200"
              >
                <div className="w-14 h-14 rounded-full bg-[#2FAE66] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700 font-medium">6701 Koll Center Pkwy</p>
                <p className="text-gray-700 font-medium">Pleasanton, CA 94566</p>
              </motion.div>

              <motion.a
                href="https://www.arcadehomecare.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1E6FB8] to-[#2FAE66] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Website</h3>
                <p className="text-[#1E6FB8] font-bold">www.arcadehomecare.com</p>
              </motion.a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#1E6FB8] to-[#2FAE66]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                Call us today and speak with a care coordinator. We&apos;re available 24/7 to answer your questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19255750709"
                  className="bg-white text-[#1E6FB8] hover:bg-gray-100 font-bold rounded-full px-10 py-4 text-lg shadow-lg transition-colors"
                >
                  Call (925) 575-0709
                </a>
                <Link
                  href="/"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold rounded-full px-10 py-4 text-lg transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
