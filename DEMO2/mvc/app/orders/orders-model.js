export default class OrdersModel {
  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData(d) {
    this.handleLoadData(d);
  }
}
