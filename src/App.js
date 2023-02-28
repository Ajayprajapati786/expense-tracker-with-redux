import { Redirect, Route,Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from './components/Login';
import Signup from './components/Signup';
import Completeprofile from "./components/Completeprofile";
import AuthContext from "./components/AuthContext";
import { useContext } from "react";
import Home from "./components/Home";
import Verify from "./components/Verify";
import DailyExpense from "./components/DailyExpense";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">

      <Header/>
      
      <Switch>
        
        <Route path="/signup" >
          <Signup/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/verify-email">
          <Verify/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>


        <Route path="/DailyExpense">
          {authCtx.isLoggedIn &&<DailyExpense/>}
          {!authCtx.isLoggedIn && <Redirect to="/home"/>}
        </Route>

        <Route path="/complete-profile">
          {authCtx.isLoggedIn && <Completeprofile/>}
          {!authCtx.isLoggedIn && <Redirect to="/home"/>}
        </Route>

        </Switch>
    </div>
  );
}

export default App;
