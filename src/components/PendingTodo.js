import React from "react";
import "./Todo.css";

export default function PendingTodo(props) {
  // METHODS
  /////////    Completed TODO      /////////////

  /**
   *
   * Method to handle the case when user click on todo
   * just to mark it as completed
   *
   */

  const completed = (id) => {
    /**
     *
     * Finding the index of particular todo based on id
     * which is passed when clicked
     *
     */
    const index = props.todo.findIndex((itm) => itm.id === id);

    /**
     * Adding completed todo in Completed todo list
     * using use Effect
     */
    props.setCmp((cmp) => [props.todo[index], ...cmp]);

    /**
     * Deleting the completed todo from pending todo list
     */
    props.setTodos(
      props.todo.filter((itm) => {
        return itm.id !== id;
      })
    );
  };

  /////////////    Del   /////////////////

  /**
   *
   * Method to delete the todo
   *
   */
  const del = (id) => {
    const updTodo = props.todo.filter((itm) => {
      return itm.id !== id;
    });

    props.setTodos(updTodo);
  };

  /////////////   EDIT    /////////////////////////
  /**
   *
   * Method to edit the pending todo
   */
  const edit = (id) => {
    props.todo.map((itm) => {
      /**
       * Finding the clicked todo which is to be edited
       * Adding the placeholder in input box
       * and then deleting the particular todo from pending todo list
       */
      if (itm.id === id) {
        props.setInput(itm.val);
        del(id);
      }
      return "";
    });
  };

  return (
    <div className="list">
      {props.todo.map((itm) => {
        return (
          <div key={itm.id}>
            <li className="pndng">
              <div
                className="todoList"
                onClick={() => {
                  completed(itm.id);
                }}
              >
                {itm.val}
              </div>

              {/**
               * Adding the edit button
               */}

              <div className="listBtn">
                <input
                  className="btn, editBtn"
                  type="button"
                  value="edit"
                  onClick={() => {
                    edit(itm.id);
                  }}
                />

                {/**
                 * Adding the delete button
                 */}
                <input
                  className="btn, delBtn"
                  type="button"
                  value="del"
                  onClick={() => {
                    del(itm.id);
                  }}
                />
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
