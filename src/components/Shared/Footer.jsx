function Footer() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex justify-center">
        <div className="flex flex-col p-40 gap-4">
          <div>
            <h1 className={`text-xl font-bold text-[#424242]`}>
              Contact
              <span className={`text-red-500`}> Us</span>
            </h1>
            <div className="border-red-500 bg-red-500 rounded-full w-16 h-1 flex-shrink-0"></div>
          </div>
          <p className="font-bold">Live Fresh Agro </p>
          <span className="font-bold">
            Corporate <span className="text-red-500">Office</span>
          </span>
          <p className="w-2/3">
            House 42, Road 6, Mohammadi Housing Society Mohammadpur, Dhaka- 1207
          </p>
          <p className="font-bold">
            Processing <span className="text-red-500">Center</span>
          </p>
          <p className="w-1/3">Plot: 46, Doyal Housing, Bosila, Dhaka- 1207</p>
          <p>
            <span className="font-bold">Phone:</span> +88 01799 399555
          </p>
          <p>
            <span className="font-bold">Email:</span> info@livefresh.com
          </p>
        </div>
        <div className="mt-40 flex justify-evenly gap-14">
          <div className="flex flex-col gap-5 cursor-pointer">
            <h1 className="font-bold text-xl">Navigation</h1>
            <p>Home</p>
            <p>Categories</p>
            <p>Cart</p>
          </div>
          <div className="flex flex-col gap-5 cursor-pointer">
            <h1 className="font-bold text-xl">Legal</h1>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Return Policy</p>
          </div>
          <div className="flex flex-col gap-5 cursor-pointer">
            <h1 className="font-bold text-xl">Social</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <h1>Copyright © 2022, Live Fresh Agro | All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;
