import useProducts from "../../../hooks/useProduct";

function CategoryList() {
  const products = useProducts();

  return (
    <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {products.slice(0, 12).map((product) => (
        <div key={product._id} className="border rounded-lg ">
          <img src="product1.png" alt="Product" className="w-full" />
          <h2 className="text-lg font-semibold text-center mt-2">
            {product.name}
          </h2>
          <p className="text-center lg:text-2xl font-bold">
            ৳ {product.price}/kg
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center bg-[#424242] text-white px-2 py-1 lg:px-5 lg:py-2 gap-4">
              <button className="focus:outline-none">-</button>
              <span className="mx-2 text-xs">1 kg</span>
              <button className="focus:outline-none">+</button>
            </div>

            <div className="bg-red-500 text-white flex gap-3 justify-center items-center text-sm px-2 py-1 lg:px-5 lg:py-2 focus:outline-none cursor-pointer">
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
              <h1 className="text-xs">ADD TO CART</h1>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center text-center mt-10 mb-4">
        <button className="px-4 lg:px-16 py-2 font-semibold bg-[#dedcdc] ">
          Load More
        </button>
      </div>
    </div>
  );
}

export default CategoryList;
