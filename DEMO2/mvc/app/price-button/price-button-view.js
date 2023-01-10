export default class PriceButtonView {
    DOM_BTN_ORDER_PRICE = document.querySelector('.btn-order-price');

    constructor(callback){
        this.DOM_BTN_ORDER_PRICE.addEventListener('click', callback);
    }

    render = (direction, isSorted) => { 
        const dir = direction ? '▼' : '▲';
        const str = `
            Order by price ${isSorted ? dir : ''}
        `;
        
        this.DOM_BTN_ORDER_PRICE.innerHTML = '';
        this.DOM_BTN_ORDER_PRICE.insertAdjacentHTML('afterbegin', str);
    }
}