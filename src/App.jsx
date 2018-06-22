import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect

} from 'react-router-dom';




import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Create from './components/pages/Create';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Forms from './components/pages/Forms';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <div>
  <Router>
        <div>

       <Header/>


       <ScrollToTop>
       <Switch>

       < Route exact path="/signup" component={Signup} />
       < Route exact path="/" component={Login}  />
       < Route exact path="/create" component={Create} />
       < Route exact path="/dashboard" component={Dashboard} />
       < Route exact path="/forms" component={Forms} />

       </Switch>


  </ScrollToTop>

        <Footer/>
        </div>

        </Router>
  </div>
);

export default App;
