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

function App() {
  return (
    <div className='app'>
      <Header/>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/donors'>
            <Donors />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
