import FormOrderModel from "./form-order-model.js";
import FormOrderView from "./form-order-view.js";

export default class FormOrderController {
    constructor(){
        this.model = new FormOrderModel();
        this.view = new FormOrderView(this.handleSaveTask);
    }

    handleSaveTask = _ => {
        this.view.closeOffValidation();
        const data = this.view.getInputsData();
        const isValidData = this.model.checkData(data);
        if(isValidData.total){
            this.view.closeModal();
            //Publisher.notify('ON_CREATE_NEW_TASK', data);
        }else{
            this.view.showInValid(isValidData);
        }
        console.log(data, isValidData);        
    } 
}