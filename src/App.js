import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Home from './components/home/Home'
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import PageNotFound from'./components/pagenotfound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        
          
          <Route 
          exact
          path="/home" component={Home}/>
          
          <Route exact
          path="/welcome/:name" 
          render={(props) => <Welcome {...props} name={props.match.params.name}/> }
          />
          
          <Route 
          exact 
          path="/"
          render={props=><Welcome{...props} name="Alicia"/>}
          />
  
          
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
      
          <Route path="*" component ={PageNotFound} />
          
      </Switch>
    </div>
  );
}

export default App;