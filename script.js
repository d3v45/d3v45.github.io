// script.js

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});

// Toggle menu for mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
});

// Intersection Observer for animations
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
