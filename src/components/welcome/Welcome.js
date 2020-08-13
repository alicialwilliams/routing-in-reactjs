import React from 'react';//package we are importing is lower case

function Welcome(props) {
    return (
      <div className="Welcome">
       <h2> Welcome, {props.name}!</h2>
      </div>
    );
  }

export default Welcome;
