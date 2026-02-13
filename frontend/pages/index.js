import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [songs, setSongs] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [photosRes, songsRes, videoRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/photos`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/songs`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/video`)
      ]);

      if (photosRes.data.success) setPhotos(photosRes.data.photos);
      if (songsRes.data.success) setSongs(songsRes.data.songs);
      if (videoRes.data.success) setMainVideo(videoRes.data.video);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setModalImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photos.length]);

  // Decorative hearts
  const decorativeHearts = ['💗', '💕', '💖', '💝', '💓'];

  return (
    <div className={styles.container}>
      <Head>
        <title>Te amo con el alma Angy - Galería de Fotos</title>
        <meta name="description" content="Una colección de momentos especiales" />
      </Head>
      {/* Decorative background elements */}
      <div className={styles.decorBackground}>
        {decorativeHearts.map((heart, i) => (
          <div
            key={i}
            className={styles.heart}
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
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Te amo con el alma Angy</h1>
          </div>
          <p className={styles.subtitle}>Solo tu y yo sabemos nuestra historia COMPAÑERA</p>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>Cargando momentos especiales...</div>
            <div style={{ animation: 'heartbeat 1.5s ease-in-out infinite', fontSize: '3rem' }}>
              💗
            </div>
          </div>
        ) : (
          <>
            {/* Video Section */}
            {mainVideo && (
              <section className={styles.videoSection}>
                <h2 className={styles.videoTitle}>Nuestro Video Especial</h2>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.videoPlayer}
                    controls
                    poster={mainVideo.thumbnail}
                  >
                    <source src={mainVideo.url} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                  </video>
                </div>
              </section>
            )}

            {/* Gallery Carousel Section */}
            <section className={styles.carouselSection}>
              <h2 className={styles.sectionTitle}>Galería de Fotos ({photos.length})</h2>
              {photos.length > 0 ? (
                <div className={styles.carouselContainer}>
                  <button 
                    className={styles.carouselButton + ' ' + styles.prevButton}
                    onClick={prevPhoto}
                    title="Foto anterior (flecha izquierda)"
                  >
                    ❮
                  </button>
                  
                  <div className={styles.carouselSlide}>
                    {photos[currentPhotoIndex] && (
                      <div className={styles.carouselImageWrapper}>
                        <img
                          src={photos[currentPhotoIndex].url}
                          alt={photos[currentPhotoIndex].title}
                          className={styles.carouselImage}
                          onClick={() => setModalImageIndex(currentPhotoIndex)}
                          style={{ cursor: 'pointer' }}
                        />
                        <div className={styles.carouselCaption}>
                          <h3>{photos[currentPhotoIndex].title}</h3>
                          <p>{photos[currentPhotoIndex].description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className={styles.carouselButton + ' ' + styles.nextButton}
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
                <div className={styles.carouselIndicators}>
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
            <section className={styles.musicSection}>
              <h2 className={styles.sectionTitle}>Banda Sonora del Amor</h2>
              {songs.length > 0 ? (
                <div className={styles.playlistContainer}>
                  <div className={styles.songList}>
                    {songs.map((song) => (
                      <div key={song.id} className={styles.songCard}>
                        <button
                          className={`${styles.playButton} ${
                            currentSongId === song.id ? styles.playing : ''
                          }`}
                          onClick={() => setCurrentSongId(currentSongId === song.id ? null : song.id)}
                          title={currentSongId === song.id ? 'Pausar' : 'Reproducir'}
                        >
                          {currentSongId === song.id ? '⏸' : '▶'}
                        </button>
                        <div className={styles.songInfo}>
                          <h3 className={styles.songTitle}>{song.title}</h3>
                          <p className={styles.songArtist}>{song.artist}</p>
                        </div>
                        <span className={styles.songDuration}>
                          {formatDuration(song.duration)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {currentSongId && (
                    <div className={styles.playerContainer}>
                      <div className={styles.playerTitle}>
                        🎵 Ahora reproduciendo: {songs.find(s => s.id === currentSongId)?.title}
                      </div>
                      <audio
                        className={styles.audioPlayer}
                        controls
                        autoPlay
                        src={songs.find(s => s.id === currentSongId)?.url}
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
          className={styles.modal}
          onClick={() => setModalImageIndex(null)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.modalClose}
              onClick={() => setModalImageIndex(null)}
              title="Cerrar (ESC)"
            >
              ✕
            </button>
            <img
              src={photos[modalImageIndex].url}
              alt={photos[modalImageIndex].title}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <h2>{photos[modalImageIndex].title}</h2>
              <p>{photos[modalImageIndex].description}</p>
              <p className={styles.modalCounter}>
                Foto {modalImageIndex + 1} de {photos.length}
              </p>
            </div>
            <div className={styles.modalNavigation}>
              <button 
                className={styles.modalNavButton}
                onClick={() => setModalImageIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                title="Anterior"
              >
                ❮
              </button>
              <button 
                className={styles.modalNavButton}
                onClick={() => setModalImageIndex((prev) => (prev + 1) % photos.length)}
                title="Siguiente"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          ♥ Hecho con amor para los momentos especiales ♥
        </p>
      </footer>
    </div>
  );
}
