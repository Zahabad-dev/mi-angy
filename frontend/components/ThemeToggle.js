import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isElegant, setIsElegant] = useState(true); // Elegante por defecto

  useEffect(() => {
    // Cargar tema guardado, por defecto elegante
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'default') {
      setIsElegant(false);
      removeElegantTheme();
    } else {
      setIsElegant(true);
      applyElegantTheme();
    }
  }, []);

  const applyElegantTheme = () => {
    document.documentElement.classList.add('theme-elegant');
    document.body.classList.add('theme-elegant');
    
    // Agregar ornamentos decorativos
    if (!document.querySelector('.elegant-ornament-1')) {
      const ornament1 = document.createElement('div');
      ornament1.className = 'elegant-ornament elegant-ornament-1';
      document.body.appendChild(ornament1);
      
      const ornament2 = document.createElement('div');
      ornament2.className = 'elegant-ornament elegant-ornament-2';
      document.body.appendChild(ornament2);
      
      const ornament3 = document.createElement('div');
      ornament3.className = 'elegant-ornament elegant-ornament-3';
      document.body.appendChild(ornament3);
    }
  };

  const removeElegantTheme = () => {
    document.documentElement.classList.remove('theme-elegant');
    document.body.classList.remove('theme-elegant');
    
    // Remover ornamentos
    const ornaments = document.querySelectorAll('.elegant-ornament');
    ornaments.forEach(ornament => ornament.remove());
  };

  const toggleTheme = () => {
    const newTheme = !isElegant;
    setIsElegant(newTheme);
    
    if (newTheme) {
      applyElegantTheme();
      localStorage.setItem('theme', 'elegant');
      // Disparar evento para sincronizar otros componentes
      window.dispatchEvent(new Event('storage'));
    } else {
      removeElegantTheme();
      localStorage.setItem('theme', 'default');
      // Disparar evento para sincronizar otros componentes
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 18px',
        background: isElegant
          ? 'linear-gradient(135deg, #e8dfd7, #faf6f1)'
          : 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        border: isElegant ? '1px solid #d4a5a5' : 'none',
        borderRadius: '20px',
        color: isElegant ? '#5a4a42' : 'white',
        fontSize: '0.85rem',
        fontWeight: '500',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isElegant
          ? '0 4px 20px rgba(212, 165, 165, 0.12)'
          : '0 4px 15px rgba(236, 72, 153, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {isElegant ? '✨ Tema Elegante' : '💕 Tema Original'}
    </button>
  );
}
