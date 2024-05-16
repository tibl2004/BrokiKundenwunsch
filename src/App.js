import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";

import Home from './KundenWunsch/Home';
import Formular from './KundenWunsch/Formular';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/formular"
            element={
              <>
                <Formular />
              </>
            }
          />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
