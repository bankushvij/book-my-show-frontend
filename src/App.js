import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import AllMovies from './components/movies/AllMovies';
import Carousel from './components/carousel/Carousel';
import Cards from './components/card-carousel/Card-carousel';
import Premiere from './components/premiere/Premiere';
import SingleMovie from './components/movies/SingleMovie';
import React from "react";
import SingleMovieFetch from './components/movies/SingleMovieFetch';
import AllMoviesFetch from './components/movies/AllMoviesFetch';

import UserRegistration from './components/user-registration/UserRegister';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
function App() {
  return (
    <Router>

      <div>
        <Header />

        <Switch>

          <Route exact path="/movies">
            
            <AllMoviesFetch />
            {/* <Premiere /> */}

          </Route>
          <Route exact path="/register">
            
            <UserRegistration />
            {/* <Premiere /> */}

          </Route>
          <Route exact path="/">
            <Carousel />
            <Cards />
            <Cards />
            
          </Route>
          <Route exact path="/movies/:movid">
            {/* <AllMovies/> */}
            <SingleMovieFetch/>
          </Route>
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
