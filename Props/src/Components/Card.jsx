import React from 'react'

const Card = (props) => {
  return (
      <div className="Card">
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <p>{props.clgname}</p>
        <button>View Details</button>
      </div>
     
  )
}

export default Card
