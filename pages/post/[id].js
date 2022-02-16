// with this mode i can create diverse page is very interesting!!!
// i create new folder to adding and create new file seeing and practice about that !!

const post = (props) => {
    return (
        <>
        
        <h1>SSG (POST) </h1>
        
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
 

export async function getStaticPathc(){
    return {
        paths: [{params : {id:'1'}} , {params: {id:5} } ] 
    }
} 
 
 
 export default post