
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './pages/register';
//import admin from './pages/admin';
//import profile from './pages/profile';
import Login from "./pages/login";


const App = () => {

return(

<BrowserRouter>
  <Switch>
    <Route exact path ="/" component={Register}></Route>
    <Route exact path ="/login" component={Login}></Route>

  </Switch>

</BrowserRouter>

)
}

export default App;
