import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {PageEnum} from "./types";

function App() {
  return (
    <div>
      <Navbar onPage={PageEnum.contact} />

    </div>
  );
}

export default App;
