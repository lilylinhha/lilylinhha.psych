// JavaScript for smooth navigation between pages and basic interactivity for the portfolio website

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add basic interactivity for buttons
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
