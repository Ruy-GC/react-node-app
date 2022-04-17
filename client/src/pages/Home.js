import React from 'react'
import Pets from '../components/pets/Pets'

function Home() {
  return (
    <div className='grid-2'>
        <div>
            Pet Form
        </div>
        <div>
            <Pets/>
        </div>
    
    </div>
  )
}

export default Home