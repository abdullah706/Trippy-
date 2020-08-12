import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomeContainer from './components/HomeContainer';



class App extends Component {
  render(){


  return (
    <Router>
  <div>
  <Switch>
    <Route path="/" component ={HomeContainer}/>
      <HomeContainer />
  </Switch>
  </div>
      </Router>
  );
}
}

export default App;
