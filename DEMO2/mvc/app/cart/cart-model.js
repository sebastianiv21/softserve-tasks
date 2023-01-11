export default class CartModel {
  cartItems = [];
  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }

  loadData(cartItems = this.cartItems) {
    this.cartItems = cartItems;
    this.handleLoadData(this.cartItems);
  }

  addToCart = (item) => {
    const inCart = this.cartItems.some(el => el.id === item.id);
    if (inCart) {
      return alert('Product already in cart');
    }
    const {id, title, price} = item;
    const cartElement = {id, title, quantity: 1, price};
    this.cartItems.push(cartElement);
    console.log('add to cart', this.cartItems)
    this.loadData(this.cartItems)
  };
}

// how to know if an object is in an array in js?