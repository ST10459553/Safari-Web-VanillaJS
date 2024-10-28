let bookingArray = JSON.parse(localStorage.getItem('bookingArray')) || [];  // Retrieve the bookingArray from localStorage
let bookingHtml = '';
let detailsContainer = document.querySelector('.info-container');

// Loop through the bookingArray and generate HTML for each booking
bookingArray.forEach(booking => {
    bookingHtml = `<div class="location-box" data-index="${booking.index}">
        <img src="${booking.img}" alt="${booking.name}">  
        <p>Name: ${booking.name}</p>
        <p>Price: ${booking.price}</p> 
        <p>Capacity: ${booking.capacity}</p> 
    </div>
     <div class="details-box">
    <form class="form">
    <div class="label-text">
   <div><label for="name">Name</label></div>
    <input type="text" id="name">  
    </div>
    <div class="label-text">
   <div><label for="surname">Surname</label></div>
    <input type="text" id="surname">  
    </div>
    <div class="label-text">
   <div><label for="phone">Telephone</label></div>
    <input type="text" id="phone">  
    </div>
    <div class="label-text">
   <div><label for="email">Email</label></div>
    <input type="text" id="email">  
    </div>
    <div class="label-text">
   <div><label for="card">Card Number</label></div>
    <input type="text" id="card">  
    </div>
    <div class="label-text">
   <div><label for="date">Exp Date</label></div>
    <input type="date" id="date">  
    </div>
    <div class="label-text">
   <div><label for="CVV">CVV</label></div>
    <input type="text" id="CVV">  
    </div>
    <div class="book-btn">
     <input type="submit" value="Pay" id="pay">   
    </div>
    </form>
    </div>
    `;
});

// Update the innerHTML of detailsContainer with the generated bookingHtml
detailsContainer.innerHTML = bookingHtml;
