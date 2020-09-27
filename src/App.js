import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="FinList">
      <div classname="FinList-head">
        <h1>Test</h1>
      </div>
      <div className="FinList-main">
        <div className="title">
          <h1>FinList</h1>
        </div>
        <div className="slogan">
          <h5>Der Atlas für gewerbliche Immobilienfinanzierung</h5>
        </div>

        {/* <img src={logo} className="FinList-logo" alt="logo" /> */}
        <div className="slogan2">
          <h4>Sichern Sie sich den kostenlosen Test - bis zum 31.10!</h4>
        </div>
        <div>
        <button id="button">
          Test sichern
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
