
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import React, { useState } from 'react';
import Todos from "./Todos";

const MainApp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button style={myStyle} onClick={increment}>+</button>
      </div>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
