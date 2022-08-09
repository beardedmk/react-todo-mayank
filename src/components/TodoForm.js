import React from "react";
import { useEffect } from "react";
import "./Todo.css";

export default function TodoForm(props) {
  // METHODS
  ////////////////   Add TODO   ////////////////////////

  // method to Submit the todo
  const handleSubmit = () => {
    // condition to check, when using try to submit the blank("") input
    if (!props.input) {
      return alert("Please Write Again");
    }

    // setting new todo object in input array object
    props.setTodos((itm) => {
      return [
        {
          /**
           *
           * todo object having id and value
           *
           */
          id: new Date()
            .getTime()
            .toString() /*Setting unique id for every new added todo using date and time*/,
          val: props.input,
        },
        ...itm,
      ];
    });
    props.setInput(""); /* making input field emty after adding new todo*/
  };

  //////// Handlining Enter KeyPress   ///////
  //////////

  /**
   *
   *
   * Method to handle the case when user try to add new todo after pressing the enter key
   *
   *
   * */
  const handleKey = (e) => {
    if (props.input !== "" && e.key === "Enter") {
      handleSubmit();
    }
    return;
  };

  /**
   *
   * Custom hooks for event listener
   *
   */
  useEffect(() => {
    document.addEventListener("keypress", handleKey);
    return () => {
      document.removeEventListener("keypress", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.input]);

  return (
    /**
     *
     * Todo input field
     * (to take input from user)
     *
     *  */
    <div className="input-box">
      <span className="inputField">
        <input
          type="text"
          placeholder="Enter Your Todo"
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        />
      </span>
      <input
        type="button"
        value="add"
        onClick={handleSubmit}
        className="inpBtn addBtn"
      />
      {/**
       *
       * Checking if there any todo in list
       *
       * Condionally Adding clearAll (Reset) button
       *
       *  */}
      {props.todo.length === 0 && props.cmp.length === 0 ? (
        ""
      ) : (
        <input
          type="button"
          value="Clear All"
          className="inpBtn clrAll"
          id="todoInp"
          onClick={() => {
            props.setTodos([]);
            props.setCmp([]);
          }}
        />
      )}
    </div>
  );
}
