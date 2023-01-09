import template from './search-template.js';

export default class SearchView {
  DOM_SEARCH_COMPONENT = document.querySelector('.search-component');

  constructor(handleSearch) {
    this.DOM_SEARCH_COMPONENT.insertAdjacentHTML('afterbegin', template);
    this.DOM_SEARCH_INPUT =
      this.DOM_SEARCH_COMPONENT.querySelector('.input-search');

    this.DOM_SEARCH_INPUT.addEventListener('input', handleSearch);
  }

  get searchValue() {
    return this.DOM_SEARCH_INPUT.value;
  }
}
