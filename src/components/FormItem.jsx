import React from "react";

function FormItem({name}) {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p></p>
        <p></p>
        <p></p>
        <button>del</button>
      </li>
    </div>
  );
}

export default FormItem;
