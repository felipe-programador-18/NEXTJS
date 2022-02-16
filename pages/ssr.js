//serving side rendering!!!
// how going rendering in the server ?


const Ssr =  (props) => {
    return ( 
        <>
        <h1>This is side serving rendering</h1>

        <pre> {JSON.stringify(props, null, 2)} </pre>
    </>
        )
}

export async function getServerSideProps () {
    return{
        props: {
            data: new Date().getTime(),
            nome:'Felipe Martins Programer'
        }
    }
}


export default Ssr