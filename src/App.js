import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import NavbarDisplay from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <NavbarDisplay />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;