import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';

export default function(state = {}, action) {   //현재 state, 바뀔 action
    switch(action.type) {
        case LOGIN_USER :
            return { ...state, loginSuccess: action.payload }
            break;
        
        case REGISTER_USER :  
            return { ...state, registerSuccess : action.payload }
            break;
    }
    
    return state;
}