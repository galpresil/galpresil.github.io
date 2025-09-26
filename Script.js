    // Copy website link button logic
    const copyBtn = document.getElementById('copy-website-link');
    const copyToast = document.getElementById('copy-toast');
    if (copyBtn) {
      copyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText('https://galpresil.github.io/').then(function() {
          copyToast.classList.add('show');
          setTimeout(() => { copyToast.classList.remove('show'); }, 1200);
        });
      });
    }
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('nav ul a');
    const barIcon = toggle.querySelector('.fa-bars');
    const closeIcon = toggle.querySelector('.fa-times');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  if (menu.classList.contains('open')) {
    barIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  } else {
    barIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  }
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  barIcon.style.display = 'inline';
  closeIcon.style.display = 'none';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    barIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  });
});

function openModal(src) {
  document.getElementById('imgModal').classList.add('open');
  document.getElementById('modalImg').src = src;
}
function closeModal() {
  document.getElementById('imgModal').classList.remove('open');
  document.getElementById('modalImg').src = '';
}
// Optional: close modal on background click
  document.getElementById('imgModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

document.addEventListener('DOMContentLoaded', function(event) {
  var text = "Hi, I'm Gal Presil";
  var i = 0;
  function typeWriter() {
    if (i <= text.length) {
      document.getElementById("typewriter").textContent = text.substring(0, i);
      i++;
      setTimeout(typeWriter, 120); // Adjust speed here
    }
  }
  typeWriter();
});

    // Show brand after scrolling
    const brand = document.querySelector('.brand');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        brand.classList.add('visible');
      } else {
        brand.classList.remove('visible');
      }
    });