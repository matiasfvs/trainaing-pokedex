import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenuPag from "./components/header/menu-item";

const LazyHome = lazy(() => import("./components/home/home"));

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para redireccionar automáticamente a /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Ruta para el componente Home */}
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MenuPag />
              <LazyHome />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
