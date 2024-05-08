import React from "react";
import FormItem from "./FormItem";

function FormList({ forms, deleteHandeler }) {
  return (
    <>
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
        <p>No Contacts</p>
      )}
    </>
  );
}

export default FormList;
