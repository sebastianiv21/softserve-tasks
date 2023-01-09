import ProductModel from "./products-model.js";
import ProductView from "./products-view.js";

export default class ProductController {
  constructor() {
    this.model = new ProductModel(this.handleLoadData);
    this.view = new ProductView();

    this.model.loadData();
  }
  
  handleLoadData = (d) => {
    this.view.render(d);
  }
  }