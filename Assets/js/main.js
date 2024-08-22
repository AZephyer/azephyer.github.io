// Enhanced function to filter content based on category
function filterContent(category) {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        // Using the 'hidden' attribute for better semantic and accessibility support
        item.hidden = !(category === 'all' || item.classList.contains(category));
    });
}

// Add event listeners for dynamic category filtering
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-filters button');
    // Attach an event listener to each button for filtering
    buttons.forEach(button => button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterContent(category);
    }));
});

// Toggle service details
function toggleServiceDetails(id) {
    const element = document.getElementById(id);
    // Toggle display style between 'block' and 'none'
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}
