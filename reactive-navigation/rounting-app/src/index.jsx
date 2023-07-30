import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./server";
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/hosts/Income';
import Dashboard from './pages/hosts/Dashboard';
import Reviews from './pages/hosts//Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/hosts/HostVans';
import HostVansDetail from './pages/hosts/HostVansDetail';
import HostVanInfo from './pages/hosts/HostVanInfo';
import HostVanPricing from './pages/hosts/HostVanPricing';
import HostVanPhotos from './pages/hosts/HostVanPhotos';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App />
</React.StrictMode>
);