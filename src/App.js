import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
    <BrowserRouter basename='/parinsoftsolutions'>
      <Header />
      <Routes>
        <Route path="/parinsoftsolutions" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path='*'element={<Home/>}></Route>
      </Routes>
      <About />
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
