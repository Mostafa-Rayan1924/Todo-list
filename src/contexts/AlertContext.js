import { createContext, useState } from "react";
import Alert from "../Alert";

export let alertContext = createContext();

const AlertContext = ({ children }) => {
  let [open, setOpen] = useState(false);
  let [message, setMessage] = useState("");

  function showAlert(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <alertContext.Provider value={{ showAlert }}>
      <Alert open={open} message={message} />
      {children}
    </alertContext.Provider>
  );
};

export default AlertContext;
