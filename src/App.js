import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/", 
      element: <Home />, 
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "booking", // Booking page
          element: <Booking />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
