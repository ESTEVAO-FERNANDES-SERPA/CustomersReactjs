import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import TemplateDefault from './templates/Default'

const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </TemplateDefault>
  );
}

export default App;
