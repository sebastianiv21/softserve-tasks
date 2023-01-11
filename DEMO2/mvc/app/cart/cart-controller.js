import Publisher from '../publisher.js';
import CartModel from './cart-model.js';
import CartView from './cart-view.js';

export default class CartController {
  constructor() {
    this.model = new CartModel(this.handleLoadData);
    this.view = new CartView();

    this.model.loadData();
    Publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
  }

  handleLoadData = (d) => {
    const total = this.model.calcTotalPrice(d)
    const quantity = this.model.calcTotalItems(d);
    const data = {total, quantity};
    Publisher.notify('UPDATE_CART', data);
    this.view.render(d, total);
  };

  handleAddToCart = (d) => {
    this.model.addToCart(d);
  };
}
