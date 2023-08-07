import React,{useState} from "react";
import { useLoaderData } from "react-router-dom";

export function loader({request}){
  const url = new URL(request.url);
  return url.searchParams.get("message");
}

export default function Login(){
  const[loginFormData,setLoginFormData] = useState({email:"",password:""});

  const message = useLoaderData();
  function handleChange(e){
    const {name ,value} = e.target;
    setLoginFormData(prev=> ({
      ...prev,[name]:value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(loginFormData);
  }
  return(<div className="login-container">
    {message && <h3 className="red">{message}</h3>}
    <h1>Sign in to your account</h1>
    <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
          />
          <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
          />
          <button>Log in</button>
    </form>
  </div>)
}