import React, { useCallback, useContext } from "react"; 
import { HomePage } from "../pages/HomePage";
import { IdariHakedis } from "../pages/IdariHakedis";
import { SetBakim } from "../pages/SetBakim";
import { SetimNerede } from "../pages/SetimNerede";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";
import { PrivatePage } from "../pages/PrivatePage";

  export const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route path="/" exact>
            <HomePage/>
            </Route>
        
            <Route path="/idariHakedis">
            <IdariHakedis/>
            </Route>

            <Route path="/setBakim">
            <SetBakim/>
            </Route>

            <Route path="/setimNerede">
            <SetimNerede/>
            </Route>

            <PrivateRoute path="/private">
            <PrivatePage/>
            </PrivateRoute>

        </Switch>

    </Router>
    );
  };


function PrivateRoute ({children, ...rest}){
    const {state} =useContext(AppContext); 

    console.log(state);
    
    return <Route {...rest} render={({location})=> state.loggedIn ? children : (<Redirect to={{ pathname: "/" , state : { from: location}}}/> )} />
}