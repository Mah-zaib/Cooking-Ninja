import { useState, useEffect } from "react";
export const useFetch = (url,method="GET") => {

    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)
    const [options,setoptions]=useState(null)
    //we use useRef to wrap an object/array argument
    //which is useEffect dependency  
    //const options = useRef(_options).current
    const postData = (postData) =>{
        setoptions({
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }


    useEffect(() => {
      //  console.log(options)
        const controller = new AbortController()
        const fetchdata = async (fetchOptions) => {
 
            setisPending(true)
            try {
                const res = await fetch(url, {...fetchOptions, signal: controller.signal })
                //  const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setdata(data)
                setError(null)
                setisPending(false)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted")
                } else {
                    setError('Could not fetch the data')

                }
                // setisPending(false)
                // setError('Could not fetch the data')
                // console.log(err.message)
            }
        }
        if(method === "GET"){
            fetchdata()
        }
        if(method === "POST" && options){
            fetchdata(options)
        }
       
        return () => {
            controller.abort()
        }
    }, [url,options,method])
    return { data, isPending, error,postData }//custom hook return some kind of array or object
}


