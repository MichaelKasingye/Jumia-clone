export const getbasketTotal = (basket)=> basket?.reduce((amount,item) => item.price + amount,0);
export const initialState = {
    basket:[],
    user: null,
};

 function reducer(state,action){
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':
            //Login to add to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
            case 'REMOVE_TO_BASKET':
            //Login to add to basket
            //cloned the Basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index>=0){
                //item exists in basket, remove it ...
                newBasket.splice(index,1);
            }else{
                console.warn(`can remove product by this ID: ${action.id}`)
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;