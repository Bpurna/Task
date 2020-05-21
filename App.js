import React from 'react';
import './App.css';
import Header from './Home/header';
import MainForm from './Home/mainForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/mainForm">
              <MainForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
    return (
      <div>
        <Header />
      </div>

    );
  }

}

export default App;
