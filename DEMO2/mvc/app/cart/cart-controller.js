import Publisher from '../publisher.js';
import CartModel from './cart-model.js';
import CartView from './cart-view.js';

export default class CartController {
  constructor() {
    this.model = new CartModel(this.handleLoadData);
    this.view = new CartView(this.handleDeleteFromCart, this.handleChangeQuantity, this.handleMakeOrder);

    this.model.loadData();
    Publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
  }

  handleLoadData = (d) => {
    const total = this.model.calcTotalPrice(d);
    const quantity = this.model.calcTotalItems(d);
    const data = { total, quantity };
    Publisher.notify('UPDATE_CART', data);
    this.view.render(d, total);
  };

  handleAddToCart = (d) => {
    this.model.addToCart(d);
  };

  handleDeleteFromCart = (ev) => {
    const productId = ev.target.dataset.deleteId;
    if (productId) {
      this.model.deleteFromCart(productId);
    }
  };

  handleChangeQuantity = (ev) => {
    const value = Number(ev.target.value);
    const product = ev.target.dataset.inputProduct;
    if (product) {
      const parsedProduct = this.model.parseObject(product);

      this.model.changeQuantity(parsedProduct, value);
    }
  }

  handleMakeOrder = (ev) => {
    const cart = ev.target.dataset.makeOrder;
    if (cart) {
      const parsedCart = this.model.parseObject(cart);
      this.model.makeOrder(parsedCart);
    }
  }
}
