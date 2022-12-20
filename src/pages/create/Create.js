import React from 'react'
import './Create.css'
import { useEffect } from 'react'
import { useState,useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
 


export default function Create() {
  const [title,setTitle]=useState('')
  const [method,setMethod]=useState('')
  const [cookingTime,setcookinTime]=useState('')
  const [newingredient,setNewingredient]=useState('')  
  const [ingredients,setingredients]=useState([])
//  const {postData,data,error}=useFetch('http://localhost:3000/recipes','POST')
  const ingredientInput = useRef(null)
  const navigate =useNavigate()
  
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
   // postData({title,method,ingredients,cookingTime:cookingTime + "minutes"})
   const doc= {title,method,ingredients,cookingTime:cookingTime + "minutes"}   
   try{
   await projectFirestore.collection('recipes').add(doc)
   navigate('/')
  }catch(err){
   console.log(err)
  }}
  const handleAdd = (e)=>{
    e.preventDefault()
    const ing = newingredient.trim()
    console.log(ingredients)
    if(ing && !ingredients.includes(ing)){
      setingredients(previngredients => [...previngredients, ing])
    }
    setNewingredient('')
    ingredientInput.current.focus()
  }
  
  //redirect the user when we get data response
  // useEffect(() => {
  // if(data){
   
  //     navigate('/')//it will redirect the user to home page 
  //   // }, 100000)
  // }
  // }, [data])
  return (
    <div className='create'>
    <h2 className='page-title'>Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input type="text" 
                 onChange={(e)=>setTitle(e.target.value)}
                 value={title}
                 required
                 />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input 
             type="text"
             onChange={(e)=>setNewingredient(e.target.value)}
             value={newingredient}
             ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i =><em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea 
          onChange={(e)=>setMethod(e.target.value)} 
           value={method}
           required
           />
        </label>
        <label>
          <span>Cooking Time:</span>
          <input type="number" 
                 onChange={(e)=>setcookinTime(e.target.value)}
                 value={cookingTime}
                 required
                 />
        </label>
        <button className='btn'>submit</button>
      </form>
    </div>
  )
}

