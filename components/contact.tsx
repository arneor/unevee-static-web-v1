"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "We reply within 24 hours",
    value: "uneveeapp@gmail.com",
    link: "mailto:uneveeapp@gmail.com",
    gradient: "from-gray-800/80 to-gray-900/80",
    hoverColor: "blue",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon–Fri, 10:00–18:00 IST",
    value: "+91 9744880311",
    link: "tel:+919744880311",
    gradient: "from-gray-800/80 to-gray-900/80",
    hoverColor: "green",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Primary market: India",
    value: "Bangalore",
    link: "#",
    gradient: "from-gray-800/80 to-gray-900/80",
    hoverColor: "purple",
  },
];

const companyStats = [
  { label: "Avg. Response", value: "< 24 hrs", icon: Clock },
  { label: "Markets", value: "India first", icon: Globe },
  { label: "User", value: "User first", icon: User },
  { label: "Scalable", value: "Scalable", icon: Sparkles },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    audience: "Business", // Business | User
    topic: "Sales Demo", // Sales Demo | Partnership | Support | Other
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        submit: "Submission failed. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Solid black background with subtle effects */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/5 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm mb-6"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-indigo-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              ✨ Let&apos;s Connect
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Talk to
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              UNEVEE
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            // variants={fadeInUp}
            variants={fadeInUp}
          >
            Looking to digitize your fitness business or try our free user app?
            Share your details and we’ll respond within 24 hours.
          </motion.p>
        </motion.div>

        {/* Stats Bar - Dark Version */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={fadeInUp}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/[0.1] group hover:bg-white/[0.05] transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Dark Version */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Contact us</h3>
              <p className="text-white/60 text-lg">
                Tell us how we can help. For demos, partnerships, or support,
                we’ll get back to you within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">
                        Your Name
                      </label>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-black/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-all ${
                          errors.name ? "border-red-500" : "border-white/[0.1]"
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="sr-only">
                        Email Address
                      </label>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-black/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-all ${
                          errors.email ? "border-red-500" : "border-white/[0.1]"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="company" className="sr-only">
                      Company
                    </label>
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      id="company"
                      type="text"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-4 bg-black/50 border border-white/[0.1] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">
                        I am a
                      </label>
                      <select
                        value={formData.audience}
                        onChange={(e) =>
                          handleInputChange("audience", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option className="bg-black" value="Business">
                          Business
                        </option>
                        <option className="bg-black" value="User">
                          User
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) =>
                          handleInputChange("topic", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option className="bg-black" value="Sales Demo">
                          Sales Demo
                        </option>
                        <option className="bg-black" value="Partnership">
                          Partnership
                        </option>
                        <option className="bg-black" value="Support">
                          Support
                        </option>
                        <option className="bg-black" value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={`w-full pl-10 pr-4 py-4 bg-black/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-white/[0.1]"
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {errors.submit && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm"
                    >
                      {errors.submit}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-900/30 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Thank you!
                  </h3>
                  <p className="text-white/60 text-lg mb-6">
                    We’ve received your message. Our team will respond within 24
                    hours.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        audience: "Business",
                        topic: "Sales Demo",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 bg-black/50 border border-white/[0.1] rounded-xl text-white hover:bg-white/[0.05] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Methods - Dark Version */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Other ways to reach us
              </h3>
              <p className="text-white/60 text-lg">
                Choose the method that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/[0.1] hover:bg-white/[0.05] transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-indigo-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-white/60 text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
