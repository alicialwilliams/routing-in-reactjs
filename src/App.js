import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';



function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route exact path='/' render={()=> <div>Home</div>} />
          <Route  
          path="/Welcome/:name"
          render={() => <h1>Welcome, {Welcome}</h1>}
        />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route render = {
            ()=> <h3>Page Not Found</h3>
          } />
        </Switch>
    </div>
  );
}

export default App;