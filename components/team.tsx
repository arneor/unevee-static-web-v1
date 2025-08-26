import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function ZoodoTeam() {
  const testimonials = [
    {
      quote: "Leading the vision and strategy to innovate the future.",
      name: "Vahab",
      designation: "CEO, Founder",
      src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      quote: "Architecting the technology that powers our solutions.",
      name: "NIDHINLAL",
      designation: "CTO, Founder",
      src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      quote: "Ensuring operational excellence and seamless execution.",
      name: "Ladeed",
      designation: "COO, Co-founder",
      src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      quote: "Building robust and scalable features for our users.",
      name: "Nirmal",
      designation: "Crew-1",
      src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      quote: "Crafting elegant code and solving complex challenges.",
      name: "Akhil",
      designation: "Crew-2",
      src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { ZoodoTeam };
