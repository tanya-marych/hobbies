import React from 'react';
import Video from './Video';
import Books from './Books';
import Todo from './Todo';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(e,index){
        e.preventDefault();
        this.props.click(index);
    }
    render(){
        return(
            <li className="menu-item" onClick={(e) => this._handleClick(e,this.props.name)}><a href="">{this.props.name}</a></li>
        );
    }
}

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.menus = this.props.data.menu;
        this.state = {menuItem:this.props.data[0]};
        this._changeMenuItem = this._changeMenuItem.bind(this);
    }
    _changeMenuItem(item){
        this.setState({menuItem:item});
    }
    render(){
        let element;
        switch(this.state.menuItem){
            case "Books": element = <Books />;break;
            case "Todo": element = <Todo />;break;
            default: element = <Video source={this.props.data.videos} addVideo={this.props.addVideo}/>;
        }
        return (
            <div>
                <ul className="menu">
                    {this.menus.map((item)=> <MenuItem key={item} name={item} click={this._changeMenuItem}/>)}
                </ul>
                <div className="workArea">{element}</div>
            </div>
        );
    }
}

export default Menu;
