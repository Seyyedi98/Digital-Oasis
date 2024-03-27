import { useState } from "react";
import Cart from "../../assets/icons/Cart";
import Hearth from "../../assets/icons/Hearth";
import Menu from "../../assets/icons/Menu";
import Search from "../../assets/icons/Search";
import Shop from "../../assets/icons/Shop";
import UserMale from "../../assets/icons/UserMale";
import Sidebar from "./Sidebar";

function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile top header */}
      <div className=" fixed right-0 top-0 h-[70px] w-screen bg-white px-4">
        <div className="flex h-full  items-center justify-between">
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu />
          </div>
          <div>Logo</div>
          <div>
            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile bottom header */}
      <div className="fixed bottom-0 right-0 h-12 w-screen bg-white px-12">
        <div className="flex h-full items-center justify-between">
          <div>
            <UserMale />
          </div>
          <div>
            <Shop />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <Hearth />
          </div>
        </div>
      </div>

      <div>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </>
  );
}

export default HeaderMobile;
