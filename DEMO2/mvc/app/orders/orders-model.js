export default class OrdersModel {
  orders = JSON.parse(localStorage.getItem('orders')) ?? [];
  
  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData(d = this.orders) {
    this.handleLoadData(d);
  }

  addNewOrder = d => {
    this.orders.push(d);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  get orders() {
    return this.orders;
  }

  set orders(orders) {
    this.orders = orders;
  }
}
