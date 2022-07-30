import { combineReducers } from 'redux'
import loginReducers from '../Page/Login/stores/reducers'
import itemReducers from '../Page/Home/stores/reducers'
import itemBookReducers from '../Page/Books/stores/reducers'
export default function createReducer() {
    const rootReducer = combineReducers({
        loginReducers,
        itemReducers,
        itemBookReducers,
        
    })
    return rootReducer
}