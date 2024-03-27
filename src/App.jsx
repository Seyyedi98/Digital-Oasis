import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart" },
    ],
  },
  { path: "blog" },
  { path: "profile" },
  { path: "sign-in" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
