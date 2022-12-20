import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'
import delete_FILL0_wght400_GRAD0_opsz48 from '../assets/delete_FILL0_wght400_GRAD0_opsz48.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({recipes}) {
  const {mode} = useTheme() 
  if(recipes.length===0){
    return <div className='error'>No recipes to load...</div>
  }
  const handleclick = (id)=>{
  projectFirestore.collection('recipes').doc(id).delete()
  }

  
  return (
    <div className='recipe-list'>
        {recipes.map(recipe =>(
      <div key={recipe.id} className={`card ${mode}`}>
        <h3>{recipe.title}</h3>
        <p>{recipe.cookingTime}</p>
        <div>{recipe.method.substring(0,100)}...</div>
        <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
       <img
       className='delete'
       src={delete_FILL0_wght400_GRAD0_opsz48}
      onClick={() => handleclick(recipe.id)}
       />

        </div>
      ))}
    </div>
  )
}
