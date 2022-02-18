import Link from "next/link"
// SSG
// this method called static site genaratoin to crete state page
// this mode i have be carefully because in mode of dev it working one way and 
// and mode build he working in other way
const Blog = ({posts}) => {
    return (
        <>
        
        <h1>SSG</h1>
         
        <ul>
        
        {posts.map((post) => {
            return (
                <li>  
                  <Link href= {'/posts/'+post.id}>
                    <a> {post.title} </a> 
                  </Link> 
                 
                </li>)
        })}
        
        </ul>


       
        </>
    )
}

export async function  getStaticProps(context) {
   
   const posts = await fetch ('https://jsonplaceholder.typicode.com/posts')
   const postData = await posts.json()
    return {
       props: {
           data: new Date().getTime(),
           name:'Programmer Femartins',
           posts: postData
       }
   }
}



export default Blog