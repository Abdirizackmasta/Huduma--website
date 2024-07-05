/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi";

export default function Packages() {
  const Card = ({ image, text }) => {
    return (
      <div>
        <div className="overflow-hidden my-0 mx-auto rounded-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] hoverImg"
          />
        </div>
        <h5 className="text-2xl py-4 font-semibold">{text}</h5>
        <span className="flex items-center justify-between">
          <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
            <HiStar className="text-orange" /> 4.8
          </div>
          <p>(2.5k Review)</p>
          <div className="bg-primary cursor-pointer text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
            $1200
          </div>
        </span>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-lightGray my-16 py-16 relative">
        <div className="max-w-[1400px] mx-auto px-3">
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Popular Packages
            </p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">
              Checkout our packages
            </h2>
          </span>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <Card
              image="/img5.jpg"
              text="Enjoy The Beauty Place In Greece City"
            />
            <Card
              image="/img6.jpg"
              text="Enjoy The Beauty Place In Maldives Beach"
            />
            <Card
              image="/img7.jpg"
              text="Enjoy The Beauty Place In Bhutan City"
            />
            <Card
              image="/img8.jpg"
              text="Enjoy The Beauty Place In Paris City"
            />
          </div>
        </div>
        <img
          src="/star.png"
          alt=""
          className="lg:block hidden absolute -top-16 left-0"
        />
        <img
          src="/doughnut.png"
          alt=""
          className="lg:block hidden absolute -bottom-16 left-0"
        />
        <img
          src="/flower.png"
          alt=""
          className="lg:block hidden absolute bottom-0 right-0"
        />
      </div>
      <section className="max-w-[1400px] mx-auto relative px-3 py-12">
        <div className="xl:text-[25rem] lg:text-[20rem] leading-[.5] absolute left-0 w-full h-full text-center z-[-1] text-gray font-semibold opacity-10">
          Travel
        </div>
        <div>
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Inventore Veritatis
            </p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">
              Select Offers For Traveling
            </h2>
          </span>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-8 items-center justify-between my-12">
          <span className="flex flex-col items-center">
            <img src="/icon1.png" alt="" />
            <p className="pt-6">Different Coutries</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/icon2.png" alt="" />
            <p className="pt-6">Bus Tours</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/icon3.png" alt="" />
            <p className="pt-6">Food Tours</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/icon4.png" alt="" />
            <p className="pt-6">Summer Rest</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/icon5.png" alt="" />
            <p className="pt-6">Ship Cruises</p>
          </span>
          <span className="flex flex-col items-center">
            <img src="/icon6.png" alt="" />
            <p className="pt-6">Mountain Tours</p>
          </span>
        </div>
      </section>
    </div>
  );
}
