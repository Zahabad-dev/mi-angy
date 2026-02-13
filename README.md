# � Valentine Gallery - Galería de Momentos Especiales

Aplicación fullstack elegante y romántica para compartir fotos, música y videos especiales de San Valentín. Construida con **Next.js 14**, **React 18** y **Express.js**, lista para desplegar en **Vercel**.

## ✨ Características Principales

- 📸 **Galería de Fotos**: Visualiza y organiza tus fotos especiales
- 🎵 **Reproductor de Música**: Escucha la banda sonora del amor
- 🎬 **Video Principal**: Destaca un video especial
- 💌 **Diseño Elegante**: Tema de San Valentín con colores suaves y sutiles
- ♥ **Ilustraciones**: Decoraciones SVG y emojis temáticos
- 📱 **Totalmente Responsivo**: Funciona perfecto en móvil, tablet y desktop
- 🚀 **Listo para Producción**: Optimizado para Vercel

## 🎨 Diseño Visual

- **Paleta de Colores**: Rosa (#ec4899), Vino (#db2777), Rosado Suave (#fbcfe8)
- **Tipografía**: Segoe UI, Roboto - Elegante y legible
- **Animaciones**: Flotantes suaves, latidos de corazón, transiciones fluidas
- **Decoraciones**: Corazones flotantes, símbolos románticos

## 📋 Estructura del Proyecto

```
miangy/
├── api/                    # Backend Express.js
│   ├── server.js          # Servidor API
│   ├── package.json
│   └── README.md
├── frontend/               # Frontend Next.js
│   ├── pages/
│   │   ├── index.js       # Galería principal
│   │   ├── upload.js      # Página de subida
│   │   ├── _app.js        # App wrapper con navegación
│   │   └── _document.js
│   ├── styles/
│   │   ├── globals.css    # Estilos globales (San Valentín)
│   │   ├── Home.module.css
│   │   ├── Upload.module.css
│   │   └── Nav.module.css
│   ├── public/            # Archivos estáticos
│   ├── next.config.js
│   └── package.json
├── package.json           # Dependencias root
├── vercel.json           # Config Vercel
├── .gitignore
└── README.md
```

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React fullstack
- **React 18** - Librería UI
- **Axios** - Cliente HTTP
- **CSS Modules** - Estilos locales

### Backend
- **Express.js 4.18** - Framework Node.js
- **CORS 2.8** - Compartir recursos entre dominios
- **dotenv** - Gestión de variables de entorno

## 🚀 Quick Start

### 1. Instalación Local

```bash
# Instalar dependencias del proyecto
npm install

# Instalar frontend
cd frontend && npm install && cd ..

# Instalar backend
cd api && npm install && cd ..
```

### 2. Variables de Entorno

```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# API
cp api/.env.example api/.env
```

### 3. Ejecutar en Desarrollo

```bash
# Inicia frontend (3000) + API (3001) en paralelo
npm run dev
```

Accede a:
- Frontend: http://localhost:3000
- API: http://localhost:3001/api/health

### 4. Build para Producción

```bash
npm run build
npm start
```

## 📸 Páginas Disponibles

### / (Galería Principal)
- Visualización de video principal
- Galería de fotos en grid responsivo
- Reproductor de música con playlist
- Navegación elegante

### /upload (Subida de Contenido)
- Formulario para subir fotos
- Formulario para agregar canciones
- Formulario para actualizar video principal
- Validación de campos

## 🔗 API Endpoints

### Fotos
```
GET    /api/photos              # Obtener todas las fotos
POST   /api/photos              # Crear nueva foto
DELETE /api/photos/:id          # Eliminar foto
```

### Canciones
```
GET    /api/songs               # Obtener todas las canciones
POST   /api/songs               # Crear nueva canción
DELETE /api/songs/:id           # Eliminar canción
```

### Video
```
GET    /api/video               # Obtener video principal
POST   /api/video               # Actualizar video principal
```

### Health Check
```
GET    /api/health              # Estado del servidor
```

## 🌐 Desplegar en Vercel

### Paso 1: GitHub

```bash
git init
git add .
git commit -m "Initial commit: Valentine Gallery"
git remote add origin https://github.com/TU_USUARIO/miangy.git
git push -u origin main
```

### Paso 2: Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"New Project"**
3. Conecta tu repositorio GitHub `miangy`
4. Vercel detecta automáticamente Next.js
5. Configura variables de entorno si es necesario
6. Haz clic en **"Deploy"**

### Paso 3: Variables de Entorno Vercel

En **Settings > Environment Variables**:

```
NEXT_PUBLIC_API_URL = https://tu-api.vercel.app
```

## 📝 Formato de Datos

### Foto
```json
{
  "id": 1,
  "title": "Título de la foto",
  "description": "Descripción",
  "url": "https://example.com/photo.jpg"
}
```

### Canción
```json
{
  "id": 1,
  "title": "Nombre de la canción",
  "artist": "Artista",
  "url": "https://example.com/song.mp3",
  "duration": 240
}
```

### Video
```json
{
  "id": 1,
  "title": "Título del video",
  "url": "https://example.com/video.mp4",
  "thumbnail": "https://example.com/thumb.jpg",
  "duration": 300
}
```

## 🎯 Características Futuras

- [ ] Autenticación de usuarios
- [ ] Panel de administrador
- [ ] Galería privada con contraseña
- [ ] Comentarios en fotos
- [ ] Compartir en redes sociales
- [ ] Temas personalizables
- [ ] Base de datos persistente

## 🧪 Testing

```bash
# Build para verificar errores
npm run build

# Lint
npm run lint
```

## 📚 Documentación Adicional

- [SETUP.md](./SETUP.md) - Instrucciones de configuración
- [DEPLOY.md](./DEPLOY.md) - Guía completa de despliegue
- [api/README.md](./api/README.md) - Documentación del API
- [frontend/README.md](./frontend/README.md) - Documentación del frontend

## 🐛 Solucionar Problemas

### "Cannot GET /upload"
- Asegúrate de que estés en el directorio correcto
- Reinicia el servidor: `npm run dev`

### CORS Errors
- Verifica `NEXT_PUBLIC_API_URL` en `.env.local`
- Asegúrate de que el API esté corriendo

### Fotos no cargan
- Usa URLs directas a imágenes (no páginas HTML)
- Verifica que las URLs sean accesibles públicamente

## 📄 Licencia

MIT

## 👤 Autor

Creado con ❤️ para momentos especiales

---

**Última actualización:** Febrero 2026

¿Preguntas? Revisa los archivos de documentación o el README en cada carpeta.
