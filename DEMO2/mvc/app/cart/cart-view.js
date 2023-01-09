export default class ProductView {
  DOM_PRODUCTS_LIST = document.querySelector('.products-list');

  render = (d) => {
    const str = `
    <section class="container">
      <div class="row gx-5 row-cols-4 justify-content-center">
      ${d.map(this.renderProduct).join('')}
      </div>
    </section>
    `;
    this.DOM_PRODUCTS_LIST.innerHTML = '';
    this.DOM_PRODUCTS_LIST.insertAdjacentHTML('afterbegin', str);
  };

  renderProduct = ({ title, price, image, description }) => {
    return `
    <div class="col mb-5">
      <div class="card h-100">
        <!--Product image-->
        <img class="card-img-top p-2" height="200" src="${image}" alt="${title}">
        <!--Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!--Product name-->
            <h5 class="card-title">${title}</h5>
            <!--Product price-->
            <p class="card-text">$${price}</p>
            <!--Product description-->
            <p class="card-text">${
              description.length >= 150
                ? `${description.slice(0, 150)}...`
                : description
            }</p>
          </div>
        </div>
        <!--Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="d-flex text-center gap-2 justify-content-center">
              <a class="btn btn-outline-primary" href="#">Details</a>
              <a class="btn btn-primary" href="#">Add to cart</a>
            </div>
          </div>
      </div>
    </div>
    `;
  };
}
