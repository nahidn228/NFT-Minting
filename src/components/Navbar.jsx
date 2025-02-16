const Navbar = () => {
  return (
    <div className="bg-[#020204]">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <div>
          <img src="Frame.png" alt="" />
        </div>
        <div>
          <button className="btn-bg btn rounded-2xl font-light text-lg px-6">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
