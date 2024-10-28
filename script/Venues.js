import { venues as VenuesData } from "./VenuesData.js";
let venuesHtml = '';
let venuesGrid = document.querySelector('.venue-grid-container');
export let bookingArray = JSON.parse(localStorage.getItem('bookingArray')) || [];  // Retrieve from localStorage or create an empty array

// Loop through the venues and generate HTML
VenuesData.forEach((venue, index) => {
    venuesHtml += `<div class="venue-grid" data-index="${index}">
          <img class="venue-img"
            src=${venue.img}
            alt="${venue.name}"
          />
          <div class="book-btn-container">
            <button class="book-btn" data-index="${index}">Book Now</button>  <!-- Added data-index for identifying -->
          </div>
          
          <div class="grid-venue-info">
            <span class="name">${venue.name}</span>
            <span class="capacity">${venue.capacity}</span>
            <span class="price">${venue.price}</span>
          </div>
          <div class="icons">
            <img src="../assets/images/location.jpg" alt="Location">
            <img src="../assets/images/user_icon.jpg" alt="User Capacity">
            <img class="money-icon" src="../assets/images/money.png" alt="Price">
          </div>
        </div>`;
});

venuesGrid.innerHTML += venuesHtml;


venuesGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('book-btn')) {
        const index = e.target.getAttribute('data-index');  // Get the venue index from the button
        const selectedVenue = VenuesData[index];  // Find the corresponding venue by index

        // Store the selected venue with its index in the bookingArray
        bookingArray.push({ index: index, ...selectedVenue });
        localStorage.setItem('bookingArray', JSON.stringify(bookingArray));  // Save to localStorage

        
        window.location.href = "../pages/Book.html";
    }
});
