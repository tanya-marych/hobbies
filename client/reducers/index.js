import { combineReducers } from 'redux';
import menu from './menu';
import video from './video';
import books from './books';
import notes from './notes';

export default combineReducers({
  menu,
  video,
  books,
  notes
})
