document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
    document.querySelector('.nav-toggle').classList.toggle('toggle');
    console.log('Menu toggled'); // Debugging line
});
