import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import LandingPage from "./../MainPage/LandingPage/LandingPage";
import About from "./../MainPage/About/About";
import Skills from "./../MainPage/Skills/Skills";
import Portfolio from "./../MainPage/Portfolio/Portfolio";
import Contact from "./../MainPage/Contact/Contact";

const AppRouter = () => {
    return (
      
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact}/>
            </Switch>
       
    )
}

export default AppRouter;