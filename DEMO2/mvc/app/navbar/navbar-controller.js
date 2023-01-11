import Publisher from '../publisher.js';
import NavbarModel from './navbar-model.js';
import NavbarView from './navbar-view.js';

export default class NavbarController {
  constructor() {
    this.model = new NavbarModel(this.handleCartBtnData);
    this.view = new NavbarView();

    this.model.loadData();
    Publisher.subscribe('UPDATE_CART', this.handleCartBtnData);
  }

  handleCartBtnData = (d) => { 
    const total = this.model.calcTotalPrice(d)
    const quantity = this.model.calcTotalItems(d);
    this.view.render(total, quantity);
  };
}
