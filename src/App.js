import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


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
              <LazyHome />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
