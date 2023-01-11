import Publisher from '../publisher.js';
import OrdersModel from './orders-model.js';
import OrdersView from './orders-view.js';

export default class OrdersController {
  constructor() {
    this.model = new OrdersModel(this.handleLoadData);
    this.view = new OrdersView();

    this.model.loadData();
    Publisher.subscribe('ON_CREATE_NEW_ORDER', this.handleLoadData);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };
}
