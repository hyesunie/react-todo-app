import { useCallback, useReducer } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function reducer(todoList, action) {
  switch (action.type) {
    case "remove": {
      const id = action.payload;
      return todoList.filter((todoInfo) => todoInfo.id !== Number(id));
    }
    case "add": {
      const newTodoInfo = action.payload;
      return [...todoList, newTodoInfo];
    }
    case "check": {
      const id = action.payload;

      return todoList.map((todoInfo) => {
        if (todoInfo.id === id) {
          console.log(todoInfo);

          return { ...todoInfo, check: !todoInfo.check };
        }

        return todoInfo;
      });
    }
    default:
      throw new Error("reducer action type이 잘못 됐습니다.");
  }
}

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    array.push({
      id: i,
      todo: `할 일 ${i}`,
      check: false,
    });
  }

  return array;
}

function App() {
  const [state, dispatch] = useReducer(reducer, undefined, createBulkTodos);

  const onCheck = useCallback((id) => {
    dispatch({ type: "check", payload: id });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "remove", payload: id });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>TODO</p>
      </header>
      <TodoInput dispatch={dispatch} />
      <TodoList onCheck={onCheck} onRemove={onRemove} list={state} />
    </div>
  );
}

export default App;
