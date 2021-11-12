import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {



  return (
    <div className="app-container">
      <Header/>
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home}/>

    </div>
  );
};
export default App;
