import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Cart, RestautrantMenu, About } from "./src/pages";
import Header from "./src/components/Header";


function App(){
    return (
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={
              <Home />
            }/>
            <Route path="/cart" element={
              <Cart />
            } />
            <Route path="/productmenu" element={
              <RestautrantMenu />
            } />
            <Route path="/about" element={
              <About />
            } />
            {/* <Route path="*" element={
              <Pagenotfound />
            } /> */}

          </Routes>
        </Router>
      );
}

export default App;