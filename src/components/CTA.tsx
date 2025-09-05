"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Clock,
  Globe,
  Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "We reply within 24 hours",
    value: "uneveeapp@gmail.com",
    link: "mailto:uneveeapp@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon–Fri, 10:00–18:00 IST",
    value: "+91 9744880311",
    link: "tel:+919744880311",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Primary market: India",
    value: "Bangalore",
    link: "#",
  },
];

const CTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    audience: "Business",
    topic: "Sales Demo",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background-secondary" />

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-success/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              Your Fitness Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of fitness professionals already using Unevee to
              streamline operations and empower their members.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card p-6 rounded-xl border border-border-subtle text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">
                Platforms Supported
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border-subtle text-center">
              <div className="text-3xl font-bold text-success mb-2">FREE</div>
              <div className="text-sm text-muted-foreground">Customer App</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border-subtle text-center">
              <div className="text-3xl font-bold text-foreground mb-2">∞</div>
              <div className="text-sm text-muted-foreground">
                Workouts & Tracking
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border-subtle text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">24hr Response</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-success hover:shadow-glow-cyan transition-all duration-300 text-lg px-8 py-6 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-card glass-effect text-lg px-8 py-6"
              onClick={() => setShowContactForm(!showContactForm)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {showContactForm ? "Hide Contact Form" : "Get in Touch"}
            </Button>
          </div>

          {/* Contact Form Section */}
          {showContactForm && (
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="glass-card p-8 rounded-2xl border border-border-subtle mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        Let's Connect
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Tell us about your fitness business and how we can help
                        you grow.
                      </p>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                              type="text"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                              className={`w-full pl-10 pr-4 py-3 bg-background/50 border rounded-xl focus:outline-none focus:border-primary transition-all ${
                                errors.name ? "border-red-500" : "border-border"
                              }`}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              className={`w-full pl-10 pr-4 py-3 bg-background/50 border rounded-xl focus:outline-none focus:border-primary transition-all ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-border"
                              }`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Company (Optional)"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-foreground text-sm mb-2">
                              I am a
                            </label>
                            <select
                              value={formData.audience}
                              onChange={(e) =>
                                handleInputChange("audience", e.target.value)
                              }
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary"
                            >
                              <option value="Business">Business</option>
                              <option value="User">User</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-foreground text-sm mb-2">
                              Topic
                            </label>
                            <select
                              value={formData.topic}
                              onChange={(e) =>
                                handleInputChange("topic", e.target.value)
                              }
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary"
                            >
                              <option value="Sales Demo">Sales Demo</option>
                              <option value="Partnership">Partnership</option>
                              <option value="Support">Support</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                          <textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            className={`w-full pl-10 pr-4 py-4 bg-background/50 border rounded-xl focus:outline-none focus:border-primary transition-all resize-none ${
                              errors.message
                                ? "border-red-500"
                                : "border-border"
                            }`}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        {errors.submit && (
                          <p className="text-red-500 text-sm">
                            {errors.submit}
                          </p>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-3 group"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                        <p className="text-muted-foreground mb-6">
                          We've received your message. Our team will respond
                          within 24 hours.
                        </p>
                        <Button
                          variant="outline"
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
                          className="glass-effect"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Other ways to reach us
                      </h3>
                      <p className="text-muted-foreground">
                        Choose the method that works best for you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <a
                          key={index}
                          href={method.link}
                          className="block p-4 glass-card rounded-xl border border-border-subtle hover:bg-card/50 transition-all group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <method.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">
                                {method.title}
                              </h4>
                              <p className="text-muted-foreground text-sm mb-1">
                                {method.description}
                              </p>
                              <p className="font-medium">{method.value}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trust indicators */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by fitness professionals worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="text-xs font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                No Credit Card Required
              </div>
              <div className="text-xs font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Setup in 5 Minutes
              </div>
              <div className="text-xs font-mono flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
