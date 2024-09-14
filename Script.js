// -------------------------------------- Scroll to top  -------------------------------------- 
// Scroll to top functionality 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle image visibility by ID
function toggleImage(imgId) {
    var img = document.getElementById(imgId);
    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

// --------------------- PDF modal - HR Dashboard Project Report Power BI --------------------- 
// PDF modal handling
const modal = document.getElementById("pdfModal");
const openBtn = document.getElementById("openPDF");
const closeBtn = document.querySelector(".close-btn");
const pdfViewer = document.getElementById("pdfViewer");

// Show PDF: Use the Raw URL and an External online PDF viewer like Google Docs Viewer 
openBtn.onclick = function () {
    pdfViewer.src = "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/galpresil/HR_Dashboard_with_Power_BI/main/HR%20Dashboard%20Project%20Report.pdf&embedded=true";
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
    pdfViewer.src = "";  // Clear the PDF source when closed
}

// ---------------------------------------- Slideshow  ---------------------------------------- 
// Slideshow functionality (for 2 sections - 2 diffrent sliders)
let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

// ------------------------------------------ Zoom img  ------------------------------------------ 
// Zoom image functionality
function zoomImage(img) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        var modal = document.getElementById("zoomModal");
        var modalImg = document.getElementById("zoomedImg");
        modal.style.display = "block";
        modalImg.src = img.src;
    }
}

function closeZoom() {
    var modal = document.getElementById("zoomModal");
    modal.style.display = "none";
}

// ------------------------- Close modal on clicking outside the background -------------------------
window.onclick = function (event) {
    var modalpdf = document.getElementById("pdfModal");
    var modalzoom = document.getElementById("zoomModal");
    if (event.target == modalzoom) {
        closeZoom();
    } else if (event.target == modalpdf) {
        modal.style.display = "none";
        pdfViewer.src = "";  // Clear the PDF source when closed
    }
}

// ------------------------------------------ Burger menu ------------------------------------------
// Burger menu toggle functionality
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column'; // Stack links vertically on small screens
    }
});

const checkScreenSize = () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex'; // Ensure nav links are shown on large screens
        navLinks.style.flexDirection = 'row'; // Horizontal layout for large screens
    } else {
        navLinks.style.display = 'none'; // Ensure nav links are hidden on small screens
    }
};

window.addEventListener('resize', checkScreenSize);
checkScreenSize(); // Initial check when the page loads


// ----------------------------------------------------------------------------------------------
