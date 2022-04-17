import React from 'react'

const petItem = ({pet}) => {

    const {name,type,owner,color} = pet;
    console.log(pet)
    return (
        <div className='card bg-light'>
            <div className='grid-2'>
                <span className='data-container'>
                    <h3 className='card-content'>Name: {name}</h3>
                    <h4 className='card-content'>Type: {type}</h4>
                    <h4 className='card-content'>Owner: {owner}</h4>
                    <h4 className='card-content'>Color: {color}</h4>   
                </span>
                <span>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                        className='pet-photo'
                    />
                </span>
            </div>
            

            
        </div>
    )
}

export default petItem