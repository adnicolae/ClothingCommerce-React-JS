import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <div>
    <h1>Hats Page { props.match.params.hatId } { props.match.url }</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/hats/:hatId" component={ HatsPage } />
          <Route path="/shop/hats" component={ HatsPage } />
          <Route path="/shop/sneakers" component={ HatsPage } />
          <Route path="/shop/jackets" component={ HatsPage } />
          <Route path="/shop/womens" component={ HatsPage } />
          <Route path="/shop/mens" component={ HatsPage } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
