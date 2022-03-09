import React, { useState } from 'react';
import './App.css';
import Output from './components/output/Output';
import Input from './components/input/Input';

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const item = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, item])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([...todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
    )])
  }

  return (
    <div className="App">
      <header>
        <h1>Количество задач в списке: {todos.length}</h1>
      </header>
      <Input addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Output
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
