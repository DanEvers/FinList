import React from "react";
// import logo from "./logo.svg";
// import "./reset.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Head from "./Components/Header/Head";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Head />
    <Switch>
      <Route exact path="/" component={Main}/>
      {/* <Route path="/Header" component={Head}/> */}
    </Switch>
    <Footer />
  </div>
  );
}

export default App;