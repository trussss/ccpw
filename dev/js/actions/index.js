export const fillFirstLastNameForm = (data) => {
    console.log("Form was filled: ", data);
    return {
        type: 'FORM_FIRSTLAST_FILLED',
        payload: data
    }
};

export const fillAdressForm = (data) => {
    console.log("Form was filled: ", data);
    return {
        type: 'FORM_ADRESS_FILLED',
        payload: data
    }
};

export const fillCreditcardForm = (data) => {
    console.log("Form was filled: ", data);
    return {
        type: 'FORM_CREDITCARD_FILLED',
        payload: data
    }
};

