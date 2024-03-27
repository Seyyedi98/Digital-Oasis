/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/icons/ArrowRight";

function MobileSlideNavLink({ title, to, isOpen, setMenuOpen }) {
  //   const [isDropOpen, setIsDropOpen] = useState(false);

  return (
    <li className="flex cursor-pointer items-center justify-between px-2 pb-4 duration-300 hover:text-red-500">
      <Link to={to}>{title}</Link>
      <i
        // className={`${isDropOpen ? "rotate-90" : ""} h-[12px] w-[12px] transition-all duration-300`}
        className={`h-[12px] w-[12px] cursor-pointer transition-all duration-300`}
        // onClick={() => setIsDropOpen(!isDropOpen)}
        onClick={() => setMenuOpen(!isOpen)}
      >
        <ArrowRight
          //   fill={`${isDropOpen ? "#f03333" : "#707070"}`}
          fill="#707070"
          height="10px"
          width="10px"
        />
      </i>
    </li>
  );
}

export default MobileSlideNavLink;
