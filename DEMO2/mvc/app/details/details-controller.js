import Publisher from '../publisher.js';
import DetailsModel from './details-model.js';
import DetailsView from './details-view.js';

export default class DetailsController {
  constructor() {
    this.view = new DetailsView(this.handleAddToCart);
    this.model = new DetailsModel(this.handleLoadData);

    Publisher.subscribe('SHOW_DETAILS', this.handleProductId);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };

  handleProductId = (id) => {
    this.model.loadData(id);
  };

  handleAddToCart = (ev) => {
    Publisher.notify('ADD_FROM_DETAILS', ev)
  }
}
