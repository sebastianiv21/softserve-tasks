const template = `
<div class="modal fade" id="formOrderModal" tabindex="-1" aria-labelledby="formOrderModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content form-order-content">
  <div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Order Info</h1>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">
  <div class="input-group input-group-sm mb-3">
      <span class="input-group-text">Name</span>
      <input type="text" class="form-control input-order" aria-label="order name" data-order="name">
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text">Phone</span>
      <input type="text" class="form-control input-order" aria-label="order phone" data-order="phone">
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text">Email</span>
      <input type="text" class="form-control input-order" aria-label="order email" data-order="email">
    </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary btn-order-cancel"
    data-bs-dismiss="modal"
  >
    Cancel
  </button>
  <button 
    type="button" 
    class="btn btn-primary btn-order-save"
    >
        Make order
    </button>
</div>
  </div>
</div>
</div>
`;

export default template;