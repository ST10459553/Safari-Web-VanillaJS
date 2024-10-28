//Main Idea of Javascript

//SAVE THE DATA INTO JS
//GENERATE THE DATA INTO THE HTML
// make it interactive

//GLOSSARY
//to fix convert a number into a string and we choose the decimals ()

import { cart,addToCart} from '../data/Cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from '../utils/money.js';



let produtcsHtml = ''; //accumulator pattern that's where we storing the loop results

products.forEach(products => {

  produtcsHtml += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${products.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
      ${products.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${products.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
        ${products.rating.count}
        </div>
      </div>

      <div class="product-price">$
      ${formatCurrency(products.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
        Add to Cart 
         <!-- attach the product name to the button using a data attribute -->
      </button> 
    </div>
      `;

})
document.querySelector('.js-products-grid').innerHTML += produtcsHtml;
//puttig the generated javascript into the html

let updateCartQuantity=()=>{let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity; //finding the cart quantity by looping through it


  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
};








document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; //the when we click the button we get the product name out the data name change from kebab case to camel case 

    addToCart(productId);
    updateCartQuantity();

    

  });
});
