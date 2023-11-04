import { createContext } from "react";
import { useState } from "react";
export let arrContext = createContext();

const TodoContextProvider = ({ children }) => {
  let [todo, setTodo] = useState([
    {
      id: 1,
      title:
        "1العربية | أبرز الأخبار العالمية والمحلية العاجلة. زلزال المغرب آخر مستجدات أقوى زلزال يضرب المغرب منذ قرن. زلزال",
      isDone: false,
    },
    {
      id: 2,
      title:
        "2العربية | أبرز الأخبار العالمية والمحلية العاجلة. زلزال المغرب آخر مستجدات أقوى زلزال يضرب المغرب منذ قرن. زلزال",
      isDone: false,
    },
    {
      id: 3,
      title:
        "3العربية | أبرز الأخبار العالمية والمحلية العاجلة. زلزال المغرب آخر مستجدات أقوى زلزال يضرب المغرب منذ قرن. زلزال",
      isDone: false,
    },
  ]);
  return (
    <arrContext.Provider value={{ todo, setTodo }}>
      {children}
    </arrContext.Provider>
  );
};

export default TodoContextProvider;
