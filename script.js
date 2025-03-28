document.addEventListener('DOMContentLoaded', () => {
  // Анімація заголовків при завантаженні сторінки
  animateText(document.getElementById("animated-title"), 200);
  animateText(document.getElementById("subtitle"), 100);
});

function animateText(element, delay) {
  if (!element) return;
  
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

const loadHTML = (selector, url, callback) => {
  const container = document.querySelector(selector);
  
  // Прибираємо кешування, щоб уникнути проблем зі старими даними
  fetch(url)
    .then(response => response.ok ? response.text() : Promise.reject("Error"))
    .then(html => {
      requestAnimationFrame(() => {
        container.innerHTML = html.replace(/<script.*?<\/script>/gs, ""); // Фікс для видалення всіх скриптів
        callback?.();
      });
    })
    .catch(console.error);
};


