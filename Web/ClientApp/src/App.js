import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { AboutUs } from './components/AboutUs';
import { AddCar } from './components/AddCar';
import { Signup } from './components/Signup';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/AddCar' component={AddCar} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />

      </Layout>
    );
  }
}
 