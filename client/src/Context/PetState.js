import React, {useReducer} from 'react'
import petContext from './petContext';
import PetReducer from './PetReducer';
import axios from 'axios';

import {
    ADD_PET,
    GET_PETS
} from './types';

const PetState = props => {

    const initialState = {
        pets: [],
    }

    const [state,dispatch] = useReducer(PetReducer, initialState);

    const getPets = async () => {
        const res = await axios.get('/pets');
        dispatch({
            type: GET_PETS,
            payload: res.data
        });
    }

    return (
        <petContext.Provider
            value = {{
                pets: state.pets,
                getPets
            }}>
            {props.children}
        </petContext.Provider>

    )
}

export default PetState