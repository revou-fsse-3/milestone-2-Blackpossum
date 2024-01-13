/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./page/Dashboard"
import LoginPage from "./page/LoginPage"
import SignupPage from "./page/SignupPage"
import PageBackground from "../src/assets/public/Innovation-amico.svg"
import SignupBackground from "../src/assets/public/Tablet login-amico.svg"
import BasicContainer from "./containers/BasicContainer"


// fix layout so it rendered(mbenerke layout ndess.....)


const App:React.FC = () => {

  const [ isLoggedIn,setIsLoggedIn ]=useState<boolean>(false)

  useEffect(()=>{
    const Token = localStorage.getItem("Token");
    if(Token){
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  },[]);

  const routers= createBrowserRouter([{
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element:<BasicContainer background={PageBackground}>
          <LoginPage/>
        </BasicContainer>
      },
      {
        path:"/signup",
        element:<BasicContainer background={SignupBackground}>
          <SignupPage/>
        </BasicContainer>
      },
      {
        path:"/dashboard",
        element:
          <Dashboard/>
      }
    ]
  }])


  return (
    <RouterProvider router={routers}/>
  )
}

export default App

