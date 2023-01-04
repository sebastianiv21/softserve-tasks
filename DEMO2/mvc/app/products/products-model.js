export default class ProductModel {
  #DATA_LINK = 'http://localhost:8080/';
  #data = [];

  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData() {
    fetch(this.#DATA_LINK)
      .then((r) => r.json())
      .then((d) => {
        this.#data = d;
        this.handleLoadData(d);
      });
  }
}
