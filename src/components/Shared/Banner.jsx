function Banner() {
  return (
    <div className="relative">
      <img
        className="w-full h-screen object-cover backdrop-opacity-40"
        src="banner.png"
        alt="banner"
      />
      <div className="absolute top-40 left-20 flex flex-col justify-center items-center text-center cav-font text-white">
        <div className="relative mb-4">
          <img src="freshlogo.png" alt="logo" className=" lg:w-60 lg:h-48" />
          <p className="absolute bottom-10 left-14 right-0 text-xl font-bold text-center transform rotate-3">
            01548-337374
          </p>
        </div>
        <div className="mb-10 font-bold text-left">
          <p className="text-4xl">you only</p>
          <p className="text-6xl">LIVE once</p>
          <p className="text-4xl">so</p>
          <p className="text-6xl font-bold">LIVE FRESH</p>
        </div>
        <button className="bg-white text-black py-3 lg:px-16 px-6 rounded-full lg:text-2xl font-bold mb-10">
          SHOP NOW
        </button>
        <p className=" text-lg">
          Fresh and Safe Food for Building Better Future
        </p>
      </div>
    </div>
  );
}

export default Banner;
