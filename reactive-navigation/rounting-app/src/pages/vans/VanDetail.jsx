import React from "react";
import { useParams,Link, useLocation  } from "react-router-dom";
import { useEffect, useState } from "react";
export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  console.log(location)
  const search = location.state?.search||"";
  const type = location.state?.type||"all";
  const [van, setVan] = useState(null);
  const id = params.id;
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id])
  return <div className="van-detail-container">
    {van ? (
      <div className="van-detail">
        <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
      >&larr; <span>Back to {type} vans</span></Link>
        <img src={van.imageUrl} alt={van.name} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price"><span>${van.price}</span>/day</p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    ) : <h2>Loading...</h2>}
  </div>
}