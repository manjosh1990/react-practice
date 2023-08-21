import React from "react";
import image from "../../images/income-graph.png";
export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ]

  return (<section className="host-income">
    <h1>Income</h1>
    <p>
      Last <span>30 days</span>
    </p>
    <h2>&#8377;22,260</h2>
    <img src={image} alt="Income graph" className="graph"/>
    <div className="info-header">
      <h3>Your Transactions (3)</h3>
      <p>
        Last <span>30 days</span>
      </p>
    </div>
    <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>&#8377;{item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
  </section>)
}