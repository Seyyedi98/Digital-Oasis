/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function MobileNavLink({ title, to }) {
  return (
    <div className="flex cursor-pointer items-center justify-between px-2 pb-4 duration-300 hover:text-red-500">
      <Link to={to}>{title}</Link>
    </div>
  );
}

export default MobileNavLink;
