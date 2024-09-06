import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
