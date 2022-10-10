import { useReducer } from "react";
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
        const newTodoInfo = { ...todoInfo };
        if (todoInfo.id === Number(id)) {
          newTodoInfo.check = !todoInfo.check;
        }

        return newTodoInfo;
      });
    }
    default:
      throw new Error("reducer action type이 잘못 됐습니다.");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>TODO</p>
      </header>
      <TodoInput dispatch={dispatch} />
      <TodoList dispatch={dispatch} list={state} />
    </div>
  );
}

export default App;
