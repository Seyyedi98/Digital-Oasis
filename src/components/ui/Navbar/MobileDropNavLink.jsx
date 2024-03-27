/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/icons/ArrowRight";

function MobileDropNavLink({ title, to }) {
  return (
    <li className="flex items-center justify-between px-2 pb-2">
      <Link to={to}>{title}</Link>
      <i className="h-[12px] w-[12px]">
        <ArrowRight fill="#707070" height="10px" width="10px" />
      </i>
    </li>
  );
}

export default MobileDropNavLink;
