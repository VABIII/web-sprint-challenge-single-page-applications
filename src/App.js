import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Orders from "./components/Orders";

const App = () => {

  return (
    <div className="app-container">
      <Header/>
      <Route path="/pizza" component={Orders}/>
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home}/>
    </div>
  );
};
export default App;
