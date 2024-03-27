/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { useState } from "react";

function MobileDropNavLink({ title, to, children }) {
  const [isDropOpen, setIsDropOpen] = useState(false);

  return (
    <li className="cursor-pointer px-2 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div
          className={`${isDropOpen ? "text-red-500" : ""} text-base duration-300 hover:text-red-500`}
        >
          <Link to={to}>{title}</Link>
        </div>
        <i
          className={`${isDropOpen ? "rotate-90" : ""} h-[12px] w-[12px] transition-all duration-300`}
          onClick={() => setIsDropOpen(!isDropOpen)}
        >
          <ArrowRight
            fill={`${isDropOpen ? "#f03333" : "#707070"}`}
            height="10px"
            width="10px"
          />
        </i>
      </div>
      <div
        className={`${isDropOpen ? "max-h-80" : "max-h-0"} mt-4 overflow-hidden transition-all duration-300`}
      >
        {children}
      </div>
    </li>
  );
}

export default MobileDropNavLink;
