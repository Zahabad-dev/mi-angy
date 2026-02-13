# 💌 ¡Bienvenido a Valentine Gallery!

Tu aplicación de galería elegante de San Valentín está **lista para usar**.

## ✨ Qué Encontrarás

### 🎨 Diseño Elegante
- **Tema San Valentín** con colores suave: rosa, vino y rosado pastel
- **Animaciones fluidas**: Corazones flotantes, latidos, transiciones suave
- **Tipografía elegante**: Fuentes modernas y legibles
- **Ilustraciones sutiles**: Emojis temáticos y decoraciones SVG

### 📸 Galería de Fotos
- Visualiza tus fotos en un hermoso grid responsivo
- Cada foto tiene título y descripción
- Efecto hover elegante
- Perfecto para memorias especiales

### 🎵 Reproductor de Música
- **Playlist personalizable** con canciones
- Control individual de cada canción
- Reproductor integrado con controles
- Visualización de duración
- Información de artista

### 🎬 Video Principal
- Destaca un video especial en la galería
- Reproductor HTML5 con todos los controles
- Soporte para múltiples formatos

### 📤 Panel de Subida
- Sube fotos fácilmente con URL
- Agrega canciones a tu playlist
- Actualiza el video principal
- Formularios intuitivos y validados

## 🚀 Cómo Empezar

### 1. Ejecuta el Servidor de Desarrollo

Desde la carpeta raíz:
```bash
npm run dev
```

Esto inicia:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

### 2. Explora la Aplicación

**En casa / Galería:**
- Visualiza el video principal (si está subido)
- Mira la galería de fotos
- Escucha la banda sonora

**En /upload:**
- Sube una foto nueva (necesitas URL)
- Agrega una canción (necesitas URL MP3)
- Actualiza el video principal (necesitas URL MP4)

### 3. URLs para Probar

Para probar, puedes usar URLs de ejemplo:

**Fotos:**
```
https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80
```

**Canciones:**
```
https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
```

**Videos:**
```
https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4
```

## 📁 Estructura de Archivos Importantes

```
miangy/
├── frontend/
│   ├── pages/
│   │   ├── index.js          👈 Galería principal
│   │   └── upload.js         👈 Panel de subida
│   └── styles/
│       ├── globals.css       👈 Estilos globales (San Valentín)
│       ├── Home.module.css   👈 Estilos galería
│       ├── Upload.module.css 👈 Estilos formularios
│       └── Nav.module.css    👈 Estilos navegación
└── api/
    └── server.js             👈 API con endpoints
```

## 🎯 API Endpoints

Desde JavaScript:
```javascript
// Obtener fotos
GET /api/photos

// Crear foto
POST /api/photos
{ title, description, url }

// Obtener canciones
GET /api/songs

// Crear canción
POST /api/songs
{ title, artist, url, duration }

// Obtener video
GET /api/video

// Actualizar video
POST /api/video
{ title, url, thumbnail, duration }
```

## 🎨 Personalización

### Cambiar Colores
Edita `frontend/styles/globals.css`:
```css
background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f8bbd0 100%);
color: #6b4c5a;
```

### Cambiar Fuentes
En `globals.css`:
```css
font-family: 'Tu Fuente', sans-serif;
```

### Agregar Más Emojis
En `pages/index.js`, modifica:
```javascript
const decorativeHearts = ['💗', '💕', '💖', '💝', '💓'];
```

## 📦 Dependencias

### Frontend
- next@14.1.0
- react@18.2.0
- axios@1.6.5

### Backend
- express@4.18.2
- cors@2.8.5
- dotenv@16.3.1

## 🌐 Desplegar en Vercel

Cuando estés listo:

1. **Crea un repo en GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/miangy.git
   git push -u origin main
   ```

2. **Abre vercel.com:**
   - Conecta GitHub
   - Selecciona `miangy`
   - Deploy automático

3. **Configura variables:**
   - `NEXT_PUBLIC_API_URL` = Tu URL API

¡Listo! Tu galería estará en vivo.

## 🆘 Solucionar Problemas

### "Cannot GET /upload"
```bash
npm run dev
```

### Fotos no cargan
- Verifica que la URL sea directa a la imagen
- No debe ser una página HTML

### Música no suena
- URL debe ser directa a MP3
- Verifica permisos CORS

### Errores en consola
- Abre DevTools (F12)
- Mira la pestaña Console
- Asegúrate de que API esté corriendo

## 📚 Documentación

- [README.md](./README.md) - Documentación completa
- [DEPLOY.md](./DEPLOY.md) - Guía de despliegue
- [SETUP.md](./SETUP.md) - Instrucciones de configuración

## 💡 Tips

1. **Usa URLs HTTPS** para mejor compatibilidad
2. **Comprime imágenes** para cargar más rápido
3. **Prueba URLs** antes de guardar
4. **Haz backups** de tus datos
5. **Personaliza los estilos** según tu gusto

## 🎉 ¡Listo!

Tu aplicación está completamente funcional. Solo necesitas:

✅ Fotos con URLs  
✅ Canciones en MP3  
✅ Video en MP4  
✅ ¡Amor y creatividad!

¿Preguntas? Revisa los archivos README en cada carpeta.

---

**Made with ❤️ for Special Moments**
