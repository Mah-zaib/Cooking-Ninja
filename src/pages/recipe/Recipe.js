import React from 'react'
import './Recipe.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect,useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
  const {mode} =useTheme()
  const { id } = useParams()
  const [recipe,setRecipe]=useState(null)
const [isPending,setisPending]=useState(false)
const [error,setError]=useState(false)
  // const url = 'http://localhost:3000/recipes/' + id
  // const { data: recipe, isPending, error } = useFetch(url)
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (error) {
  //     //redireect
  //     //history.goBack() *it will also redirect the user to history page 
  //     setTimeout(() => {
  //      navigate('/')//it will redirect the user to home page 
  //     }, 2000)
  //   }
  // }, [error,navigate])

 const handleclick =()=>{
  projectFirestore.collection('recipes').doc(id).update({
    title:"something completely different"
  })
 }




//   useEffect(()=>{
//   setisPending(true)
//  projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
//  if(doc.exists){
//   setisPending(false)
//   setRecipe(doc.data())
//  }else{
//   setisPending(false)
//   setError('Could not find that recipe')
//  }
//  })
//   },[id])
 //when work with real time 
 useEffect(()=>{
  setisPending(true)
  const unsub=projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
 if(doc.exists){
  setisPending(false)
  setRecipe(doc.data())
 }else{
  setisPending(false)
  setError('Could not find that recipe')
 }
 })
 return () => unsub()
  },[id])


  
  
  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {recipe &&
        <>
            <h2 className='page-title'>{recipe.title}</h2>
            <h3>Cooked in {recipe.cookingTime}</h3>
            <ul>
              {recipe.ingredients.map(ing =><li key={ing}>{ing}</li>)}
            
            </ul>
           
            <p className='method'>{recipe.method}</p>
            <button onClick={handleclick}>Update me</button>
        </>
      }



    </div>
  )
}
