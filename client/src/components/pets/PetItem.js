import React from 'react'

function petItem() {
    return (
        <div className='card bg-light'>
            <div className='grid-2'>
                <span className='data-container'>
                    <h3 className='card-content'>Pipo</h3>
                    <h4 className='card-content'>Dog</h4>
                    <h4 className='card-content'>Ruy</h4>
                    <h4 className='card-content'>Brown/Black</h4>   
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