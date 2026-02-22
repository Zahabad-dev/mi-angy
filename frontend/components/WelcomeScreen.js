import { useState, useEffect } from 'react';
import styles from '../styles/WelcomeScreen.module.css';

export default function WelcomeScreen({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    console.log('💕 Modal de bienvenida montado!');
  }, []);

  const handleClose = () => {
    console.log('💕 Cerrando modal...');
    setFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 800);
  };

  // NO auto cerrar automáticamente
  // useEffect(() => {
  //   const timer = setTimeout(handleClose, 8000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`} onClick={handleClose}>
      <div className={`${styles.content} ${fadeOut ? styles.contentFadeOut : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeX} onClick={handleClose} title="Cerrar">
          ✕
        </button>
        <div className={styles.hearts}>
          <span className={styles.heart1}>💗</span>
          <span className={styles.heart2}>💕</span>
          <span className={styles.heart3}>💖</span>
        </div>
        
        <h1 className={styles.title}>¡Nueva Actualización!</h1>
        
        <div className={styles.badge}>
          🎵 Sección de Música 🎵
        </div>
        
        <div className={styles.message}>
          <p className={styles.specialText}>
            "Esta canción identifica mi amor, lo que siento y como llega en lo hondo de mi ser, 
            mi ser amado que tanto quiero vivir con él."
          </p>
          <p className={styles.legendText}>
            🏠 La imagen la elegí porque es sábado, y recuerdo nuestros fines de semana, 
            éramos tú y yo, durmiendo en sábanas blancas con humo, risas y pasión.
          </p>
          <p className={styles.extraText}>
            💕 Elegí una canción con amor y otra del reggaetón que me recuerda a ti...
          </p>
        </div>

        <div className={styles.musicNote}>
          <span className={styles.noteIcon}>🎶</span>
          <span className={styles.songTitle}>La Rumbossa</span>
          <span className={styles.divider}>•</span>
          <span className={styles.artistName}>Álvaro Ruiz</span>
        </div>

        <div className={styles.videoSection}>
          <p className={styles.videoLabel}>🎬 Canción especial en video:</p>
          <a 
            href="https://drive.google.com/file/d/1x3EMLHtAhlGS0Ybr706Ji-ekO_Ml4-6U/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
            ▶️ Ver canción en video
          </a>
        </div>

        <button className={styles.closeButton} onClick={handleClose}>
          Continuar y ver la canción
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
}
