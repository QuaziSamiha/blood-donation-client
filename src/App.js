import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Donors from './components/Donors/Donors';
import SignIn from './components/SignIn/SignIn';
import Search from './components/Search/Search';
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import BeDonor from './components/BeDonor/BeDonor';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/donors'>
            <Donors />
          </PrivateRoute>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/registration'>
            <BeDonor />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
