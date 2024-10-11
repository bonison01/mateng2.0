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
    src: "/videos/175.mp4",
    description: "A vibrant collection of blooming flowers.",
  },
  {
    name: "Dancing Colors",
    src: "/videos/nachom.mp4",
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
  const [searchTerm, setSearchTerm] = useState("");
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);

  // Create ref for multiple video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Store references to both videos

  // Animate the counting up of numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setParcels((prev) => (prev < 30000 ? prev + 500 : 30000));
      setMerchants((prev) => (prev < 150 ? prev + 5 : 150));
      setBusinesses((prev) => (prev < 70 ? prev + 2 : 70));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Ensure that when one video plays, the other is paused
  const handleVideoPlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause(); // Pause the other video
      }
    });
  };

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

  const filteredVideos = videos.filter(
    (video) =>
      video.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.discover}>
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for shops or videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Video Section with Two Videos */}
      <div className={styles.videoContainer}>
        {filteredVideos.map((video, index) => (
          <div key={video.name} className={styles.videoColumn}>
            <video
              ref={(el) => {
                videoRefs.current[index] = el; // Assign the video element reference to the ref array
              }}
              className={styles.reelVideo}
              autoPlay={index === 0} // Auto-play the first video only
              loop
              controls
              muted={index !== 0} // Mute the second video by default
              onPlay={() => handleVideoPlay(index)} // Pause the other video when this one plays
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.name}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>

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

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <p className={styles.statValue}>
            Delivered <span className={styles.highlight}>{parcels}+</span> parcels
          </p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>
            Merchants <span className={styles.highlight}>{merchants}+</span>
          </p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>
            Discovered <span className={styles.highlight}>{businesses}+</span> businesses
          </p>
        </div>
      </div>
    </div>
  );
}
