import React from 'react';
import { useRef } from 'react';

function Uncontrolled() {
    const nameRef = React.useRef(null);

    const handleevent = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const password = nameRef.current.value;
        console.log(name);
        console.log(password);
        
    }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form  onSubmit={handleevent}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"   ref={nameRef}/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" ref={nameRef} />

      <button>Submit</button>
    </form>
    </div>
  );
}

export default Uncontrolled;