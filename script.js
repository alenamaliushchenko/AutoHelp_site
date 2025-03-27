// document.addEventListener('DOMContentLoaded', () => {
//   const loadHTML = (selector, url, callback) => {
//     const cachedHTML = localStorage.getItem(url);
//     if (cachedHTML) {
//       document.querySelector(selector).innerHTML = cachedHTML;
//       if (callback) callback();
//     } else {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) throw new Error("Network response was not ok");
//           return response.text();
//         })
//         .then(html => {
//           document.querySelector(selector).innerHTML = html.replace(/<script.*script>/, "");
//           localStorage.setItem(url, html);
//           if (callback) callback();
//         })
//         .catch(error => console.error("Error loading HTML:", error));
//     }
//   };

//   // Завантажуємо вміст у body або інший елемент
//   loadHTML("body", "index.html", () => {
//     const title = document.getElementById("animated-title");

//     if (title) {
//       const text = title.innerText;
//       title.innerText = ""; 

//       [...text].forEach((char, index) => {
//         const span = document.createElement('span');
//         span.innerText = char;
//         title.appendChild(span);

//         setTimeout(() => {
//           span.style.opacity = "1";
//           span.style.transform = "translateY(0)";
//         }, 200 * index);
//       });
//     } else {
//       console.error('Елемент з id "animated-title" не знайдено');
//     }

//     const subtitle = document.getElementById("subtitle");
//     if (subtitle) {
//       const subText = subtitle.innerText;
//       subtitle.innerText = ""; 

//       const subtitleChars = subText.split('');

//       const animateSubtitle = () => {
//         subtitleChars.forEach((char, index) => {
//           const subSpan = document.createElement('span');
//           subSpan.innerText = char === ' ' ? '\u00A0' : char; 
//           subtitle.appendChild(subSpan);

//           setTimeout(() => {
//             subSpan.style.opacity = "1";
//             subSpan.style.transform = "translateY(0)";
//           }, 100 * index);
//         });
//       };

//       const titleSpans = title.querySelectorAll('span');
//       const lastTitleSpan = titleSpans[titleSpans.length - 1];

//       lastTitleSpan.addEventListener('transitionend', animateSubtitle, { once: true });
//     } else {
//       console.error('Елемент з id "subtitle" не знайдено');
//     }
//   });

//   function closeMenu() {
//     document.getElementById('menu-toggle').checked = false;
//   }

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 0) { 
//       closeMenu();
//     }
//   });

//   const menuLinks = document.querySelectorAll('.mobile-menu-link');
//   menuLinks.forEach(link => {
//     link.addEventListener('click', closeMenu); 
//   });

//   if (document.querySelector('#reviews-widget')) {
//     if (!localStorage.getItem('reviews-widget-loaded')) {
//       const script = document.createElement('script');
//       script.src = 'https://static.elfsight.com/app/googleReviews.js';
//       script.defer = true;
//       document.body.appendChild(script);
//       localStorage.setItem('reviews-widget-loaded', 'true');
//     }
//   }
// });


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadHTML("body", "index.html", initAnimations);
  }, 0);
});
if (!localStorage.getItem('reviews-widget-loaded')) {
  const script = document.createElement('script');
  script.src = 'https://static.elfsight.com/app/googleReviews.js';
  script.async = true; // або script.defer = true;
  document.body.appendChild(script);
  localStorage.setItem('reviews-widget-loaded', 'true');
}
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