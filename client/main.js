import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    "menu":["Video","Books","Todo"],
    "videos":["aatr_2MstrI","ovKMJQWR9MM","papuvlVeZg8"]
};
function playlist(state = initialState,action){
    if(action.type=="ADD_VIDEO"){
        let newState = Object.assign({},state);
        newState.videos.push(action.source);
        return newState;
    }
    return state;
}
const store = createStore(playlist);

store.subscribe(()=>{console.log(store.getState());});
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);
