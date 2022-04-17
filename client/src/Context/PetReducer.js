import {
    ADD_PET,
    GET_PETS,
    PET_ERROR
} from './types';

export default(state,action) => {
    switch(action.type){
        case GET_PETS:
            return{
                ...state,
                pets: action.payload,

            };
        case ADD_PET:
            return{
                ...state,
                pets:action.payload
            };
        case PET_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
