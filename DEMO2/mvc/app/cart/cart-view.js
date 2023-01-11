import template from "./cart-template.js";

export default class CartView {
  DOM_CART_CONTAINER = document.querySelector('.cart-container');

  constructor(){
    this.DOM_CART_CONTAINER.insertAdjacentHTML('afterbegin', template);

    this.DOM_CART_CONTENT = this.DOM_CART_CONTAINER.querySelector('.cart-content');
  }

  render = (d, total) => {
    const str = `    
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">My Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column">
          ${d.length ? d.map(this.renderProduct).join('') :
          'No items in cart'}
          <hr>
          <strong>Total: $${total}</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Make order</button>
        </div>
    `;
    this.DOM_CART_CONTENT.innerHTML = '';
    this.DOM_CART_CONTENT.insertAdjacentHTML('afterbegin', str);
  };
  
  renderProduct = (product) => {
    const {id, title, quantity, price} = product;
    return `
      <div class="d-flex justify-content-between mx-3">
      <span class='flex-grow-1'>${title} x </span>
      <input class="flex-shrink-1" type="number" value="${quantity}"
      <span class='flex-grow-1 ms-auto'>- $${price}</span>
      </div>
    `;
  }

}
