import React from 'react'
import PetItem from './PetItem'

const pets = () => {
  return (
    <div className='grid-2'>
        <div>
            Pet Form
        </div>
        <div>
            <PetItem></PetItem>
            <PetItem></PetItem>
        </div>
    
    </div>
  )
}

export default pets