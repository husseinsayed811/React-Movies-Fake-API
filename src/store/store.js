
import { legacy_createStore as createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReduser from './reducer/combineReduser';


// const store=createStore(movReducer) 

const store=createStore(combineReduser ,  composeWithDevTools(applyMiddleware(thunk)) )


export default store