const initialState = [{
        "id":0,
        "text":"eat something tasty :)",
        "color":"#33CCCC"
    },{
        "id":1,
        "text":"go walking",
        "color":"#339999"
    },{
        "id":2,
        "text":"read book",
        "color":"#66CCFF"
    }
];

export default function noteState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload];
        case 'REMOVE_NOTE':
            return state.filter((item)=>{
                if(item.id==action.payload)
                    return null;
                return item;
            });
        default:
            return state;
    }
}
