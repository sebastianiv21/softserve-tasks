import NavbarController from './navbar/navbar-controller.js'
import PriceButtonController from './price-button/price-button-controller.js';
import ProductController from './products/products-controller.js';
import SearchController from "./search/search-controller.js";
import FilterController from './filter/filter-controller.js';
import DetailsController from './details/details-controller.js';
import CartController from './cart/cart-controller.js'
import FormOrderController from './form-order/form-order-controller.js';

const navbar = new NavbarController();
const products = new ProductController();
const priceButton = new PriceButtonController();
const search = new SearchController();
const filter = new FilterController();
const productDetails = new DetailsController();
const cart = new CartController();
const formOrder = new FormOrderController();
