export default class CartModel {
  cartItems = [];
  #data = 0;
  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData(cartItems = this.cartItems, total = this.total) {
    this.cartItems = cartItems;
    this.total = total;
    this.handleLoadData(this.cartItems, this.total);
  }

  addToCart = (item) => {
    const itemFound = this.cartItems.find(el => el.id === item.id);
    const inCart = itemFound !== undefined;
    if (inCart) {
      this.incrementByOne(itemFound)
    } else {
      const {id, title, price} = item;
      const cartElement = {id, title, quantity: 1, price};
      this.cartItems.push(cartElement);
    }
    
    console.log('add to cart', this.cartItems)
    this.loadData(this.cartItems)
  };

  incrementByOne = (item) => {
    item.quantity += 1;
  }

  calcTotalPrice = (d) => {
    if (!d) {
      return 0
    }
    const total = d.reduce((acc, el) => {
      acc = acc + el.price * el.quantity;
      return acc;
    }, this.#data);
    return total;
  };

  calcTotalItems = (d) => {
    if (!d) {
      return 0
    }
    const items = d.reduce((acc, el) => {
      acc = acc + el.quantity;
      return acc;
    }, this.#data);
    return items;
  };
  // function changeObjectProperty(arr, obj, propName, newValue) {
  //   let foundObject = arr.find(elem => elem.id === obj.id);
  //   if (foundObject) {
  //     foundObject[propName] = newValue;
  //   }
  //}
  
  
}

// how to know if an object is in an array in js?