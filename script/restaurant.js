import { foodMenu } from "./restaurantData.js";
let itemContainer=document.querySelector('.item-flex-container')
let itemsHtml='';
foodMenu.forEach((item)=>{
    itemsHtml+=`          <div class="item-flex">
            <div class="item-img">
              <img src="${item.img}" alt="${item.name}" srcset="">
            </div>
            <div class="item-info">
              <div class="name">${item.name}</div>
              <div class="description">${item.description}</div>
              <div class="price">
                R${item.price}
              </div>
            </div>
          </div>`
})

itemContainer.innerHTML+=itemsHtml;

