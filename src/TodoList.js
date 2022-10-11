import "./TodoList.css";
import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { list, onCheck, onRemove } = props;

  console.log(list);

  return (
    <section className="todo-list-wrapper">
      <ul>
        {list.map((todo) => (
          <TodoListItem
            key={todo.id}
            onCheck={onCheck}
            onRemove={onRemove}
            todoInfo={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default React.memo(TodoList);
