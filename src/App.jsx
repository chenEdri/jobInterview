import React, { Component } from "react"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import { Header } from './cmps/Header.jsx'
import { Footer } from './cmps/Footer.jsx';
import { ItemApp } from './pages/item/ItemApp.jsx';

export class App extends Component {

  render() {

    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/item" component={ItemApp}/>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

