const formReducer = (state={}, action) => {

    switch(action.type){
        case "FORM_FIRSTLAST_FILLED":
            return Object.assign({}, state, action.payload);
            break;
        case "FORM_ADRESS_FILLED":
            return Object.assign({}, state, action.payload);
            break;
        case "FORM_CREDITCARD_FILLED":
            return Object.assign({}, state, action.payload);
            break;
    }
    return state
};

export {formReducer}