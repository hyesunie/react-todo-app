import React from "react";
import "./TodoListItem.css";

function TodoListItem(props) {
  const { onCheck, onRemove, todoInfo } = props;

  return (
    <li className="todo-list-item-wrapper">
      <input
        type="checkbox"
        defaultChecked={todoInfo.check}
        checked={todoInfo.check}
        onClick={() => onCheck(todoInfo.id)}
        id={todoInfo.id}
      />
      <div>
        <span className={todoInfo.check ? "check" : ""}>{todoInfo.todo}</span>
      </div>
      <button onClick={() => onRemove(todoInfo.id)} id={todoInfo.id}>
        -
      </button>
    </li>
  );
}

export default React.memo(TodoListItem);
