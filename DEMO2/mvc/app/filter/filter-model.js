export default class FilterModel {
  #DATA_LINK_CATEGORIES = 'https://dummyjson.com/products/categories';

  loadCategories = async () => {
    const res = await fetch(this.#DATA_LINK_CATEGORIES);
    this.categories = await res.json();
    return this.categories;
  }
    
}