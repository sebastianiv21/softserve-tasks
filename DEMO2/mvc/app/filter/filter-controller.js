import Publisher from "../publisher.js";
import FilterModel from "./filter-model.js";
import FilterView from "./filter-view.js";

export default class FilterController {
    constructor() {
        this.view = new FilterView(this.handleChangeFilter);
        this.model = new FilterModel();

        this.loadAndRenderCategories();
    }

    loadAndRenderCategories = async () => {
        const categories = await this.model.loadCategories();
        Publisher.notify('LOAD_CATEGORIES', categories);
        this.view.render(categories);
    }

    handleChangeFilter = ev => {
        console.log(ev.target.value);
        Publisher.notify('FILTER_CATEGORIES', ev.target.value);
    }
}