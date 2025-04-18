import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
      <nav>
        <ul>
            <li>
                <NavLink to="/" activeStyle={{color: 'red'}}>Home</NavLink>
                <NavLink to="/about" activeStyle={{color: 'red'}}>About</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;