import Location from "../assets/icons/Location.jsx";
import Envelope from "../assets/icons/Envelope.jsx";

function Topbar() {
  return (
    <div
      className="hidden h-[45px] w-screen items-center justify-between bg-neutral-100 text-xs
       font-[300] text-neutral-500 lg:flex lg:px-2"
    >
      <div className="content flex w-full items-center justify-between">
        <div className="flex justify-between gap-2">
          <div className="border-gray-300 flex items-center gap-2 border-r-[1px] border-solid pr-2">
            <i>{<Location />}</i>Find Store
          </div>
          <div className="flex items-center gap-2">
            <i>{<Envelope />}</i>support@digitalOasis.com
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="border-gray-300 border-r-[1px] border-solid pr-2">
            Contact
          </div>
          <div>Track Your Order</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
