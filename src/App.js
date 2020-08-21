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
          
          <Route exact
          path="/welcome/:name" 
          render={(props) => <Welcome {...props} name={props.match.params.name}/> }
          />

          <Route
          exact  
          path="/"
          render={(props) => <Welcome{...props} name="Alicia"/>}
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