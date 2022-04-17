import React, {useContext,useState} from 'react'
import PetContext from '../../Context/petContext'

const PetForm = () => {
    const petContext = useContext(PetContext);
    const {addPet} = petContext;

     //useState hook
     const[pet,setPet] = useState({
        name: '',
        type: '',
        owner: '',
        color: ''
    });

    const {name,type,owner,color} = pet;

    //update values on pet object
    const onChange = e => setPet({
        //copy current state
        ...pet,
        //asign the new value to the triggered state 
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        addPet(pet);

        setPet({
            name: '',
            type: '',
            owner: '',
            color: ''
        })
    }

    return (
        <div className='pet-form'>
            <form onSubmit={onSubmit}>
                <h1 className='text-primary'>Add Pet</h1>
                <input
                    type= 'text'
                    placeholder='Name'
                    name = 'name'
                    value = {name}
                    onChange = {onChange}
                    required
                />
                <input
                    type= 'text'
                    placeholder='Type'
                    name = 'type'
                    value = {type}
                    onChange = {onChange}
                    required
                />
                <input
                    type= 'text'
                    placeholder='Owner'
                    name = 'owner'
                    value = {owner}
                    onChange = {onChange}
                    required
                />
                <input
                    type= 'text'
                    placeholder='Color'
                    name = 'color'
                    value = {color}
                    onChange = {onChange}
                    required
                />              
                <div>
                    <input type = "submit" value = {'Add pet'} className = "btn btn-primary btn-block"/>
                </div>
            </form>    
        </div>
    )
}

export default PetForm