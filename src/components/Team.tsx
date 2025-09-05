import { useState, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TeamSlider = () => {
  const teamMembers = [
    {
      name: "Vahab kp",
      designation: "CEO, Founder",
      quote: "Leading the vision and strategy to innovate the future.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "NidhinLal p",
      designation: "CTO, Founder",
      quote: "Architecting the technology that powers our solutions.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Ladeed",
      designation: "COO, Co-founder",
      quote: "Ensuring operational excellence and seamless execution.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Nirmal",
      designation: "Crew-1",
      quote: "Building robust and scalable features for our users.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Akhil",
      designation: "Crew-2",
      quote: "Crafting elegant code and solving complex challenges.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Junaid",
      designation: "Crew-3",
      quote:
        "Driving growth and building strong business relations in the UAE market.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Vignesh",
      designation: "Crew-4",
      quote:
        "Connecting people and products through impactful marketing strategies.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Ajin",
      designation: "Crew-5",
      quote:
        "Turning opportunities into results with innovative sales approaches.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Abhijith",
      designation: "Crew-6",
      quote:
        "Building trust and delivering value through customer-focused solutions.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive slides per view
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay, slidesToShow]);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= teamMembers.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? teamMembers.length - slidesToShow : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const maxSlides = Math.max(0, teamMembers.length - slidesToShow);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl animate-world-pulse" />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-success/10 rounded-full blur-3xl animate-world-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl animate-world-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Visionary Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The minds revolutionizing global fitness connections
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-card rounded-full border border-border-subtle hover:border-primary/50 transition-all duration-300 flex items-center justify-center group hover:shadow-glow-cyan"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-card rounded-full border border-border-subtle hover:border-primary/50 transition-all duration-300 flex items-center justify-center group hover:shadow-glow-cyan"
            style={{ transform: "translate(50%, -50%)" }}
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden mx-8">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
                width: `${(teamMembers.length * 100) / slidesToShow}%`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="flex-none px-4"
                  style={{ width: `${100 / teamMembers.length}%` }}
                >
                  <div className="group glass-card rounded-2xl border border-border-subtle hover:border-primary/30 transition-all duration-500 hover:shadow-glow-cyan relative overflow-hidden h-full">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="p-8 relative z-10 h-full flex flex-col">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-border-subtle group-hover:border-primary/50 transition-all duration-300">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>

                        {/* Floating connection dots */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse-glow" />
                        <div
                          className="absolute -bottom-1 -left-1 w-3 h-3 bg-success/60 rounded-full animate-pulse-glow"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>

                      {/* Member Info */}
                      <div className="text-center mb-4 flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-4">
                          {member.designation}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative mt-auto">
                        <Quote className="w-4 h-4 text-muted-foreground/50 mb-2" />
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          "{member.quote}"
                        </p>
                      </div>

                      {/* Animated Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                    </div>

                    {/* Connection Lines Effect */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none">
                      <svg className="w-full h-full">
                        <line
                          x1="0"
                          y1="50%"
                          x2="100%"
                          y2="50%"
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          className="animate-connect-line"
                        />
                        <line
                          x1="50%"
                          y1="0"
                          x2="50%"
                          y2="100%"
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          className="animate-connect-line"
                          style={{ animationDelay: "0.5s" }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary shadow-glow-cyan"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Global Connection Message */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-border-subtle">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
            <p className="text-sm text-foreground-secondary font-medium">
              Connecting fitness communities across continents
            </p>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes connect-line {
          0% {
            stroke-dasharray: 0 100%;
          }
          100% {
            stroke-dasharray: 100% 0;
          }
        }

        @keyframes world-pulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-connect-line {
          animation: connect-line 2s ease-in-out infinite;
        }

        .animate-world-pulse {
          animation: world-pulse 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .shadow-glow-cyan {
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default TeamSlider;
