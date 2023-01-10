export default class DetailsModel {
  #PRODUCT_LINK = 'https://dummyjson.com/products/';

  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData(id) {
    fetch(`${this.#PRODUCT_LINK}${id}`)
      .then((r) => r.json())
      .then((d) => {
        this.handleLoadData(d);
      });
  }
}
