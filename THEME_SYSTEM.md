# 🎨 Sistema de Temas - Valentine Gallery

## ✨ Temas Disponibles

### 1. **Tema Original** (Por defecto)
- Colores: Rosa vibrante, fucsia, rosado intenso
- Estilo: Romántico y enérgico
- Animaciones: Corazones flotantes, efectos dinámicos

### 2. **Tema Elegante** 🌹 (Nuevo)
- Colores: Beige, crema, palo de rosa
- Estilo: Sofisticado y minimalista
- Ilustraciones: Ornamentos sutiles y elegantes
- Transiciones: Suaves y refinadas

## 🔄 Cómo Cambiar de Tema

### Método 1: Botón de Toggle (Recomendado)
1. Ve a la aplicación en `http://localhost:3000`
2. En la barra de navegación superior derecha, verás un botón
3. **Tema Original**: Muestra "💕 Tema Original"
4. **Tema Elegante**: Muestra "✨ Tema Elegante"
5. Haz clic para cambiar entre temas
6. El tema se guarda automáticamente en tu navegador

### Método 2: Consola del Navegador
```javascript
// Activar tema elegante
localStorage.setItem('theme', 'elegant');
location.reload();

// Volver al tema original
localStorage.setItem('theme', 'default');
location.reload();
```

## 📁 Archivos del Sistema de Temas

### Tema Original
- `frontend/styles/globals.css` - Estilos globales base
- `frontend/styles/Home.module.css` - Estilos de la página principal
- `frontend/styles/Nav.module.css` - Estilos de navegación

### Tema Elegante
- `frontend/styles/theme-elegant.css` - Variables y estilos globales elegantes
- `frontend/styles/Home.elegant.module.css` - Estilos de página elegantes
- `frontend/styles/Nav.elegant.module.css` - Navegación elegante

### Componentes
- `frontend/components/ThemeToggle.js` - Botón para cambiar temas
- `frontend/pages/_app.js` - Integración del sistema de temas

## 🎨 Paleta de Colores - Tema Elegante

### Colores Principales
- **Palo de Rosa**: `#d4a5a5` (Primary)
- **Palo de Rosa Oscuro**: `#b88b8b` (Primary Dark)
- **Palo de Rosa Claro**: `#e6c9c9` (Primary Light)

### Beige y Crema
- **Beige**: `#e8dfd7`
- **Crema**: `#faf6f1`
- **Arena**: `#d4c5b8`

### Acentos
- **Oro**: `#c9a87c`
- **Bronce**: `#a67c52`

### Fondos
- **Primario**: `#f5f1ed`
- **Secundario**: `#faf8f5`
- **Gradiente**: Linear gradient suave entre tonos beige

### Texto
- **Primario**: `#5a4a42` (Marrón oscuro)
- **Secundario**: `#8a7a72` (Marrón medio)
- **Claro**: `#b8a89f` (Marrón claro)

## ✨ Características Elegantes

### Animaciones
- **elegantFloat**: Flotación suave con rotación sutil
- **elegantPulse**: Pulso suave y refinado
- **elegantShimmer**: Efecto de brillo elegante

### Efectos Visuales
- Sombras suaves y difuminadas
- Transiciones con cubic-bezier para movimiento natural
- Ornamentos decorativos sutiles
- Bordes y degradados delicados

### Tipografía
- Espaciado de letras amplio (letter-spacing)
- Pesos de fuente ligeros (300-400)
- Mayúsculas para títulos
- Líneas decorativas con símbolos (◆)

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `frontend/styles/theme-elegant.css`:

```css
:root.theme-elegant {
  --color-primary: #d4a5a5;  /* Cambia el color principal */
  --color-beige: #e8dfd7;    /* Cambia el beige */
  --accent-gold: #c9a87c;     /* Cambia el acento dorado */
}
```

### Agregar Nuevos Temas
1. Crea archivos CSS nuevos (ej: `theme-modern.css`)
2. Define variables CSS personalizadas
3. Crea módulos CSS para cada página
4. Actualiza `ThemeToggle.js` para incluir el nuevo tema
5. Actualiza `_app.js` para cargar los estilos

## 📱 Responsive

Ambos temas son completamente responsive:
- **Desktop**: Diseño completo con todos los efectos
- **Tablet**: Adaptado con columnas ajustadas
- **Móvil**: Columnas simples, navegación compacta

## 🚀 Inicio Rápido

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000

# Cambiar tema usando el botón en la navbar
```

## 💡 Tips

1. **Persistencia**: El tema se guarda automáticamente en localStorage
2. **Sin reinicio**: Los cambios de tema son instantáneos
3. **Local only**: Los cambios NO se suben a git automáticamente
4. **Testeo**: Prueba ambos temas en diferentes dispositivos

## 🎯 Próximas Mejoras

- [ ] Más temas (Oscuro, Pastel, Minimalista)
- [ ] Selector de temas con preview
- [ ] Personalización de colores en tiempo real
- [ ] Exportar/importar configuraciones de tema
- [ ] Tema automático según hora del día

## 📝 Notas

- El tema elegante usa ilustraciones SVG procedurales
- Ornamentos decorativos se crean dinámicamente
- Sombras optimizadas para rendimiento
- Animaciones con GPU acceleration

---

**Creado con 💕 para MI ANGY**
