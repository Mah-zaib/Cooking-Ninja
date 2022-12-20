import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext' 
//here navbar is our consumer so we use usecontext here 
import { useTheme } from '../hooks/useTheme'

//component
import Searchbar from './Searchbar'
export default function Navbar() {
//  const{color} =useContext(ThemeContext)
const { color } = useTheme()
  return (
    //we use inline style 
   <div className ='navbar' style={{background:color}}>
   <nav>
    
     <Link to="/" className='brand'>
     <h1>Cooking Ninja</h1>
     </Link>
     <Searchbar/>
     <Link to="/create">Create Recipe</Link>
   </nav>
   </div>
  )
}
