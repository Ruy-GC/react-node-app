import React from 'react'
import Pets from '../components/pets/Pets'
import PetForm from '../components/Form/PetForm'

function Home() {
    return (
        <div className='grid-2'>
            <div>
                <center>
                    <PetForm/>    
                </center>
                
            </div>
            <div>
                <center>
                    <Pets/>
                </center>
            </div>
        
        </div>
    )
}

export default Home