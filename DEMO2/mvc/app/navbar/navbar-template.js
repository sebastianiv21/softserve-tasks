const template = `
<div class="container-fluid">
  <a class="navbar-brand ms-2" href="#">
    <img src="logo.svg" alt="softshop logo" width="24" class="d-inline-block align-text-top me-1">
    <span>SoftShop</span>
  </a>
  <div class="d-flex align-items-center me-2">
    <button type="button" class="btn btn-primary my-orders-btn me-2" data-bs-toggle="modal" data-bs-target="#myOrdersModal">My Orders</button>
    <button type="button" class="btn btn-primary p-1 position-relative cart-btn-data" data-bs-toggle="modal" data-bs-target="#cartModal"></button>
  </div>
</div>
`;

export default template;
