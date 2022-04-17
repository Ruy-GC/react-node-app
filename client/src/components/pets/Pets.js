import React,{Fragment,useContext,useEffect} from 'react'
import PetContext from '../../Context/petContext'
import PetItem from './PetItem'
import { v4 as uuidv4 } from 'uuid';

const Pets = () => {

    const petContext = useContext(PetContext)
    const {pets,getPets} = petContext;
    useEffect(() => {
        getPets();
        //eslint-diable-next-line
    },[]);

    return (
        <Fragment>
            
            {pets !== null ? 
                Object.keys(pets).map(pet => (
                    <PetItem key = {uuidv4()} pet = {pets[pet]}/>
                ))
            :
                <h2>No pets registered</h2>
            }
        </Fragment>
    )
}

export default Pets