import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./partials/Header/Header";

const App =() => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partials/Header" element={<Header />} />
      </Routes>
  );
}

export default App;
