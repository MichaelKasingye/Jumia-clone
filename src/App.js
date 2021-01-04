import React,{useEffect} from 'react';
import './App.css';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header';
import Home from './Componets/Home';
import Checkout from './Componets/Checkout';
import Login from './Componets/Login';
import { useStateValue } from '../src/ContextAPI/StateProvider';
import {auth} from "./FireBase/Firebase";
import { Unsubscribe } from '@material-ui/icons';

function App() {
  const [{user}, dispatch] = useStateValue();

  //code to run on a given condition
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    //loggrd in
    dispatch({
      type:"SET_USER",
      user:authUser
    });
  }else{
    //logged out
    dispatch({
      type:"SET_USER",
      user:null
    });
  }
});
return () =>{
Unsubscribe();
}
},[]);
console.log("User is >>>>",user);
  return (
    <Router>
    <div className="App">
       <Switch>
         <Route path="/checkout">
         <Header/>
         <Checkout/>
         </Route>

         <Route path="/login">
           <Login/>
         </Route>
         
         <Route path="/">
           <Header/>
          <Home/>
         </Route>
       </Switch>
    </div>
    </Router>
  );
}
// {
//   router
// }

export default App;
