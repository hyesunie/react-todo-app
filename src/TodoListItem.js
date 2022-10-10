import React from "react";
import "./TodoListItem.css";

function TodoListItem(props) {
  const { onClickDelete, onClickCheck, todoInfo } = props;

  return (
    <li className="todo-list-item-wrapper">
      <input
        type="checkbox"
        defaultChecked={todoInfo.check}
        onClick={onClickCheck}
        id={todoInfo.id}
      />
      <div>
        <span className={todoInfo.check ? "check" : ""}>{todoInfo.todo}</span>
      </div>
      <button onClick={onClickDelete} id={todoInfo.id}>
        -
      </button>
    </li>
  );
}

export default TodoListItem;
