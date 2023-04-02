import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog/Catalog";
import MovieDetails from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog/:userID" element={<Catalog />}></Route>
        <Route path="/catalog/:userID/:movieID" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
