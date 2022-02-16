// SSG
// this method called static site genaratoin to crete state page
const Blog = (props) => {
    return (
        <>
        
        <h1>SSG</h1>
        
        <pre> {JSON.stringify(props,null, 2)} </pre>
        </>
    )
}

export async function  getStaticProps(context) {
   return {
       props: {
           data: new Date().getTime(),
           name:'Programmer Femartins'
       }
   }
}



export default Blog