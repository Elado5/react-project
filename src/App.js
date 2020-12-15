import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './pages/register';
import login from './pages/login';
import admin from './pages/admin';
import profile from './pages/profile';


const App = () => {

return(

<BrowserRouter>
  <Switch>
    <Route exact path ="/" component={Register}></Route>
    

  </Switch>

</BrowserRouter>

)
}

export default App;
