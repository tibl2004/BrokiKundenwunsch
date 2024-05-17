import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";

import Home from './KundenWunsch/Home';
import Formular from './KundenWunsch/Formular';
import Kundenwunsch from './Admin/KundenWuensche';
import KundenEinzelansicht from './Admin/KundenEinzelansicht';


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
          
          <Route
            path="/kundenwuensche"
            element={
              <>
                <Kundenwunsch />
              </>
            }
          />

          <Route
            path="/kundenwuensche/:id"
            element={
              <>
                <KundenEinzelansicht />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
