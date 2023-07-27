import React from "react";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <Outlet/>
      <h1>Dashboard goes here</h1>
    </div>)
}