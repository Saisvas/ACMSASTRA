import React, { Component } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Events from "./EventsComponent";
import Contact from "./ContactComponent";
import Team from "./TeamComponent";
import Footer from "./FooterComponent";
import Leader from "./LeaderboardComponent";
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
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/about" component={About} />
            <Route exact path="/leader" component={Leader} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
