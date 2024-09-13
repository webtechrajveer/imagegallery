document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            openLightbox(image.src);
        });
    });
    
    const lightbox = document.querySelector('.lightbox');
    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        closeLightbox();
    });
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
