import React from 'react'


function Functional (){
    return <>I m nested</>
}

const FunctionalComponent = () => {
  return (
    <div>
      <h2>I m Functional component</h2>
      <Functional />
    </div>
  )
}

export default FunctionalComponent
