import React from "react";

function FormItem({
  data: { id, name, lastname, email, phone },
  deleteHandeler,
}) {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>
          <span>📬️</span>
          {email}
        </p>
        <p>
          <span>📞</span>
          {phone}
        </p>
        <button onClick={() => deleteHandeler(id)}>🗑️</button>
      </li>
    </>
  );
}

export default FormItem;
