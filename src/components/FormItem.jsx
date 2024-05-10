import React from "react";
import styles from "../components/formitem.module.css";

function FormItem({
  data: { id, name, lastname, email, phone },
  deleteHandeler,
}) {
  return (
    <>
      <li className={styles.list}>
        <p>{name} {lastname}</p>
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
