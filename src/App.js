import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignInPage from './containers/auth/SignInPage';
import SignUpPage from './containers/auth/SignUpPage';
import Dashboard from './containers/dashboard/Dashboard';
import AddProject from './containers/projects/AddProject';
import ViewProject from './containers/projects/ViewProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/project/create' component={AddProject} />
          <Route path='/project/:id' component={ViewProject} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
