import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CadastrarAlterar from '../src/pages/CadastrarAlterar';
import Listar from '../src/pages/Listar';
import NavBar from '../src/components/NavBar';

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/cadastrar-cliente">
            <NavBar />
            <CadastrarAlterar />
          </Route>
          <Route path="/alterar-cliente">
          <NavBar />
            <CadastrarAlterar />
          </Route>
          <Route path="/listar">
          <NavBar />
            <Listar />
          </Route>
          <Route path="/home">
          <NavBar />
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
