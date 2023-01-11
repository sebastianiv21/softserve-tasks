export default class FormOrderModel {
    regExpName = /^[\w\s]{2,30}$/i;
    regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regExpPhone = /^[0-9]{6,20}$/;

    checkName = name => {
        return this.regExpName.test(name.trim());
    }

    checkEmail = email => {
        return this.regExpEmail.test(email.trim());
    }

    checkPhone = phone => {
        return this.regExpPhone.test(phone.trim());
    }

    checkData = ({name, email, phone}) => {
        const isName = this.checkName(name);
        const isEmail = this.checkEmail(email);
        const isPhone = this.checkPhone(phone);
        
        return {
            total : isName && isEmail && isPhone,
            inputs : [
                {
                    name : 'name',
                    value : isName
                }, 
                {
                    name : 'email',
                    value : isEmail
                },
                {
                    name : 'phone',
                    value : isPhone
                }
            ]
        };
    }
}