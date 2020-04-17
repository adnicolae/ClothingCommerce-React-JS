import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" component={ SignInUp } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
