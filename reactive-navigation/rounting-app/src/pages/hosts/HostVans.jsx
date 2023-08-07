import React from "react";
import { Link ,useLoaderData} from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
export async function loader(){
  await requireAuth()
  return getHostVans();
}
export default function HostVans() {

  const vans = useLoaderData();
  const vanList = vans.map(item => {
    return (
      <Link
        to={item.id}
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
      <section>{vanList}</section>
    </div>
  </section>)
}