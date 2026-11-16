import React from 'react'

const Card = (props) => {
  return (

    <div className='Card'>
      <div className='Top'>

      <img src={props.image} alt="" />
      <button>Save</button>
      </div>

      <div className='Center'>
        <h1>{props.Company} <span>{props.days} Days Ago </span></h1>
        <h2>{props.position}</h2>
        <div className='DurationLvl'>
          <h3>{props.Duration}</h3>
          <h3>{props.Level}</h3>
        </div>
       
      </div>

      <div className='Bottom'>
        <div className='BottomX'>
          
          <div className='btn'>
             
          <h5>{props.location}</h5>
              <button>Apply</button>
          </div>
          
        </div>
      
      </div>
    </div>
      
     
  )
}

export default Card
