import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Events from "./EventsComponent";
import Contact from "./ContactComponent";
import Team from "./TeamComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
// import headerLogo from "./images/acmlogo.png";
class Main extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
