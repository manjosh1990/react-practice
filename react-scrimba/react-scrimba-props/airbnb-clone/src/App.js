import React from "react";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import Card from "./components/Card";

//data
import data from "./data";


function App() {
  const cardData = data.map(card => {
    return <Card key={card.id}//need to add key to avoid the warning of rendering array without key
      card={card}
    />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cardData}
      </section>
    </div>
  );
}

export default App;
