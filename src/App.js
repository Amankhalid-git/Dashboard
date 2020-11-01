import Dashboard from './components/dashboard';
import React, { Component } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";


class App extends Component {
  render(){
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
}

export default App;
