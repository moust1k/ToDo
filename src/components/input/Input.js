import React, { useState } from 'react'
import './input.css';

const Input = ({ addTask }) => {
    const [userInput, setUserInput] = useState('')


    function handleSubmit(e) {
        e.preventDefault();
        addTask(userInput)
        setUserInput('');
    }

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Введите дело'
                />
                <button className='button'>Сохранить</button>
            </form>
        </>
    )
}

export default Input