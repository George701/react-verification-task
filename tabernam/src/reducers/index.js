import { combineReducers } from 'redux';
import essentialReducer from './essentialReducer';
import navReducer from './navReducer';
import commentReducer from './commentReducer';

export default combineReducers({
    // this will be available in props
    // for basic design elements
    preview: essentialReducer,
    navigator: navReducer,
    comment: commentReducer
});