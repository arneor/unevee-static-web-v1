import { Smartphone, Monitor, Laptop, Globe, Apple } from "lucide-react";
import platformIcons from "@/assets/platform-icons.jpg";

const PlatformAvailability = () => {
  const businessPlatforms = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "Android App",
      description: "Google Play Store",
      available: true,
    },
    {
      icon: <Apple className="w-8 h-8" />,
      name: "iOS App",
      description: "Apple App Store",
      available: true,
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      name: "macOS",
      description: "Native Desktop App",
      available: true,
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      name: "Windows",
      description: "Desktop Application",
      available: true,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Web Platform",
      description: "Browser Based",
      available: true,
    },
  ];

  const customerPlatforms = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "Android",
      description: "Free on Google Play",
      available: true,
    },
    {
      icon: <Apple className="w-8 h-8" />,
      name: "iOS",
      description: "Free on App Store",
      available: true,
    },
  ];

  return (
    <section className="py-24 relative" id="platforms">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Available{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everywhere,
            </span>{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              Free Forever
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Both business and customer platforms are completely free
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
            <p className="text-sm text-success font-semibold">
              No hidden costs • No trial periods • Genuinely free forever
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Business Management Platform */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Business Management Platform
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground">
                  Complete control across 5 platforms
                </span>
                <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                  FREE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {businessPlatforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="glass-card p-6 rounded-xl border border-border-subtle hover:border-primary/30 transition-all duration-300 hover:shadow-glow-cyan group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary/10 text-primary group-hover:bg-gradient-primary/20 transition-all duration-300">
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-secondary border border-border-subtle">
              <p className="text-sm text-center text-foreground-secondary font-medium">
                🔄 Real-time sync across all your devices
              </p>
            </div>
          </div>

          {/* Customer Health Tracking App */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Customer Health Tracking App
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground">
                  Global fitness community access
                </span>
                <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                  FREE
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              {customerPlatforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="glass-card p-6 rounded-xl border border-border-subtle hover:border-success/30 transition-all duration-300 hover:shadow-glow-cyan group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-success/10 text-success group-hover:bg-success/20 transition-all duration-300">
                      {platform.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                      FREE
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-success/10 border border-success/20">
              <p className="text-sm text-center text-foreground-secondary font-medium">
                📱 Seamless data sync • Google Fit integration
              </p>
            </div>

            {/* Free Highlight */}
            <div className="mt-8 text-center p-6 rounded-xl bg-gradient-success/10 border border-success/30">
              <h4 className="text-lg font-bold text-success mb-2">
                Actually Completely Free
              </h4>
              <p className="text-sm text-foreground-secondary">
                No hidden costs, no premium tiers for basic features. Full
                access to fitness tracking, workouts, and progress analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAvailability;
