import OrdersModel from './orders-model.js';
import OrdersView from './orders-view.js';

export default class OrdersController {
  constructor() {
    this.model = new OrdersModel(this.handleLoadData);
    this.view = new OrdersView();

    this.model.loadData();
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };
}
