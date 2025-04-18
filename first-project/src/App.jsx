import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Parentcomp from './components/Parentcomp'
import Counter from './components/Counter'
import ClickHandler from './components/ClickHandler'
import Simpleform from './components/Simpleform'
import Multiform from './components/Multiform'
import Uncontrolled from './components/Uncontrolled'
import Todolist from './components/Todolist'
import Conditions from './components/Conditions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <p >
        Click on the Vite and React logos to learn more
      </p>
      {/* <Navbar/> */}
      {/* <FunctionalComponent/> */}
      {/* <ClassComponent/> */}
      {/* <Parentcomp/> */}
      {/* <Counter/> */}
      {/* <ClickHandler/> */}
      {/* <Simpleform/> */}
       {/* <Multiform/> */}
       {/* <Uncontrolled/> */}
       {/*<Todolist/>*/}
       <Conditions/>
       
    </>
  )
}

export default App
