import React from "react";
import HomeCard from "./HomeCard";
const Home = () => {
  return (
    <div>
      <div className="flex w-full content-normal  h-[350px] bg-no-repeat justify-center items-center ">
        <img
          className="w-[1200px]"
          src="https://www.shutterstock.com/image-photo/mechanic-using-wrench-while-working-600nw-2184125681.jpg"
          alt="Hero_Image"
        />
        <div className="absolute text-center text-white">
          <h1 className="text-2xl font-bold md:text-4xl ">
            Your Personal Assistant
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            One stop solution for your service. Order any service anytime
          </h3>
        </div>
        <div className="absolute mt-32 w-full md:w-1/3 p-3">
          <input
            type="text"
            name="name"
            placeholder="Take our service "
            className="w-full bg-white focus:outline-none p-1 "
          />
        </div>
      </div>

      <div>
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
