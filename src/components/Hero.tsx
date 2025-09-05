import { Button } from "@/components/ui/button";
import heroDevices from "@/assets/hero-devices.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-success rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/30 rounded-full opacity-30 animate-pulse-glow blur-lg" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow bg-300%">
                Connect
              </span>
              <br />
              <span className="text-foreground">Your Fitness</span>
              <br />
              <span className="text-foreground-secondary">World</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground-secondary mb-4 font-medium">
              Universal Sports & Fitness Ecosystem
            </p>
            
            <p className="text-lg text-muted-foreground mb-4 max-w-xl">
              Bridging businesses and users across the globe - 
              <span className="text-success font-semibold">completely free</span>
            </p>
            
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              Connect gyms, trainers, and fitness enthusiasts worldwide. 
              No hidden costs, no trial periods - genuinely free forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 text-lg px-8 py-6">
                Start Your Free Journey
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-card glass-effect text-lg px-8 py-6">
                Explore Global Network
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border-subtle">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">FREE</div>
                <div className="text-sm text-muted-foreground">Customer App</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">Workouts</div>
              </div>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind devices */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full transform scale-110" />
              
              {/* Main device image */}
              <img 
                src={heroDevices} 
                alt="Unevee fitness platform on multiple devices" 
                className="relative z-10 w-full h-auto rounded-xl shadow-elegant"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-success rounded-full opacity-60 animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;