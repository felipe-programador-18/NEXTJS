// with this mode i can create diverse page is very interesting!!!
// i create new folder to adding and create new file seeing and practice about that !!

const Post = (props) => {
    return (
        <>
        
        <h1>SSG (POST) {props.post?.title}   </h1>
           
        <pre> {JSON.stringify(props,null, 2)} </pre>
        </>
    )
}

export async function  getStaticProps({params}) {
    const post = await fetch ('https://jsonplaceholder.typicode.com/posts/1'+params.id)
    const postData = await post.json()
    
    return {
        props: {
            data: new Date().getTime(),
            name:'Programmer Fe-18',
            id: params.id,
            post: postData
        },
        revalidate:60,
    }
 }
 

export async function getStaticPaths(){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const postData = await posts.json()
    const paths =  postData.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            }
        }
    })
    return {
        paths: paths,   //[   {params:{id:'1'}}, {params:{id:'5'}}],
        fallback:'blocking' ,  
    }
} 
 
 
 export default Post