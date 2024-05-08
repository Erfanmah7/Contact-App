import React from "react";
import FormItem from "./FormItem";

function FormList({ forms }) {
  return (
    <div>
      <ul>
        {forms.map((form) => (
          <li key={form.id}>{form.name}</li>
          //   <FormItem key={form.id} data={forms} />
        ))}
      </ul>
    </div>
  );
}

export default FormList;
