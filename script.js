document.addEventListener('DOMContentLoaded', () => {
  const loadHTML = (selector, url, callback) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(html => {
        document.querySelector(selector).innerHTML = html.replace(/<script.*script>/, "");
        if (callback) callback(); 
      })
      .catch(error => console.error("Error loading HTML:", error));
  };


  loadHTML("#hero", "partials/hero.html", () => {
    const title = document.getElementById("animated-title");

    if (title) {
      const text = title.innerText;
      title.innerText = ""; 

      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        title.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 200 * index);
      });
    } else {
      console.error('Елемент з id "animated-title" не знайдено');
    }

    const subtitle = document.getElementById("subtitle");
    if (subtitle) {
      const subText = subtitle.innerText;
      subtitle.innerText = ""; 

      const subtitleChars = subText.split('');

      const animateSubtitle = () => {
        subtitleChars.forEach((char, index) => {
          const subSpan = document.createElement('span');
          subSpan.innerText = char === ' ' ? '\u00A0' : char; 
          subtitle.appendChild(subSpan);

          setTimeout(() => {
            subSpan.style.opacity = "1";
            subSpan.style.transform = "translateY(0)";
          }, 100 * index);
        });
      };

      const titleSpans = title.querySelectorAll('span');
      const lastTitleSpan = titleSpans[titleSpans.length - 1];

      lastTitleSpan.addEventListener('transitionend', animateSubtitle,  { once: true });
    } else {
      console.error('Елемент з id "subtitle" не знайдено');
    }
  });

  loadHTML("#header", "partials/header.html");
  loadHTML("#about-us", "partials/about-us.html");
  loadHTML("#our-services", "partials/our-services.html");
  loadHTML("#reviews", "partials/reviews.html");
  loadHTML("#footer-container", "partials/footer.html");

function closeMenu() {
  document.getElementById('menu-toggle').checked = false;
}


window.addEventListener('scroll', function() {
  if (window.scrollY > 0) { 
    closeMenu();
  }
});


const menuLinks = document.querySelectorAll('.mobile-menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu); 
});

if (document.querySelector('#reviews-widget')) {
  const script = document.createElement('script');
  script.src = 'https://static.elfsight.com/app/googleReviews.js';
  script.defer = true;
  document.body.appendChild(script);
}

});