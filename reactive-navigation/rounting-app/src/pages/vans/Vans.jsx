import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();
  console.log(vans);

  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans
  console.log("typeFilter :" + typeFilter);
  const vanElements = displayedVans.map(van => {
    return (
      <div key={van.id} className="van-tile">
        <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    )
  })
  function handleFilterChange(key, value) {

    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={
            `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
          }
        >Simple</button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={
            `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
          }
        >Luxury</button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={
            `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
          }
        >Rugged</button>
        {typeFilter ? (<button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear Filters</button>) : null}
      </div>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}