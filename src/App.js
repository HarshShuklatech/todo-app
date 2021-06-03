import React from 'react';
import  { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';

function App() {
  
  const onDelete = (todo) =>{
    console.log("i AM dumb", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
 const addTodo = (title, desc) =>{
    console.log("I am adding a todo", title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{

      let sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo ={
    sno: sno,
    title: title,
    desc: desc,
   }
   setTodos([...todos, myTodo]); 
console.log(myTodo);

  }

const [todos , setTodos] = useState([
   
    
  ]
);
  
  
  return (
<>
<Header title=" HarshaTodo " searchBar={true}/>
<AddTodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>
   
   </>
  );
}

export default App;
