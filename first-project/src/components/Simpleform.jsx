import React, { useState } from "react";

function Simpleform() {

    const [name, setName] = useState("divya");
    const handlechange = (e) => {
      e.preventDefault();
        setName(e.target.value);
    }
   const handlesubmit = (e) => {
     e.preventDefault();
     console.log(name);
     alert(`Name is ${name}`);
   }
  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name:</label> 
        <input type="text" id="name" name="name"  value={name}  onChange={handlechange} />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Simpleform;