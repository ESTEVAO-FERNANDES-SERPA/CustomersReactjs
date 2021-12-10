import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Custumers from "./pages/Custumers";
import CustumersRegister from "./pages/CustumersRegister";
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Edit from './pages/Edit'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<TemplatePage title='Home' Component={Home}/>} />
        <Route path="/custumers" element={<TemplatePage title='Clientes' Component={Custumers} />} />
        <Route path="/custumers/add" element={<TemplatePage title='Cadastrar clientes' Component={CustumersRegister} />} />
        <Route path="/custumers/edit:id" element={<TemplatePage title='Editar Clientes' Component={Edit} />} />
      </Routes>
    </TemplateDefault>
  );
}

export default App;
