import template from './navbar-template.js';

export default class NavbarView {
  DOM_NAVBAR = document.querySelector('.navbar');

  constructor() {
    this.DOM_NAVBAR.insertAdjacentHTML('afterbegin', template);
  }
}
