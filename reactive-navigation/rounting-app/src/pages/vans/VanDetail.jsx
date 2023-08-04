import React from "react";
import { Link, useLocation, useLoaderData  } from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}){
  return getVans(params.id);
}
export default function VanDetail() {
  const location = useLocation();
  const search = location.state?.search||"";
  const type = location.state?.type||"all";
  const van = useLoaderData();
  console.log(van)
  return <div className="van-detail-container">
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
  </div>
}