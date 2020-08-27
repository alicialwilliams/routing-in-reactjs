import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        
          
          <Route path="/home" component={Home}/>
          <Route exact 
          path="/"
          render={props=><Welcome{...props} name="Alicia"/>}
          />
  
          <Route exact
          path="/welcome/:name" 
          render={(props) => <Welcome {...props} name={props.match.params.name}/> }
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
      
          <Route render={() => (<div>404 Not found </div>)} />
      </Switch>
    </div>
  );
}

export default App;