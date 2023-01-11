import template from "./cart-template.js";

export default class CartView {
  DOM_CART_CONTAINER = document.querySelector('.cart-container');

  constructor(){
    this.DOM_CART_CONTAINER.insertAdjacentHTML('afterbegin', template);

    this.DOM_CART_CONTENT = this.DOM_CART_CONTAINER.querySelector('.cart-content');
  }

  render = (d) => {
    const str = `    
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">My Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column">
          ${d.length ? d.map(this.renderProduct).join('') :
          'No items in cart'}
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
      <div class="d-flex">
      <span>${id} ${title}</span>
      <input class="flex-shrink-1" type="number" value="${quantity}"
      <span>-$${price}</span>
      </div>
    `;
  }

}
