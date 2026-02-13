# 📁 Cómo Agregar Tus Archivos

Tu aplicación tiene 3 carpetas para tus archivos multimedia:

## 📂 Estructura

```
frontend/
└── public/
    ├── images/      ← 📸 Fotos (JPG, PNG)
    ├── audio/       ← 🎵 Canciones (MP3)
    └── videos/      ← 🎬 Videos (MP4)
```

## 🚀 Pasos para Agregar Archivos

### 1. Coloca tus archivos

**En Windows:**
```
Abre la carpeta: d:\PxY\laboratorio2\codigos\miangy\frontend\public\

Dentro encontrarás:
├── images/     ← Coloca aquí tus fotos
├── audio/      ← Coloca aquí tus canciones
└── videos/     ← Coloca aquí tus videos
```

### 2. Usa las URLs en la app

Cuando abras la app en http://localhost:3000/upload

**Ejemplo 1: Subir una foto**
```
Nombre: Atardecer romántico
URL de la imagen: /images/atardecer.jpg
Descripción: Un hermoso momento juntos
```

**Ejemplo 2: Subir una canción**
```
Título: Amor Eterno
Artista: Mi Artista Favorito
URL de la canción: /audio/amor-eterno.mp3
Duración: 240 (segundos)
```

**Ejemplo 3: Subir un video**
```
Título: Nuestro Video Especial
URL del video: /videos/nuestro-video.mp4
```

## 📝 Nombres de Archivos

✅ **Correcto:**
```
foto-1.jpg
cancion-amor.mp3
video-especial.mp4
```

❌ **Incorrecto:**
```
foto 1.jpg      (espacios)
cancion%20amor  (caracteres especiales)
vídeo-especial  (acentos)
```

## 💾 Requisitos de Tamaño

| Tipo | Máximo | Recomendado |
|------|--------|------------|
| 📸 Fotos | 10MB | 2-5MB |
| 🎵 Canciones | 20MB | 5-10MB |
| 🎬 Videos | 500MB (local) | 30-100MB |

## 🖼️ Formatos Soportados

### Imágenes
- JPG (recomendado)
- PNG
- WebP (moderno)
- GIF

### Audio
- MP3 (recomendado)
- WAV
- OGG
- M4A

### Video
- MP4 (recomendado)
- WebM
- OGV

## 🎯 Ejemplo Paso a Paso

1. **Descarga una foto** (o toma una)

2. **Cópiala a:**
   ```
   d:\PxY\laboratorio2\codigos\miangy\frontend\public\images\
   ```
   Ejemplo: `d:\...\images\mi-foto.jpg`

3. **Abre la app:**
   ```
   npm run dev
   http://localhost:3000
   ```

4. **Ve a "Subir"**

5. **Llena el formulario:**
   ```
   Título: Mi foto especial
   URL: /images/mi-foto.jpg
   Descripción: Una foto bonita
   ```

6. **¡Listo!** Tu foto aparecerá en la galería

## 🔍 Verificar Archivos

Para confirmar que los archivos están en el lugar correcto:

**Windows Explorer:**
1. Abre: `d:\PxY\laboratorio2\codigos\miangy\frontend\public`
2. Deberías ver 3 carpetas: `images`, `audio`, `videos`
3. Coloca tus archivos ahí

## ⚠️ Problemas Comunes

### "Foto no carga"
- ✅ Verifica que el archivo está en `public/images/`
- ✅ Usa la URL correcta: `/images/nombre.jpg`
- ✅ No uses rutas como `C:\...`

### "Canción no suena"
- ✅ El archivo debe ser MP3
- ✅ Debe estar en `public/audio/`
- ✅ URL correcta: `/audio/nombre.mp3`

### "Video no reproduce"
- ✅ El archivo debe ser MP4
- ✅ Debe estar en `public/videos/`
- ✅ URL correcta: `/videos/nombre.mp4`

## 📊 Estructura Final Esperada

```
frontend/public/
├── images/
│   ├── README.md
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── atardecer.png
├── audio/
│   ├── README.md
│   ├── cancion1.mp3
│   ├── cancion2.mp3
│   └── amor-eterno.mp3
├── videos/
│   ├── README.md
│   └── nuestro-video.mp4
└── favicon.ico
```

## 🎉 ¡Listo!

Solo coloca tus archivos en las carpetas correctas y usa las URLs `/images/`, `/audio/`, `/videos/` en la app.

**¿Necesitas ayuda?** Lee los README en cada carpeta.
