import React, { useState } from "react";
import FormList from "./FormList";
import inputs from "../js/inputs";
import styles from "../components/form.module.css";
import { v4 } from "uuid";

function Form() {
  const [alert, setAlert] = useState("");
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const changeHandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const deleteHandeler = (id) => {
    const newforms = forms.filter((form) => form.id != id);
    setForms(newforms);
  };

  const addHandeler = (e) => {
    if (!form.name || !form.lastname || !form.email || !form.phone) {
      setAlert("Please your information");
      return;
    }
    setAlert("");
    const newForm = { ...form, id: v4() };
    setForms((forms) => [...forms, newForm]);
    setForm({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className={styles.container}>
        {inputs.map((input, index) => (
          <input
            key={index}
            onChange={changeHandeler}
            placeholder={input.placeholder}
            name={input.name}
            value={form[input.name]}
            type={input.type}
          ></input>
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div className={alert && styles.error}>{alert && <p>{alert}</p>}</div>
      <FormList forms={forms} deleteHandeler={deleteHandeler} />
    </>
  );
}

export default Form;
