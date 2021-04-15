import "./App.scss";

import Table from "./components/Table";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Table />
      <Footer />
    </>
  );
}

export default App;
