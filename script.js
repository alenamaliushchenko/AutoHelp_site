document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadHTML("body", "index.html", initAnimations);
  }, 0);
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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    animateText(document.getElementById("animated-title"), 200);
    animateText(document.getElementById("subtitle"), 100);
  }, 0);
});
const loadHTML = (selector, url, callback) => {
  const container = document.querySelector(selector);
  const cachedHTML = localStorage.getItem(url);

  if (cachedHTML) {
    requestAnimationFrame(() => {
      container.innerHTML = cachedHTML;
      callback?.();
    });
  } else {
    fetch(url)
      .then(response => response.ok ? response.text() : Promise.reject("Error"))
      .then(html => {
        requestAnimationFrame(() => {
          container.innerHTML = html.replace(/<script.*script>/, "");
          localStorage.setItem(url, html);
          callback?.();
        });
      })
      .catch(console.error);
  }
};