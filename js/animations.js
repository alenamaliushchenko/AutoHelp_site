document.addEventListener("DOMContentLoaded", () => {
  function animateText(id, delay) {
    const element = document.getElementById(id);
    if (!element) return;

    const text = element.dataset.text || element.innerText;
    element.innerHTML = ""; 

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = "inline-block";
      span.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      element.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, delay * index);
    });
  }

  animateText("animated-title", 30);
  animateText("subtitle", 20);
});

