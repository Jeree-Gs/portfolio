function expandirLados(event) {
    const container = document.querySelector('.container');
    const leftSide = document.getElementById('rightSide');
    const rightSide = document.getElementById('leftSide');

    const mouseX = event.clientX;
    const containerWidth = container.offsetWidth;

    let porcentaje = mouseX / containerWidth;
    
    // Limitar la extensión al 70%
    porcentaje = Math.min(porcentaje, 0.7);

    leftSide.style.flex = porcentaje;
    rightSide.style.flex = 1 - porcentaje;
  }

function centrarContenido() {
    const container = document.querySelector('.container');
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');

    // Restablecer la flexibilidad a 1
    leftSide.style.flex = 1;
    rightSide.style.flex = 1;

    container.classList.add('centered');
  }

function toggleNavbar() {
    const navContainer = document.querySelector('.navbar');
    const container = document.querySelector('.container');

    navContainer.classList.toggle('responsive');
    container.classList.toggle('centered');
  }