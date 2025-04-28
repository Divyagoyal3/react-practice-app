import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import{login,signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {

const [signState, setSignState] = React.useState("Sign In");
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [loading, setLoading] = React.useState(false);

const user_auth = async (event) => {
  event.preventDefault();  // Prevent the form from submitting and refreshing the page.
  setLoading(true); // Set loading to true when the user clicks the button
    if(signState === "Sign In"){
        await login(email,password);
    }else{
        await signup(name,email,password);
        }
        setLoading(false); // Set loading to false after the authentication process is complete
}


  return (
    loading ? <div className='loading-spinner'>
      <img src={netflix_spinner} alt="" className='loading' />
      </div> :
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
        {signState === "Sign Up" ? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name" /> : null}

          <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}
          placeholder='Email or phone number' />
          <input type="password"   value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button className='login-btn'  onClick={user_auth}  type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form> 
        <div className="form-switch">
          {signState === "Sign In" ?<p>New to Netflix ? <span  className= "form-sign-in" onClick={()=> {setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have an Account ? <span className= "form-sign-in" onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
