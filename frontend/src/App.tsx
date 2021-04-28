import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
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
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
