export const totalItems = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0)
};

export const totalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)
};

const CartReducer = (state, action) => {
    switch (action.type) {

        case "Add":
            const existingItem = state.find(item => item.id === action.course.id)

            if (existingItem) {
                return state.map(item =>
                    item.id === action.course.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...state, { ...action.course, quantity: 1 }];
            }

        case "Remove":
            return state.filter(item => item.id !== action.id);

        case "Increase":
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case "Decrease":
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

        default:
            return state;
    }
}

export default CartReducer

/*
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.course];

        case "Remove":

        case "Increase":
            const IndexI = state.findIndex(item => item.id === action.id)
            state[IndexI].quantity += 1;
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex(item => item.id === action.id)
            state[IndexD].quantity -= 1
            return [...state]

        default:
            return state;
    }
}

export default CartReducer

*/