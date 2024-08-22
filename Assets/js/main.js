function filterContent(category) {
    var items = document.querySelectorAll('.content-item');

    items.forEach(function(item) {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

function toggleServiceDetails(serviceId) {
    var details = document.getElementById(serviceId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
