import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Base Plan",
      originalPrice: "₹1,000",
      currentPrice: "FREE",
      period: "forever",
      description: "Full business management platform - completely free",
      features: [
        "Complete member management",
        "Basic analytics & reports",
        "Booking system",
        "Staff management",
        "Mobile & web access",
        "Customer health app integration",
      ],
      highlighted: true,
      available: true,
      badge: "Most Popular",
    },
    {
      name: "Advanced Plan",
      originalPrice: "₹3,000",
      currentPrice: "₹299",
      period: "per month",
      description: "For growing businesses with multiple locations",
      features: [
        "Everything in Base Plan",
        "Advanced notifications",
        "Multi-franchise support",
        "Priority customer support",
        "Advanced analytics",
        "Custom integrations",
      ],
      highlighted: false,
      available: true,
      badge: "Limited Time",
    },
    {
      name: "Ultimate Plan",
      originalPrice: "Coming Soon",
      currentPrice: "TBA",
      period: "",
      description: "Enterprise-grade features for large operations",
      features: [
        "Everything in Advanced Plan",
        "Enterprise-grade security",
        "Advanced AI insights",
        "Custom development",
        "Dedicated account manager",
        "Premium integrations",
      ],
      highlighted: false,
      available: false,
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="py-24 relative" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-success/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pricing That{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              Changes Everything
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Both platforms completely free - no catches, no trials
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/10 border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
            <p className="text-sm text-success font-semibold">
              BOTH PLATFORMS ARE COMPLETELY FREE
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl border transition-all duration-300 animate-fade-in-up ${
                plan.highlighted
                  ? "border-success/50 shadow-glow-cyan scale-105"
                  : plan.available
                  ? "border-border-subtle hover:border-primary/30"
                  : "border-border-subtle opacity-75"
              } ${!plan.available ? "overflow-hidden" : ""}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Coming Soon Overlay */}
              {!plan.available && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-lg font-semibold text-muted-foreground">
                      Coming Soon
                    </p>
                  </div>
                </div>
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`px-4 py-1 rounded-full text-xs font-medium ${
                      plan.highlighted
                        ? "bg-gradient-success text-background"
                        : "bg-gradient-primary text-background"
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    {plan.originalPrice !== plan.currentPrice &&
                      plan.available && (
                        <div className="text-lg text-muted-foreground line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                    <div
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-success" : "text-foreground"
                      }`}
                    >
                      {plan.currentPrice}
                    </div>
                    {plan.period && (
                      <div className="text-sm text-muted-foreground">
                        {plan.period}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-success" : "text-primary"
                        }`}
                      />
                      <span className="text-sm text-foreground-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-success hover:shadow-glow-cyan"
                      : plan.available
                      ? "bg-gradient-primary hover:shadow-glow-cyan"
                      : "opacity-50 cursor-not-allowed"
                  } transition-all duration-300`}
                  disabled={!plan.available}
                >
                  {plan.highlighted ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Start Free Now
                    </>
                  ) : plan.available ? (
                    "Get Started"
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="text-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-muted-foreground">
            <span className="text-success font-semibold">
              Free customer app
            </span>{" "}
            for all plans • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
