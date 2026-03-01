import '../styles/globals.css';
import '../styles/theme-elegant.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import elegantStyles from '../styles/Nav.elegant.module.css';
import ThemeToggle from '../components/ThemeToggle';
import WelcomeScreen from '../components/WelcomeScreen';
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isElegant, setIsElegant] = useState(true); // Elegante por defecto
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Detectar tema guardado, por defecto elegante
    const savedTheme = localStorage.getItem('theme');
    setIsElegant(savedTheme !== 'default');

    // Mostrar pantalla de bienvenida SIEMPRE que se recargue la página
    console.log('🎵 Activando modal de bienvenida...');
    setShowWelcome(true);
  }, []);

  const handleWelcomeClose = () => {
    console.log('🎵 Cerrando modal y navegando a La Rumbossa...');
    setShowWelcome(false);
    // Scroll suave al video de La Rumbossa
    setTimeout(() => {
      const specialSection = document.querySelector('[data-special-song]');
      if (specialSection) {
        specialSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  // Seleccionar estilos según tema
  const navStyles = isElegant ? elegantStyles : styles;

  return (
    <>
      {showWelcome && <WelcomeScreen onClose={handleWelcomeClose} />}
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
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;

