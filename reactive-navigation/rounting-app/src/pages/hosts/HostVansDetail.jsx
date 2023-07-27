import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function HostVansDetail() {
  const params = useParams();
  let id = params.id;
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [id])
  console.log(currentVan);
  if (!currentVan) {
    return (<h1>Loading...</h1>)
  }
  return (
    <section>
      <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="vanImage" />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  )
}