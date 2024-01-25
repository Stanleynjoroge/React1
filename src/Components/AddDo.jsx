import { useState } from "react";

import './AddDo'

function AddDo() {
  const [todos, setTodo] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const newDo = (e) => {
    setInputValue(e.target.value);
  };

  const input = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todos, { id: Date.now(), Text: inputValue }]);
      setInputValue("");
    }
  };

  const remove = (id) => {
    setTodo(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="main">
      <ul>
        {todos.map((newDoList) => (
          <div key={newDoList.id}>
            <li>
              <input type="checkbox" />
              {newDoList.Text}

              <button onClick={() => remove(newDoList.id)}>Remove</button>
            </li>
          </div>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={newDo} />
      
      <button onClick={input} type="button" className="button">
        Add
      </button>
    </div>
  );
}

export default AddDo;

