import React from "react";
import MatchList from "./components/MatchList";
import { Match } from "./components/Data";
import "../src/App.css"

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Football Matches</h1>
      <MatchList matches={Match} />
    </div>
  );
};

export default App;
