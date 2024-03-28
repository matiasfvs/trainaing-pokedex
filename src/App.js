import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import MenuPag from "./components/header/menu-item";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <MenuPag />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
