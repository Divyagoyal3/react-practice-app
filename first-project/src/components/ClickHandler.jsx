import React from 'react'

const ClickHandler = () => {

    const onhandle = (name) => {
        alert(`I m changed ${name}`)
    }
  return (
    <div>
      <button onClick={()=>{alert("I m clicked")}}>Click Me</button>
      <br>
      </br>
      <button onClick={() =>onhandle("divya")}>Change Me</button>
    </div>
  )
}

export default ClickHandler
