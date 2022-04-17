import {
    ADD_PET,
    GET_PETS
} from './types';

export default(state,action) => {
    switch(action.type){
        case GET_PETS:
            return{
                ...state,
                pets: action.payload,

            };
        default:
            return state;
    }
}
