import { useState, useEffect } from 'react';
import styles from '../styles/WelcomeScreen.module.css';

export default function WelcomeScreen({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
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
        </div>

        <div className={styles.imageMessage}>
          <div className={styles.imageLegend}>
            <span className={styles.legendIcon}>🏠</span>
            <p className={styles.legendText}>
              La imagen la elegí porque es sábado, y recuerdo nuestros fines de semana con todo pasando 
              alrededor nuestro, nada importaba en esa habitación, éramos tú y yo, durmiendo en sábanas 
              blancas con un humo y una dosis de risas más pasión.
            </p>
          </div>
        </div>

        <div className={styles.musicNote}>
          <div className={styles.noteIcon}>🎶</div>
          <p className={styles.songTitle}>La Rumbossa</p>
          <p className={styles.artistName}>Álvaro Ruiz</p>
        </div>

        <button className={styles.closeButton} onClick={handleClose}>
          Continuar y ver la canción
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
}
