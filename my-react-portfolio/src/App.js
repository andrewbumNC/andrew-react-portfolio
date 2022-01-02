import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//example of Alp man using methods at minute 1:39 in video 1
//example of props at 2:15 in video 1, props.children at 2:21
//example of using multiple components and map loop at 2:51 video 1, must use key 2:54 - basically takes data sheet, imports to app, passes data from app.js to a component as a prop.
//example of using state components at video 2 minute 25:00. you can update what is being passes into the state. Might be a way for when we click on each nav section. You could store the html in another file, import as a variable so it looks clean... maybe
//good example of how to set up updating a state at minute 35:00. If you need example of using state go to activity 12. Super easy.
import Headerex from './components/header';
import Aboutme from './components/aboutme';

function App() {



  return (
    <div> 
   < Headerex/>
   </div>
  
  );
}

export default App;
