import React,{useState} from "react";
// import Header from './components/Header';
// import MainContent from "./components/MainContent";
// import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode,setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prev => !prev);
  }
  return (
  <div className="container">
      {/* <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer> */}
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}></Navbar>
      <Main darkMode = {darkMode} ></Main>
  </div>
  )
}
export default App;