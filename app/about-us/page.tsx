"use client";
import { useEffect } from "react";
import styles from './about.module.css';

const companyJourney = [
  {
    year: 2022,
    text: "Mateng was established in late 2022 with a vision to simplify local delivery services in Imphal, Manipur.",
  },
  {
    year: 2023,
    text: "We launched our platform to integrate communication, task management, and shopping for a seamless customer experience.",
  },
  {
    year: 2024,
    text: "Expanded our services to include partnerships with local businesses, ensuring faster and more efficient deliveries.",
  },
];

const images = [
  "/images/company-launch.jpg",
  "/images/first-delivery.jpg",
  "/images/community-event.jpg",
];

export default function AboutUsPage() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.content}>
        <h2>Our Journey</h2>
        <div className={styles.journey}>
          {companyJourney.map((event, index) => (
            <div key={index} className={styles.journeyItem}>
              <h3>{event.year}</h3>
              <p>{event.text}</p>
            </div>
          ))}
        </div>
        <h2>Our Story in Pictures</h2>
        <div className={styles.imageGallery}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Company Event ${index + 1}`} className={styles.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
