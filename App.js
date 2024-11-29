import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Cart, RestautrantMenu, About} from "./src/pages";
import Header from "./src/components/Header";
import OfflineNotifier from "./src/components/offlineNotifier";
import Search from "./src/pages/Search";
import { ToastContainer } from "react-toastify";


function App(){
    return (
        <Router>
          <Header/>
          <OfflineNotifier/>
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
            <Route path="/search" element={
              <Search />
            } />
          </Routes>
          <ToastContainer />
        </Router>

      );
}

export default App;