import { useState } from "react";

const Alert = ({ message, open }) => {
  if (open) {
    return (
      <div className="bg-green-500 text-white text-center  min-w-[250px] py-[6px] rounded-lg fixed bottom-5 left-5">
        {message}
      </div>
    );
  }
};

export default Alert;
