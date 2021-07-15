import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Donors from './components/Donors/Donors';
import SignIn from './components/SignIn/SignIn';
import Search from './components/Search/Search';
import AboutUs from './components/AboutUs/AboutUs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import BeDonor from './components/Home/BeDonor/BeDonor';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const DonorContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [searchedDonorInfo, setSearchedDonorInfo] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <DonorContext.Provider value={[searchedDonorInfo, setSearchedDonorInfo]}>
        <div className={styles.app}>
          <Router>
            <Switch>
              <Route path='/home'>
                {/* <Home searchedDonorInfo={searchedDonorInfo} setSearchedDonorInfo={setSearchedDonorInfo} /> */}
                <Home />
              </Route>
              <PrivateRoute path='/donors'>
                <Donors />
              </PrivateRoute>
              <Route path='/sign-in'>
                <SignIn />
              </Route>
              <PrivateRoute path='/search'>
                {/* <Search searchedDonorInfo={searchedDonorInfo} setSearchedDonorInfo={setSearchedDonorInfo} /> */}
                <Search />
              </PrivateRoute>
              <Route path='/about-us'>
                <AboutUs />
              </Route>
              <PrivateRoute path='/registration'>
                <BeDonor />
              </PrivateRoute>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      </DonorContext.Provider>
    </UserContext.Provider >
  );
}

export default App;
