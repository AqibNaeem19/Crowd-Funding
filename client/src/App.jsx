import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import AddProject from './Components/AddProject';


function App() {
  return (
   <React.Fragment>
      <Routes>
        <Route path="/" element={<Header  />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
   </React.Fragment>
  );
}

export default App;
