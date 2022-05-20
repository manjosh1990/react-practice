import React from "react";
//components
import { NavBar } from "../src/components/NavBar";
import Card from "./components/Cards";

//data
import travelData from "./data";
function App() {
  const cards = travelData.map( card =>{
    return <Card key = {card.id}
    card = {card}></Card>
  });
  return (
    <div>
      <NavBar></NavBar>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
