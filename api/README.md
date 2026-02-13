# Valentine Gallery API

API de servidor para la galería de San Valentín - Fotos, Música y Videos

## Setup

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3001`

## Endpoints

### Health Check
- `GET /api/health` - Verificar estado del servidor

### Fotos
- `GET /api/photos` - Obtener todas las fotos
- `POST /api/photos` - Crear nueva foto
  ```json
  {
    "title": "Título",
    "description": "Descripción",
    "url": "https://..."
  }
  ```
- `DELETE /api/photos/:id` - Eliminar foto por ID

### Canciones
- `GET /api/songs` - Obtener todas las canciones
- `POST /api/songs` - Crear nueva canción
  ```json
  {
    "title": "Nombre de la canción",
    "artist": "Artista",
    "url": "https://...",
    "duration": 240
  }
  ```
- `DELETE /api/songs/:id` - Eliminar canción por ID

### Video Principal
- `GET /api/video` - Obtener video principal
- `POST /api/video` - Actualizar video principal
  ```json
  {
    "title": "Título del video",
    "url": "https://...",
    "thumbnail": "https://...",
    "duration": 300
  }
  ```

## Ejemplo de Petición

```bash
# Obtener todas las fotos
curl http://localhost:3001/api/photos

# Crear una nueva foto
curl -X POST http://localhost:3001/api/photos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Atardecer romântico",
    "description": "Un hermoso momento juntos",
    "url": "https://example.com/photo.jpg"
  }'

# Obtener canciones
curl http://localhost:3001/api/songs

# Crear una canción
curl -X POST http://localhost:3001/api/songs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Amor Eterno",
    "artist": "Artista Especial",
    "url": "https://example.com/song.mp3",
    "duration": 240
  }'
```

