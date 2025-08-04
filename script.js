const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
    navbar.style.top = "0";
    } else {
    navbar.style.top = "-100px";
    }
});

    // Simple mobile menu toggle functionality
    document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.querySelector('.dropdown');
        if (!dropdown.contains(event.target)) {
            // Dropdown will close automatically due to CSS hover
        }
    });