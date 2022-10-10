import React from "react";

function TodoListItem(props) {
  const { onClickDelete, onClickCheck, todoInfo } = props;

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={todoInfo.check}
        onClick={onClickCheck}
      />
      <div>{todoInfo.todo}</div>
      <button onClick={onClickDelete} id={todoInfo.id}>
        -
      </button>
    </li>
  );
}

export default TodoListItem;
