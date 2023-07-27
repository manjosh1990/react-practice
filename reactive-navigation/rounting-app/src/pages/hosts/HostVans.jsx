import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  console.log(vans);
  const vanList = vans.map(item => {
    return (
      <Link
        to={`/host/vans/${item.id}`}
        key={item.id}
        className="host-van-link-wrapper"
      >
        <div key={item.id} className="van-single">
          <img src={item.imageUrl} alt="vanImage" />
          <div className="van-info">
            <h3>{item.name}</h3>
            <p>${item.price}/day</p>
          </div>
        </div>
      </Link>
    );
  })
  return (<section>
    <h1 className="host-vans-title">Your listed vans</h1>
    <div className="host-vans-list">
      {vans.length > 0 ? (<section>{vanList}</section>) : (<h2>Loading...</h2>)}
    </div>
  </section>)
}