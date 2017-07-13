const initialState = ["aatr_2MstrI","ovKMJQWR9MM","papuvlVeZg8"];

export default function videoState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_VIDEO':
            return [...state, action.payload];
        default:
            return state;
    }
}
