import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Register from './pages/register/register';
import SignIn from './pages/sign-in/sign-in';

import './App.css';

class App extends React.Component{

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
