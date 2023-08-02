import React from "react";
import { useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
  console.log({error})
  return (<div>
    <h1>{error.message}</h1>
    <pre>{error.status} - {error.statusText}</pre>
  </div>)
}