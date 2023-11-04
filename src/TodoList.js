import { useContext, useEffect, useState, useReducer } from "react";
import Todo from "./Todo";
import { arrContext } from "./contexts/TodoContext";
import reducer from "./Reducers/TodosReducer";
import { alertContext } from "./contexts/AlertContext";
const TodoList = () => {
  let [active, setActive] = useState("all");
  let { todo, setTodo } = useContext(arrContext);
  // let [todo, dispatch] = useReducer(reducer, []);
  let { showAlert } = useContext(alertContext);
  let [inp, setInp] = useState("");
  // add todo
  function handleSubmit() {
    let addTodo = {
      id: todo.length + 1,
      isDone: false,
      title: inp,
    };
    let UpdateTodo = [...todo, addTodo];
    localStorage.setItem("todo", JSON.stringify(UpdateTodo));
    setTodo(UpdateTodo);
    showAlert("تمت الاضافة بنجاح");
    setInp("");
  }
  // render after filter
  let renderTodo = todo;
  useEffect(() => {
    // dispatch({ type: "getTodosFromStorage" });
    setTodo(JSON.parse(localStorage.getItem("todo")) ?? []);
    setActive(localStorage.getItem("activeEle") ?? "all");
  }, []);
  //  handle active
  let handleActive = (id) => {
    setActive(id);
    localStorage.setItem("activeEle", id);
  };
  // filter is done
  let mongezFilter = todo.filter((item) => {
    return item.isDone;
  });
  // filter is  not done

  let NonMongezFilter = todo.filter((item) => {
    return !item.isDone;
  });
  // check by state
  if (active == "mongez") {
    renderTodo = mongezFilter;
  } else if (active == "nonMongez") {
    renderTodo = NonMongezFilter;
  } else {
    renderTodo = todo;
  }

  let TodoMap = renderTodo.map((item) => {
    return <Todo key={item.id} item={item} />;
  });
  return (
    <div className="bg-white w-[95%] md:w-1/2 rounded-lg p-3 h-fit max-h-[80vh] overflow-y-auto">
      <h1 className="text-center font-bold text-black text-4xl">مهامي</h1>
      <hr className="border-gray-300"></hr>
      <div className="text-center my-6 ">
        <button
          id="mongez"
          onClick={(e) => {
            handleActive(e.target.id);
          }}
          className={`py-1 transition-all duration-100 px-2  rounded-md text-white ${
            active == "mongez" ? "bg-green-500" : "bg-gray-400"
          }`}>
          منجز
        </button>

        <button
          id="all"
          onClick={(e) => {
            handleActive(e.target.id);
          }}
          className={`py-1 transition-all duration-100 px-2 mx-2  rounded-md text-white ${
            active == "all" ? "bg-green-500" : "bg-gray-400"
          }`}>
          الكل
        </button>
        <button
          id="nonMongez"
          onClick={(e) => {
            handleActive(e.target.id);
          }}
          className={`py-1 transition-all duration-100 px-2  rounded-md text-white ${
            active == "nonMongez" ? "bg-green-500" : "bg-gray-400"
          }`}>
          غير منجز
        </button>
      </div>
      {/* show ele */}
      {TodoMap}
      {/* delete ALl */}
      {renderTodo.length > 0 ? (
        <button
          className="bg-slate-700 rounded-lg px-6 py-2 block mx-auto my-5 text-white"
          onClick={() => {
            let confirmMsg = window.confirm("هل انت متاكد من حذف جميع مهامك");
            if (confirmMsg) {
              setTodo([]);
              showAlert("تم حذف الجميع");
            }
          }}>
          Delete All ({renderTodo.length})
        </button>
      ) : (
        ""
      )}
      <div className="flex gap-2 items-center">
        <input
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
          className="w-[70%] h-10 border border-gray-400 px-4 focus:outline-none rounded-lg "
          placeholder="عنوان المهمه"
        />
        <button
          onClick={handleSubmit}
          disabled={inp == "" ? true : false}
          style={{
            width: "30%",
            height: "40px",
            borderRadius: "10px",
            color: "white",
          }}
          className={`${inp == "" ? "bg-gray-500" : "bg-rose-500"}`}>
          اضافه مهمه
        </button>
      </div>
    </div>
  );
};
export default TodoList;
