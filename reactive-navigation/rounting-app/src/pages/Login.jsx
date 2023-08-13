import React, { useState } from "react";
import { useLoaderData , useNavigate} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  const url = new URL(request.url);
  return url.searchParams.get("message");
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error,setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting");
    setError(null);
    console.log(loginFormData);
    loginUser(loginFormData)
      .then(
        data => {
          navigate("/host",{replace :true})
        }
      ).catch(error => {
        console.log(error.message)
        setError(error)
      }).finally(() => {
        setStatus("idle")
      })
  }
  return (<div className="login-container">
    {message && <h3 className="red">{message}</h3>}
    {error && <h3 className="red">{error.message}</h3>}
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
      <button disabled={status === "submitting"}>{status==="submitting" ?"Logging in...": "Log in"}</button>
    </form>
  </div>)
}