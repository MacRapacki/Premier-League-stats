import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Table from "./pages/Table";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Scorers from "./pages/Scorers";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Premier-League-stats/" component={Home} exact />
        <Route path="/table" component={Table} />
        <Route path="/scorers" component={Scorers} />
        <Route path="/teams" component={Teams} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
