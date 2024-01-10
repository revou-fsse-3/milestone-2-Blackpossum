import { BrowserRouter as Router,
Route,
Link,
RouterProvider,
createBrowserRouter,} 
from "react-router-dom"
import Navbar from "./component/Navbar"







function App() {

  
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <Navbar 
        brandName={"AfterLunch"} 
        navItems={[
          {label:"Home", href:"/"},
          {label:"About", href:"/about"},
          {label:"News Dashboard", href:"/Dasboard"}
        ]} />
      )
    }
  ])

  return (
    <div>

    </div>
  )
}

export default App
