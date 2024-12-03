import React from "react";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Trading Bot Dashboard</h1>
      </header>
      <main>
        <Dashboard />
        <Settings />
      </main>
    </div>
  );
}

export default App;
