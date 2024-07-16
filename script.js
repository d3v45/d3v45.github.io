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
            menuIcon.classList.remove('active');
            backdrop.classList.remove('show');
        }
    });
});

// Toggle menu for mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
    backdrop.classList.toggle('show');
});

// Close the menu when clicking on the backdrop
backdrop.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuIcon.classList.remove('active');
    backdrop.classList.remove('show');
});

// Close the menu when clicking on the close button
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuIcon.classList.remove('active');
    backdrop.classList.remove('show');
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

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
});

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});
