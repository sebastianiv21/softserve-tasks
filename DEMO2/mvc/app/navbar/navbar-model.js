export default class NavbarModel {
  #data = 0;
  constructor(handleCartBtnData) {
    this.handleCartBtnData = handleCartBtnData;
  }

  loadData() {
    const d = this.#data;
    this.handleCartBtnData(d);
  }

  calcTotalPrice = (d) => {
    if (!d) {
      return 0
    }
    const total = d.reduce((acc, el) => {
      acc = acc + el.price * el.quantity;
      return acc;
    }, this.#data);
    return total;
  };

  calcTotalItems = (d) => {
    if (!d) {
      return 0
    }
    const items = d.reduce((acc, el) => {
      acc = acc + el.quantity;
      return acc;
    }, this.#data);
    return items;
  };
}
