import React, { useCallback, useRef, useState } from "react";

function TodoInput(props) {
  //id,check,todo
  const { dispatch } = props;
  const $input = useRef(null);
  const [id, setId] = useState(1);

  const handlClickedButton = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    const newTodoInfo = { id, check: false, todo: $input.current.value };
    setId(id + 1);

    dispatch({ type: "add", payload: newTodoInfo });
    $input.current.value = "";
  }, []);

  return (
    <section>
      <input type="text" placeholder="할 일을 입력하세요." ref={$input}></input>
      <button onClick={handlClickedButton}>+</button>
    </section>
  );
}

export default TodoInput;
