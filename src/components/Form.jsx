import React, { useState } from 'react'

function Form() {

const contacts = []
const [alert,setAlert] = useState("");
const [forms,setForms] = useState([]);
const [form , setForm] = useState({

name : "",
lastname : "",
email: "",
phone : ""

})

const changeHandeler = (e)=>{

const name = e.target.name;    
const value = e.target.value;
setForm(form=>({...form,[name]:value}));

}

const addHandeler = (e)=>{

if(!form.name || !form.lastname || !form.email || !form.phone){

console.log("warninggggg........!");

}else{ 
    
setForms(Forms=>({...forms , form}));
console.log(forms);

}

}

  return (

    <div>
        
        <input type="text" placeholder='Name'  value={form.name} name='name' onChange={changeHandeler}/>
        <input type="text" placeholder='Last Name' value={form.lastname} name='lastname' onChange={changeHandeler}/>
        <input type="email" placeholder='Email'  value={form.email} name='email' onChange={changeHandeler}/>
        <input type="number" placeholder='Phone' value={form.phone} name='phone' onChange={changeHandeler}/>
        <button onClick={addHandeler}>Add Contact</button>
        
    </div>

  )
}

export default Form