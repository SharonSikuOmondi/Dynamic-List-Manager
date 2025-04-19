import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid'
uuidv4();
import { Item } from './Item';

export const TodoWrapper = () =>{
    const[items,setItems]=useState([])
    const addItem = item =>{
        setItems([...items, {id: uuidv4(), task: item, completed: false, isEditing: false}])
    }
    return(
        <div className='TodoWrapper'>
            <h1 className='listmanager'>Dynamic List Manager</h1>
            <TodoForm addItem={addItem}/>
            {items.map((item, index) =>(
                <Item task={item} key={index}/>
            ))}
           
        </div>
    )
}
