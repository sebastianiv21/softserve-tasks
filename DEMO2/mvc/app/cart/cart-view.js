import template from "./cart-template.js";

export default class CartView {
  DOM_CART_CONTAINER = document.querySelector('.cart-container');

  constructor(deleteFromCart, changeQuantity, makeOrder){
    this.DOM_CART_CONTAINER.insertAdjacentHTML('afterbegin', template);

    this.DOM_CART_CONTENT = this.DOM_CART_CONTAINER.querySelector('.cart-content');
    this.DOM_CART_CONTENT.addEventListener('click', deleteFromCart);
    this.DOM_CART_CONTENT.addEventListener('click', makeOrder);
    this.DOM_CART_CONTENT.addEventListener('input', changeQuantity);
  }

  render = (d, total) => {
    const str = `    
        <div class="modal-header border-0">
          <h5 class="modal-title" id="cartModalLabel">My Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column gap-2">
          ${d.length ? d.map(this.renderProduct).join('') :
          'No items in cart'}
          <hr class="m-1">
          <strong class="ms-auto me-3">Total: $${total}</strong>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          ${d.length ? `<button type="button" class="btn btn-primary" data-make-order='${JSON.stringify(d)}' data-bs-toggle="modal" data-bs-target="#formOrderModal">Make order</button>` : ''}
        </div>
    `;
    this.DOM_CART_CONTENT.innerHTML = '';
    this.DOM_CART_CONTENT.insertAdjacentHTML('afterbegin', str);
  };
  
  renderProduct = (product) => {
    const {id, title, quantity, price} = product;
    return `
      <div class="d-flex justify-content-between align-items-center mx-3">
      <span>${title}</span>
      <span>-</span>
      <span>$${price}</span>
      <span>x</span>
      <input class="w-25" type="number" data-input-product='${JSON.stringify(product)}' value="${quantity}">
      <i class="bi bi-trash3-fill btn btn-danger btn-sm" data-delete-id="${id}"></i>
      </div>
    `;
  }

}
