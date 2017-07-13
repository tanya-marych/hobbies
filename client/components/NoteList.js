import React from 'react';

class PaletteItem extends React.Component{
    constructor(props) {
        super(props);
    }

    _selectColor(e){
        this.props.selectColor(this.props.color);
    }

    render(){
        let element;
        return (
            <label className="paletteItem">
                <input type="radio" name="palette" onClick={this._selectColor.bind(this)}/>
                <span style={{"backgroundColor":this.props.color}} />
            </label>
        );
    }
}

class Palette extends React.Component{
    constructor(props) {
        super(props);
        this.colors = ["#99CCFF","#33CCCC","#339999","#66CCFF","#0099CC"];
    }

    componentDidMount(){
        this.palette.children[0].children[0].click();//костыль
    }

    render(){
        return (
            <div className="palette" ref={(palette)=>this.palette = palette}>
                {this.colors.map((item,index) => <PaletteItem key={index} color={item} selectColor={this.props.selectColor}/>)}
            </div>
        );
    }
}

class AddNote extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleClick(e){
        e.preventDefault();
        let text = this.textarea.value;
        this.textarea.value='';
        this.props.addNote({text, "color":this.color});
    }

    _selectColor(color){
        this.color = color;
    }

    render(){
        return (
            <form className="addNote" onSubmit={this._handleClick.bind(this)}>
                <textarea placeholder="Paste text here" ref={(textarea) => this.textarea = textarea}/>
                <Palette selectColor={this._selectColor.bind(this)}/>
                <input type='submit' value='Add'/>
            </form>
        );
    }
}

class Note extends React.Component{
    constructor(props) {
        super(props);
    }

    _removeNote(){
        this.props.removeNote(this.props.id);
    }

    render(){
        return(
            <div className='note' style={{'backgroundColor':this.props.color}}>
                <span onClick={()=>this._removeNote()}>X</span>
                {this.props.text}
            </div>
        );
    }
}

export default class NoteList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <AddNote addNote={this.props.addNote}/>
                <div>
                    {this.props.data.map(item => <Note key={item.id} id={item.id} color={item.color} text={item.text} removeNote={this.props.removeNote}/>)}
                </div>
            </div>
        );
    }
}
