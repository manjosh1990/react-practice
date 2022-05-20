import React from "react";

//components
import Header from "./components/Header";
import Meme from "./components/Meme";
//import UseEffectComponent from "./practice/UseEffectComponent";
function App() {
  return (
    <div>
      <Header></Header>
      <Meme></Meme>
    </div>
  );
}


//uncomment to render practice components

// function App() {
//   return (
//     <div>
//       <UseEffectComponent/>
//     </div>
//   );
// }
export default App;
