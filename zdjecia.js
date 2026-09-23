document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  
  let currentImages = [];
  let currentIndex = 0;

  document.querySelectorAll(".gallery-container").forEach(container => {
    const images = Array.from(container.querySelectorAll(".gallery-item"));
    
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentImages = images; 
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
      });
    });
  });

  function showImage() {
    const activeImg = currentImages[currentIndex];
    lightboxImg.src = activeImg.src;
    lightboxCaption.textContent = activeImg.alt || `Zdjęcie ${currentIndex + 1}`;
  }

  document.querySelector(".next-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage();
  });

  document.querySelector(".prev-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage();
  });

  const closeLightbox = () => lightbox.style.display = "none";
  document.querySelector(".close-btn").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", closeLightbox);

  lightboxImg.addEventListener("click", (e) => e.stopPropagation());
});
