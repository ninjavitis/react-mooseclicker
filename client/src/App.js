import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FetchUser from './Components/FetchUser';


function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </FetchUser>
      <Footer />
    </>
  );
}

export default App;
