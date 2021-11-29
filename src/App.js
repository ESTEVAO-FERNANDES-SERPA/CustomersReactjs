import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Custumers from "./pages/Custumers";
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<TemplatePage title='Home' Component={Home}/>} />
        <Route path="/custumers" element={<TemplatePage title='Custumers' Component={Custumers} />} />
      </Routes>
    </TemplateDefault>
  );
}

export default App;
