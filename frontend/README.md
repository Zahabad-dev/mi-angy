# Frontend - Valentine Gallery

Aplicación de galería elegante de San Valentín con Next.js

## Setup

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrirá en `http://localhost:3000`

## Build para producción

```bash
npm run build
npm start
```

## Características

- 🎨 **Diseño Elegante**: Tema de San Valentín con colores suave y gradientes
- 📸 **Galería de Fotos**: Visualiza y gestiona tu álbum de fotos
- 🎵 **Reproductor de Música**: Escucha la banda sonora perfecta
- 🎬 **Video Principal**: Muestra un video destacado
- 💌 **Página de Subida**: Carga fácilmente fotos, canciones y videos
- ♥ **Ilustraciones Sutiles**: Decoraciones SVG y emojis temáticos

## Páginas

- `/` - Galería principal con fotos, música y video
- `/upload` - Página para subir nuevos contenidos

## Estilos

- **Colores Principales**: Rosa (#ec4899), Vino (#db2777), Rosado suave (#fbcfe8)
- **Tipografía**: Segoe UI, Roboto
- **Animaciones**: Flotantes, latidos, transiciones suave

## Variables de entorno

Copia `.env.example` a `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Para producción en Vercel:
```
NEXT_PUBLIC_API_URL=https://tu-api.vercel.app
```

## Componentes Principales

- **Galería de Fotos**: Grid responsivo con efecto hover
- **Reproductor de Música**: Control de canción actual
- **Reproductor de Video**: Video HTML5 con controles
- **Navegación**: Barra de navegación sticky con links activos

## Responsivo

La aplicación es completamente responsiva:
- 📱 Móvil (480px y menos)
- 📱 Tablet (768px)
- 💻 Desktop (1400px)

