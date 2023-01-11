import Publisher from '../publisher.js';
import ProductModel from './products-model.js';
import ProductView from './products-view.js';

export default class ProductController {
  constructor() {
    this.model = new ProductModel(this.handleLoadData);
    this.view = new ProductView(this.handleShowDetails, this.handleAddToCart);

    this.model.loadData();
    Publisher.subscribe('FILTER_CATEGORIES', this.handleFilterCategories);
    Publisher.subscribe('LOAD_CATEGORIES', this.handleLoadCategories);
    Publisher.subscribe('ORDER_BY_PRICE', this.handleSortByPrice);
    Publisher.subscribe('SEARCH', this.handleSearch);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };

  handleLoadCategories = (categories) => {
    this.model.categories = categories;
  };

  handleSortByPrice = () => {
    const data = this.model.sortByPrice();
    this.view.render(data);
  };

  handleFilterCategories = (categories) => {
    console.log('filter', categories);
    //! change sorting method
    const data = this.model.sortByPrice();
    this.view.render(data);
  };

  handleSearch = (searchVal) => {
    const data = this.model.searchBy(searchVal);
    this.view.render(data);
  };

  handleShowDetails = (ev) => {
    const productId = ev.target.dataset.productId;
    if (productId) {
      Publisher.notify('SHOW_DETAILS', productId);
    }
  }

  handleAddToCart = (ev) => {
    const product = ev.target.dataset.addProduct;
    if (product) {
      const parsedProduct = this.model.parseProduct(product)
      console.log(parsedProduct);
      Publisher.notify('ADD_TO_CART', parsedProduct);
    }
  }
}
