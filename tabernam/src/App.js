import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Index from './components/pages/Index';

import Header from './elements/views/Header';
import Footer from './elements/views/Footer'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Header/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </Provider>
  );
  }
}

export default App;
