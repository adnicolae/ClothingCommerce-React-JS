import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user.email);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={ this.state.currentUser } />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/shop" component={ ShopPage } />
            <Route path="/signin" component={ SignInUp } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
