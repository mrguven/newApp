import { useRef, useState } from "react"
import ok from '../ok.jpg'
import cross from '../cross.jpg'
export default function Todo(){

const [todoList,setTodoList]=useState([]);
const [todo,setTodo]=useState('');



const addToList=()=>{

console.log('hello');
if(todo!==''){
    setTodoList(
        [...todoList,todo]
    )
}else {
    alert('you should add somethings')
}


setTodo('')

}

const taskSucceed=()=>{



}

const taskDelete=(index)=>{
setTodoList(old=>{
 return old.filter((_,i)=>i!==index)
})

}



return(

<div id="todoContainer">
<h1 id="toDoTitle" >ToDo List</h1>


<input type="text" name="todoList" id="todoInput"  placeholder="write your tasks"
  onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
<button id="todoButton" onClick={addToList} >add</button>


<div id="todoAds"></div>
<div id="mainList" >

{
    todoList && 
   
    todoList.map((task,index)=>{
       
       return(
        <div id="toDoList" key={index}>
            <div className="taskList"  > <ul className="sublist"  ><li className="titleL2"> 
            <h2 className="taskh2" > -{task}  </h2>    </li></ul></div>
            <div className="OkImg"> <img className="img" src={ok} alt="ok" onClick={()=>{taskSucceed(index)}} /> </div> 
            <div className="deleteImg"> <img className="img" src={cross} alt="cross" onClick={()=>{taskDelete(index)}} />  </div>
        </div>
       )
    })
    
}
</div>

<div id="doneList"></div>


</div>

 


)


}