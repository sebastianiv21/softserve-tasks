import template from './navbar-template.js';

export default class NavbarView {
  DOM_NAVBAR = document.querySelector('.navbar');

  constructor() {
    this.DOM_NAVBAR.insertAdjacentHTML('afterbegin', template);

    this.DOM_CART_BTN = this.DOM_NAVBAR.querySelector('.cart-btn-data');
  }

  render = (total = 0, quantity = 0) => {
    const str = `
    <span>$${total}</span>
      <i class="bi bi-cart4 fs-5 ms-1"></i>
      <span class="text-primary position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
      ${quantity}
      </span>
      `;
    this.DOM_CART_BTN.innerHTML = '';
    this.DOM_CART_BTN.insertAdjacentHTML('afterbegin', str);
  };
}
