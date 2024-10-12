"use client";
import { useEffect, useRef, useState } from "react";
import styles from './page.module.css';

type Shop = {
  name: string;
  photo: string;
  location: string;
  mobile: string;
};

type Video = {
  name: string;
  src: string;
  description: string;
};

// Define video data
const videos: Video[] = [
  {
    name: "Beautiful Blossoms",
    src: "/videos/alphabet.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/arjay.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/arjay2.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/aryuvedic.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/athena.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/blackink.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/cardetail.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/chumthang.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/coffee.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/crazyfood.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/cubical.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/dekhunai.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/dokie.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/diy.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/dweller.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/excellent.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/exellemt.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/greenwood.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/guidance.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/imma.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/imphalshien.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/imphalshien2.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/keithelmacha.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/la_teeneg.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/likla.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/ls.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/mami.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/manipurtraditional.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/mayout.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/michel.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/mkcars.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/monnish.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/mylooms.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/naokon.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/pb.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/nachom.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/phirel.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/queenbakes.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/rose.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/shinuyen.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/sugoi.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/sutabar.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/taco.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/tasteof.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/tradehouse.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/tradehouse1.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
  {
    name: "Beautiful Blossoms",
    src: "/videos/vishal.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "DIY",
    src: "/videos/whimsy.mp4",
    description: "DIY Products.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/yakai.mp4",
    description: "An artistic video showcasing the vivid colors of nature.",
  },
];

// Define shops with images
const shops: Record<string, Shop[]> = {
  "Flower Shop": [
    {
      name: "Blooming Flowers",
      photo: "/images/1.jpg",
      location: "Chingmeirong near MBC",
      mobile: "098-765-4321",
    },
    {
      name: "Rose Petals",
      photo: "/images/2.jpg",
      location: "Thangmeiband near Vespa Showroom",
      mobile: "321-654-9870",
    },
    {
      name: "Lily's Florist",
      photo: "/images/18.jpg",
      location: "Thangmeiband Polem leikai",
      mobile: "654-321-9876",
    },
    // more shops...
  ],
  // more shop categories...
};

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Video filtering logic
  const filteredVideos = videos.filter(
    (video) =>
      video.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Shop filtering logic
  const filteredShops = Object.entries(shops).reduce(
    (acc, [category, shopList]) => {
      const filteredList = shopList.filter(
        (shop) =>
          shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shop.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredList.length > 0) {
        acc.push({ category, shops: filteredList });
      }
      return acc;
    },
    [] as { category: string; shops: Shop[] }[]
  );

  return (
    <div className={styles.discover}>
      {/* Search Bar */}
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for shops or videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoContainer}>
        {filteredVideos.map((video, index) => (
          <div key={video.name} className={styles.videoColumn}>
            <video
              className={styles.reelVideo}
              autoPlay={index === 0} // Auto-play the first video only
              loop
              controls
              muted={index !== 0} // Mute the second video by default
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.name}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Shop Section */}
      <div className={styles.categories}>
        {filteredShops.map(({ category, shops }) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            <div className={styles.shopList}>
              {shops.map((shop) => (
                <div key={shop.name} className={styles.shopCard}>
                  <img src={shop.photo} alt={shop.name} className={styles.shopPhoto} />
                  <h3>{shop.name}</h3>
                  <p>{shop.location}</p>
                  <p>{shop.mobile}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
