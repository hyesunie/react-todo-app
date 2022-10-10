import "./TodoInput.css";
import React, { useCallback, useMemo, useRef, useState } from "react";

function TodoInput(props) {
  const { dispatch } = props;
  const $input = useRef(null);
  const [id, setId] = useState(1);

  const handleAddTodo = useCallback(
    (e) => {
      // eslint-disable-next-line no-unused-expressions
      if (e.key !== "Enter" && e.type !== "click") return;

      const newTodoInfo = { id, check: false, todo: $input.current.value };
      setId(id + 1);

      dispatch({ type: "add", payload: newTodoInfo });
      $input.current.value = "";
    },
    [id]
  );

  return (
    <section className="todo-input-wrapper">
      <input
        type="text"
        onKeyUp={handleAddTodo}
        placeholder="할 일을 입력하세요."
        ref={$input}
      ></input>
      <button onClick={handleAddTodo}>+</button>
    </section>
  );
}

export default TodoInput;
