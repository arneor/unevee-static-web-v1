import {
  BarChart3,
  Users,
  Calendar,
  Trophy,
  Heart,
  MapPin,
  Zap,
  Shield,
} from "lucide-react";

const FeaturesShowcase = () => {
  const businessFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard Analytics",
      description:
        "Revenue tracking, member insights, live attendance monitoring",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Member Management",
      description:
        "Advanced search, profiles, performance tracking, Google Fit integration",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Booking System",
      description:
        "Seamless scheduling, calendar views, automated confirmations",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Staff Management",
      description: "Role assignment, duty tracking, performance monitoring",
    },
  ];

  const clientFeatures = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Free Access",
      description: "Complete fitness tracking without any subscription fees",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Badges, achievements, statistics, and gamified workouts",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Diet Plans",
      description: "Personalized nutrition based on your health data and goals",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Nearby Discovery",
      description: "Find and book local gyms, turfs, and fitness venues",
    },
  ];

  return (
    <section className="py-24 relative" id="features">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-success/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Complete
            </span>{" "}
            Fitness Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful tools for businesses, amazing experience for users.
            Everything you need in one integrated platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Business Features */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  For Businesses
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                Comprehensive Business Management
              </h3>
              <p className="text-muted-foreground">
                Everything you need to run a successful fitness business
              </p>
            </div>

            <div className="space-y-6">
              {businessFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card p-6 rounded-xl border border-border-subtle hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary/10 text-primary group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-secondary border border-border-subtle">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-primary">
                  Real-time sync across all platforms
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Multi-location support • Advanced reporting • Staff role
                management
              </p>
            </div>
          </div>

          {/* Client Features */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-4">
                <Heart className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">
                  For Everyone
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                Ultimate User Experience
              </h3>
              <p className="text-muted-foreground">
                Free, powerful, and designed for your fitness journey
              </p>
            </div>

            <div className="space-y-6">
              {clientFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card p-6 rounded-xl border border-border-subtle hover:border-success/30 transition-all duration-300 group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-success/10 text-success group-hover:bg-success/20 transition-all duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-success/10 border border-success/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-success">
                  100% Free Forever
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Unlimited workouts • Progress tracking • Google Fit integration
                • No ads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
