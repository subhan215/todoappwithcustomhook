import { useState } from "react"
function Todo(){
    const [inpVal, setInpVal] = useState("")
    const [todoArr, setTodoArr] = useState([])
  
    function getInp(e) {
      setInpVal(e.target.value)
    }
    function add() {
      setTodoArr([...todoArr, inpVal])
      setInpVal("")
    }
    function delAll() {
      setTodoArr([])
    }
    function removeItem(ind) {
  
      let arr = [...todoArr]
      arr.splice(ind, 1)
      setTodoArr(arr)
  
    }
    function editItem(ind) {
      let arr = [...todoArr]
      let indVal = arr.at(ind)
      indVal = prompt("Enter the updated value", indVal)
      arr.splice(ind, 1, indVal)
      setTodoArr(arr)
    }
     return [inpVal,todoArr,getInp, add , delAll, removeItem, editItem]  
}
export default Todo