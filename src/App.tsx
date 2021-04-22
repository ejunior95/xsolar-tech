import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/details">
            <Detalhes />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
