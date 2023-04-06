function toggleMenu() {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('menu-open');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the menu if it's open on mobile devices
        const navigation = document.getElementById('navigation');
        if (navigation.classList.contains('menu-open')) {
            navigation.classList.remove('menu-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    function goToSlide(index) {
        items[currentIndex].classList.remove('active');
        items[index].classList.add('active');
        currentIndex = index;
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + items.length) % items.length);
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % items.length);
    }

    // Assign the functions to the global scope to be accessible from the HTML
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;
});