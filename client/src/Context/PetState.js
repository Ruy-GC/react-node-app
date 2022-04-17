import React, {useReducer} from 'react'
import petContext from './petContext';
import PetReducer from './PetReducer';
import axios from 'axios';

import {
    ADD_PET,
    GET_PETS,
    PET_ERROR
} from './types';

const PetState = props => {

    const initialState = {
        pets: [],
        error: null
    }

    const [state,dispatch] = useReducer(PetReducer, initialState);

    const getPets = async () => {
        const res = await axios.get('/pets');
        dispatch({
            type: GET_PETS,
            payload: res.data
        });
    }

    const addPet = async pet =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/addPet',pet,config);
            dispatch({
                type: ADD_PET,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: PET_ERROR,
                payload: error.response.msg
            });
        }
    }

    return (
        <petContext.Provider
            value = {{
                pets: state.pets,
                error:state.error, 
                getPets,
                addPet
            }}>
            {props.children}
        </petContext.Provider>

    )
}

export default PetState