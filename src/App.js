import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Upload from './routes/Upload';
import Navigation from './components/Navigation';


function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/upload" component={Upload}/>
  </HashRouter>
}

export default App;