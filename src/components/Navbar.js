import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return(
      <div  className='navbar'>
        <ul>
            <li> <Link  to="/">Home</Link> </li>
            <li> <Link  to="./Guilty.js">Guilty</Link> </li>
             <li> <Link  to="./Happy.js">Happy</Link> </li>
             <li> <Link  to="./Sleepy.js">Sleepy</Link> </li>
         </ul>
     </div>
      
    

  )
}

export default NavBar