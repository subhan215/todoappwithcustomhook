function Input({getInp, inpVal}){
return <input placeholder="Enter the task to do" onChange={getInp} value={inpVal} id="input" />
}
export default Input