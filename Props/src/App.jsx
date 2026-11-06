import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parents'>
      <Card name = 'Aryan' age = {21} clgname= 'FMS Delhi ' image='https://images.unsplash.com/photo-1723952776525-f47783050edf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjR8fHxlbnwwfHx8fHw%3D'/>
      <Card name = 'Kishor' age = {22} clgname= ' IIM Banglore ' image='https://images.unsplash.com/photo-1763227676675-36ba34c26545?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTd8fHxlbnwwfHx8fHw%3D'/>
      <Card name = 'Ankur' age = {20} clgname= ' OXFORD College of Engineering ' image= 'https://images.unsplash.com/photo-1775651966150-8a476032e612?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDl8fHxlbnwwfHx8fHw%3D'/>
      <Card name = 'Sidhu' age = {70} clgname= ' IIT Bombay Shrirampur' image='https://images.unsplash.com/photo-1774199616762-31d947dc7d35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name = 'don' age = {70}  clgname= ' DR. D . Y Patil College of Engineering ' image = 'https://images.unsplash.com/photo-1776779399573-0c19831317df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App
