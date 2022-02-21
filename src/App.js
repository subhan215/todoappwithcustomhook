import Todo from './Todo';
import './App.css';

function App() {
     let [inpVal,todoArr,getInp, add , delAll, removeItem, editItem] = Todo();
     return <>
    <div className="maindiv">
      <section className="animate__animated animate__backInLeft">
        <h1>Todo List</h1>
        <div className="div1">
          <input placeholder="Enter the task to do" onChange={getInp} value={inpVal} id="input" />
          
          <button onClick={add}><i className="fas fa-plus-octagon"></i></button>
          <button onClick={delAll}><i className="fad fa-trash"></i></button>  
          
        </div>
        <div className="tasks" id="tasks">
          <ul >
            {todoArr.map((val, ind) => {
              return <li key={ind} className="animate__animated animate__backInUp"> <p>{val}</p>  <p><i className = "fal fa-edit editIcon" onClick={() => editItem(ind)}></i> <i className = "fal fa-minus-octagon delIcon" onClick={() => removeItem(ind)}></i> </p>   </li>
            })}
          </ul>
        </div>
      </section>
    </div>
  </>
}

export default App;
