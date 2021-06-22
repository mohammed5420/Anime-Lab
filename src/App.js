import React from "react";
import Footer from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
import Projects from "./pages/Projects";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App" style={{maxWidth: "1368px" , margin: "0 auto"}}>
      <GlobalStyle />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
