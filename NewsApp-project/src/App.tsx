import  { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Navbar from "./component/Navbar"
import Dashboard from "./page/Dashboard"
import LoginPage from "./page/LoginPage"
import SignupPage from "./page/SignupPage"


const App = () => {

  const [ isLoggedIn,setIsLoggedIn ]=useState<boolean>(false)

  useEffect(()=>{
    const Token = localStorage.getItem("Token");
    if(Token){
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  },[]);

  const handleLogout = () => {
    // log out logic 
    setIsLoggedIn(false)
  };

  return (
    <Router>
      <Route
      path="/*"
      element={
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
      }
      />
      <Routes>
        <Route
        path="/dashboard"
        element={
          isLoggedIn ? <Dashboard/> : <Navigate to={"/login"} replace={true}/>
        }
        />
        <Route
        path="/login"
        element={
          <LoginPage/>
        }
        />
        <Route
        path="/signup"
        element={
          <SignupPage/>
        }
        />
      </Routes>
    </Router>
  )
}

export default App

