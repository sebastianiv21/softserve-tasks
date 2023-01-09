import NavbarController from './navbar/navbar-controller.js'
import PriceButtonController from './price-button/price-button-controller.js';
import ProductController from './products/products-controller.js';
import SearchController from "./search/search-controller.js";
import FilterController from './filter/filter-controller.js';

const navbar = new NavbarController();
const products = new ProductController();
const priceButton = new PriceButtonController();
const search = new SearchController();
const filter = new FilterController();
