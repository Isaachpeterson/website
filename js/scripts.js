function toggleMenu() {
    const nav = document.getElementById('navigation');
    nav.classList.toggle('show');
}

// Close the menu when the mouse leaves the navigation area
const nav = document.getElementById('navigation');
nav.addEventListener('mouseleave', () => {
    nav.classList.remove('show');
});

// Run the function to initialize the menu state
toggleMenu();