import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Focii from "./components/Focii/Focii";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/focii" element={<Focii></Focii>} />
          <Route path="/*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
