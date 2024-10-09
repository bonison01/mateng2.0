"use client";

import Link from "next/link";
import styles from './page.module.css';

export default function Pricing() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pricing Information</h1>
      <div className={styles.pricingContainer}>
        <div className={styles.service}>
          <h2>Delivery Rates</h2>
          <p>Check out our delivery rates based on distance and package size.</p>
          <Link href="/delivery-rates" className={styles.link}>View Delivery Rates</Link>
        </div>
        <div className={styles.service}>
          <h2>Other Services</h2>
          <p>For information on other services, please contact us directly.</p>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
