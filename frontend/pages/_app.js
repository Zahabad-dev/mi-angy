import '../styles/globals.css';
import '../styles/theme-elegant.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import elegantStyles from '../styles/Nav.elegant.module.css';
import ThemeToggle from '../components/ThemeToggle';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isElegant, setIsElegant] = useState(false);

  useEffect(() => {
    // Detectar tema guardado
    const savedTheme = localStorage.getItem('theme');
    setIsElegant(savedTheme === 'elegant');
  }, []);

  // Seleccionar estilos según tema
  const navStyles = isElegant ? elegantStyles : styles;

  return (
    <>
      <nav className={navStyles.navbar}>
        <div className={navStyles.navContainer}>
          <Link href="/" className={navStyles.logo}>
            <span className={navStyles.logoIcon}>💌</span>
            <span className={navStyles.logoText}>MI ANGY</span>
          </Link>
          <div className={navStyles.navLinks}>
            <Link
              href="/"
              className={`${navStyles.navLink} ${router.pathname === '/' ? navStyles.active : ''}`}
            >
              Galería
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

