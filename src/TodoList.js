import "./TodoList.css";
import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { list, dispatch } = props;

  const onClickDelete = useCallback((e) => {
    const id = e.target.id;
    dispatch({ type: "remove", payload: id });
  }, []);

  const onClickCheck = useCallback((e) => {
    const id = e.target.id;
    dispatch({ type: "check", payload: id });
  }, []);

  return (
    <section className="todo-list-wrapper">
      <ul>
        {list.map((todo) => (
          <TodoListItem
            key={todo.id}
            onClickDelete={onClickDelete}
            onClickCheck={onClickCheck}
            todoInfo={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
