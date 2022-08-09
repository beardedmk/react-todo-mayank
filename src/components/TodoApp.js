import React from "react";
import { useState, useEffect } from "react";
import "./Todo.css";
import PendingTodo from "./PendingTodo";
import CompletedTodo from "./CompletedTodo";
import TodoForm from "./TodoForm";

/**
 * Getting the previous pending todo list (if exist)
 * from local storage
 */

function getTodo() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

/**
 * Getting the previous completed todo list(if exist)
 * from local storage
 */

function getCmp() {
  return JSON.parse(localStorage.getItem("cmp")) || [];
}

function TodoApp() {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState(getTodo());
  const [cmp, setCmp] = useState(getCmp());

  /**
   * Update and Store the completed todo list and pending todo list in local storage on every updation in list
   */

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("cmp", JSON.stringify(cmp));
  }, [todo, cmp]);

  return (
    <>
      <div className="heading">
        <h3>Todo App</h3>
      </div>
      <div className="AppContainer">
        {/* //////////////////////////////////////////////
        //////////  Todo Form Component      /////////////
        /////////////////////////////////////////////////*/}

        <TodoForm
          todo={todo}
          setTodos={setTodos}
          cmp={cmp}
          setCmp={setCmp}
          input={input}
          setInput={setInput}
        />

        {/* //////////////////////////////////////////// 
                 ///// Pending Todo Component
            ///////////////////////////////////// */}

        <PendingTodo
          todo={todo}
          setTodos={setTodos}
          cmp={cmp}
          setCmp={setCmp}
          input={input}
          setInput={setInput}
        />

        {/* //////////////////////////////////////////// 
                 ////// Completed Todo Component
         ///////////////////////////////////////////// */}

        <CompletedTodo
          todo={todo}
          setTodos={setTodos}
          cmp={cmp}
          setCmp={setCmp}
          input={input}
          setInput={setInput}
        />
      </div>
    </>
  );
}
export default TodoApp;
