export default class NavbarModel {
  #data = 0;
  constructor(handleCartBtnData) {
    this.handleCartBtnData = handleCartBtnData;
  }

  loadData() {
    const d = this.#data;
    this.handleCartBtnData(d);
  }  
}
