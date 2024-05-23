import React, { useState } from "react";

const CustomApp = () => {
  return <div>
    <TodoList/>
  </div>;
};

export default CustomApp;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex">
          <input
            type="text"
            className="border rounded px-4 py-2 mr-2 w-full"
            placeholder="Enter a todo..."
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              {todo}
              <button
                className="text-red-500"
                onClick={() => handleRemoveTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
