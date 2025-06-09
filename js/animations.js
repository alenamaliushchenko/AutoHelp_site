// window.addEventListener('load', function() {
//   const script = document.createElement('script');
//   script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16689675680";
//   script.async = true;
//   document.head.appendChild(script);

//   script.onload = function() {
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     window.gtag = gtag;

//     gtag('js', new Date());
//     gtag('config', 'AW-16689675680');
//   };
// });



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

// // Закриття меню при скролінгу
// function closeMenu() {
//   const menuToggle = document.getElementById('menu-toggle');
//   const menu = document.getElementById('menu');

//   if (menuToggle) {
//     menuToggle.checked = false; 
//   }
  
//   if (menu) {
//     menu.classList.remove('open'); 
//     menu.classList.add('closed'); 
//   }
// }

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) closeMenu();  
//   });

// // Закриття меню при натисканні на посилання в мобільному меню
// document.querySelectorAll('.mobile-menu-link').forEach(link => {
//   link.addEventListener('click', closeMenu);  
// });

// // Прокручування сторінки на верх
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }
// window.addEventListener('load', () => setTimeout(scrollToTop, 0));

// // Обробник кліку по логотипу: перезавантаження + прокрутка
// const logo = document.querySelector('#logo');
// if (logo) {
//   logo.addEventListener('click', event => {
//     event.preventDefault();
//     scrollToTop();
//   });
// }