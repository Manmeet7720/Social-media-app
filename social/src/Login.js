import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Login.css';
import { Link} from 'react-router-dom';
// import Registration from './Registration';
export default function Login() {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[LoginError,setLoginError]=useState('');
    const navigate=useNavigate();
    const handleUsername=(event)=>{
      setUsername(event.target.value);
    }

    const handlePassword=(event)=>{
      setPassword(event.target.value); 
    }
    const handleFormData= async(event)=>{
      event.preventDefault();
      try{
        const response=await axios.post('http://localhost:3000/login',{
          username:username,
          password:password
        })
        // console.log(response);
        localStorage.setItem('jwttoken',response.data.token);
        navigate('/posts');
      }
      catch (error){
        setLoginError("incorrect username or password");
      }
    }
      
  return (
    <div  className="login-container">
      <center><h1>Social Media App</h1></center>
      <h2>Login</h2>
    <form onSubmit={handleFormData} className="login-form">
      <div className="form-group">
      <label>username: </label><br></br>
      <input type='text' value={username} onChange={handleUsername}></input><br></br><br></br>
      </div>
      <div className="form-group">
      <label>Password: </label><br></br>
      <input type='password' value={password} onChange={handlePassword}></input><br></br><br></br>
      </div>
      <button className="btn btn-primary">Submit</button><br></br>
      {/* //onClick={handleApi} */}
      <Link to="/register">Don't have account register here!</Link>
    </form>
    <h4>{LoginError}</h4>
      {/* <button onClick={()=>navigate("/posts/:postId")}>Login</button> */}
    </div>
  )

  }

//localstorage.setitem()
