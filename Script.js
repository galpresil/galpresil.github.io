// Show brand after scrolling past main title
const brand = document.querySelector('.brand');
window.addEventListener('scroll', function() {
    if (window.scrollY > 280) { // Adjust pixel value if needed based on hero height
        brand.classList.add('visible');
    } else {
        brand.classList.remove('visible');
    }
});

// Copy Link Toast
const copyBtn = document.getElementById('copy-website-link');
const copyToast = document.getElementById('copy-toast');

if (copyBtn) {
  copyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navigator.clipboard.writeText('https://galpresil.github.io/').then(function() {
      copyToast.classList.add('show');
      setTimeout(() => { copyToast.classList.remove('show'); }, 1500);
    });
  });
}

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul a');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});

// Accordion for Projects
function toggleProject(headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('active');
    
    // Reset carousel to first slide when card is opened
    if (card.classList.contains('active')) {
        const firstRadio = card.querySelector('input[type="radio"]');
        if (firstRadio) {
            firstRadio.checked = true;
        }
    }
}

// Zoom Modal Logic
function openModal(src) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    modal.classList.add('open');
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    modal.classList.remove('open');
    modalImg.src = '';
}

// Close modal when clicking outside the image
document.getElementById('imgModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Typewriter
document.addEventListener('DOMContentLoaded', function() {
    var text = "Hi, I'm Gal Presil";
    var i = 0;
    function typeWriter() {
        if (i <= text.length) {
            document.getElementById("typewriter").textContent = text.substring(0, i);
            i++;
            setTimeout(typeWriter, 120);
        }
    }
    typeWriter();
});

// Auto-slide Carousels (only when card is open)
document.addEventListener('DOMContentLoaded', function() {
    const carouselNames = ['carousel-movie', 'carousel-hr', 'carousel-bingo', 'carousel-excel'];
    
    carouselNames.forEach(name => {
        setInterval(() => {
            const inputs = document.querySelectorAll(`input[name="${name}"]`);
            if (inputs.length === 0) return;
            
            const firstInput = inputs[0];
            const projectCard = firstInput.closest('.project-card');
            
            // Only auto-slide if the containing project card is active/open
            if (projectCard && projectCard.classList.contains('active')) {
                let checkedIndex = Array.from(inputs).findIndex(input => input.checked);
                let nextIndex = (checkedIndex + 1) % inputs.length;
                inputs[nextIndex].checked = true;
            }
        }, 4000); // Change slide every 4 seconds
    });
});
