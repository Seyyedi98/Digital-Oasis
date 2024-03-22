function Topbar() {
  return (
    <div
      className="hidden h-[45px] w-screen items-center justify-between bg-neutral-100 text-xl
       font-[400] text-neutral-500 lg:flex"
    >
      <div className="content flex w-full items-center justify-between">
        <div className="flex justify-between gap-6">
          <div>Find Store</div>
          <div>support@digitalOasis.com</div>
        </div>
        <div className="flex justify-between gap-6">
          <div>Contact</div>
          <div>Track Your Order</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
