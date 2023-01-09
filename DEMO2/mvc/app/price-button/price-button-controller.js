import PriceButtonView from "./price-button-view.js";

export default class PriceButtonController {
    constructor(){
        this.view = new PriceButtonView(this.handleBtnClick);

        this.view.render()
    }

    handleBtnClick = (direction) => {
        this.view.render(direction);
        console.log('order by price button clicked');
      }
}