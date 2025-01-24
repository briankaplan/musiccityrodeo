// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event for the ticket button
    const ticketBtn = document.querySelector('.ticket-btn');
    ticketBtn.addEventListener('click', function() {
        // Replace with actual ticket purchasing URL
        window.location.href = "https://www.ticketmaster.com";
    });

    // Add smooth scroll animation for the logo
    const logo = document.getElementById('logo');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            logo.style.transform = `scale(${1 - scrollPosition/1000})`;
        } else {
            logo.style.transform = 'scale(1)';
        }
    });

    // Add parallax effect to stars
    const stars = document.querySelector('.stars');
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        stars.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
}); 