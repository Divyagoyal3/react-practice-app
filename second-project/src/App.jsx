
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import { useContext } from "react"
import { ThemeContext } from './Components/ThemeContext';
import Counter from './Components/Counter';
import FetchWithAxios from './Components/FetchWithAxios';

function App() {
  
  const {theme , toggleTheme} = useContext(ThemeContext)
  return (
  //<Router>
   // <NavBar />
     // <h2>React Routing</h2>
      //<Routes>
        //<Route path="/" element={<Home/>} />
        //<Route path="/about" element={<About/>} />
        //<Route path="/contact" element={"Contact"} />
     // </Routes>
  //   </Router>

     //<div style={{
       //  background: theme === 'light' ? '#fff' :'#111',
         //color: theme === 'light' ? '#111' :'#fff',
         //height:'100vh',
         //padding:'20px'
       //}}
       //>
         //    <h1>Theme</h1>

           //  <button onClick={toggleTheme}>Theme Toggle</button>
       //</div>
       //<Counter/>

       <FetchWithAxios/>

    
  )
}

export default App
