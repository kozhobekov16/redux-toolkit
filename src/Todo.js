import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo} from "./redux/slices/todosSlice";

const Todo = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todoSlice.todo)
    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={() => dispatch(addTodo(text))}>+</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => dispatch(removeTodo(item.id))}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;