# 🎵 Carpeta de Canciones

Aquí colocas tus archivos de audio para la playlist.

## Instrucciones

1. Coloca tus canciones MP3 en esta carpeta
2. Usa esta URL en el formulario de subida:
   ```
   /audio/nombre-de-cancion.mp3
   ```

## Ejemplo

Si colocas un archivo llamado `amor-eterno.mp3`:

**URL a usar en la app:**
```
/audio/amor-eterno.mp3
```

## Formatos recomendados

- ✅ MP3 (mejor compatibilidad)
- ✅ WAV (mejor calidad)
- ✅ OGG (alternativa moderna)

## Tips

- Comprime a 128-192 kbps para web
- Nombres sin espacios (usa guiones)
- Máximo 20MB por canción
- Proporciona duración en segundos

---

**Ejemplo de estructura:**
```
audio/
├── cancion1.mp3
├── amor-eterno.mp3
├── nuestro-tema.mp3
└── banda-sonora.mp3
```

## Cómo obtener la duración

Puedes usar FFmpeg:
```bash
ffmpeg -i tu-cancion.mp3
```

O simplemente abre en tu reproductor y verás los segundos totales.
