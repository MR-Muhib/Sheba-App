import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StaffAbout from "./StaffAbout";
import StaffReview from "./StaffReview";

const StaffsDetails = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [currentTab, setCurrentTab] = useState("About");

  // <------------ toggle button click functions--------------->
  const handleClick = (tabName) => {
    if (currentTab !== tabName) {
      setCurrentTab(tabName);
      setToggle(!toggle);
    }
  };

  // <------------ render staff details--------------->
  const StaffDetails = [
    {
      id: 1,
      name: "Muhibur rahman",
      location: "Sylhet, Bangladesh",
      bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
      rate: 1500,
      detels: "",
      services: ["AC", "Senetary"],
      image: "https://www.sylhetbar.com.bd/uploads/images/member/2267.jpg",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Sheba",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
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
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
  ];

  const staff = StaffDetails.find((staff) => staff.id === parseInt(id));
  const { name, image, email, rate } = staff;
  return (
    <>
      <div className="m-9">
        <div className="mb-4 flex items-center">
          <img
            className="w-[100px] h-[100px] rounded-full p-1 "
            src={image}
            alt={name}
          />
          <div className="pl-4">
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="">{email}</p>
            <p className="">${rate}</p>
          </div>
        </div>

        <div className="flex">
          <button
            onClick={() => handleClick("About")}
            className={`p-2 font-semibold text-md border-b mr-5 ${
              toggle ? "text-black" : "text-sky-600"
            } ${toggle ? "hover:border-b-sky-400" : "border-b-sky-400"}`}
          >
            About
          </button>
          <button
            onClick={() => handleClick("Rateing")}
            className={`p-2 font-semibold text-md border-b mr-5 ${
              toggle ? "text-blue-600" : "text-black"
            } ${toggle ? "border-b-sky-400" : "hover:border-b-sky-400"}`}
          >
            Rating and Reviews
          </button>
        </div>
        {/* Conditionally render `StaffAbout` or `StaffReview` based on toggle */}
      </div>
      {toggle ? <StaffReview staff={staff} /> : <StaffAbout staff={staff} />}
    </>
  );
};

export default StaffsDetails;
