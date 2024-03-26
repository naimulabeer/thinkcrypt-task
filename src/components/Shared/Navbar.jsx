import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center fixed z-10 lg:w-full w-fit backdrop-blur-sm">
      <div className="flex justify-center cursor-pointer">
        <img src="src/assets/icons/burgericon.svg" alt="burgericon" />
        <div className="flex gap-2 px-4 py-2 text-xs border border-white border-opacity-40">
          <img src="src/assets/icons/location.svg" alt="location" />
          <div className="mont-font text-white flex flex-col justify-center">
            <h1>DHAKA</h1>
            <h2 className=" font-bold">MOHAMMADPUR</h2>
          </div>
        </div>
        <div className="mont-font hidden lg:flex text-white flex-col border border-[#FFFFFF66] justify-center px-2">
          <Link to="/products" className="font-bold">
            Products
          </Link>
        </div>
      </div>
      <div className="flex cursor-pointer">
        <img
          className="px-4 py-2 border border-white border-opacity-40"
          src="src/assets/icons/search.svg"
          alt="searchicon"
        />
        <img src="src/assets/icons/cart.svg" alt="cart" />
        <img
          className="px-4 py-2 border border-white border-opacity-40"
          src="src/assets/icons/avatar.svg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
