import Publisher from "../publisher.js";
import CartModel from "./cart-model.js";
import CartView from "./cart-view.js";

export default class CartController {
    constructor() {
      this.model = new CartModel(this.handleLoadData);
      this.view = new CartView();

      this.model.loadData();
      Publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
    }

    handleLoadData = (d) => {
      Publisher.notify('UPDATE_CART', d);
      this.view.render(d);
    }

    handleAddToCart = (d) => {
      this.model.addToCart(d);
    }
  }