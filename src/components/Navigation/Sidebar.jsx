import Close from "../../assets/icons/Close";
import MobileDropNavLink from "../ui/Navbar/MobileDropNavLink";
import MobileNavLink from "../ui/Navbar/MobileNavLink";

/* eslint-disable react/prop-types */
function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${isOpen ? "left-0" : "-left-full"} fixed top-0 h-screen w-[70%] bg-white shadow transition-all duration-1000`}
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
        <div>
          <ul
            className="flex flex-col gap-6 px-3 py-12 text-xs font-medium text-gray-800
            [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-gray-100"
          >
            <MobileNavLink title="HOME" to="/" />
            <MobileDropNavLink title="SHOP" to="/shop"></MobileDropNavLink>
            <MobileNavLink title="BLOG" to="/blog" />
            <MobileNavLink title="ABOUT US" to="/about" />
            <MobileNavLink title="CONTACT US" to="/contact" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
