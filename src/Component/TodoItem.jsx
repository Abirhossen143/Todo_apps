import React from "react";

const TodoItem = ({ text, id, isComplete, deleteBtn, toggle }) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center"
      >
        <p
          className={`text-slate-600 ml-4 text-[17px] decoration-slate-500 cursor-pointer ${
            isComplete ? "line-through" : ""
          } `}
        >
          {text}
        </p>
      </div>
      <button
        onClick={() => {
          deleteBtn(id);
        }}
        className=" border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
