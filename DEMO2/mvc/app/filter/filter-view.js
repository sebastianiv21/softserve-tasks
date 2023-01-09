export default class FilterView {
    DOM_FILTER_MENU = document.querySelector('.filter-menu');

    constructor(handleCallback){
        this.handleCallback = handleCallback;
    }

    render(categories) {
        const str = `<h5>CATEGORIES</h5>${this.getFilterHTML(categories)}`;
        this.DOM_FILTER_MENU.insertAdjacentHTML('afterbegin', str);

        this.DOM_FILTER_CATEGORIES = [...this.DOM_FILTER_MENU.querySelectorAll('.form-check')];
        this.DOM_FILTER_CATEGORIES.forEach(category => {
            category.addEventListener('input', this.handleCallback);
        });
    }

    getFilterHTML = categories => {
        const options = categories.map((category, index) => {
            return `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="${category}" id="${index}">
            <label class="form-check-label" for="${index}">
              ${category.toUpperCase()}
            </label>
          </div>`
        }).join('');

        return options;
    }
}
