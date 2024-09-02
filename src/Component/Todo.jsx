import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todoList, Settodolist] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      Text: inputText,
      isComplete: false,
    };
    Settodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteBtn = (id) => {
    Settodolist((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    Settodolist((prevsTodo) => {
      return prevsTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="bg-white w-11/12 place-self-center max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="place-self-center mt-2">
        <h1 className="text-3xl font-semibold">Todo List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-400 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>
      {todoList.map((item, index) => {
        return (
          <TodoItem
            key={index}
            text={item.Text}
            id={item.id}
            isComplete={item.isComplete}
            deleteBtn={deleteBtn}
            toggle={toggle}
          />
        );
      })}
    </div>
  );
};

export default Todo;
