"use client";
import { useEffect, useState } from "react";
import styles from './page.module.css';

type Shop = {
  name: string;
  photo: string;
  location: string;
  mobile: string;
};

// Define shops without 'as const' to allow for mutable types
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
  "Cake Shop": [
    {
      name: "Lovely Cake",
      photo: "/images/5.jpg",
      location: "Khagempalli",
      mobile: "123-456-7890",
    },
    {
      name: "Blooming Cake",
      photo: "/images/6.jpg",
      location: "Heiranggoi Thong",
      mobile: "098-765-4321",
    },
    {
      name: "Cake Petals",
      photo: "/images/7.jpg",
      location: "New Checkon",
      mobile: "321-654-9870",
    },
    {
      name: "Cake Friend",
      photo: "/images/8.jpg",
      location: "Khurai Lamlong",
      mobile: "654-321-9876",
    },
    {
      name: "Cake Only",
      photo: "/images/9.jpg",
      location: "Sagolband",
      mobile: "098-765-4321",
    },
    {
      name: "RRR Bakes",
      photo: "/images/10.jpg",
      location: "Kakwa near Vishal",
      mobile: "321-654-9870",
    },
  ],
  // Add more categories and shops here
};

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);

  // Animate the counting up of numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setParcels(prev => (prev < 30000 ? prev + 500 : 30000));
      setMerchants(prev => (prev < 150 ? prev + 5 : 150));
      setBusinesses(prev => (prev < 70 ? prev + 2 : 70));
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for shops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoContainer}>
        <div className={styles.videoColumn}>
          <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src="/videos/175.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Other video columns... */}
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
          <p className={styles.statValue}>Delivered <span className={styles.highlight}>{parcels}+</span> parcels</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>Merchants <span className={styles.highlight}>{merchants}+</span></p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>Discovered <span className={styles.highlight}>{businesses}+</span> businesses</p>
        </div>
      </div>
    </div>
  );
}
