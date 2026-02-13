import '../styles/globals.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>💌</span>
            <span className={styles.logoText}>MI ANGY</span>
          </Link>
          <div className={styles.navLinks}>
            <Link
              href="/"
              className={`${styles.navLink} ${router.pathname === '/' ? styles.active : ''}`}
            >
              Galería
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

