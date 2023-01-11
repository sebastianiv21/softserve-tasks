import template from './orders-template.js';

export default class OrdersView {
  DOM_ORDERS_CONTAINER = document.querySelector('.orders-container');
  constructor() {
    this.DOM_ORDERS_CONTAINER.insertAdjacentHTML('afterbegin', template);

    this.DOM_ORDERS_CONTENT = this.DOM_ORDERS_CONTAINER.querySelector('.my-orders-content');
  }

  render = (d = []) => {
    const str = `
        <div class="modal-header border-0">
        <h5 class="modal-title" id="myOrdersModal">My Orders</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex flex-column gap-2">
        ${d.length ? d.map(this.renderOrder).join('') : 'No orders to display'}
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
        `;

    this.DOM_ORDERS_CONTENT.innerHTML = '';
    this.DOM_ORDERS_CONTENT.insertAdjacentHTML('afterbegin', str);
  };

  renderOrder = ({cart, formData}) => {
    const {name, phone, email} = formData;

    return `
      <div class="d-flex justify-content-between">
      <div>
      <strong>Order Info</strong>
      <p class='m-0'><strong>Name:</strong> ${name}</p>
      <p class='m-0'><strong>Phone:</strong> ${phone}</p>
      <p class='m-0'><strong>Email:</strong> ${email}</p>
      </div>
      <div>
        <strong>Order Items</strong>
        ${cart.map(this.renderCartItems).join('')}
      </div>
      </div>
      <hr class="m-1">
    `;
  };

  renderCartItems = ({title, quantity}) => {
    return `
        <div>
          <span>${title}</span>
          <span>x</span>
          <span>${quantity}</span>
        </div>
    `;
  }
}
