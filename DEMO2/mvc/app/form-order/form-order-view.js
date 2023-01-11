import template from "./form-order-template.js";

export default class FormOrderView {
    DOM_FORM_ORDER_CONTAINER = document.querySelector('.form-order-container');

    constructor(callback){
        this.DOM_FORM_ORDER_CONTAINER.insertAdjacentHTML('afterbegin', template);
        this.DOM_MODAL_BTN_SAVE = this.DOM_FORM_ORDER_CONTAINER.querySelector('.btn-order-save');
        this.DOM_MODAL_BTN_CLOSE = this.DOM_FORM_ORDER_CONTAINER.querySelector('.btn-order-cancel');

        this.DOM_MODAL_BTN_SAVE.addEventListener('click', callback);

        this.DOM_MODAL_INPUTS = [...this.DOM_FORM_ORDER_CONTAINER.querySelectorAll('.input-order')];
    }

    getInputsData = _ => {
        return this.DOM_MODAL_INPUTS.reduce((acc, el) => {
            acc[el.dataset.order] = el.value;
            return acc;
        }, {});
    } 

    closeModal = _ => {
        this.DOM_MODAL_BTN_CLOSE.click();
    }

    closeOffValidation = _ => {
        this.DOM_MODAL_INPUTS.forEach(el => el.classList.remove('is-invalid'));
    }

    showInValid = ({ inputs }) => {
        inputs.forEach(({name, value}) => {
            if(!value){
                const element = this.DOM_MODAL_INPUTS.find(el => {
                    return el.dataset.order == name;
                });
                
                element.classList.add('is-invalid');
            }
        });
    }




}