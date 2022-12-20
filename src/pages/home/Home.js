import React from 'react'
import { useState,useEffect} from 'react'
// import { useFetch } from '../../hooks/useFetch'
import { projectFirestore } from '../../firebase/config'
//styles
import './Home.css'
//component 
import RecipeList from '../../components/RecipeList'

export default function Home() {
  // const{data,isPending,error}=useFetch('http://localhost:3000/recipes')
const [data,setData]=useState(null)
const [isPending,setisPending]=useState(false)
const [error,setError]=useState(false)



//   useEffect(() => {
//   setisPending(true)
//  //it is like a fetch request and it returns a promise 
//   projectFirestore.collection('recipes').get().then((snapshot)=>{
//   if(snapshot.empty){
//     setError("No recipes to load")
//     setisPending(false)
//   }else{
//     let results =[]
//     snapshot.docs.forEach(doc => {
//       results.push({id:doc.id,...doc.data()})
//     });
//     setData(results)
//     setisPending(false)
//   }
//   }).catch(err =>{
// setError(err.message)
// setisPending(false)
//   })
//   }, [])



      //  work with Real Time Listener
useEffect(() => {
  setisPending(true)
 //it is like a fetch request and it returns a promise 
  const unsub=projectFirestore.collection('recipes').onSnapshot((snapshot) => {
    if (snapshot.empty) {
      setError("No recipes to load")
      setisPending(false)
    } else {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() })
      });
      setData(results)
      setisPending(false)
    }
  },(err) =>{
    setError(err.message)
    setisPending(false)
  })

//returns a cleanup function when it is mount

return () => unsub() 

}, [])


  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading....</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
