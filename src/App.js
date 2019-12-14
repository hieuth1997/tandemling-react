import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route ,  } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Workpage from "./Components/WorkPage";
import About from "./Components/About";
import Invest from "./Components/InvestPage";
import Success from './Components/SuccessPage'
class App extends Component {
  componentDidMount() {
    console.log("app did mount");
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Workpage} />
          <Route path="/invest" exact component={Invest} />
          <Route path ="/success" exact component={Success}/>

          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
