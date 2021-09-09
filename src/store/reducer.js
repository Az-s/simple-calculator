const initialState = { 
    calculate : 0, 
};

const reducer = (state = initialState , action) => {

   switch(action.type) {
        case 'GET_VALUE':
            return {
                ...state,
                calculate: state.calculate === 0 ? (state.calculate + parseInt(action.value)) : state.calculate + action.value,
            };
        case 'CALCULATE':
            return {
                ...state,
                calculate: eval(state.calculate),
            };
        case 'DELETE_LAST':
            return {
                ...state,
                calculate: String(state.calculate).slice(0, -1),
            };
        default: break;
    }

    return state;
};

export default reducer;
