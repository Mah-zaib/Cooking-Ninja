import React from 'react'
import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  // The useLocation hook is a function that returns the location
  //  object that contains information about the current URL.
  //  Whenever the URL changes, a new location object will be returned.
 const querystring = useLocation().search
 const querparams = new URLSearchParams(querystring)
 const query = querparams.get('q')

 const url = 'http://localhost:3000/recipes?q=' + query 
 
 const{error,isPending,data}=useFetch(url)
 
  return (


    <div>
     <h2 className='page-title'>Recipe including:"{query}"</h2>
    
    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}
    {data && <RecipeList recipes={data}/>}
    </div>
  )
}
