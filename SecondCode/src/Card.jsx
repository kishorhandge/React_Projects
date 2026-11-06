import React from 'react'

const Card = () => {
  return (
    <div className='text-cyan-950 bg-amber-200 w-80 p-4 m-10 text-center rounded-xl shadow-xl/20'>
      
      <h1 className='text-xl font-bold mb-3'>Jay Ganesh 🙏</h1>
      
      <p className='text-sm mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form className='flex flex-col gap-3'>
        <input 
          type="text" 
          placeholder='Enter the Name'
          className='p-2 rounded border'
        />
        
        <input 
          type="text" 
          placeholder='Enter the Age'
          className='p-2 rounded border'
        />

        <button 
          type="submit"
          className="bg-cyan-800 text-white p-2 rounded hover:bg-cyan-600 transition"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Card