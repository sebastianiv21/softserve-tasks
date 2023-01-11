import Publisher from '../publisher.js';
import OrdersModel from './orders-model.js';
import OrdersView from './orders-view.js';

export default class OrdersController {
  constructor() {
    this.model = new OrdersModel(this.handleLoadData);
    this.view = new OrdersView();

    this.model.loadData();
    Publisher.subscribe('ON_CREATE_NEW_ORDER', this.handleNewOrder);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };

  handleNewOrder = (d) => {
    this.model.addNewOrder(d);
    this.view.render(this.model.orders);
  };
}
