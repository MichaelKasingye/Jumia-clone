import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Checkout from "./Componets/Checkout";
import Search from "./Componets/Search";
import Login from "./Componets/Login";
import Footer from "./Componets/Footer";
import Categories from "./Componets/Categories";
import { useStateValue } from "../src/ContextAPI/StateProvider";
import { auth } from "./FireBase/Firebase";
import { Unsubscribe } from "@material-ui/icons";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //code to run on a given condition
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //loggrd in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      Unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/computing">
            <Header />
            <Categories section="computing" />
            <Footer />
          </Route>

          <Route path="/sporting">
            <Header />
            <Categories section="Sports" />
            <Footer />
          </Route>

          <Route path="/electronics">
            <Header />
            <Categories section="Electronics" />
            <Footer />
          </Route>

          <Route path="/phoneTablets">
            <Header />
            <Categories section="Phones and Tablets" />
            <Footer />
          </Route>

          <Route path="/supermarket">
            <Header />
            <Categories section="Supermarket" />
            <Footer />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
