// Page Load par Data Display karein
document.addEventListener("DOMContentLoaded", () => {
    renderHomeHighlights();
    renderEventsCatalog(allEvents);
    renderGallery();
});

function showPage(pageName) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.style.display = 'none');
    
    document.getElementById(`${pageName}-page`).style.display = 'block';
}

function renderHomeHighlights() {
    const highlightsContainer = document.getElementById('home-highlights');
    highlightsContainer.innerHTML = '';

    allEvents.slice(0, 2).forEach(event => {
        highlightsContainer.innerHTML += `
            <div class="card">
                <span class="badge">${event.category}</span>
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p>${event.description}</p>
            </div>
        `;
    });
}

function renderEventsCatalog(eventsList) {
    const eventsContainer = document.getElementById('events-grid');
    eventsContainer.innerHTML = '';

    if (eventsList.length === 0) {
        eventsContainer.innerHTML = '<p>No events found matching your criteria.</p>';
        return;
    }

    eventsList.forEach(event => {
        eventsContainer.innerHTML += `
            <div class="card">
                <img src="${event.image}" alt="${event.title}">
                <span class="badge">${event.category}</span>
                <h3>${event.title}</h3>
                <p><strong>Date & Time:</strong> ${event.date} (${event.time})</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p>${event.description}</p>
            </div>
        `;
    });
}

function filterEvents() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const catVal = document.getElementById('category-filter').value;
    const sortVal = document.getElementById('sort-order').value;

    let filtered = allEvents.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchVal);
        const matchesCat = (catVal === 'All') || (event.category === catVal);
        return matchesSearch && matchesCat;
    });

    // Sorting Logic
    if (sortVal === 'date') {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortVal === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderEventsCatalog(filtered);
}

function renderGallery() {
    const yearVal = document.getElementById('gallery-year-filter').value;
    const galleryContainer = document.getElementById('gallery-grid');
    galleryContainer.innerHTML = '';

    let galleryEvents = (yearVal === 'All') 
        ? allEvents 
        : allEvents.filter(e => e.year === yearVal);

    galleryEvents.forEach(event => {
        galleryContainer.innerHTML += `
            <div class="card">
                <img src="${event.image}" alt="${event.title}">
                <h4 style="text-align:center; margin-top:10px;">${event.title} (${event.year})</h4>
            </div>
        `;
    });
}