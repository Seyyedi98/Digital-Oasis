import { useState } from "react";
import Close from "../../assets/icons/Close";
import MobileSlideNavLink from "../ui/Navbar/MobileSlideNavLink";
import MobileNavLink from "../ui/Navbar/MobileNavLink";
import ArrowRight from "../../assets/icons/ArrowRight";
import MobileDropNavLink from "../ui/Navbar/MobileDropNavLink";

/* eslint-disable react/prop-types */
function Sidebar({ isOpen, setIsOpen }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div
      className={`${isOpen ? "left-0" : "-left-full"} fixed top-0 h-screen w-[70%] overflow-scroll overscroll-y-auto bg-white shadow transition-all duration-1000`}
    >
      <div>
        <div className="flex h-[55px] items-center justify-end bg-red-600 px-4 text-sm">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center gap-1 text-xs text-white"
          >
            CLOSE
            <i className="mb-[2px]">
              <Close />
            </i>
          </div>
        </div>

        <div className="flex transition-all duration-1000	">
          {/* main menu */}
          <div
            className={`${isSubMenuOpen ? "pointer-events-none w-0 -translate-x-full opacity-0" : "w-full "} transition-all duration-700 `}
          >
            <ul
              className="flex flex-col gap-4 px-3 py-12 text-xs font-medium text-gray-800
            [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-gray-100"
            >
              <MobileNavLink title="HOME" to="/" />
              <MobileSlideNavLink
                title="SHOP"
                to="/shop"
                isOpen={isSubMenuOpen}
                setMenuOpen={setIsSubMenuOpen}
              ></MobileSlideNavLink>
              <MobileNavLink title="BLOG" to="/blog" />
              <MobileNavLink title="ABOUT US" to="/about" />
              <MobileNavLink title="CONTACT US" to="/contact" />
            </ul>
          </div>

          {/* shop submenu */}
          <div
            className={`${isSubMenuOpen ? "w-full px-4 py-6" : "pointer-events-none w-0 translate-x-full opacity-0"} transition-all duration-700`}
          >
            <div className="flex items-center justify-between">
              <i
                className="rotate-180"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                <ArrowRight fill="#707070" height="14px" width="14px" />
              </i>
              <h3 className="text-xl text-red-500">SHOP</h3>
              <div></div>
            </div>
            <ul
              className="flex flex-col gap-4 px-3 pt-12 text-xs font-medium text-gray-800
            [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-gray-100"
            >
              <MobileDropNavLink title="Mobile" to="/shop">
                <MobileNavLink title="Apple" to="/shop" />
                <MobileNavLink title="Samsung" to="/shop" />
                <MobileNavLink title="Huawei" to="/shop" />
                <MobileNavLink title="Xiaomi" to="/shop" />
              </MobileDropNavLink>
              <MobileDropNavLink title="Tablet" to="/shop">
                <MobileNavLink title="Apple" to="/shop" />
                <MobileNavLink title="Samsung" to="/shop" />
                <MobileNavLink title="Huawei" to="/shop" />
                <MobileNavLink title="Xiaomi" to="/shop" />
              </MobileDropNavLink>
              <MobileDropNavLink title="Laptop" to="/shop">
                <MobileNavLink title="Sony" to="/shop" />
                <MobileNavLink title="Samsung" to="/shop" />
                <MobileNavLink title="LG" to="/shop" />
              </MobileDropNavLink>
              <MobileDropNavLink title="Accessories" to="/shop">
                <MobileNavLink title="Gamepad" to="/shop" />
                <MobileNavLink title="Headset" to="/shop" />
                <MobileNavLink title="Keyboard" to="/shop" />
                <MobileNavLink title="Mouse" to="/shop" />
              </MobileDropNavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
