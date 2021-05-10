import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Table from "./components/pages/Table";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Scorers from "./components/pages/Scorers";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/table" component={Table} />
        <Route path="/scorers" component={Scorers} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
