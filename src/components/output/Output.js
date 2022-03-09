import React from 'react'
import './output.css';

const Output = ({ todo, toggleTask, removeTask }) => {



    return (
        <div className="todo-container">
            <div className='item-todo' key={todo.id}>
                <div
                    className={todo.complete ? 'item-text done' : 'item-text'}
                    onClick={() => toggleTask(todo.id)}
                >
                    {todo.task}
                </div>
                <button className='item-delete' onClick={() => removeTask(todo.id)}>Удалить</button>
            </div>
        </div>
    )
}

export default Output;