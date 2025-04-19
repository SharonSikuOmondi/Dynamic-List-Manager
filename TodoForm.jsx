import React,{useState} from "react";

export const TodoForm =({addItem}) =>{
const [value, setValue]= useState("")
const handleSubmit= e => {
    e.preventDefault();

    addItem(value)

    setValue("")
}

 return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder="Enter Item" onChange={(e) =>setValue(e.target.value)}/>
        <button type="submit" className="todo-btn">Add Item</button>
    </form>
 )
}