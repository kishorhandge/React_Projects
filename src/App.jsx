import React, { useState } from 'react'
import Product from './Product'

const App = () => {

  let[a,b] = useState(13);

  return (

    
    // // type 1 to return both 
    // <div>

    //   <div className="main">
    //   Jay Ganesh

    //   </div>

    // <h2>Jay Shri Krishna</h2>

    // </div>

    // // Type 2 to return both
    //   // <>

    //   //   <div className="main">
    //   //   Jay Ganesh

    //   //   </div>

    //   // <h2>Jay Shri Krishna</h2>

    //   // </>
    

    // // <h1>Hii Black Aryan</h1> --> return only one thing not allowed

    // <div className='w-full h-screen bg-amber-500'>

    //   <Product/>

    // </div>

    // <div className='w-full h-screen bg-amber-700 p-5 text-amber-100'>
    //   <h1>{a}</h1>

    //   <button onClick={()=>b(a+1)}  className='w-40 h-10  bg-black text-amber-50 text-center '>
    // Click Me
    //   </button>
    // </div>

    <div className='w-full h-screen bg-amber-700 p-5 text-amber-100'>
      <Product name="kishor"/>
      </div>



  )
}

export default App
