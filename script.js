 // Перевіряємо, чи екрани високої роздільної здатності (2x)
 document.addEventListener("DOMContentLoaded", function() {
  if (window.devicePixelRatio > 1) {
    document.querySelector('.hero-section').style.backgroundImage = "url('./img/AutoHelp_image-2x.webp')";
  }
});

// Анімація тексту
document.addEventListener('DOMContentLoaded', () => {
  animateText(document.getElementById("animated-title"), 200);
  animateText(document.getElementById("subtitle"), 100);
});
function animateText(element, delay) {
  if(!element) return;

  const text = element.innerText;
  element.innerText = "";
  let index = 0;

  function animateNextChar() {
    if (index < text.length) {
      const span = document.createElement('span');
      span.innerText = text[index] === ' ' ? '\u00A0' : text[index];
      element.appendChild(span);

      requestAnimationFrame(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      });

      index++;
      setTimeout(animateNextChar, delay);
    }
}
animateNextChar();
}

// Закриття меню при скролінгу
function closeMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.checked = false; 
  }
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.remove('open'); 
    menu.classList.add('closed'); 
  }
}

window.addEventListener('scroll', function() {
  if (this.window.scrollY > 0) {
    closeMenu();  
  }
});

// Закриття меню при натисканні на посилання в мобільному меню
const menuLinks = document.querySelectorAll('.mobile-menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    closeMenu();  
  });
});

// Прокручування сторінки на верх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('load', () => setTimeout(scrollToTop, 0));

// Обробник кліку по логотипу: перезавантаження + прокрутка
const logo = document.querySelector('#logo');
logo.addEventListener('click', function (event) {
  scrollToTop();
  
  setTimeout(() => {
    location.reload(); 
  }, 200);
});


