"use client";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { useState, useEffect } from "react";
import { renderCanvas } from "./ui/hero-designali";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "https://res.cloudinary.com/dgjpqwxpj/video/upload/v1750998445/uly7zvfip71qvh9lbeza.mp4",
    poster:
      "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg",
    background: "https://wallpapercave.com/wp/wp2333032.jpg",
    title: "Unevee",
    date: "2025",
    scrollToExpand: "Coming soon",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.",
      conclusion:
        "The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
    title: "Dynamic Image Showcase",
    date: "Underwater Adventure",
    scrollToExpand: "Scroll to Expand Demo",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.",
      conclusion:
        "The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.",
    },
  },
};

const Landing = () => {
  const [mediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content positioned relative to allow z-index stacking */}
      <div className="relative z-10">
        <ScrollExpandMedia
          mediaType={mediaType as "video" | "image"}
          mediaSrc={currentMedia.src}
          posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
        ></ScrollExpandMedia>
      </div>
    </div>
  );
};

export default Landing;
