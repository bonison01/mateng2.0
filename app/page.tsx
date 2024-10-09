"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from next/link
import styles from './page.module.css';

export default function DiscoverPage() {
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);

  // Animate the counting up of numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setParcels((prev) => (prev < 30000 ? prev + 500 : 30000));
      setMerchants((prev) => (prev < 150 ? prev + 5 : 150));
      setBusinesses((prev) => (prev < 70 ? prev + 2 : 70));
    }, 50);

    // Cleanup function to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.discover}>
        <div className={styles.landingView}>
          <h1 className={styles.landingTitle}>We Drive, We Discover</h1>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <p className={styles.statValue}>
                Delivered <span className={styles.highlight}>{parcels}+</span>{" "}
                parcels
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
                Discovered <span className={styles.highlight}>{businesses}+</span>{" "}
                businesses
              </p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/discover" className={styles.button}>Discover Now</Link>
            <Link href="/pricing" className={styles.button}>Get Delivery Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
