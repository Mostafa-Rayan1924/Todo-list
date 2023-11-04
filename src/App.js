import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import TodoContextProvider from "./contexts/TodoContext";
import AlertContext from "./contexts/AlertContext";
function App() {
  return (
    <div className="App h-screen w-full flex justify-center my-20 ">
      <TodoContextProvider>
        <AlertContext>
          <TodoList />
        </AlertContext>
      </TodoContextProvider>
    </div>
  );
}

export default App;
