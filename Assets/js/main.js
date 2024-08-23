document.addEventListener('DOMContentLoaded', () => {
    // Enhanced function to filter content based on category
    function filterContent(category) {
        const items = document.querySelectorAll('.content-item');
        items.forEach(item => {
            // Using the 'hidden' attribute for better semantic and accessibility support
            item.hidden = !(category === 'all' || item.classList.contains(category));
        });
    }

    // Add event listeners for dynamic category filtering
    const buttons = document.querySelectorAll('.category-filters button');
    buttons.forEach(button => button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterContent(category);
    }));

    // Toggle service details
    function toggleServiceDetails(id) {
        const element = document.getElementById(id);
        element.style.display = (element.style.display === 'block') ? 'none' : 'block';
    }

    // Handle Hamburger Menu toggle for mobile view
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // Form validation for session booking (client number)
    const sessionForm = document.getElementById('session-form');
    if (sessionForm) {
        sessionForm.addEventListener('submit', function(event) {
            const clientNumber = document.getElementById('client-number').value;
            if (!validateClientNumber(clientNumber)) {
                event.preventDefault();
                alert('Invalid Client Number. Please check and try again.');
            }
        });
    }

    function validateClientNumber(number) {
        // Example validation: Adjust the regex as per your client number format
        return /^[A-Z0-9]{6}$/.test(number);
    }
});
