import React from 'react';
import Menu from './Menu';

import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Menu data={this.props.data} addVideo={this.props.onAddVideo}/>
            </div>
        );
    }
}

export default connect(
    state =>({
        data: state
    }),
    dispatch => ({
        onAddVideo:(source) => {
            dispatch({type:'ADD_VIDEO',source:source});
        }
    })
)(App);
