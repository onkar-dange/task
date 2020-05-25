import ListReducer from './ListReducer';
import SignUpReducer from './SignUpReducer';

import {combineReducers} from 'redux';

export default combineReducers({
        DrDataList:ListReducer,
        SignUp:SignUpReducer,
    })