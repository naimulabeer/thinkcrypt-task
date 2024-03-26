import { Link } from "react-router-dom";

function ProductNavbar() {
  return (
    <div className="flex justify-between items-center w-full backdrop-blur-sm lg:px-32 lg:py-5">
      <div className="flex gap-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M1 12.3333H12.9014M1 5H23M1 19.6667H23"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          className="border hidden lg:block rounded-3xl w-60 px-4 "
          type="text"
          placeholder="What are you looking for?"
        />
      </div>

      <Link to="/">
        <img src="logo.svg" alt="logo" />
      </Link>

      <div className="flex justify-center items-center gap-4 cursor-pointer">
        <img src="cart.svg" alt="cart" />
        <img src="avatar.svg" alt="avatar" />
        <h1>John Doe</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
        >
          <path
            d="M5.84102 5.68195C5.64896 5.86107 5.35104 5.86107 5.15898 5.68195L0.799007 1.61565C0.467067 1.30607 0.686131 0.75 1.14003 0.75L9.85997 0.75C10.3139 0.75 10.5329 1.30607 10.201 1.61565L5.84102 5.68195Z"
            fill="#424242"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProductNavbar;
