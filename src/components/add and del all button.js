function Buttons({add, delAll}){
    return <>
    <button onClick={add}><i className="fas fa-plus-octagon"></i></button>
    <button onClick={delAll}><i className="fad fa-trash"></i></button>  
    </>
}
export default Buttons