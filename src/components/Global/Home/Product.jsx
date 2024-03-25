function Product() {
  return (
    <div className="mt-20 mb-14 px-40">
      <h1 className="text-5xl font-bold text-[#4C372E]">Product Categories</h1>
      <div className="border-red-500 bg-red-500 rounded-full w-16 h-1 flex-shrink-0"></div>

      <div className="flex justify-between">
        <div className="mt-20 w-[310px] h-fit border rounded bg-[#F1F1F194] px-14 py-10">
          <div className="flex flex-col justify-center items-center gap-6">
            <img className="w-24 h-24" src="chicken.png" alt="chicken" />

            <button className="border border-[#F1F1F194] px-4 py-1 flex gap-1 justify-end">
              Shop <span className="text-[#FF0000]"> Now</span>
              <img src="back.svg" alt="back" />
            </button>
          </div>
        </div>
        <div className="mt-20 w-[310px] h-fit border rounded bg-[#F1F1F194] px-14 py-10">
          <div className="flex flex-col justify-center items-center gap-6">
            <img className="w-24 h-24" src="beef.png" alt="beef" />

            <button className="border-0 border-[#F1F1F194] px-4 py-1 flex gap-1 justify-end">
              Shop <span className="text-[#FF0000]"> Now</span>
              <img src="back.svg" alt="back" />
            </button>
          </div>
        </div>
        <div className="mt-20 w-[310px] h-fit border rounded bg-[#F1F1F194] px-14 py-10">
          <div className="flex flex-col justify-center items-center gap-6">
            <img className="w-24 h-24" src="sheep.png" alt="sheep" />

            <button className="border border-[#F1F1F194] px-4 py-1 flex gap-1 justify-end">
              Shop <span className="text-[#FF0000]"> Now</span>
              <img src="back.svg" alt="back" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
        <h2>
          Explore <span className="text-[#F00]">ALL Categories</span>
          <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
        </h2>
        <img src="back.svg" alt="back" />
      </div>
    </div>
  );
}

export default Product;
