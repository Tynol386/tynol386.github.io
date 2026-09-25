document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");

const lightboxZdjecie = document.getElementById("lightbox-img");

const lightboxPodpis = document.getElementById("lightbox-caption");

let wybranezdjecia = [];

let wybranyIndex = 0;

document.querySelectorAll(".gallery-container").forEach(container => {

const zdjecia = Array.from(container.querySelectorAll(".gallery-item"));
    
zdjecia.forEach((img, index) => {

  img.addEventListener("click", () => {
    wybranezdjecia = zdjecia; 
    wybranyIndex = index;
    pokazZdjecie();
    lightbox.style.display = "flex";

    });

  });

});

function pokazZdjecie() {
    const wybraneZdjecie = wybranezdjecia[wybranyIndex];
    lightboxZdjecie.src = wybraneZdjecie.src;
    lightboxPodpis.textContent = wybraneZdjecie.alt || `Zdjęcie ${wybranyIndex + 1}`;
}

document.querySelector(".next-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    wybranyIndex = (wybranyIndex + 1) % wybranezdjecia.length;
    pokazZdjecie();
});

document.querySelector(".prev-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    wybranyIndex = (wybranyIndex - 1 + wybranezdjecia.length) % wybranezdjecia.length;
    pokazZdjecie();
});

const closeLightbox = () => lightbox.style.display = "none";

document.querySelector(".close-btn").addEventListener("click", closeLightbox);

lightbox.addEventListener("click", closeLightbox);

lightboxZdjecie.addEventListener("click", (e) => e.stopPropagation());

});
