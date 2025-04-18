import { useState } from "react"




function MultiForm() {
    const [formdata , setFormData] = useState({
        name:'',
        email:'',
        password:''
    })


    const handlechange =(e)=>{
         const {name,value} = e.target
         setFormData({...formdata,[name]:value})
    }


    const  hanldeSbmit =(e)=>{
        e.preventDefault()
        console.log(formdata.email);
            alert(`Name is ${formdata.name} 
            Email is ${formdata.email} 
            Password is ${formdata.password}`)
        
    }

    return(<>
      <h1>Multiform Data</h1>
    
       <form onSubmit={hanldeSbmit}>
         <label>
           Name:
           <input type="text"  name="name" value={formdata.name} onChange={handlechange} />
         </label>
         <label>
           Email:
           <input type="email" name="email" value={formdata.email} onChange={handlechange} />
         </label>
         <label>
           Password:
           <input type="password" name="password" value={formdata.password} onChange={handlechange} />
         </label>
         
         <button type="submit">Submit</button>


       </form>
    </>)
}


export default MultiForm