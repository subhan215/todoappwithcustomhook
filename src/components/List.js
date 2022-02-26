function List({todoArr, editItem,removeItem}){
return <>
   <ul >
            {todoArr.map((val, ind) => {
              return <li key={ind} className="animate__animated animate__backInUp"> <p>{val}</p>  <p><i className = "fal fa-edit editIcon" onClick={() => editItem(ind)}></i> <i className = "fal fa-minus-octagon delIcon" onClick={() => removeItem(ind)}></i> </p>   </li>
            })}
          </ul>
</>
} 
export default List