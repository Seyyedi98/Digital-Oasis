import { Outlet } from "react-router-dom";
import HeaderDesktop from "../components/Navigation/HeaderDesktop";
import HeaderMobile from "../components/Navigation/HeaderMobile";
import Topbar from "../components/ui/Navbar/Topbar";

function Layout() {
  return (
    <>
      <header>
        <Topbar />
        <HeaderDesktop />
        <HeaderMobile />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
