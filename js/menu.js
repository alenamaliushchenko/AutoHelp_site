document.addEventListener("DOMContentLoaded", () => {
  function closeMenu() {
    const menuToggle = document.getElementById('menu-toggle'); 
    const menu = document.getElementById('menu'); 

    if (menuToggle) {
      menuToggle.checked = false; 
    }
    
    if (menu) {
      menu.classList.remove('open'); 
      menu.classList.add('closed'); 
    }
  }

  window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    if (menu && menu.classList.contains('open')) { 
      closeMenu(); 
    }
  });

  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu); 
  });

  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('menu'); 

  if (menuToggleBtn && mobileNav) {
    menuToggleBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open"); 
    });
  }
});
