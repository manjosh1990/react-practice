import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin")
    if (!isLoggedIn) {
       const response = redirect("/login?message=you must login first.")
       response.body = true;
       throw response;
    }
    return null;
}