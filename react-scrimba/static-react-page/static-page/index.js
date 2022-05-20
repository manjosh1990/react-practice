import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById("root"))