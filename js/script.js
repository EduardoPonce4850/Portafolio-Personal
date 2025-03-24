// Función para generar partículas aleatorias
function creadorParticulas() {
    const contenedorParticulas = document.querySelector('.particulas');
    const cantidad = 18;
    
    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula');
        
        // Tamaño aleatorio
        const size = Math.random() * 100 + 50;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        
        // Posición aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particula.style.left = `${posX}%`;
        particula.style.top = `${posY}%`;
        
        // Duración de la animación aleatoria
        const duracion = (Math.random() * 10 + 10).toFixed(2);
        particula.style.animationDuration = `${duracion}s`;
        
        // Retraso de la animación aleatorio
        const delay = (Math.random() * 5).toFixed(2);
        particula.style.animationDelay = `${delay}s`;
        
        contenedorParticulas.appendChild(particula);
    }
}

// Función para manejar el menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        mobileMenu.classList.toggle('toggle');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            mobileMenu.classList.remove('toggle');
        });
    });
}

// Función para cambiar el estilo del navbar al hacer scroll
function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 10%';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1.5rem 10%';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Función para animar las barras de progreso
function animarBarrasProgreso() {
    const barras = document.querySelectorAll('.progress');
    
    // Función para comprobar si un elemento está visible en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    
    // Función para animar las barras cuando son visibles
    function handleScroll() {
        let animatedCount = 0;
        
        barras.forEach(barra => {
            if (isElementInViewport(barra) && !barra.classList.contains('animated')) {
                const targetWidth = barra.getAttribute('data-width');
                barra.style.setProperty('--width-target', targetWidth);
                barra.style.width = targetWidth;
                barra.classList.add('animated');
                animatedCount++;
            }
        });
        
        // Eliminar el evento de scroll una vez animadas todas las barras
        if (animatedCount === barras.length) {
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Verificar si ya están visibles al cargar la página
    handleScroll();
}

// Inicializar funciones cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    creadorParticulas();
    toggleMobileMenu();
    navbarScroll();
    animarBarrasProgreso();
});