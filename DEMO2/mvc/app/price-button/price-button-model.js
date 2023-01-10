export default class PriceButtonModel {
  #direction = false;
  #isSorted = false;

  toggleDir() {
    this.#isSorted = true;
    this.#direction = !this.#direction;

    return {
      isSorted: this.#isSorted,
      direction: this.#direction,
    };
  }
}
