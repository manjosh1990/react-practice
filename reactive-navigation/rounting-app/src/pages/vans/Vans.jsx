import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Vans() {
  const [vansData, setVansData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vanTypeFilter = typeFilter ? vansData.filter(van => van.type.toLowerCase() === typeFilter) : vansData;
  console.log(vansData)
  console.log("search " + typeFilter);
  const vanElements = vanTypeFilter.map(van => {
    return (
      <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
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
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
      <button onClick={()=>setSearchParams({type:"simple"})} className="van-type simple">Simple</button>
      <button onClick={()=>setSearchParams({type:"rugged"})} className="van-type rugged">Rugged</button>
      <button onClick={()=>setSearchParams({type:"luxury"})} className="van-type luxury">Luxury</button>
      <button onClick={()=>setSearchParams({})} className="van-type clear-filters">Clear Filters</button>
      </div>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}