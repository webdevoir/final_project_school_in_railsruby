import React from 'react'
import {Link} from 'react-router-dom'
import UserLogin from './UserLogin'
import Contactus from './Contactus'
import Newsletter from './Newsletter'


const Main = () => (
  <div ><ul className="nav"> 
  <li><Link to="/Newsletter">Newsletter</Link></li>
 
  <li><Link to="/Contactus">Contactus</Link></li>
  <li><Link to="/UserLogin">UserLogin</Link></li>
 
  </ul></div>
)

export default Main;
