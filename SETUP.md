# 📋 SETUP & QUICK START

## ✅ Lo que ya está hecho

Tu aplicación está **completamente lista** con:

- ✅ Estructura **Next.js 14 + Node.js/Express**
- ✅ Frontend con **React 18** y CSS modules
- ✅ Backend API con **3 endpoints listos**
- ✅ **Configuración Vercel** optimizada
- ✅ **Git inicializado** con commit inicial
- ✅ Variables de entorno configuradas
- ✅ Build **compilado sin errores**

---

## 🚀 Próximos Pasos

### 1. Crea un Repositorio en GitHub

```bash
# Opción A: Web (recomendado)
# Ve a github.com/new y crea un repositorio llamado 'miangy'

# Opción B: CLI
gh repo create miangy --public
```

### 2. Conecta con tu Repositorio

```bash
cd "d:\PxY\laboratorio2\codigos\miangy"

git remote add origin https://github.com/TU_USUARIO/miangy.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu usuario de GitHub**

### 3. Despliega en Vercel

**Método más fácil:**

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"New Project"**
3. Conecta GitHub y selecciona `miangy`
4. Vercel lo configura automáticamente
5. Haz clic en **"Deploy"**

---

## 🧪 Probar Localmente (Opcional)

Si quieres probar antes de desplegar:

```bash
# Terminal 1: Backend API
cd api
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Luego abre:
- Frontend: http://localhost:3000
- API: http://localhost:3001/api/health

---

## 📁 Estructura del Proyecto

```
miangy/
├── api/                    # Backend Express.js
│   ├── server.js          # Servidor principal
│   ├── package.json
│   └── README.md
├── frontend/               # Frontend Next.js
│   ├── pages/             # Páginas de la app
│   ├── styles/            # Estilos CSS
│   ├── package.json
│   └── next.config.js
├── package.json           # Dependencias comunes
├── vercel.json           # Configuración para Vercel
├── README.md             # Documentación completa
├── DEPLOY.md             # Guía de deploy
└── SETUP.md              # Este archivo
```

---

## 🔧 Dependencias Principales

**Frontend:**
- `next@^14.1.0` - Framework React fullstack
- `react@^18.2.0` - Librería UI
- `axios@^1.6.5` - Cliente HTTP

**Backend:**
- `express@^4.18.2` - Framework Node.js
- `cors@^2.8.5` - CORS middleware
- `dotenv@^16.3.1` - Gestión de variables

---

## 📊 Endpoints API Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check del servidor |
| `GET` | `/api/data` | Obtener datos de ejemplo |
| `POST` | `/api/data` | Crear nuevo item |

---

## 🌐 URLs Después del Deploy

Una vez desplegado en Vercel:

```
Frontend:   https://miangy.vercel.app
API Health: https://api-miangy.vercel.app/api/health
```

(Las URLs exactas las verá Vercel después del deploy)

---

## 💡 Comandos Disponibles

```bash
# Desarrollo (inicia frontend + API)
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start

# Linting
npm run lint
```

---

## 🔐 Variables de Entorno

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### API (`.env`)
```
PORT=3001
NODE_ENV=development
```

---

## 📚 Documentación Adicional

- [DEPLOY.md](./DEPLOY.md) - Guía detallada de despliegue
- [README.md](./README.md) - Documentación completa
- [api/README.md](./api/README.md) - Docs del backend
- [frontend/README.md](./frontend/README.md) - Docs del frontend

---

## 🆘 Necesitas Ayuda?

Si encuentras problemas:

1. **Verifica el build:** `npm run build`
2. **Lee los logs:** Vercel muestra errores detallados
3. **Revisa las variables:** `.env.local` y `.env`
4. **Check CORS:** El frontend debe poder contactar el API

---

## ✨ Características Incluidas

- 🎨 **Diseño moderno** con gradientes y animaciones
- 📱 **Responsive design** - Funciona en móvil y desktop
- 🔗 **Integración API** - El frontend consulta el backend
- 🚀 **Optimizado para Vercel** - Deploy en un click
- 📝 **Documentación completa** - Todo explicado

---

## 🎉 ¡Listo!

Tu aplicación fullstack está lista para producción.

**Próximo paso:** Crea el repositorio en GitHub y despliega en Vercel.

¿Preguntas? Revisa [DEPLOY.md](./DEPLOY.md)
