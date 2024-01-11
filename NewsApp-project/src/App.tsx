import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import Dashboard from "./page/Dashboard";
import LandingPage from "./page/LandingPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <LandingPage/>
        </div>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/dasboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// <h1 className='text-center text-3xl font-bold underline'> News App project</h1>
// <div className=" flex card justify-start">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.tsx</code> and save to test HMR
//   </p>
// </div>
