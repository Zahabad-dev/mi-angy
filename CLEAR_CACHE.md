# 🔄 Cómo Limpiar Caché de Vercel

El modal no aparece probablemente por caché. Sigue estos pasos:

## 1️⃣ Limpiar Caché del Navegador

### Método Rápido:
- **Chrome/Edge:** CTRL + SHIFT + DELETE → Selecciona "Caché" → Borrar
- **O simplemente:** CTRL + F5 (reload forzado)
- **O en modo incógnito:** CTRL + SHIFT + N

## 2️⃣ Limpiar Caché de Vercel

### Opción A: Desde el Dashboard de Vercel
1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Entra a tu proyecto
3. Ve a **Settings** → **Data Cache**
4. Click en **"Purge Everything"** o **"Clear Cache"**

### Opción B: Redeploy Forzado
1. En tu proyecto de Vercel
2. Ve a **Deployments**
3. Click en los 3 puntitos del último deployment
4. Selecciona **"Redeploy"**
5. ✅ Marca **"Use existing Build Cache"** → **OFF**

### Opción C: Desde Git (Más Rápido)
```bash
# Hacer un commit vacío para forzar rebuild
git commit --allow-empty -m "Force Vercel rebuild - clear cache"
git push origin main
```

## 3️⃣ Verificar en Local

Primero prueba localmente:
```bash
cd frontend
npm run dev
```

Abre: http://localhost:3000

¿Aparece el modal? 
- ✅ **SÍ:** El problema es caché de Vercel
- ❌ **NO:** Revisa la consola del navegador (F12)

## 4️⃣ Debug

Abre la consola del navegador (F12) y busca estos mensajes:
- `🎵 Activando modal de bienvenida...`
- `💕 Modal de bienvenida montado!`

Si NO aparecen estos mensajes, hay un problema en el código.

## 5️⃣ Solución Alternativa

Si nada funciona, prueba esta URL:
```
https://tu-sitio.vercel.app/?v=2
```

El parámetro `?v=2` bypasea algunos cachés.

---

**¿Aún no funciona?** Mira los logs de build en Vercel para verificar que se compiló correctamente.
