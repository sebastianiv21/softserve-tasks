export default class FilterModel {
  #DATA_LINK_CATEGORIES = 'https://dummyjson.com/products/categories';
  #selectedCategories = [];

  loadCategories = async () => {
    const res = await fetch(this.#DATA_LINK_CATEGORIES);
    this.categories = await res.json();
    return this.categories;
  }

  get selectedCategories(){
    return this.#selectedCategories;
  }

  set selectedCategories(categories) {
    this.#selectedCategories = categories; 
  }

  addOrRemove = (category) =>{
    const isSelected = this.#selectedCategories.includes(category);
    if (!isSelected) {
      this.#selectedCategories.push(category)
    } else {
      const catIndex = this.#selectedCategories.indexOf(category);
      this.#selectedCategories.splice(catIndex, 1);
    }
    return this.#selectedCategories;
  }
    
}