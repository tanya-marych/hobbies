import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Video from '../components/Video';
import Books from '../components/Books';
import NoteList from '../components/NoteList';
import * as videoActions from '../actions/videoActions';
import * as noteActions from '../actions/noteActions';


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let element;
        switch(this.props.menu[2]){
            case "Books": element = <Books data={this.props.books}/>;break;
            case "Notes": element = <NoteList data={this.props.notes} addNote={this.props.noteActions.addNote} removeNote={this.props.noteActions.removeNote}/>;break;
            default: element = <Video data={this.props.video} addVideo={this.props.videoActions.addVideo}/>;
        }
        return (
            <div>
                <Menu data={this.props.menu}/>
                <div className="workArea">{element}</div>
                );
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
      menu: state.menu,
      video: state.video,
      notes: state.notes,
      books: state.books
  };
}

function mapDispatchToProps (dispatch) {
  return {
      videoActions: bindActionCreators(videoActions,dispatch),
      noteActions: bindActionCreators(noteActions,dispatch)
  };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);
