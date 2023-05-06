import { combineReducers } from "redux";
import movReducer from './reducer';
import MoviesReducer from './movieReducer';


export default combineReducers({

    favourites:movReducer,   
    movies:MoviesReducer   
})