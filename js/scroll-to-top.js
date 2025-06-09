document.addEventListener("DOMContentLoaded", () => { 
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Обробник кліку по логотипу: перезавантаження + прокрутка
  const logo = document.querySelector('#logo'); 
  if (logo) {
    logo.addEventListener('click', event => {
      event.preventDefault(); 
      scrollToTop();
    });
  }
});