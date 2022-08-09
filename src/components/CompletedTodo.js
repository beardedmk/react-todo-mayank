import React from "react";
import "./Todo.css";

export default function CompletedTodo(props) {
  // METHODS
  ////////////// UNDO METHOD ////////////////

  /**
   * Undo method
   * Just to set the completed todo to pending todo
   */
  const undo = (id) => {
    const index = props.cmp.findIndex((itm) => itm.id === id);
    props.setTodos((todo) => [props.cmp[index], ...todo]);

    /**
     * Filering out todo from completed todo list which is clicked as undo
     * and Updating the completed todo list
     */
    props.setCmp(
      props.cmp.filter((itm) => {
        return itm.id !== id;
      })
    );
  };

  return (
    <div className="list">
      <div className="cmpMenu">
        {/**
         * Conditionally adding the completed todo heading and button
         * if any Pending todo is marked as completed
         */}

        {props.cmp.length > 0 ? (
          <div>
            {" "}
            <span className="cmpHdng">
              Completed Todo ({props.cmp.length})
            </span>{" "}
            <input
              className="cmpClrBtn"
              type="button"
              value="Clear"
              onClick={() => {
                props.setCmp([]);
              }}
            />{" "}
          </div>
        ) : (
          ""
        )}
      </div>

      {/**
       * Listing the completed todo using map method
       */}

      {props.cmp.map((itm) => {
        return (
          <div key={itm.id}>
            <li
              className="comp"
              // style={{ color: "green" }}
              onClick={() => {
                undo(itm.id);
              }}
            >
              {itm.val}
            </li>
          </div>
        );
      })}
    </div>
  );
}
