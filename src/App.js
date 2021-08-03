import { useEffect, useState } from "react";
import "./App.css";
//import OpenMap from "./components/SearchApi/TravelAPI";
import SearchIndex from "./components/SearchCRUD/SearchIndex";
import UserIndex from "./components/UserLogin/UserIndex";
import {Button}from "reactstrap"

function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken)
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
    console.log('works')
  }
  const protectedViews = () => {
    return (
      sessionToken === localStorage.getItem('token') ? <SearchIndex token={sessionToken} /> :
        <UserIndex updateToken={updateToken}/>
    )
  }

  return (
    <div className="App">
      <div><Button onClick={clearToken}>Logout</Button></div>
      {protectedViews()}
      </div>
  );
}

export default App;
