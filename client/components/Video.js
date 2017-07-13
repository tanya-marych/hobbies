import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                listType:"playlist",
                playlist:this.props.source.join(",")
            }
        };
        return <YouTube opts={opts} />;
    }
}

class AddVideo extends React.Component{
    constructor(props){
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e){
        e.preventDefault();
        let input = this.input.value;
        this.input.value='';
        //parse string
        let parse = input.split("=");
        if(parse.length===2 && parse[0]==='https://www.youtube.com/watch?v'){
            this.props.addVideo(parse[1]);
        }else{
            //throw Error
        }
    }

    render(){
        return (
            <form className="addVideo" onSubmit={this._handleClick}>
                <input type="text" placeholder="Paste YouTube link here" ref={(input) => this.input = input}/>
                <input type='submit' value='Add'/>
            </form>
        );
    }
}

class Video extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <AddVideo list={this.props.data} addVideo={this.props.addVideo}/>
                <Player className="player" source={this.props.data}/>
            </div>

        );
    }
}

export default Video;
