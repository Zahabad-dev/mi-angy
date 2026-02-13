# 🚀 Guía de Despliegue en GitHub y Vercel

## 1️⃣ Crear Repositorio en GitHub

### Opción A: Desde GitHub web (recomendado)

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `miangy`
3. Descripción: `Next.js + Node.js fullstack application`
4. Selecciona **Private** o **Public**
5. Haz clic en **Create repository**

### Opción B: Usar GitHub CLI

```bash
gh repo create miangy --public
```

---

## 2️⃣ Conectar con tu Repositorio Local

Una vez creado el repositorio en GitHub:

```bash
# Desde la carpeta raíz del proyecto
git remote add origin https://github.com/TU_USUARIO/miangy.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu usuario de GitHub.**

---

## 3️⃣ Desplegar en Vercel

### Opción A: Panel Web de Vercel (más fácil)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"New Project"**
3. Selecciona **"Import Git Repository"**
4. Conecta tu cuenta de GitHub si aún no está conectada
5. Busca y selecciona el repositorio `miangy`
6. Vercel detectará automáticamente:
   - Framework: Next.js
   - Root Directory: `frontend/`
7. Configura las **variables de entorno:**
   ```
   NEXT_PUBLIC_API_URL = https://tu-api-backend.vercel.app
   ```
   (Después de desplegar el API backend)
8. Haz clic en **"Deploy"**

### Opción B: CLI de Vercel

```bash
npm i -g vercel
vercel
```

Sigue el asistente interactivo.

---

## 4️⃣ Desplegar el API Backend

El API también necesita ser desplegado. Tienes dos opciones:

### Opción A: Desplegar en el mismo Vercel

1. Crea un nuevo proyecto en Vercel para el API:
   - Root Directory: `api/`
   - No necesita variables especiales

2. Obtén la URL del API (ej: `https://api-miangy.vercel.app`)

### Opción B: Desplegar en otra plataforma

- [Railway.app](https://railway.app)
- [Render.com](https://render.com)
- [Heroku](https://heroku.com)

---

## 5️⃣ Configurar Variables de Entorno en Vercel

En el panel de Vercel, ve a **Project Settings > Environment Variables**:

### Frontend
```
NEXT_PUBLIC_API_URL = https://tu-api.vercel.app
```

### API (si está en Vercel)
```
NODE_ENV = production
PORT = 3001
```

---

## 6️⃣ Deploy Automático

Cada vez que hagas `git push` a `main`:

1. GitHub recibe los cambios
2. Vercel detecta automáticamente el push
3. Vercel compila y deploya automáticamente
4. Tu app está actualizada en segundos

---

## ✅ Verificar Despliegue

Una vez desplegado:

1. **Frontend:** `https://tu-proyecto.vercel.app`
2. **API:** `https://api-tu-proyecto.vercel.app/api/health`

Visita el health check del API para confirmar que funciona:

```bash
curl https://api-tu-proyecto.vercel.app/api/health
```

Debería responder:
```json
{
  "status": "OK",
  "timestamp": "2026-02-13T...",
  "message": "API is running"
}
```

---

## 🔄 Actualizar después del Despliegue

Solo necesitas hacer push a GitHub:

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Vercel se encargará del resto automáticamente.

---

## 🆘 Troubleshooting

### El deploy falla

1. Verifica los logs en Vercel (Project > Deployments > Failed)
2. Asegúrate de que `package.json` tenga los scripts correctos
3. Verifica las variables de entorno

### CORS errors

Asegúrate de que:
- `NEXT_PUBLIC_API_URL` esté correctamente configurada
- El API tiene CORS habilitado

### Frontend no encuentra el API

```javascript
// Verifica en frontend/.env.local
NEXT_PUBLIC_API_URL=https://tu-api.vercel.app
```

---

## 📚 Links Útiles

- [Documentación Vercel](https://vercel.com/docs)
- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Express.js](https://expressjs.com/)
- [GitHub Docs](https://docs.github.com)

---

**¡Listo! Tu aplicación está desplegada en Vercel y versionada en GitHub.** 🎉
