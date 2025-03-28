// 1. Анімація тексту
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

// 2. Завантаження HTML-контенту з іншого файлу
const loadHTML = (selector, url, callback) => {
  const container = document.querySelector(selector);
  fetch(url)
    .then(response => response.ok ? response.text() : Promise.reject("Error"))
    .then(html => {
      requestAnimationFrame(() => {
        container.innerHTML = html.replace(/<script.*?<\/script>/gs, ""); // Видаляємо скрипти
        callback?.();
      });
    })
    .catch(console.error);
}
// 3. Закриття меню при скролінгу
function closeMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.checked = false; // Знімаємо прапорець для закриття меню
  }
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.remove('open'); // Закриваємо меню
    menu.classList.add('closed'); // Додаємо клас, щоб показати, що меню закрите
  }
}
// Додаємо подію для закриття меню при скролінгу
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 0) {
    closeMenu();  // Закриваємо меню, коли є скрол
  }
});

// 4. Закриття меню при натисканні на посилання в мобільному меню
const menuLinks = document.querySelectorAll('.mobile-menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    closeMenu();  // Закриваємо меню при кліку на посилання
  });
});

// 5. Прокручування сторінки на верх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('load', () => setTimeout(scrollToTop, 0));

// 6. Обробник кліку по логотипу: перезавантаження + прокрутка
const logo = document.querySelector('#logo');
logo.addEventListener('click', function (event) {
  scrollToTop();
  
  setTimeout(() => {
    location.reload(); 
  }, 500);
});

