 
import { useEffect, useState } from "react"

// SWR I USES TO GET API !!!
import useSWR from "swr"

// this link to acess another page!!
import Link from "next/link"

//guidance one
// this is one page static!!!
//because page not change.


const Home =  () => {
    const [count,setcount] = useState(0)
    // here i am flag data
    // SWR I USE TO GET API, WITHOUT SWR I DONT DID WORKING API IN PAGE STATIC
    const {data} = useSWR('https://jsonplaceholder.typicode.com/users')

    useEffect(() =>{
        setInterval(() => {
            setcount(old => old +1)
        }, 10000);
    })

     return( 
        <> 
        <h1 className="test">Hi there!! {count} </h1> 
        <Link href='/ssr'> 
        <a> Blog (Ssr)</a>
         </Link>
         
        <Link href='/blog'>
        <a>SSG</a>
        </Link>

        <p> create new code to test about next page static first steps!! </p>

        <pre> {JSON.stringify(data)} </pre>
        </>
        )
}

export default Home