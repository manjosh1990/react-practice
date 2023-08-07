import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './index.css';
import "./server";
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/hosts/Income';
import Dashboard from './pages/hosts/Dashboard';
import Reviews from './pages/hosts//Reviews';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVansLoader } from './pages/hosts/HostVans';
import HostVansDetail, { loader as hostVanDetailLoader } from './pages/hosts/HostVansDetail';
import HostVanInfo from './pages/hosts/HostVanInfo';
import HostVanPricing from './pages/hosts/HostVanPricing';
import HostVanPhotos from './pages/hosts/HostVanPhotos';
import PageNotFound from './pages/PageNotFound';
import Error from './components/Error';
import Login,{loader as loginLoader} from './pages/Login';
import { requireAuth } from './utils';

const hashRouter = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='login' element={<Login />} loader={loginLoader}/>
    <Route path='about' element={<About />} />
    <Route path='vans'
      element={<Vans />}
      loader={vansLoader}
      errorElement={<Error />}
    />
    <Route
      path='vans/:id'
      element={<VanDetail />}
      loader={vanDetailLoader}
    />
    <Route
      path='host' element={<HostLayout />} >
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path='income'
        element={<Income />}
        loader={async () => await requireAuth()} />
      <Route
        path='reviews'
        element={<Reviews />}
        loader={async () => await requireAuth()} />
      <Route
        path='vans'
        element={<HostVans />}
        loader={hostVansLoader} />
      <Route
        path='vans/:id'
        element={<HostVansDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requireAuth()} />
        <Route
          path='pricing'
          element={<HostVanPricing />}
          loader={async () => await requireAuth()} />
        <Route
          path='photos'
          element={<HostVanPhotos />}
          loader={async () => await requireAuth()} />
      </Route>
    </Route>
    <Route path='*' element={<PageNotFound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={hashRouter} />
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />
);