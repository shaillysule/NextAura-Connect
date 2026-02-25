import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/Landing"
import "bootstrap/dist/css/bootstrap.min.css";
import { Signup } from './Components/Forms/Signup';
import { Login } from './Components/Forms/Login';
import { Homepage } from './pages/Homepage';
import { Dashboard }  from './Components/SellerDashboard/Dashboard/Dashboard';
import { Cards } from './Components/SellerDashboard/Cards/Cards';
import { AddProduct } from './Components/AddProduct/AddProduct';
import { Orders } from './Components/Orders/Orders';
import { MyProducts } from './Components/MyProducts/MyProducts';
import { Search } from './pages/Search';
import ResourceDetail from './pages/ResourceDetail';
import { Profile } from './Components/SellerDashboard/Profile/Profile';
import { SellerSettings } from './Components/SellerDashboard/SellerSettings/SellerSettings';
import Layout from './Components/AdminLayout/Layout/Layout';
import AdminDashboard from './Components/AdminDashboard/Dashboard/Dashboard';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup"element={<Signup/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/homepage"element={<Homepage/>}/>
          <Route path="/search" element={<Search />} />

          <Route path="/seller" element={<Dashboard />}>
            <Route index element={<Cards />} />
            <Route path="dashboard" element={<Cards />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="my-products" element={<MyProducts />} />
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<SellerSettings/>}/>
          </Route>

         <Route path="/admin" element={<Layout />}>
          <Route index element={<AdminDashboard />} />

         </Route>
            

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
