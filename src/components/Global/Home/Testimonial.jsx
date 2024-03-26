import PageTitle from "../../Shared/PageTitle";

function Testimonial() {
  return (
    <div className="mt-20 mb-20 lg:px-40">
      <PageTitle
        mainText="What our clients are saying"
        color="#4C372E"
        secondaryColor="red-500"
      />

      <div className="flex lg:flex-row flex-col gap-4 px-2">
        <div className="mt-20 flex gap-10">
          <div className="w-2 h-40 mt-10 bg-red-500"></div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF0000] font-extrabold text-4xl">“</span>
            <p className="text-[#424242] lg:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nis aliquip ex ea commodo consequat.
            </p>
            <h1 className="font-bold text-lg">Asif Istiaque</h1>
            <h2>THINK CORPORATION</h2>
          </div>
        </div>

        <div className="mt-20 flex gap-10">
          <div className="w-2 h-40 mt-10 bg-red-500"></div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF0000] font-extrabold text-4xl ">“</span>
            <p className="text-[#424242] lg:w-1/2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nis aliquip ex ea commodo consequat.
            </p>

            <h1 className="font-bold text-lg">Asif Istiaque</h1>
            <h2>THINK CORPORATION</h2>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 flex justify-center">
        <img src="circles.svg" alt="circles" />
      </div>

      <PageTitle
        mainText="Our Clients & Partners"
        color="#4C372E"
        secondaryColor="red-500"
      />
      <div className="mt-10 mb-10">
        <p className="px-2">
          LiveFresh is currently supplying the required quantity of the quality
          meat in ACI Limited and Banglacut as a trusted supplier. We are also
          partnered to provide the solution of the meat sector with iFarmer-a
          technology company that enables small scale farmers and Agri
          Businesses to maximize their profit. Apart from these large Agri
          Business companies, we are serving our product to the retailers and
          directly to the consumers. At the supply end we also partnered with
          more than 550 small and medium farmers who raise their product for us.
        </p>
        <div className="mt-10 flex justify-evenly items-center gap-2 px-2 lg:gap-10 h-fit">
          <div>
            <img src="client1.png" alt="client1" />
          </div>
          <div>
            <img src="client2.png" alt="client2" />
          </div>
          <div>
            <img src="client3.png" alt="client3" />
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
    </div>
  );
}

export default Testimonial;
