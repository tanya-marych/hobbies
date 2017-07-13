import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <li className="menu-item"><a href="">{this.props.name}</a></li>
        );
    }
}

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.menu = this.props.data;
    }

    render(){
        return (
            <ul className="menu">
                {this.menu.map((item)=> <MenuItem key={item} name={item} />)}
            </ul>
        );
    }
}

export default Menu;
