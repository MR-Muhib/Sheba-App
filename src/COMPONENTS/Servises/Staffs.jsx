import React from "react";
import { Link } from "react-router-dom";

const Staffs = () => {
  const staff = [
    {
      id: 1,
      name: "Muhibur rahman",
      location: "Sylhet, Bangladesh",
      bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
      rate: 1500,
      detels: "",
      services: ["AC", "Senetary"],
      image: "https://www.sylhetbar.com.bd/uploads/images/member/2267.jpg",
    },
    {
      id: 2,
      name: "Saima",
      location: "Dhaka, Bangladesh",
      bio: "Are you looking for skilled nurses to care for your family’s elderly parents or sick loved ones? Life nursing home health care services is provided by experienced nurses and caregivers at home service. Now to get home nursing services at home, Life Nursing Care is at your side.",
      rate: 5000,
      detels: "",
      services: ["Nursing Home Care Dhaka"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8e7JewfOQekbFsbjCM3QW6IaEoNNsdiecQ&s",
    },
  ];

  return (
    <div>
      <div className="w-full p-5 grid xl:grid-cols-2">
        {staff.map((staf) => {
          return (
            <div className="w-full pb-1 m-3 border shadow-md hover:border-black">
              <img
                className="w-16 rounded-full mx-auto m-3"
                src={staf.image}
                alt={staf.name}
              />
              <h2 className="text-center font-semibold">{staf.name}</h2>
              <h3 className="text-center">{staf.services}</h3>
              <p className="text-center font-semibold">{staf.rate}</p>
              <div className="flex justify-between pl-2 pr-2 ">
                <Link className="bg-[#166535] text-white pl-3 pr-3 pt-1 pb-1 rounded-3xl text-sm shadow-md font-semibold">
                  book now <i class="fa-solid fa-wallet"></i>
                </Link>

                <Link
                  to={`/stafs_details/${staf.id}`}
                  className="bg-[#15577f] text-white pl-3 pr-3 pt-1 pb-1 rounded-3xl text-sm shadow-md font-semibold "
                >
                  View Full Profile <i class="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staffs;
