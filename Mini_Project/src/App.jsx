import React from 'react'
import Card from './Components/Card'

 {/* <Card Level = 'Chairman' salary = '300$' location =  'Delhi' Duration = 'Part Time + Full' days = {10} position = 'Ios Developer' Company = 'Apple' image = 'https://pbs.twimg.com/profile_images/1892248257516224513/SzZdRSkx.png'/>
      <Card Level = 'Junior' salary = '80$' location =  'Nashik' Duration = 'Intership' days = {2} position = 'AIML Developer' Company = 'Nvidia' image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTe7GVHEJBpESbT2tjMdi7w_PFai-GTDvy2A&s'/> */}

const App = () => {

  const Arr =[
  ['Senior', '190$', 'San Francisco', 'Full Time', 7, 'Platform Engineer', 'Adobe', 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png'],

  ['Mid-Level', '140$', 'Bangalore', 'Full Time', 5, 'Backend Developer', 'Salesforce', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'],

  ['Junior', '100$', 'Hyderabad', 'Internship', 2, 'Frontend Developer', 'Uber', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'],

  ['Lead', '210$', 'New York', 'Full Time', 8, 'Data Engineer', 'Twitter (X)', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_wps6UzXYBCYjh-8jgTPYiPXKRUj8XeWlQ&s'],

  ['Senior', '230$', 'Seattle', 'Full Time', 9, 'Cloud Architect', 'Intel', 'https://static.vecteezy.com/system/resources/previews/021/495/920/non_2x/intel-brand-logo-symbol-black-design-software-computer-illustration-free-vector.jpg'],

  ['Executive', '175$', 'London', 'Full Time', 6, 'AI Engineer', 'SAP', 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg'],

  ['Junior', '95$', 'Pune', 'Internship', 3, 'Software Tester', 'PayPal', 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'],

  ['Lead', '220$', 'Toronto', 'Full Time', 7, 'Security Engineer', 'Cisco', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg'],

  ['Mid-Level', '155$', 'Dublin', 'Full Time', 5, 'Full Stack Developer', 'Spotify', 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'],

  ['Intern', '70$', 'Berlin', 'Internship', 1, 'Web Developer', 'Dropbox', 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg'],

  
  ['Senior', '180$', 'Bangalore', 'Full Time', 7, 'Backend Developer', 'Meta', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'],

  ['Mid-Level', '150$', 'Hyderabad', 'Full Time', 5, 'Software Engineer', 'Google', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'],

  ['Junior', '120$', 'Chennai', 'Internship', 2, 'Frontend Developer', 'Amazon', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'],

  ['Lead', '220$', 'Seattle', 'Full Time', 8, 'Cloud Engineer', 'Microsoft', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'],

  ['Senior', '250$', 'California', 'Full Time', 9, 'iOS Developer', 'Apple', 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'],

  ['Executive', '170$', 'New York', 'Full Time', 6, 'Data Scientist', 'Netflix', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'],

  ['Junior', '110$', 'Austin', 'Internship', 3, 'ML Engineer', 'Google', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'],

  ['Senior', '230$', 'London', 'Full Time', 8, 'System Architect', 'Amazon', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'],

  ['Lead', '210$', 'Toronto', 'Full Time', 7, 'AI Engineer', 'Meta', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'],

  ['Mid-Level', '160$', 'Dublin', 'Full Time', 5, 'Full Stack Developer', 'Microsoft', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg']

];
  return (
    <div className='parents'>
      {Arr.map((elem, index) => (
        
  <Card
    key={index}
    Level={elem[0]}
    salary={elem[1]}
    location={elem[2]}
    Duration={elem[3]}
    days={elem[4]}
    position={elem[5]}
    Company={elem[6]}
    image={elem[7]}
  />
))}

       
    </div>
  )
}

export default App
