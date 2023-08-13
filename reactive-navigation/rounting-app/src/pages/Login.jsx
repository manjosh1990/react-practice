import React from "react";
import {
  useLoaderData,
  redirect,
  Form,
  useActionData,
  useNavigation
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  const url = new URL(request.url);
  return url.searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password")
  try {
    const data = await loginUser({ email, password });
    console.log(data);
    localStorage.setItem("loggedin", true);
    const response = redirect("/host")
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();
  const status = navigation.state;
  console.log(status)
  return (<div className="login-container">
    {message && <h3 className="red">{message}</h3>}
    {errorMessage && <h3 className="red">{errorMessage}</h3>}
    <h1>Sign in to your account</h1>
    <Form method="post" className="login-form" replace>
      <input
        name="email"
        type="email"
        placeholder="Email address"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
      />
      <button disabled={status === "submitting"}>{status === "submitting" ? "Logging in..." : "Log in"}</button>
    </Form>
  </div>)
}