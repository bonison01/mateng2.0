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

// Predefined video data
const initialVideos: Video[] = [
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

// Predefined shop data with photos
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
    {
      name: "Tily Flowers",
      photo: "/images/16.jpg",
      location: "Singjamei Bazar",
      mobile: "098-765-4321",
    },
    {
      name: "Flower Petals",
      photo: "/images/17.jpg",
      location: "Keisamthong Top Leirak",
      mobile: "321-654-9870",
    },
    {
      name: "Li Flowers",
      photo: "/images/18.jpg",
      location: "Paona Bazar near Impact TV",
      mobile: "654-321-9876",
    },
  ],
  "Gift Shop": [
    {
      name: "Lovely Gifts",
      photo: "/images/4.jpg",
      location: "Nongmeibung near Kutsum Oil Pump",
      mobile: "123-456-7890",
    },
    {
      name: "Gift Flowers",
      photo: "/images/11.jpg",
      location: "Singjamei Chingamakha",
      mobile: "098-765-4321",
    },
    {
      name: "Gift Petals",
      photo: "/images/12.jpg",
      location: "Sagolband Sayang",
      mobile: "321-654-9870",
    },
    {
      name: "Lily's Gift",
      photo: "/images/13.jpg",
      location: "Sagolband Moirang Leirak",
      mobile: "654-321-9876",
    },
    {
      name: "La Gift",
      photo: "/images/14.jpg",
      location: "Sagolband Tera",
      mobile: "098-765-4321",
    },
    {
      name: "Gift More",
      photo: "/images/15.jpg",
      location: "Kwakeithel Bazar",
      mobile: "321-654-9870",
    },
  ],
};

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);
  const [videos, setVideos] = useState<Video[]>(initialVideos); // Store videos in state
  const [newVideo, setNewVideo] = useState<{ name: string; description: string; file: File | null }>({
    name: "",
    description: "",
    file: null,
  });
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility

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

  // Handle form input changes for the new video
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle video file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setNewVideo((prev) => ({
      ...prev,
      file,
    }));
  };

  // Handle publishing the new video
  const handlePublish = () => {
    if (!newVideo.file) {
      alert("Please upload a video file.");
      return;
    }

    // Create a local URL for the uploaded video file
    const newVideoURL = URL.createObjectURL(newVideo.file);

    // Add the new video to the videos list
    setVideos((prevVideos) => [
      ...prevVideos,
      {
        name: newVideo.name,
        src: newVideoURL,
        description: newVideo.description,
      },
    ]);

    // Reset the form and hide it
    setNewVideo({
      name: "",
      description: "",
      file: null,
    });
    setIsFormVisible(false);

    alert("Video published successfully!");
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

      {/* Upload Video Button */}
      <div className={styles.uploadButtonContainer}>
        <button onClick={() => setIsFormVisible(!isFormVisible)} className={styles.uploadButton}>
          {isFormVisible ? "Cancel" : "Upload a Video"}
        </button>
      </div>

      {/* Video Upload Form */}
      {isFormVisible && (
        <div className={styles.uploadSection}>
          <h2>Upload Your Own Video</h2>
          <input
            type="text"
            name="name"
            placeholder="Video Name"
            value={newVideo.name}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <textarea
            name="description"
            placeholder="Video Description"
            value={newVideo.description}
            onChange={handleInputChange}
            className={styles.textArea}
          ></textarea>
          <input type="file" accept="video/*" onChange={handleFileChange} className={styles.inputFile} />
          <button onClick={handlePublish} className={styles.publishButton}>
            Publish Video
          </button>
        </div>
      )}

      {/* Video Section */}
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

      {/* Shop Section with Photos */}
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
