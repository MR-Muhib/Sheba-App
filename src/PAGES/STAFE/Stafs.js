import React from "react";
import { useNavigate } from "react-router-dom";

const Stafs = () => {
  const navigate = useNavigate();
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
  return (
    <div className="w-full md:h-[100lvh]">
      <div className="grid md:grid-cols-2 m-5 p-3 gap-4">
        {staff.map((staf) => {
          const { name, location, image, services, detels, rate, email } = staf;

          return (
            <div className="w-full border shadow-md p-3">
              <img
                className="w-16 mx-auto rounded-full "
                src={image}
                alt={name}
              />
              <h2 className="text-center font-semibold">{location}</h2>
              <h2 className="text-center ">{services}</h2>
              <h2 className="text-center ">{"BDT " + rate}</h2>
              <h2 className="text-center ">{detels}</h2>
              <h2 className="text-center ">{email}</h2>
              <button
                onClick={() => {
                  navigate(`/stafs_details/${staf.id}`);
                }}
                className="bg-sky-700 px-4 py-1 text-white shadow-xl rounded-3xl active:shadow-white "
              >
                See profile<i class="fa-solid fa-angles-right"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stafs;
