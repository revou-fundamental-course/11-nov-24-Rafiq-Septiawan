// Ini JavaScript //
// Validate Form //
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    if (!name || !email || !interest) {
        alert("Semua kolom wajib diisi.");
        return false;
    }

    alert("Formulir berhasil dikirimkan!");
    return true;
}


//Banner AutoSlide//
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.style.display = 'none');

    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');


    setTimeout(showSlides, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
