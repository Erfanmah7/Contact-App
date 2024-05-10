import React from "react";
import FormItem from "./FormItem";
import styles from "../components/formlist.module.css";

function FormList({ forms, deleteHandeler }) {
  return (
    <>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.container}>
        {forms.length ? (
          <ul>
            {forms.map((form) => (
              <FormItem
                key={form.id}
                data={form}
                deleteHandeler={deleteHandeler}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.message}>No Contacts</p>
        )}
      </div>
    </>
  );
}

export default FormList;
