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

  return <ul></ul>;
}

export default TodoList;
