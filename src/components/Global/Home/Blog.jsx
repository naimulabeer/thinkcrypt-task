function Blog() {
  return (
    <div className="mt-20 mb-20 px-40">
      <h1 className="text-5xl font-bold text-[#4C372E]">
        Our <span className="text-[#FF0000]">Blog</span>
      </h1>
      <div className="border-red-500 bg-red-500 rounded-full w-16 h-1 flex-shrink-0"></div>

      <div className="mt-20 mb-20 flex gap-10">
        <div className="mt-10 w-1/2 flex flex-col gap-6">
          <h1 className="w-2/3 text-4xl font-bold">
            12 Types of Steak & How to Cook Them
          </h1>
          <p className="w-2/3">
            There’s nothing better than a steak dinner, but understanding the
            many different types of steak can be confusing! Knowing how to
            choose the best steak cuts by tenderness, flavor and price is all
            part of preparation. From porterhouse....
          </p>
          <div className="mt-10 flex justify-center gap-0.5 text-right font-semibold cursor-pointer">
            <h2>
              Continue <span className="text-[#F00]">Reading</span>
              <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
            </h2>
            <img src="back.svg" alt="back" />
          </div>
        </div>
        <div>
          <img className="w-fit" src="blog.png" alt="blog" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 ">
        <div className="flex flex-col gap-3 w-11/12">
          <img src="blog1.png" alt="blog1" />
          <h1 className="text-2xl font-bold ">Sous Vide Round Steak</h1>
          <p>
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>

          <div className="mt-10 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
            <h2>
              Continue <span className="text-[#F00]">Reading</span>
              <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
            </h2>
            <img src="back.svg" alt="back" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-11/12">
          <img src="blog2.png" alt="blog2" />
          <h1 className="text-2xl font-bold ">Spicy St. Louis Barbeque Ribs</h1>
          <p>
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>

          <div className="mt-10 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
            <h2>
              Continue <span className="text-[#F00]">Reading</span>
              <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
            </h2>
            <img src="back.svg" alt="back" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-11/12">
          <img src="blog3.png" alt="blog3" />
          <h1 className="text-2xl font-bold ">Grilled Tri-Tip Steak</h1>
          <p>
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare is tender, delicious and easy to prepare.
          </p>

          <div className="mt-10 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
            <h2>
              Continue <span className="text-[#F00]">Reading</span>
              <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
            </h2>
            <img src="back.svg" alt="back" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-11/12">
          <img src="blog4.png" alt="blog4" />
          <h1 className="text-2xl font-bold ">
            Grilled Flat Iron Steak With Wine Reduction
          </h1>
          <p>
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>

          <div className="mt-10 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
            <h2>
              Continue <span className="text-[#F00]">Reading</span>
              <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
            </h2>
            <img src="back.svg" alt="back" />
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end px-4 gap-0.5 text-right font-semibold cursor-pointer">
        <h2>
          Explore <span className="text-[#F00]">Details</span>
          <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
        </h2>
        <img src="back.svg" alt="back" />
      </div>
    </div>
  );
}

export default Blog;
