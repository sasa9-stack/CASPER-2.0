document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide'); //ovde uzimam slide iz html
    const dots = document.querySelectorAll('.dot');// ovde navigacijske tacke
    const prevButton = document.querySelector('.prev');//navigacija
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;// ova varijabla je za broj slajda
    let autoSlideInterval;// ovo je interval na kojoj se menjaju sljadovi

    function showSlide(index) {//arrow funkcija koja uzima index
        slides.forEach((slide, i) => {//looping throgh array da vrti slide
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);//isto samo dots
        });
    }

    function nextSlide() {//ovo je za dugme next slide dodaje +1
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {//isto samo -1
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {//ovo ovde nisam siguran za sta je
        dot.addEventListener('click', () => {
            showSlide(index);
            currentIndex = index;
        });
    });

    prevButton.addEventListener('click', prevSlide);//lagano
    nextButton.addEventListener('click', nextSlide);

    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 10000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start auto slide
    startAutoSlide();

    // Pause auto slide on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    showSlide(currentIndex);
});