/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function MobileNavLink({ title, to }) {
  return (
    <li className="flex items-center justify-between px-2 pb-2">
      <Link to={to}>{title}</Link>
    </li>
  );
}

export default MobileNavLink;
