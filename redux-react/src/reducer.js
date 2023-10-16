const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "PLS":
            return {
                ...state,
                value: state.value + 5
            };
        case "MNS":
            return {
                ...state,
                value: state.value - 3
            };
        case "ZERO":
            return {
                ...state,
                value: state.value * 0
            };
        case "RND":
            const randomValue = Math.floor(Math.random() * 10);
            const payload = randomValue === 0 ? 1 : randomValue;
            return {
                ...state,
                value: state.value * payload
            };
        default:
            return state;
    }
};

export default reducer;
