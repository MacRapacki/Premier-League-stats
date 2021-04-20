import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Table from "./components/Table";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/table" component={Table} />
        {/* <Route path="/sign-in" component={SignIn} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
