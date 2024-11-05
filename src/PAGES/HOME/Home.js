import React from "react";
import Layout from "../../Layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div
        className="z-0 w-full h-[100lvh]"
        style={{
          background: `url("https://www.shutterstock.com/image-photo/mechanic-using-wrench-while-working-600nw-2184125681.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full content-normal md:pt-32 pt-20  h-auto bg-no-repeat justify-center items-center ">
          <div className=" text-center text-white">
            {/* Title */}
            <h1 className="text-2xl font-bold md:text-4xl">
              Your Personal Assistant
            </h1>

            {/* Descriptions */}
            <p className="md:text-2xl font-semibold text-lg">
              One stop solution for your service. Order any service anytime
            </p>
          </div>

          {/* Search bar */}
          <div className="block mx-auto w-full md:w-1/3 p-3 mt-5">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="search"
              placeholder="Type service name"
            />

            <button className="w-full mt-2 text-white font-semibold py-1.5 bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
