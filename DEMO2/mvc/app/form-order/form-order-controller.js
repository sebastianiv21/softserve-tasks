import Publisher from "../publisher.js";
import FormOrderModel from "./form-order-model.js";
import FormOrderView from "./form-order-view.js";

export default class FormOrderController {
    constructor(){
        this.model = new FormOrderModel();
        this.view = new FormOrderView(this.handleSaveOrder);

        Publisher.subscribe('SET_CART_ORDER', this.handleCartOrderData);
    }

    handleSaveOrder = _ => {
        this.view.closeOffValidation();
        const formData = this.view.getInputsData();
        const isValidData = this.model.checkData(formData);
        const cart = this.model.cart;
        const data = {formData, cart};
        
        if(isValidData.total){
            this.view.closeModal();
            alert('Order submited successfully')
            Publisher.notify('ON_CREATE_NEW_ORDER', data);
        }else{
            this.view.showInValid(isValidData);
        }
    } 

    handleCartOrderData = cart => {
        this.model.cart = cart;
    }
}