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
import { GerenteContext } from "./context/GerenteContext";
import { useContext } from "react";
import NotFound from "./pages/NotFound";



function App() {

  const {
    isLogado
  } = useContext(GerenteContext)

  return (
    <Router> 
    {!isLogado ? (
      <Switch>

      <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>

      </Switch>
      ) : (
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
          <Route path="/">
            <NotFound />
          </Route>

          </Switch>
        )}
    </Router>
  );
}

export default App;
