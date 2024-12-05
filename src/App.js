import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import MainContainer from "./components/MainContainer";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";

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

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />;
    </Provider>
  );
}

export default App;
