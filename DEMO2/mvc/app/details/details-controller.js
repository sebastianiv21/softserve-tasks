import Publisher from "../publisher.js";
import DetailsModel from "./details-model.js";
import DetailsView from "./details-view.js";

export default class DetailsController {
    constructor(){
        this.view = new DetailsView();
        this.model = new DetailsModel(this.handleLoadData);

        Publisher.subscribe('SHOW_DETAILS', this.handleProductId);
    }

    handleLoadData = (d) => {
        this.view.render(d);
      };

    handleProductId = (id) => {
        console.log('handle', id);
        const d = this.model.loadData(id)
        console.log(d);
        this.view.render(d);
    }
}