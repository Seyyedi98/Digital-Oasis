import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "shop" },
  { path: "cart" },
  { path: "blog" },
  { path: "profile" },
  { path: "sign-in" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
