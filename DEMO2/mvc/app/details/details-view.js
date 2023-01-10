export default class DetailsView {
  DOM_DETAILS_CONTAINER = document.querySelector('.details-container');

  render = (d) => {
    const {
      title,
      brand,
      thumbnail,
      category,
      price,
      rating,
      stock,
      description,
    } = d;
    const str = `
    <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailsModalLabel">${title} - ${brand}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex">
          <img src="${thumbnail}" alt="${title}" class="w-25">
          <div>
            <h5>${category.toUpperCase()}</h5>
            <h6>$${price}</h6>
            <h6>Rating (${rating}/5)</h6>
            <h6>In stock: ${stock}</h6>
            <h6>${description}</h6>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
    `;
    this.DOM_DETAILS_CONTAINER.innerHTML = '';
    this.DOM_DETAILS_CONTAINER.insertAdjacentHTML('afterbegin', str);
  };
}
