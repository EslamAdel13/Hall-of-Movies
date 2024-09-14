import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAll from './Components/DisplayAll';
import Form from './Components/Form'
import Mylist from './Components/Mylist'
import Details from './Components/Details';
import Search from './Components/Search'
import Settings from './Components/Settings';


function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/home" element={<><Main /> <DisplayAll /></>} />
      <Route path="/search" element={<Search />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
