import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/Landing"
import "bootstrap/dist/css/bootstrap.min.css";
import { Signup } from './Components/Forms/Signup';
import { Login } from './Components/Forms/Login';
import { Homepage } from './pages/Homepage';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup"element={<Signup/>}/>
          <Route path="login"element={<Login/>}/>
          <Route path="/homepage"element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
