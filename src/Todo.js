import edit from "./edit.png";
import del from "./del.jpeg";
import ok from "./ok.jpeg";
import okg from "./oKg.jpeg";
import isc from "./OIP (1).jpeg";
import { useContext } from "react";
import { arrContext } from "./contexts/TodoContext";
import { alertContext } from "./contexts/AlertContext";

const Todo = ({ item }) => {
  let { todo, setTodo } = useContext(arrContext);
  let { showAlert } = useContext(alertContext);

  // delete function
  function handleDelete(id) {
    let delArr = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(delArr);
    localStorage.setItem("todo", JSON.stringify(delArr));
    showAlert("تم الحذف بنجاح");
  }
  // edit function
  function handleEdit(id) {
    let editMsg = window.prompt("عدل المهمة");
    let EditArr = todo.map((item) => {
      if (item.id == id && editMsg !== "") {
        let newItem = { ...item, title: editMsg };
        return newItem;
      } else {
        return item;
      }
    });
    setTodo(EditArr);
    localStorage.setItem("todo", JSON.stringify(EditArr));
    showAlert("تم التحديث بنجاح");
  }
  // done function
  function handleDone(ele) {
    let DoneArr = todo.map((item) => {
      if (item.id == ele.id) {
        let newItem = { ...item, isDone: !ele.isDone };
        return newItem;
      } else {
        return item;
      }
    });
    setTodo(DoneArr);
    localStorage.setItem("todo", JSON.stringify(DoneArr));
    showAlert("تم التعديل بنجاح");
  }
  return (
    <div className="bg-blue-700 p-5 flex flex-wrap flex-col lg:flex-row justify-center items-center text-center md:text-start md:justify-between rounded-lg my-5 transition-all duration-300 hover:bg-blue-900 gap-2 ">
      <div className="w-[70%] flex-1">
        <h2 className="text-white  text-md">{item.title}</h2>
      </div>
      <div className="w-[30%] flex gap-2 justify-center md:justify-end cursor-pointer">
        <img
          onClick={() => {
            handleDone(item);
          }}
          className={"w-[40px] h-[40px] border bg-white  rounded-full"}
          src={item.isDone ? okg : ok}
        />
        <img
          onClick={() => {
            handleEdit(item.id);
          }}
          className="w-[40px] h-[40px] border  bg-white rounded-full"
          src={edit}
        />
        <img
          onClick={() => {
            handleDelete(item.id);
          }}
          className="w-[40px] h-[40px] border bg-white rounded-full"
          src={del}
        />
      </div>
    </div>
  );
};

export default Todo;
