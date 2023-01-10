import Publisher from '../publisher.js';
import PriceButtonModel from './price-button-model.js';
import PriceButtonView from './price-button-view.js';

export default class PriceButtonController {
  constructor() {
    this.model = new PriceButtonModel();
    this.view = new PriceButtonView(this.handleBtnClick);

    this.view.render();
  }

  handleBtnClick = () => {
    const { direction, isSorted } = this.model.toggleDir();
    this.view.render(direction, isSorted);
    Publisher.notify('ORDER_BY_PRICE', direction);
  };
}
