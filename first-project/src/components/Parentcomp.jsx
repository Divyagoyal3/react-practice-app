import React from 'react'

const Parentcomp = () => {
    const text = "I m child"

  return (
    <div>
      <p>Hlo I m Parent {text}</p>
       <ChildComponent message ={text} name = "Divya"/>
    </div>
  )
}


function ChildComponent ({message, name}){
    return <h3>I m child {message}{name}</h3>
}

export default Parentcomp
