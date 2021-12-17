import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CafeRes from './components/cafe_res';
import Review from './components/review';
import Edit from './components/edit';
import Recipes from './components/recipes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cafe_res">Cafes & Restaurants</Nav.Link>
              <Nav.Link href="/review">Review</Nav.Link>
              <Nav.Link href="/recipes">Recipes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/review"><Review></Review></Route>
          <Route path="/cafe_res"><CafeRes></CafeRes></Route>
          <Route path={"/edit/:id"} component={Edit}></Route>
          <Route path="/recipes"><Recipes></Recipes></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
