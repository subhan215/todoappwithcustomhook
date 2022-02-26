import Todo from './Todo';
import './App.css';
import Heading from './components/heading';
import Input from './components/Input';
import Buttons from './components/add and del all button';
import List from './components/List';

function App() {
     let [inpVal,todoArr,getInp, add , delAll, removeItem, editItem] = Todo();
     return <>
    <div className="maindiv">
      <section className="animate__animated animate__backInLeft">
        <Heading />
        <div className="div1">
          
          <Input getInp = {getInp} inpVal = {inpVal}/>
          <Buttons add = {add} delAll = {delAll}/>
         
          
        </div>
        <div className="tasks" id="tasks">
          <List todoArr = {todoArr} editItem = {editItem} removeItem = {removeItem}/> 
          
        </div>
      </section>
    </div>
  </>
}

export default App;
