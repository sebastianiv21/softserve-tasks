import Publisher from "../publisher.js";
import ProductModel from "./products-model.js";
import ProductView from "./products-view.js";

export default class ProductController {
  constructor() {
    this.model = new ProductModel(this.handleLoadData);
    this.view = new ProductView();

    this.model.loadData();
    Publisher.subscribe('FILTER_CATEGORIES', this.handleFilterCategories);
    Publisher.subscribe('LOAD_CATEGORIES', this.handleLoadCategories)
    Publisher.subscribe('SEARCH', this.handleSearch)
  }
  
  handleLoadData = (d) => {
    this.view.render(d);
  }

  handleLoadCategories = (categories) => {
    this.model.categories = categories; 
  }

  handleSort = (ev) => {
    const sort = ev.target.dataset.sort;
    if (sort) {
        const {data, sortType, direction} = this.model.sortBy(sort);
        this.view.render(data, sortType, direction);
    }
  }

  handleFilterCategories = categories => {
    console.log('filter', categories);
    //
    const {data, sortType, direction} = this.model.filterBy(category);
    this.view.render(data, sortType, direction);
  }

  handleSearch = searchVal => {
    console.log('search', searchVal);
    const {data, sortType, direction} = this.model.searchBy(searchVal);
    this.view.render(data, sortType, direction);
  }
  }