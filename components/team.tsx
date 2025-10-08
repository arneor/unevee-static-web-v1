import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

function ZoodoTeam() {
  const testimonials = [
    {
      quote: 'Leading the vision and strategy to innovate the future.',
      name: 'Vahab kp',
      designation: 'CEO, Founder',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    // {
    //   quote: "Architecting the technology that powers our solutions.",
    //   name: "NidhinLal p",
    //   designation: "CTO, Founder",
    //   src: "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    // },
    {
      quote: 'Ensuring operational excellence and seamless execution.',
      name: 'Ladeed',
      designation: 'COO, Co-founder',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote: 'Building robust and scalable features for our users.',
      name: 'Nirmal',
      designation: 'Crew-1',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote: 'Crafting elegant code and solving complex challenges.',
      name: 'Akhil',
      designation: 'Crew-2',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote:
        'Driving growth and building strong business relations in the UAE market.',
      name: 'Junaid',
      designation: 'Crew-3',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote:
        'Connecting people and products through impactful marketing strategies.',
      name: 'Vignesh',
      designation: 'Crew-4',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote:
        'Turning opportunities into results with innovative sales approaches.',
      name: 'Ajin',
      designation: 'Crew-5',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
    {
      quote:
        'Building trust and delivering value through customer-focused solutions.',
      name: 'Abhijith',
      designation: 'Crew-6',
      src: 'https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { ZoodoTeam };
