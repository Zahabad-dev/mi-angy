import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Upload.module.css';

export default function Upload() {
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoDesc, setPhotoDesc] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [songDuration, setSongDuration] = useState('');
  const [uploadingSong, setUploadingSong] = useState(false);

  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadingVideo, setUploadingVideo] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!photoTitle || !photoUrl) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      setUploadingPhoto(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/photos`,
        {
          title: photoTitle,
          description: photoDesc,
          url: photoUrl
        }
      );

      if (response.data.success) {
        setSuccessMessage('¡Foto subida exitosamente!');
        setPhotoTitle('');
        setPhotoDesc('');
        setPhotoUrl('');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err) {
      alert('Error al subir la foto: ' + err.message);
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSongUpload = async (e) => {
    e.preventDefault();
    if (!songTitle || !songUrl) {
      alert('Por favor completa los campos requeridos');
      return;
    }

    try {
      setUploadingSong(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/songs`,
        {
          title: songTitle,
          artist: songArtist,
          url: songUrl,
          duration: parseInt(songDuration) || 0
        }
      );

      if (response.data.success) {
        setSuccessMessage('¡Canción subida exitosamente!');
        setSongTitle('');
        setSongArtist('');
        setSongUrl('');
        setSongDuration('');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err) {
      alert('Error al subir la canción: ' + err.message);
    } finally {
      setUploadingSong(false);
    }
  };

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    if (!videoUrl) {
      alert('Por favor ingresa la URL del video');
      return;
    }

    try {
      setUploadingVideo(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/video`,
        {
          title: videoTitle || 'Nuestro Video Especial',
          url: videoUrl
        }
      );

      if (response.data.success) {
        setSuccessMessage('¡Video actualizado exitosamente!');
        setVideoTitle('');
        setVideoUrl('');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err) {
      alert('Error al subir el video: ' + err.message);
    } finally {
      setUploadingVideo(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>📤 Sube tus Momentos</h1>
        <p className={styles.subtitle}>Comparte fotos, música y videos especiales</p>
      </header>

      {successMessage && (
        <div className={styles.successMessage}>
          {successMessage}
        </div>
      )}

      <main className={styles.mainContent}>
        {/* Photo Upload */}
        <section className={styles.uploadSection}>
          <h2 className={styles.sectionTitle}>📸 Subir Foto</h2>
          <form onSubmit={handlePhotoUpload} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="photoTitle">Título de la Foto *</label>
              <input
                type="text"
                id="photoTitle"
                value={photoTitle}
                onChange={(e) => setPhotoTitle(e.target.value)}
                placeholder="Ej: Nuestro primer encuentro"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="photoDesc">Descripción</label>
              <textarea
                id="photoDesc"
                value={photoDesc}
                onChange={(e) => setPhotoDesc(e.target.value)}
                placeholder="Cuéntanos sobre este momento especial"
                rows="3"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="photoUrl">URL de la Imagen *</label>
              <input
                type="url"
                id="photoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <button
              type="submit"
              disabled={uploadingPhoto}
              className={styles.submitBtn}
            >
              {uploadingPhoto ? 'Subiendo...' : 'Subir Foto'}
            </button>
          </form>
        </section>

        {/* Song Upload */}
        <section className={styles.uploadSection}>
          <h2 className={styles.sectionTitle}>🎵 Subir Canción</h2>
          <form onSubmit={handleSongUpload} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="songTitle">Título de la Canción *</label>
              <input
                type="text"
                id="songTitle"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                placeholder="Ej: Nuestro Tema"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="songArtist">Artista</label>
              <input
                type="text"
                id="songArtist"
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
                placeholder="Nombre del artista"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="songUrl">URL de la Canción (MP3) *</label>
              <input
                type="url"
                id="songUrl"
                value={songUrl}
                onChange={(e) => setSongUrl(e.target.value)}
                placeholder="https://example.com/song.mp3"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="songDuration">Duración (segundos)</label>
              <input
                type="number"
                id="songDuration"
                value={songDuration}
                onChange={(e) => setSongDuration(e.target.value)}
                placeholder="240"
              />
            </div>

            <button
              type="submit"
              disabled={uploadingSong}
              className={styles.submitBtn}
            >
              {uploadingSong ? 'Subiendo...' : 'Subir Canción'}
            </button>
          </form>
        </section>

        {/* Video Upload */}
        <section className={styles.uploadSection}>
          <h2 className={styles.sectionTitle}>🎬 Subir Video Principal</h2>
          <form onSubmit={handleVideoUpload} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="videoTitle">Título del Video</label>
              <input
                type="text"
                id="videoTitle"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                placeholder="Ej: Nuestro Video Especial"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="videoUrl">URL del Video *</label>
              <input
                type="url"
                id="videoUrl"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://example.com/video.mp4"
              />
            </div>

            <button
              type="submit"
              disabled={uploadingVideo}
              className={styles.submitBtn}
            >
              {uploadingVideo ? 'Subiendo...' : 'Subir Video'}
            </button>
          </form>
        </section>

        {/* Info Box */}
        <section className={styles.infoSection}>
          <h3>💡 Consejos para subir contenido</h3>
          <ul>
            <li>Usa URLs directas a los archivos (imágenes, audios, videos)</li>
            <li>Los formatos recomendados son: JPG, PNG para fotos; MP3 para música; MP4 para videos</li>
            <li>Asegúrate de que los archivos sean accesibles públicamente</li>
            <li>Los títulos y descripciones hacen especial cada momento</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
