import styles from './GlobalFooter.module.css';

export default function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Mateng</p>
      <nav>
        <a href="/about-us">About Us</a> | 
        <a href="/terms">Terms of Use</a> | 
        <a href="/careers">Careers</a>
      </nav>
    </footer>
  );
}
