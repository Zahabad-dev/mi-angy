const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Mock database para el demo
// Generar array con todas las 163 fotos
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

const galleryData = {
  photos: generatePhotos(),
  songs: [
    { id: 1, title: 'Mi Fe', artist: 'Adán Jodorowsky', url: '/audio/Adan Jodorowsky -  Mi Fe.mp3', duration: 240 },
    { id: 2, title: 'Andrea', artist: 'Bad Bunny', url: '/audio/Bad Bunny - Andrea.mp3', duration: 210 },
    { id: 3, title: 'Departamento', artist: 'Bandalos Chinos', url: '/audio/Bandalos Chinos - Departamento.mp3', duration: 180 },
    { id: 4, title: 'Inevitable', artist: 'Camilo Séptimo', url: '/audio/Camilo Séptimo - Inevitable.mp3', duration: 200 },
    { id: 5, title: 'Vida En El Espejo', artist: 'Enjambre', url: '/audio/Enjambre - Vida En El Espejo.mp3', duration: 250 }
  ],
  mainVideo: {
    id: 1,
    title: 'MIANGY - Nuestro Video Especial',
    url: '/videos/MIANGY.mp4',
    thumbnail: '/videos/MIANGY.mp4',
    duration: 0
  }
};

// Rutas de API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    message: 'Valentine Gallery API is running'
  });
});

// Obtener todas las fotos
app.get('/api/photos', (req, res) => {
  res.json({
    success: true,
    photos: galleryData.photos
  });
});

// Agregar nueva foto
app.post('/api/photos', (req, res) => {
  const { title, description, url } = req.body;
  
  if (!title || !url) {
    return res.status(400).json({
      success: false,
      message: 'Title and URL are required'
    });
  }

  const newPhoto = {
    id: galleryData.photos.length + 1,
    title,
    description: description || '',
    url
  };

  galleryData.photos.push(newPhoto);

  res.status(201).json({
    success: true,
    photo: newPhoto
  });
});

// Obtener todas las canciones
app.get('/api/songs', (req, res) => {
  res.json({
    success: true,
    songs: galleryData.songs
  });
});

// Agregar nueva canción
app.post('/api/songs', (req, res) => {
  const { title, artist, url, duration } = req.body;

  if (!title || !url) {
    return res.status(400).json({
      success: false,
      message: 'Title and URL are required'
    });
  }

  const newSong = {
    id: galleryData.songs.length + 1,
    title,
    artist: artist || 'Unknown Artist',
    url,
    duration: duration || 0
  };

  galleryData.songs.push(newSong);

  res.status(201).json({
    success: true,
    song: newSong
  });
});

// Obtener video principal
app.get('/api/video', (req, res) => {
  res.json({
    success: true,
    video: galleryData.mainVideo
  });
});

// Actualizar video principal
app.post('/api/video', (req, res) => {
  const { title, url, thumbnail, duration } = req.body;

  if (!url) {
    return res.status(400).json({
      success: false,
      message: 'Video URL is required'
    });
  }

  galleryData.mainVideo = {
    id: 1,
    title: title || 'Nuestro Video Especial',
    url,
    thumbnail: thumbnail || galleryData.mainVideo.thumbnail,
    duration: duration || 0
  };

  res.status(200).json({
    success: true,
    video: galleryData.mainVideo
  });
});

// Eliminar foto
app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  const index = galleryData.photos.findIndex(p => p.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Photo not found'
    });
  }

  const deletedPhoto = galleryData.photos.splice(index, 1);

  res.json({
    success: true,
    message: 'Photo deleted',
    photo: deletedPhoto[0]
  });
});

// Eliminar canción
app.delete('/api/songs/:id', (req, res) => {
  const { id } = req.params;
  const index = galleryData.songs.findIndex(s => s.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Song not found'
    });
  }

  const deletedSong = galleryData.songs.splice(index, 1);

  res.json({
    success: true,
    message: 'Song deleted',
    song: deletedSong[0]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Valentine Gallery API running on http://localhost:${PORT}`);
});
