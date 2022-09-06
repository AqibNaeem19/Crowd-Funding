import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import AddProject from './Components/AddProject';
import Landing from "./Components/Landing";


function App() {
  return (
   <React.Fragment>
    <Header />
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/add-project" element={ <AddProject /> } />
      </Routes>
   </React.Fragment>
  );
}

export default App;
