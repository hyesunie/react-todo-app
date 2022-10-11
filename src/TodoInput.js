import "./TodoInput.css";
import React, { useCallback, useState } from "react";

function TodoInput(props) {
  const { dispatch } = props;
  const [id, setId] = useState(2600);
  const [value, setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(
    (e) => {
      if (e.key !== "Enter" && e.type !== "click") return;

      const newTodoInfo = { id, check: false, todo: value };
      setId(id + 1);
      dispatch({ type: "add", payload: newTodoInfo });
      setValue("");
    },
    [id, value]
  );

  return (
    <section className="todo-input-wrapper">
      <input
        type="text"
        onKeyUp={handleAddTodo}
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChangeValue}
      ></input>
      <button onClick={handleAddTodo}>+</button>
    </section>
  );
}

export default TodoInput;
