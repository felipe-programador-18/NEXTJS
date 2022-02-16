
import { useEffect, useState } from "react"
import useSWR from "swr"
//guidance one
// this is one page static!!!
//because page not change.


const Home =  () => {
    const [count,setcount] = useState(0)
    // here i am flag data
    const {data} = useSWR('https://jsonplaceholder.typicode.com/users')

    useEffect(() =>{
        setInterval(() => {
            setcount(old => old +1)
        }, 10000);
    })

     return( 
        <> 
        <h1>Hi there!! {count} </h1> 
        <pre> {JSON.stringify(data)} </pre>
        </>
        )
}

export default Home