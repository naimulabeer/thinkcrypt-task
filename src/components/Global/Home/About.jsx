import PageTitle from "../../Shared/PageTitle";

function About() {
  return (
    <div className="mt-20 flex flex-col lg:flex-row gap-20">
      <img
        className="lg:w-1/2 px-2 lg:h-[90vh]"
        src="banner2.png"
        alt="banner2"
      />
      <div className="lg:w-1/3">
        <div className="mt-20 mb-10">
          <PageTitle
            mainText="Who We Are"
            color="#424242"
            secondaryColor="red-500"
          />
        </div>
        <div className="lg:w-[600px] text-lg font-medium mb-10">
          <p className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M9.136 0.511719L5.936 13.5037L5.168 9.79172C6.40533 9.79172 7.42933 10.1757 8.24 10.9437C9.05067 11.7117 9.456 12.7357 9.456 14.0157C9.456 15.2957 9.05067 16.3411 8.24 17.1517C7.42933 17.9624 6.42667 18.3677 5.232 18.3677C3.99467 18.3677 2.97067 17.9624 2.16 17.1517C1.34933 16.2984 0.944 15.2531 0.944 14.0157C0.944 13.5891 0.965334 13.1837 1.008 12.7997C1.09333 12.4157 1.22133 11.9677 1.392 11.4557C1.56267 10.9011 1.79733 10.2397 2.096 9.47172L5.104 0.511719H9.136ZM21.232 0.511719L18.032 13.5037L17.264 9.79172C18.5013 9.79172 19.5253 10.1757 20.336 10.9437C21.1467 11.7117 21.552 12.7357 21.552 14.0157C21.552 15.2957 21.1467 16.3411 20.336 17.1517C19.5253 17.9624 18.5227 18.3677 17.328 18.3677C16.0907 18.3677 15.0667 17.9624 14.256 17.1517C13.4453 16.2984 13.04 15.2531 13.04 14.0157C13.04 13.5891 13.0613 13.1837 13.104 12.7997C13.1893 12.4157 13.3173 11.9677 13.488 11.4557C13.6587 10.9011 13.8933 10.2397 14.192 9.47172L17.2 0.511719H21.232Z"
                fill="#FF0000"
              />
            </svg>
            LiveFresh Agro provides a turnkey solution for meat and meat product
            from production by processing to ready to eat and hence “Farm to
            Fork”.
          </p>
        </div>
        <p className="lg:w-[600px] px-2">
          The core focus for LiveFresh Agro is to create value for our
          stakeholders i.e. small and medium holding farmers, contract farmers
          sustainably by bring the market to resources. We have extensive
          experience in working with other agri-business players across the
          value chain and have developed rich experience in tackling various
          issues facing the industry currently from production to processing and
          retailing. Our expertise in tackling issues related to growth
          strategies, sustainability and operational efficiency has made us
          suitably positioned to deliver tangible value to our clients in
          dealing with cost pressures, partnering, sourcing and delivery
          capabilities & improving Food & Agribusinesses.
        </p>
        <div className="mt-20 flex justify-end gap-0.5 text-right font-semibold cursor-pointer">
          <h2>
            Learn More <span className="text-[#F00]">about us</span>
            <div className="border-red-500 bg-red-500 rounded-full w-4 h-0.5 flex-shrink-0 "></div>
          </h2>
          <img src="back.svg" alt="back" />
        </div>
      </div>
    </div>
  );
}

export default About;
