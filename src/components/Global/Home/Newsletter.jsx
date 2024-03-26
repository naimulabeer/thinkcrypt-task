import PageTitle from "../../Shared/PageTitle";

function Newsletter() {
  return (
    <div className="mt-20 bg-[#F5F5F5]">
      <div className=" flex flex-col justify-center items-center text-center gap-6 p-20 ">
        <img src="beef.svg" alt="beef" />
        <PageTitle
          mainText="Subscribe to"
          highlightText="our Newsletter"
          color="#424242"
          secondaryColor="red-500"
        />
        <h2 className="text-2xl lg:px-40 lg:w-2/3">
          Subscribe to our Newsletter and get exclusive updates, amazing offers
          & discounts
        </h2>

        <div className="flex justify-center mt-10">
          <input
            className="lg:w-[650px] px-2 border rounded-s"
            type="text"
            placeholder="Enter your e-mail"
          />
          <button className="text-white bg-[#424242] px-6 py-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
