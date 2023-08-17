import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
export async function loader({ request }) {
  await requireAuth(request)
  return defer({ vans: getHostVans() });
}
export default function HostVans() {
  const vansDataPromise = useLoaderData();
  function renderVanElements(vans) {
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
    return (<>
      <div className="host-vans-list">
        <section>{vanList}</section>
      </div>
    </>)
  }
  return (<section>
    <h1 className="host-vans-title">Your listed vans</h1>
    <Suspense fallback={<h2>loading ...</h2>}>
      <Await resolve={vansDataPromise.vans}>
        {renderVanElements}
      </Await>
    </Suspense>
  </section>)
}