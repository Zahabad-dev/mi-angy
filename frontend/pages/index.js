import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import elegantStyles from '../styles/Home.elegant.module.css';

// Datos estáticos embebidos (sin necesidad de API)
const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= 163; i++) {
    photos.push({
      id: i,
      title: `Foto ${i}`,
      url: `/images/foto1%20(${i}).jpg`,
      description: `Momento especial ${i}`
    });
  }
  return photos;
};

const staticPhotos = generatePhotos();
const staticSongs = [
  { id: 1, title: 'Mi Fe', artist: 'Adán Jodorowsky', url: '/audio/Adan Jodorowsky -  Mi Fe.mp3', duration: 240 },
  { id: 2, title: 'Andrea', artist: 'Bad Bunny', url: '/audio/Bad Bunny - Andrea.mp3', duration: 210 },
  { id: 3, title: 'Departamento', artist: 'Bandalos Chinos', url: '/audio/Bandalos Chinos - Departamento.mp3', duration: 180 },
  { id: 4, title: 'Inevitable', artist: 'Camilo Séptimo', url: '/audio/Camilo Séptimo - Inevitable.mp3', duration: 200 },
  { id: 5, title: 'Vida En El Espejo', artist: 'Enjambre', url: '/audio/Enjambre - Vida En El Espejo.mp3', duration: 250 },
  { id: 6, title: 'El Club de la Montaña', artist: 'Bandalos Chinos', url: '/audio/Bandalos chinos - El Club de la Montaña.mp3', duration: 220 }
];
const staticVideo = {
  id: 1,
  title: 'MIANGY - Nuestra historia mi vida',
  url: '/videos/MIANGY.mp4',
  thumbnail: '/videos/MIANGY.mp4',
  duration: 0
};

export default function Home() {
  const [photos] = useState(staticPhotos);
  const [songs] = useState(staticSongs);
  const [mainVideo] = useState(staticVideo);
  const [loading] = useState(false);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [videoPassword, setVideoPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [modalImageLoading, setModalImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isElegant, setIsElegant] = useState(true); // Elegante por defecto
  const loadTimeoutRef = useRef(null);
  const modalLoadTimeoutRef = useRef(null);
  const audioRef = useRef(null);

  // Detectar tema al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsElegant(savedTheme !== 'default'); // Elegante por defecto
    
    const handleStorage = () => {
      const currentTheme = localStorage.getItem('theme');
      setIsElegant(currentTheme !== 'default');
    };
    
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Música de fondo automática - Departamento
  useEffect(() => {
    setCurrentSongId(3);
  }, []);
  
  // Reproducir automáticamente cuando el audio esté listo
  const handleCanPlay = useCallback(() => {
    if (audioRef.current && currentSongId) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentSongId]);

  // Activar audio con cualquier interacción (click, scroll, toque)
  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused && currentSongId) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener('click', tryPlay, { once: true });
    document.addEventListener('scroll', tryPlay, { once: true });
    document.addEventListener('touchstart', tryPlay, { once: true });
    return () => {
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('scroll', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
    };
  }, [currentSongId]);

  // Cargar y reproducir cuando cambia la canción
  useEffect(() => {
    if (audioRef.current && currentSongId) {
      audioRef.current.load();
    }
  }, [currentSongId]);

  // Seleccionar estilos según tema
  const currentStyles = isElegant ? elegantStyles : styles;

  const handleVideoDownload = () => {
    setShowPasswordModal(true);
    setVideoPassword('');
    setPasswordError(false);
    
    // Fade out del audio del reproductor
    const audioElements = document.querySelectorAll('audio.audioPlayer');
    audioElements.forEach(audio => {
      const fadeOutInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.volume = 0;
          clearInterval(fadeOutInterval);
        }
      }, 100);
    });
  };

  const checkPassword = () => {
    if (videoPassword === 'angyteama123') {
      setShowPasswordModal(false);
      setVideoPassword('');
      setPasswordError(false);
      window.open('https://drive.google.com/uc?export=download&id=1vuR9x9wOeNaOCBSwoEpF9cUcm7jsNDDu', '_blank');
      // Fade in del audio del reproductor
      const audioElements = document.querySelectorAll('audio.audioPlayer');
      audioElements.forEach(audio => {
        const fadeInInterval = setInterval(() => {
          if (audio.volume < 0.95) {
            audio.volume = Math.min(1, audio.volume + 0.05);
          } else {
            clearInterval(fadeInInterval);
          }
        }, 100);
      });
    } else {
      setPasswordError(true);
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startLoadTimeout = useCallback(() => {
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    loadTimeoutRef.current = setTimeout(() => {
      setImageLoading(false);
    }, 5000);
  }, []);

  const nextPhoto = useCallback(() => {
    setImageLoading(true);
    setImageError(false);
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    startLoadTimeout();
  }, [photos.length, startLoadTimeout]);

  const prevPhoto = useCallback(() => {
    setImageLoading(true);
    setImageError(false);
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    startLoadTimeout();
  }, [photos.length, startLoadTimeout]);

  const goToPhoto = useCallback((index) => {
    if (index === currentPhotoIndex) return;
    setImageLoading(true);
    setImageError(false);
    setCurrentPhotoIndex(index);
    startLoadTimeout();
  }, [currentPhotoIndex, startLoadTimeout]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
      if (modalLoadTimeoutRef.current) clearTimeout(modalLoadTimeoutRef.current);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setModalImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPhoto, prevPhoto]);

  // Precargar fotos vecinas para navegación instantánea
  useEffect(() => {
    if (photos.length === 0) return;
    const toPreload = [
      (currentPhotoIndex + 1) % photos.length,
      (currentPhotoIndex + 2) % photos.length,
      (currentPhotoIndex - 1 + photos.length) % photos.length,
    ];
    toPreload.forEach((idx) => {
      const img = new window.Image();
      img.src = photos[idx].url;
    });
  }, [currentPhotoIndex, photos]);

  // Decorative hearts
  const decorativeHearts = ['💗', '💕', '💖', '💝', '💓'];

  return (
    <div className={currentStyles.container}>
      <Head>
        <title>Te amo con el alma Angy - Galería de Fotos</title>
        <meta name="description" content="Una colección de momentos especiales" />
      </Head>
      
      {/* Decorative background elements */}
      <div className={currentStyles.decorBackground}>
        {decorativeHearts.map((heart, i) => (
          <div
            key={i}
            className={currentStyles.heart}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {heart}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className={currentStyles.header}>
        <div className={currentStyles.headerContent}>
          <div className={currentStyles.titleContainer}>
            <h1 className={currentStyles.title}>Te amo con el alma Angy</h1>
          </div>
          <p className={currentStyles.subtitle}>Sólo tú y yo sabemos nuestra historia COMPAÑERA</p>
        </div>
      </header>

      {/* Main Content */}
      <div className={currentStyles.mainContent}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>Cargando momentos especiales...</div>
            <div style={{ animation: 'heartbeat 1.5s ease-in-out infinite', fontSize: '3rem' }}>
              💗
            </div>
          </div>
        ) : (
          <>
            {/* Video Download Section */}
            <section className={currentStyles.videoSection}>
              <h2 className={currentStyles.videoTitle}>Nuestra historia mi vida</h2>
              <div className={currentStyles.videoContainer} style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: isElegant ? '#c9a87c' : '#ec4899',
                    animation: 'tapHintPulse 2s ease-in-out infinite',
                    marginBottom: '8px',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}>
                    ✨ Toca para escuchar ✨
                  </div>
                  <div 
                    style={{ 
                      fontSize: '4rem', 
                      animation: 'heartBounce 1.8s ease-in-out infinite',
                      cursor: 'pointer',
                      filter: 'drop-shadow(0 4px 8px rgba(212, 165, 165, 0.4))'
                    }}
                    onClick={() => {
                      if (audioRef.current && audioRef.current.paused) {
                        audioRef.current.play().catch(() => {});
                      }
                    }}
                  >
                    {isElegant ? '🤎' : '🎬'}
                  </div>
                </div>
                <p style={{ color: '#9b7a87', marginBottom: '25px', fontSize: '1.1rem' }}>
                  Esto somos nosotros mi vida
                </p>
                <button
                  onClick={handleVideoDownload}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #ec4899, #db2777)',
                    color: 'white',
                    padding: '15px 40px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.6)'; }}
                  onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)'; }}
                >
                  💝 Descargar Video
                </button>
              </div>
            </section>

            {/* Gallery Carousel Section */}
            <section className={currentStyles.carouselSection}>
              <h2 className={currentStyles.sectionTitle}>Galería de Fotos ({photos.length})</h2>
              {photos.length > 0 ? (
                <div className={currentStyles.carouselContainer}>
                  <button 
                    className={currentStyles.carouselButton + ' ' + styles.prevButton}
                    onClick={prevPhoto}
                    title="Foto anterior (flecha izquierda)"
                  >
                    ❮
                  </button>
                  
                  <div className={currentStyles.carouselSlide}>
                    {photos[currentPhotoIndex] && (
                      <div className={currentStyles.carouselImageWrapper}>
                        {imageLoading && (
                          <div className={currentStyles.imageLoader}>
                            <div className={currentStyles.loaderBubble}>
                              <span className={currentStyles.loaderHeart}>💗</span>
                              <p className={currentStyles.loaderText}>Cargando foto...</p>
                            </div>
                          </div>
                        )}
                        {imageError ? (
                          <div className={currentStyles.imageErrorFallback}>
                            <span style={{ fontSize: '3rem' }}>📷</span>
                            <p>No se pudo cargar la foto</p>
                            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Foto {currentPhotoIndex + 1}</p>
                          </div>
                        ) : (
                          <>
                            <img
                              key={currentPhotoIndex}
                              src={photos[currentPhotoIndex].url}
                              alt={photos[currentPhotoIndex].title}
                              className={currentStyles.carouselImage}
                              onClick={() => { setModalImageLoading(true); setModalImageIndex(currentPhotoIndex); }}
                              style={{ cursor: 'pointer', opacity: imageLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
                              onLoad={() => { if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current); setImageLoading(false); }}
                              onError={() => { if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current); setImageLoading(false); setImageError(true); }}
                            />
                            {!imageLoading && (
                              <div
                                className={currentStyles.clickHint}
                                onClick={() => { setModalImageLoading(true); setModalImageIndex(currentPhotoIndex); }}
                              >
                                <span className={currentStyles.clickHintIcon}>🔍</span>
                                <span>Toca para ver completa</span>
                              </div>
                            )}
                          </>
                        )}
                        <div className={currentStyles.carouselCaption}>
                          <h3>{photos[currentPhotoIndex].title}</h3>
                          <p>{photos[currentPhotoIndex].description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className={currentStyles.carouselButton + ' ' + styles.nextButton}
                    onClick={nextPhoto}
                    title="Próxima foto (flecha derecha)"
                  >
                    ❯
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#9b7a87' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📷</div>
                  <p>No hay fotos aún. ¡Pronto tendremos momentos para compartir!</p>
                </div>
              )}
              
              {/* Carousel indicators */}
              {photos.length > 0 && (
                <div className={currentStyles.carouselIndicators}>
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentPhotoIndex ? styles.activeIndicator : ''}`}
                      onClick={() => goToPhoto(index)}
                      title={`Ir a foto ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Music Section */}
            <section className={currentStyles.musicSection}>
              <h2 className={currentStyles.sectionTitle}>Nuestra Selección mi flaquita</h2>
              {songs.length > 0 ? (
                <div className={currentStyles.playlistContainer}>
                  <div className={currentStyles.songList}>
                    {songs.map((song) => (
                      <div key={song.id} className={currentStyles.songCard}>
                        <button
                          className={`${styles.playButton} ${
                            currentSongId === song.id ? styles.playing : ''
                          }`}
                          onClick={() => setCurrentSongId(currentSongId === song.id ? null : song.id)}
                          title={currentSongId === song.id ? 'Pausar' : 'Reproducir'}
                        >
                          {currentSongId === song.id ? '⏸' : '▶'}
                        </button>
                        <div className={currentStyles.songInfo}>
                          <h3 className={currentStyles.songTitle}>{song.title}</h3>
                          <p className={currentStyles.songArtist}>{song.artist}</p>
                        </div>
                        <span className={currentStyles.songDuration}>
                          {formatDuration(song.duration)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {currentSongId && (
                    <div className={currentStyles.playerContainer}>
                      <div className={currentStyles.playerTitle}>
                        🎵 Ahora reproduciendo: {songs.find(s => s.id === currentSongId)?.title}
                      </div>
                      <audio
                        ref={audioRef}
                        className={`${currentStyles.audioPlayer} audioPlayer`}
                        controls
                        src={songs.find(s => s.id === currentSongId)?.url}
                        onCanPlay={handleCanPlay}
                        onEnded={() => setCurrentSongId(null)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#9b7a87' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎵</div>
                  <p>No hay canciones aún. ¡Pronto tendremos la banda sonora perfecta!</p>
                </div>
              )}
            </section>
          </>
        )}
      </div>

      {/* Modal for viewing image in fullscreen */}
      {modalImageIndex !== null && photos[modalImageIndex] && (
        <div 
          className={currentStyles.modal}
          onClick={() => setModalImageIndex(null)}
        >
          <div className={currentStyles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={currentStyles.modalClose}
              onClick={() => setModalImageIndex(null)}
              title="Cerrar (ESC)"
            >
              ✕
            </button>
            <div style={{ position: 'relative', minHeight: '200px' }}>
              {modalImageLoading && (
                <div className={currentStyles.imageLoader}>
                  <div className={currentStyles.loaderBubble}>
                    <span className={currentStyles.loaderHeart}>💗</span>
                    <p className={currentStyles.loaderText}>Cargando...</p>
                  </div>
                </div>
              )}
              <img
                key={modalImageIndex}
                src={photos[modalImageIndex].url}
                alt={photos[modalImageIndex].title}
                className={currentStyles.modalImage}
                style={{ opacity: modalImageLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
                onLoad={() => { if (modalLoadTimeoutRef.current) clearTimeout(modalLoadTimeoutRef.current); setModalImageLoading(false); }}
                onError={() => { if (modalLoadTimeoutRef.current) clearTimeout(modalLoadTimeoutRef.current); setModalImageLoading(false); }}
              />
            </div>
            <div className={currentStyles.modalInfo}>
              <h2>{photos[modalImageIndex].title}</h2>
              <p>{photos[modalImageIndex].description}</p>
              <p className={currentStyles.modalCounter}>
                Foto {modalImageIndex + 1} de {photos.length}
              </p>
            </div>
            <div className={currentStyles.modalNavigation}>
              <button 
                className={currentStyles.modalNavButton}
                onClick={() => {
                  setModalImageLoading(true);
                  setModalImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
                  if (modalLoadTimeoutRef.current) clearTimeout(modalLoadTimeoutRef.current);
                  modalLoadTimeoutRef.current = setTimeout(() => setModalImageLoading(false), 5000);
                }}
                title="Anterior"
              >
                ❮
              </button>
              <button 
                className={currentStyles.modalNavButton}
                onClick={() => {
                  setModalImageLoading(true);
                  setModalImageIndex((prev) => (prev + 1) % photos.length);
                  if (modalLoadTimeoutRef.current) clearTimeout(modalLoadTimeoutRef.current);
                  modalLoadTimeoutRef.current = setTimeout(() => setModalImageLoading(false), 5000);
                }}
                title="Siguiente"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal for Video */}
      {showPasswordModal && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 10000
          }}
          onClick={() => {
            setShowPasswordModal(false);
            // Fade in del audio al cancelar
            const audioElements = document.querySelectorAll('audio.audioPlayer');
            audioElements.forEach(audio => {
              const fadeInInterval = setInterval(() => {
                if (audio.volume < 0.95) {
                  audio.volume = Math.min(1, audio.volume + 0.05);
                } else {
                  clearInterval(fadeInInterval);
                }
              }, 100);
            });
          }}
        >
          <div 
            style={{
              background: 'linear-gradient(135deg, #fff5f7, #ffe0e6)',
              borderRadius: '20px', padding: '40px', maxWidth: '400px', width: '90%',
              textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowPasswordModal(false);
                // Fade in del audio al cerrar con X
                const audioElements = document.querySelectorAll('audio.audioPlayer');
                audioElements.forEach(audio => {
                  const fadeInInterval = setInterval(() => {
                    if (audio.volume < 0.95) {
                      audio.volume = Math.min(1, audio.volume + 0.05);
                    } else {
                      clearInterval(fadeInInterval);
                    }
                  }, 100);
                });
              }}
              style={{
                position: 'absolute', top: '10px', right: '15px',
                background: 'none', border: 'none', fontSize: '1.5rem',
                cursor: 'pointer', color: '#9b7a87'
              }}
            >✕</button>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
            <h3 style={{ color: '#db2777', marginBottom: '10px', fontSize: '1.3rem' }}>
              Video Privado
            </h3>
            <p style={{ color: '#9b7a87', marginBottom: '20px', fontSize: '0.95rem' }}>
              Ingresa la contraseña para descargar
            </p>
            <input
              type="password"
              value={videoPassword}
              onChange={(e) => { setVideoPassword(e.target.value); setPasswordError(false); }}
              onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
              placeholder="Contraseña..."
              style={{
                width: '100%', padding: '12px 15px', borderRadius: '12px',
                border: passwordError ? '2px solid #ef4444' : '2px solid #fbcfe8',
                fontSize: '1rem', outline: 'none', textAlign: 'center',
                boxSizing: 'border-box', marginBottom: '8px'
              }}
              autoFocus
            />
            {passwordError && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '10px' }}>
                Contraseña incorrecta 💔
              </p>
            )}
            <button
              onClick={checkPassword}
              style={{
                marginTop: '10px', width: '100%', padding: '12px',
                background: 'linear-gradient(135deg, #ec4899, #db2777)',
                color: 'white', border: 'none', borderRadius: '12px',
                fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
              }}
            >
              💝 Descargar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={currentStyles.footer}>
        <p className={currentStyles.footerText}>
          ♥ Durante este tiempo me lo pregunté, si era obsesión, si era ganar o si era controlar, pero nada de eso mi amor, esto en realidad fue AMOR, y el más verdadero, porque no hay nada más real que sentir tu piel, que estar contigo abrazados en una tarde, que vivir un amor sin aburrirme nunca, eres mi realidad ♥
        </p>
      </footer>
    </div>
  );
}


