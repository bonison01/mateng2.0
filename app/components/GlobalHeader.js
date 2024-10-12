"use client"; // This marks the component as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa'; // Importing a user icon from react-icons
import { FiMenu } from 'react-icons/fi'; // Importing a hamburger menu icon from react-icons
import styles from './GlobalHeader.module.css'; // Ensure this path matches where you create the CSS module

const GlobalHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        <FiMenu className={styles.icon} aria-label="Menu" />
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navButton} onClick={handleMenuClose}>
          Home
        </Link>
        <Link href="/discover" className={styles.navButton} onClick={handleMenuClose}>
          Discover
        </Link>
        <Link href="/delivery-rates" className={styles.navButton} onClick={handleMenuClose}>
          Delivery Rates
        </Link>
        <Link href="/pricing" className={styles.navButton} onClick={handleMenuClose}>
          Services
        </Link>
        <Link href="https://mtg-task-app.vercel.app/form/create-new-task" className={styles.createTaskButton} onClick={handleMenuClose}>
          Create Task
        </Link>
        <Link href="/login" onClick={handleMenuClose}>
          <FaUser className={styles.icon} aria-label="Login" />
        </Link>
      </nav>
    </header>
  );
};

export default GlobalHeader;
