export default class ProductModel {
  #DATA_LINK = 'https://dummyjson.com/products?limit=100';
  #filteredData = null;
  #data = [];
  #categories = [];
  #isRightDirection = true;
  #prevSorting = null;

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

    switch (this.#prevSorting) {
      case 'when': {
        const callback = (a, b) =>
          multi * (new Date(a.when) - new Date(b.when));
        this.#filteredData.sort(callback);
        break;
      }
      case 'name': {
      }
      case 'status': {
        const callback = (a, b) => multi * (a.name > b.name ? 1 : -1);
        this.#filteredData.sort(callback);
        break;
      }
    }

    return {
      sortType: this.#prevSorting,
      data: this.#filteredData,
      direction: this.#isRightDirection,
    };
  };

  filterBy = (category) => {};

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
}
