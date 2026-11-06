import React, { useState } from 'react'
import Card from './Card'

const App = () => {

  let [a,b] = useState(13);
  return (
    // <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5'>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    //   <Card/>
      
    // </div>

    <div className='p-4 text-center align-text-top flex flex-col justify-center'>
      <h1 className={`${a== false ? "bg-blue-700 w-15 h-15 text-center m-3 border-1" : "bg-fuchsia-900 w-15 h-15 text-center m-3 border-1" }`}>{a == false ? "hello" : "hii"}</h1>
      <button className='bg-amber-400 border-2 w-20 text-center h-15' onClick={()=> b(!a)}>
        Click Me
      </button>
    </div>


  )
}

export default App