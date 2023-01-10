export default class ProductView {
  DOM_PRODUCTS_LIST = document.querySelector('.products-list');

  constructor(callback){
    this.DOM_PRODUCTS_LIST.addEventListener('click', callback);
  }

  render = (d) => {
    const str = `
    <section class="container">
      <div class="row gx-3 row-cols-lg-4 row-cols-md-2 row-cols-1 justify-content-center">
      ${d.map(this.renderProduct).join('')}
      </div>
    </section>
    `;
    this.DOM_PRODUCTS_LIST.innerHTML = '';
    this.DOM_PRODUCTS_LIST.insertAdjacentHTML('afterbegin', str);

    this.DOM_BTN_DETAILS = this.DOM_PRODUCTS_LIST.querySelector('.btn-show-details');

  };

  renderProduct = ({ title, price, thumbnail, category, id }) => {
    return `
    <div class="col mb-3">
      <div class="card h-100">
        <!--Product image-->
        <img class="card-img-top p-2" height="200" src="${thumbnail}" alt="${title}">
        <!--Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!--Product name-->
            <h5 class="card-title">${title}</h5>
            <!--Product category-->
            <h6 class="card-text">${category.toUpperCase()}</h6>
            <!--Product price-->
            <p class="card-text">$${price}</p>
          </div>
        </div>
        <!--Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="d-flex text-center gap-2 justify-content-center">
              <button type="button" data-product-id="${id}" class="btn btn-outline-info btn-show-details" >Details</button>
              <button type="button" class="btn btn-primary">Add to cart</button>
            </div>
          </div>
      </div>
    </div>
    `;
  };
}
