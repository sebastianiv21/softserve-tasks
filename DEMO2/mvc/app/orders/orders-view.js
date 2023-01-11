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

  renderOrder = (product) => {
    const { id, title, quantity, price } = product;
    return `
      <div class="d-flex justify-content-between align-items-center mx-3">
      <span>${title}</span>
      <span>-</span>
      <span>$${price}</span>
      <span>x</span>
      <input class="w-25" type="number" data-input-product='${JSON.stringify(
        product
      )}' value="${quantity}">
      <i class="bi bi-trash3-fill btn btn-danger btn-sm" data-delete-id="${id}"></i>
      </div>
    `;
  };
}
