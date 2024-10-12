// video.tsx

// Define the Video type if needed here or import it
export type Video = {
    name: string;
    src: string;
    description: string;
  };
  
  // Export predefined video data
  export const videos: Video[] = [
    {
      name: "Beautiful Blossoms",
      src: "/videos/175.mp4",
      description: "A vibrant collection of blooming flowers.",
    },
    {
      name: "Dancing Colors",
      src: "/videos/nachom.mp4",
      description: "An artistic video showcasing the vivid colors of nature.",
    },
    {
      name: "DIY Products",
      src: "/videos/arjay.mp4",
      description: "DIY Products overview video.",
    },
  ];
  