import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
// import Booking from "./components/Booking";
import MainContainer from "./components/MainContainer";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";
import PackageMenu from "./components/PackageMenu";
import Cart from "./components/Cart";
import EnquiryForm from "./components/EnquiryForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: (
            <>
              <MainContainer />
              <EnquiryForm />
              <Gallery />
              <LocationMap/>
            </>
          ),
        },
        {
          path: "package", // Booking page
          element: <PackageMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
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
