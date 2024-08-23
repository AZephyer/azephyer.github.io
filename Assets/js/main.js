// Function to filter content based on category
function filterContent(category) {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        item.hidden = !(category === 'all' || item.classList.contains(category));
    });
}

// Add event listeners for dynamic category filtering
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-filters button');
    buttons.forEach(button => button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterContent(category);
    }));
});

// Toggle service details
function toggleServiceDetails(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

// Function to toggle the mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Function to handle submenu toggling for desktop navigation
function toggleSubMenu(subMenu) {
    const element = document.querySelector(`#${subMenu}`);
    const allSubMenus = document.querySelectorAll('.sub-menu');
    
    allSubMenus.forEach(menu => {
        if (menu !== element) {
            menu.style.display = 'none';
        }
    });

    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

// Event listener for desktop submenu click
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.has-submenu');
    menuItems.forEach(item => item.addEventListener('click', (e) => {
        e.preventDefault();
        const subMenu = item.getAttribute('data-submenu');
        toggleSubMenu(subMenu);
    }));
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav ul');
            nav.classList.remove('show');
        }
    });
});
