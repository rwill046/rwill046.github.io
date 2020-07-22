import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContent from './components/home/HomeContent';
import Gallery from './components/gallery/Gallery';
import Video from './components/video/Video';
import Help from './components/help/Help';
import Invalid from './components/invalid/Invalid';
import './App.css'; 

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
      <Switch>

        <Route exact path="/">
          <Navbar />
          <br />
          <header className="App-content">
            <Gallery />
            <br />
            <HomeContent />
          </header>
          <br />
          <Footer />
        </Route>

        <Route exact path="/video">
          <Navbar />
          <Video message="VIDEO TUTORIAL"/>
          <Footer />
        </Route>

        <Route exact path="/help">
          <Navbar />
          <Help message="HELLO THERE, HOW MAY WE ASSIST YOU?"/>
          <Footer />
        </Route>

        <Route exact path="/notfound">
          <Invalid message="404 PAGE NOT FOUND"/>
        </Route>
        
        {window.location.pathname === "/" ? <Redirect to="/" /> : <Redirect to="/notfound" /> }
        {window.location.pathname === "/help" ? <Redirect to="/help" /> : <Redirect to="/notfound" /> }
        {window.location.pathname === "/video" ? <Redirect to="/video" /> : <Redirect to="/notfound" /> }
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
