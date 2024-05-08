import React, { useState } from "react";
import FormList from "./FormList";
import { v4 } from "uuid";

const inputs = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
  },
  {
    type: "text",
    placeholder: "Last Name",
    name: "lastname",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "number",
    placeholder: "Phone",
    name: "phone",
  },
];

function Form() {
  const contacts = [];
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

  const addHandeler = (e) => {
    setAlert("");
    if (!form.name || !form.lastname || !form.email || !form.phone) {
      setAlert("Please your information");
    } else {
      const newForm = { ...form, id: v4() };
      setForms((forms) => ({ ...forms, newForm }));
      setForm({
        name: "",
        lastname: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <div>
      <div>
        {/* <input
          type="text"
          placeholder="Name"
          value={form.name}
          name="name"
          onChange={changeHandeler}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastname}
          name="lastname"
          onChange={changeHandeler}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          name="email"
          onChange={changeHandeler}
        />
        <input
          type="number"
          placeholder="Phone"
          value={form.phone}
          name="phone"
          onChange={changeHandeler}
        /> */}

        {inputs.map((input, index) => (
          <input
            key={index}
            onChange={changeHandeler}
            placeholder={input.placeholder}
            name={input.name}
            value={form[name]}
            type={input.type}
          ></input>
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div>{alert}</div>
      <FormList forms={forms} />
    </div>
  );
}

export default Form;
