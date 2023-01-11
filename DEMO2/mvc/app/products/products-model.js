export default class ProductModel {
  #DATA_LINK = 'https://dummyjson.com/products?limit=10';
  #filteredData = null;
  #isRightDirection = true;
  #data = [];
  #categories = [];

  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData() {
    fetch(this.#DATA_LINK)
      .then((r) => r.json())
      .then((d) => {
        this.#data = d.products;
        this.handleLoadData(d.products);
      });
  }

  #sort = () => {
    const multi = this.#isRightDirection ? 1 : -1;

    if (!this.#filteredData) {
      this.#filteredData = [...this.#data];
    }

    const callback = (a, b) => multi * (a.price - b.price);

    this.#filteredData.sort(callback);

    return this.#filteredData;
  };

  sortByPrice = () => {
    this.#isRightDirection = !this.#isRightDirection;

    return this.#sort();
  };

  searchBy = (searchVal) => {
    const search = searchVal.trim();
    if (search !== '') {
      const regSearch = new RegExp(search, 'im');

      this.#filteredData = this.#data.filter(({ title }) => {
        const text = `${title}`;
        return regSearch.test(text);
      });
    } else {
      this.#filteredData = [...this.#data];
    }

    return this.#sort();
  };

  set categories(categories) {
    this.#categories = categories;
  }

  parseProduct(product){
    return JSON.parse(product);
  }
}
