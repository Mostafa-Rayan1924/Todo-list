// export default function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       let addTodo = {
//         id: state.length + 1,
//         isDone: false,
//         title: action.payload.title,
//       };
//       let UpdateTodo = [...state, addTodo];
//       localStorage.setItem("todo", JSON.stringify(UpdateTodo));
//       return UpdateTodo;
//       break;
//     case "getTodosFromStorage":
//       return JSON.parse(localStorage.getItem("todo")) ?? [];
//       break;
//     default:
//       throw Error("the error is" + action.type);
//   }
// }
