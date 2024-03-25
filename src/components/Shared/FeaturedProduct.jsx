import { Link } from "react-router-dom";
import ProductLists from "./ProductLists";

function FeaturedProduct() {
  return (
    <div className="mt-20 mb-20">
      <img className="w-full" src="cutimage.png" alt="cutimage" />
      <div className="absolute top-10 left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="518"
          height="438"
          viewBox="0 0 518 438"
          fill="none"
        >
          <path
            d="M511.439 75.6065C532.8 15.1749 488.481 -55.5592 486.588 -58.5157C484.727 -61.3812 481.26 -62.6486 477.92 -61.6352C474.666 -60.5163 472.553 -57.3777 472.774 -53.997C475.713 -10.7967 468.588 20.2302 451.766 38.2856C440.408 50.4089 424.834 56.504 405.439 56.504C392.506 56.504 382.511 53.6385 382.405 53.6385C331.047 32.4804 280.872 29.3226 255.485 29.3226C242.835 29.3226 235.249 30.0581 235.249 30.0917C234.995 30.0581 227.405 29.3226 214.75 29.3226C189.38 29.3226 139.16 32.4804 88.417 53.4181C88.3164 53.4565 78.1434 56.5064 64.7671 56.5064C45.4011 56.5064 29.8038 50.4089 18.4832 38.288C1.60892 20.2326 -5.46136 -10.7943 -2.52399 -53.9946C-2.30357 -57.4088 -4.43832 -60.5474 -7.68475 -61.6328C-10.9743 -62.6989 -14.525 -61.3788 -16.3363 -58.5133C-18.2554 -55.5592 -62.5484 15.1749 -41.1961 75.6065C-32.19 101.104 -12.9485 120.719 16.1496 134.107C-10.234 145.61 -24.9496 154.405 -27.6426 160.285C-28.5985 162.45 -28.5219 164.913 -27.3934 166.969C-26.4566 168.735 -3.8657 209.805 33.0191 209.805C36.0858 209.805 39.246 209.489 42.2936 208.902L83.2347 202.105C93.3405 235.374 118.622 311.118 144.74 330.848C140.343 337.243 135.456 347.124 134.869 360.018C133.927 380.362 143.875 401.419 164.475 422.503C174.351 432.7 180.932 438 210.984 438C215.107 438 219.664 437.935 224.511 437.693H245.633C250.727 437.935 255.327 438 259.407 438C289.459 438 295.981 432.681 305.916 422.503C326.492 401.419 336.478 380.362 335.525 360.018C334.969 347.124 330.053 337.243 325.647 330.848C351.8 311.118 376.995 235.372 387.132 202.105L427.911 208.864C470.052 216.823 496.761 168.826 497.751 166.952C498.875 164.873 498.92 162.41 498.029 160.285C495.283 154.424 480.63 145.662 454.237 134.093C483.191 120.757 502.459 101.142 511.439 75.6065ZM431.852 126.852C428.876 127.866 426.84 130.564 426.744 133.74C426.667 136.862 428.538 139.675 431.447 140.904C451.026 148.839 473.655 159.329 481.624 164.509C475.306 174.006 458.995 194.814 437.283 194.814C435.115 194.814 432.935 194.594 430.467 194.17L383.007 186.211C379.386 185.664 375.661 187.892 374.614 191.501C356.266 253.844 327.319 320.613 313.483 320.613C310.322 320.613 307.529 322.561 306.463 325.52C305.349 328.438 306.194 331.759 308.576 333.786C308.71 333.891 319.801 343.846 320.577 360.68C321.269 376.742 312.752 394.035 295.171 412.045C286.426 421.032 284.262 424.058 245.873 422.702H224.226C187.789 424.029 183.896 420.975 175.211 412.045C157.759 394.122 149.239 376.914 149.814 360.907C150.475 343.944 161.37 334.169 161.801 333.786C164.187 331.759 165.031 328.438 163.916 325.52C162.81 322.599 160.042 320.613 156.904 320.613C143.063 320.613 114.115 253.844 95.758 191.501C94.6918 187.892 91.0549 185.645 87.3724 186.211L39.6917 194.191C14.6378 198.962 -4.05258 175.194 -11.142 164.691C-2.62942 159.051 19.6069 148.729 38.8819 140.904C41.7857 139.728 43.7072 136.843 43.585 133.74C43.4748 130.564 41.4838 127.866 38.4865 126.852C4.18691 115.283 -17.8649 96.4005 -26.9645 70.7021C-38.2516 38.8151 -27.9205 2.15314 -17.6325 -22.4263C-15.7877 8.74426 -7.31099 32.5307 7.637 48.5664C21.7081 63.5911 41.5173 71.5479 64.9204 71.5479C80.6615 71.5479 92.5092 67.9468 93.5993 67.5251C142.595 47.3373 190.573 44.3233 214.836 44.3233C226.593 44.3233 233.627 45.0229 234.576 45.0972C234.849 45.0972 236.356 45.0972 236.603 45.0636C236.79 45.0253 243.824 44.3233 255.586 44.3233C279.827 44.3233 327.808 47.3373 377.436 67.7647C377.915 67.9468 389.725 71.5479 405.511 71.5479C428.89 71.5479 448.707 63.5935 462.771 48.5473C477.76 32.5139 486.207 8.74426 488.091 -22.4263C498.374 2.15314 508.695 38.8175 497.384 70.6829C488.201 96.4005 466.195 115.283 431.852 126.852Z"
            fill="#424242"
            fillOpacity="0.02"
          />
        </svg>
      </div>

      <div className="mt-10 flex flex-col gap-10 items-center text-center">
        <img src="beef.svg" alt="beef" />
        <div>
          <h1 className="text-5xl font-bold text-[#4C372E]">
            Featured Products <span className="text-[#FF0000]">& Specials</span>
          </h1>
          <div className="border-red-500 bg-red-500 rounded-full w-16 h-1 flex-shrink-0"></div>
        </div>
        <p className="text-[#6F6F6F] px-40">
          We conduct business with Ethics & Integrity. We are proud of the
          products which we manufacture and the efforts we put into them. Our R
          & D wing constantly put in great efforts to innovate in the field. Our
          goal is to serve on our country by setting standards of quality,
          services and commitment to customers.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-4 px-40 py-2">
        <div className="border rounded-sm flex flex-col gap-4 text-center text-[#424242] font-bold">
          <img src="product1.png" alt="product1" />
          <h2 className="px-4">Live Fresh Premium Beef Bone-In [Approx 1kg]</h2>
          <p className="text-2xl">৳ 699/kg</p>

          <div className="flex justify-evenly">
            <div className="bg-[#424242] flex gap-3 items-center text-white text-[10px] px-14 py-4">
              <span className="cursor-pointer">+</span>
              <span className="text-xs">1 kg</span>
              <span className="cursor-pointer">-</span>
            </div>
            <div className="bg-[#FF0000] flex gap-2 items-center text-white text-xs px-10 py-2 cursor-pointer hover:bg-[#ec8c8c]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.13517 14C3.78473 14 3.48686 13.8773 3.24155 13.632C2.99624 13.3867 2.87359 13.0889 2.87359 12.7384C2.87359 12.388 2.99624 12.0901 3.24155 11.8448C3.48686 11.5995 3.78473 11.4768 4.13517 11.4768C4.47393 11.4768 4.76888 11.5995 5.02002 11.8448C5.27117 12.0901 5.39675 12.388 5.39675 12.7384C5.39675 13.0889 5.27409 13.3867 5.02879 13.632C4.78348 13.8773 4.48561 14 4.13517 14ZM11.1439 14C10.7935 14 10.4956 13.8773 10.2503 13.632C10.005 13.3867 9.88235 13.0889 9.88235 12.7384C9.88235 12.388 10.005 12.0901 10.2503 11.8448C10.4956 11.5995 10.7935 11.4768 11.1439 11.4768C11.4827 11.4768 11.7776 11.5995 12.0288 11.8448C12.2799 12.0901 12.4055 12.388 12.4055 12.7384C12.4055 13.0889 12.2829 13.3867 12.0375 13.632C11.7922 13.8773 11.4944 14 11.1439 14ZM3.22403 2.43554L5.15144 6.43054H10.1977L12.388 2.43554H3.22403ZM2.69837 1.38423H13.0188C13.3926 1.38423 13.6291 1.49812 13.7284 1.72591C13.8277 1.95369 13.7956 2.20776 13.632 2.48811L11.2666 6.74593C11.1498 6.94451 10.9862 7.11681 10.776 7.26283C10.5657 7.40884 10.3379 7.48185 10.0926 7.48185H4.78348L3.80225 9.30413H12.4055V10.3554H3.95995C3.46934 10.3554 3.11598 10.1919 2.89987 9.86483C2.68377 9.53776 2.68669 9.1698 2.90864 8.76095L4.03004 6.69337L1.36671 1.05131H0V0H2.05006L2.69837 1.38423ZM5.15144 6.43054H10.1977H5.15144Z"
                  fill="white"
                />
              </svg>
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>

        <div className="border rounded-sm flex flex-col gap-4 text-center text-[#424242] font-bold">
          <img src="product2.png" alt="product2" />
          <h2 className="px-4">Live Fresh Premium Beef Bone-In [Approx 1kg]</h2>
          <p className="text-2xl">৳ 699/kg</p>

          <div className="flex justify-evenly">
            <div className="bg-[#424242] flex gap-3 items-center text-white text-[10px] px-14 py-4">
              <span className="cursor-pointer">+</span>
              <span className="text-xs">1 kg</span>
              <span className="cursor-pointer">-</span>
            </div>
            <div className="bg-[#FF0000] flex gap-2 items-center text-white text-xs px-10 py-2 cursor-pointer hover:bg-[#ec8c8c]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.13517 14C3.78473 14 3.48686 13.8773 3.24155 13.632C2.99624 13.3867 2.87359 13.0889 2.87359 12.7384C2.87359 12.388 2.99624 12.0901 3.24155 11.8448C3.48686 11.5995 3.78473 11.4768 4.13517 11.4768C4.47393 11.4768 4.76888 11.5995 5.02002 11.8448C5.27117 12.0901 5.39675 12.388 5.39675 12.7384C5.39675 13.0889 5.27409 13.3867 5.02879 13.632C4.78348 13.8773 4.48561 14 4.13517 14ZM11.1439 14C10.7935 14 10.4956 13.8773 10.2503 13.632C10.005 13.3867 9.88235 13.0889 9.88235 12.7384C9.88235 12.388 10.005 12.0901 10.2503 11.8448C10.4956 11.5995 10.7935 11.4768 11.1439 11.4768C11.4827 11.4768 11.7776 11.5995 12.0288 11.8448C12.2799 12.0901 12.4055 12.388 12.4055 12.7384C12.4055 13.0889 12.2829 13.3867 12.0375 13.632C11.7922 13.8773 11.4944 14 11.1439 14ZM3.22403 2.43554L5.15144 6.43054H10.1977L12.388 2.43554H3.22403ZM2.69837 1.38423H13.0188C13.3926 1.38423 13.6291 1.49812 13.7284 1.72591C13.8277 1.95369 13.7956 2.20776 13.632 2.48811L11.2666 6.74593C11.1498 6.94451 10.9862 7.11681 10.776 7.26283C10.5657 7.40884 10.3379 7.48185 10.0926 7.48185H4.78348L3.80225 9.30413H12.4055V10.3554H3.95995C3.46934 10.3554 3.11598 10.1919 2.89987 9.86483C2.68377 9.53776 2.68669 9.1698 2.90864 8.76095L4.03004 6.69337L1.36671 1.05131H0V0H2.05006L2.69837 1.38423ZM5.15144 6.43054H10.1977H5.15144Z"
                  fill="white"
                />
              </svg>
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div className="border rounded-sm flex flex-col gap-4 text-center text-[#424242] font-bold">
          <img src="product3.png" alt="product3" />
          <h2 className="px-4">Live Fresh Premium Beef Bone-In [Approx 1kg]</h2>
          <p className="text-2xl">৳ 699/kg</p>

          <div className="flex justify-evenly">
            <div className="bg-[#424242] flex gap-3 items-center text-white text-[10px] px-14 py-4">
              <span className="cursor-pointer">+</span>
              <span className="text-xs">1 kg</span>
              <span className="cursor-pointer">-</span>
            </div>
            <div className="bg-[#FF0000] flex gap-2 items-center text-white text-xs px-10 py-2 cursor-pointer hover:bg-[#ec8c8c]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.13517 14C3.78473 14 3.48686 13.8773 3.24155 13.632C2.99624 13.3867 2.87359 13.0889 2.87359 12.7384C2.87359 12.388 2.99624 12.0901 3.24155 11.8448C3.48686 11.5995 3.78473 11.4768 4.13517 11.4768C4.47393 11.4768 4.76888 11.5995 5.02002 11.8448C5.27117 12.0901 5.39675 12.388 5.39675 12.7384C5.39675 13.0889 5.27409 13.3867 5.02879 13.632C4.78348 13.8773 4.48561 14 4.13517 14ZM11.1439 14C10.7935 14 10.4956 13.8773 10.2503 13.632C10.005 13.3867 9.88235 13.0889 9.88235 12.7384C9.88235 12.388 10.005 12.0901 10.2503 11.8448C10.4956 11.5995 10.7935 11.4768 11.1439 11.4768C11.4827 11.4768 11.7776 11.5995 12.0288 11.8448C12.2799 12.0901 12.4055 12.388 12.4055 12.7384C12.4055 13.0889 12.2829 13.3867 12.0375 13.632C11.7922 13.8773 11.4944 14 11.1439 14ZM3.22403 2.43554L5.15144 6.43054H10.1977L12.388 2.43554H3.22403ZM2.69837 1.38423H13.0188C13.3926 1.38423 13.6291 1.49812 13.7284 1.72591C13.8277 1.95369 13.7956 2.20776 13.632 2.48811L11.2666 6.74593C11.1498 6.94451 10.9862 7.11681 10.776 7.26283C10.5657 7.40884 10.3379 7.48185 10.0926 7.48185H4.78348L3.80225 9.30413H12.4055V10.3554H3.95995C3.46934 10.3554 3.11598 10.1919 2.89987 9.86483C2.68377 9.53776 2.68669 9.1698 2.90864 8.76095L4.03004 6.69337L1.36671 1.05131H0V0H2.05006L2.69837 1.38423ZM5.15144 6.43054H10.1977H5.15144Z"
                  fill="white"
                />
              </svg>
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div className="border rounded-sm flex flex-col gap-4 text-center text-[#424242] font-bold">
          <img src="product4.png" alt="product4" />
          <h2 className="px-4">Live Fresh Premium Beef Bone-In [Approx 1kg]</h2>
          <p className="text-2xl">৳ 699/kg</p>

          <div className="flex justify-evenly">
            <div className="bg-[#424242] flex gap-3 items-center text-white text-[10px] px-14 py-4">
              <span className="cursor-pointer">+</span>
              <span className="text-xs">1 kg</span>
              <span className="cursor-pointer">-</span>
            </div>
            <div className="bg-[#FF0000] flex gap-2 items-center text-white text-xs px-10 py-2 cursor-pointer hover:bg-[#ec8c8c]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.13517 14C3.78473 14 3.48686 13.8773 3.24155 13.632C2.99624 13.3867 2.87359 13.0889 2.87359 12.7384C2.87359 12.388 2.99624 12.0901 3.24155 11.8448C3.48686 11.5995 3.78473 11.4768 4.13517 11.4768C4.47393 11.4768 4.76888 11.5995 5.02002 11.8448C5.27117 12.0901 5.39675 12.388 5.39675 12.7384C5.39675 13.0889 5.27409 13.3867 5.02879 13.632C4.78348 13.8773 4.48561 14 4.13517 14ZM11.1439 14C10.7935 14 10.4956 13.8773 10.2503 13.632C10.005 13.3867 9.88235 13.0889 9.88235 12.7384C9.88235 12.388 10.005 12.0901 10.2503 11.8448C10.4956 11.5995 10.7935 11.4768 11.1439 11.4768C11.4827 11.4768 11.7776 11.5995 12.0288 11.8448C12.2799 12.0901 12.4055 12.388 12.4055 12.7384C12.4055 13.0889 12.2829 13.3867 12.0375 13.632C11.7922 13.8773 11.4944 14 11.1439 14ZM3.22403 2.43554L5.15144 6.43054H10.1977L12.388 2.43554H3.22403ZM2.69837 1.38423H13.0188C13.3926 1.38423 13.6291 1.49812 13.7284 1.72591C13.8277 1.95369 13.7956 2.20776 13.632 2.48811L11.2666 6.74593C11.1498 6.94451 10.9862 7.11681 10.776 7.26283C10.5657 7.40884 10.3379 7.48185 10.0926 7.48185H4.78348L3.80225 9.30413H12.4055V10.3554H3.95995C3.46934 10.3554 3.11598 10.1919 2.89987 9.86483C2.68377 9.53776 2.68669 9.1698 2.90864 8.76095L4.03004 6.69337L1.36671 1.05131H0V0H2.05006L2.69837 1.38423ZM5.15144 6.43054H10.1977H5.15144Z"
                  fill="white"
                />
              </svg>
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="products"
        className="mt-20 px-40 flex justify-end gap-0.5 text-right font-semibold cursor-pointer"
      >
        <h2>
          Explore All <span className="text-[#F00]">our products</span>
          <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
        </h2>
        <img src="back.svg" alt="back" />
      </Link>

      <ProductLists />
    </div>
  );
}

export default FeaturedProduct;
