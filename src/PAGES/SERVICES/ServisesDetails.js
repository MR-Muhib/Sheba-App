import React from "react";
import { useParams } from "react-router-dom";
import Staffs from "../../COMPONENTS/Servises/Staffs";

const ServisesDetails = () => {
  const { id } = useParams();

  const servise = [
    {
      id: 1,
      name: "Gas Stove",
      category: "Overview of Caregiver",
      details:
        "Gas Stove is very important in our daily life, most importantly it cooks food. So, when a gas stove breaks down it requires urgent servicing.Now you dont have to go out and search for gas stove servicing centers",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1583777507_gasstove/burnerrepair_270x180.webp",
    },
    {
      id: 2,
      name: "Sanitary-related",
      category: "Sanitary-related problems",
      details:
        "All your Plumbing and Sanitary-related problems will be taken care of by Sheba.xyz marketplace.",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428672_plumbingsanitaryservices_270x180.webp",
    },
    {
      id: 3,
      name: "clean your home",
      category: "This service will help you to clean your home",
      details:
        "This service will help you to clean your home and also help to remove deep stains. Our Service provider will use effective chemicals that will wash your home",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617855940_homecleaning_270x180.webp",
    },
    {
      id: 4,
      name: "shifting services",
      category: "house shifting services",
      details:
        "Planning to shift your house to a new location? Looking for hassle-free house shifting services in Bangladesh near you for safe relocation? Don’t worry. ",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1595216678_houseshiftingservices_270x180.webp",
    },
    {
      id: 5,
      name: "health services",
      category: "All kinds of employee management tools.",
      details: "All kinds of employee management tools.",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1588852342_employeemanagementtool.jpg",
    },
    {
      id: 6,
      name: "Pre-Service",
      category: "Pre-Service Guidelines for customers",
      details:
        "Pre-Service Guidelines for customers: Provide warm water and access to power supply (if necessary) Prepare a comfortable resting for yourself.",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1635684509_personalbeautycare.jpg",
    },
    {
      id: 7,
      name: "best babysitter",
      category: "provide you with the best babysitter",
      details:
        "Sheba.xyz provide you with the best babysitter monthly who play a crucial role in a child's development and provide valuable support to the family by creating a safe, nurturing, and stimulating environment.",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1719745681_nannycare.jpg",
    },
    {
      id: 8,
      name: "caregiver service",
      category: "your trusted in-home caregiver service",
      details:
        "Welcome to Sheba.xyz, your trusted in-home caregiver service. We provide compassionate, personalized care to ensure the highest",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1720347810_caregiverpatientcare.jpg",
    },
    {
      id: 9,
      name: "large population",
      category: "sees a large population",
      details:
        "Dhaka & Chittagong sees a large population of people come here with different purposes as to study or to work and do business. Most look for a house or apartment that is nice and well-maintained and that can make them feel at home.",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1612862065_paintingservices_270x180.webp",
    },
  ];

  const servic = servise.find((servis) => servis.id === parseInt(id));

  return (
    <>
      <h1 className="m-5 text-xl font-semibold">{servic.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-5" key={servise.id}>
        <div className="p-5">
          <img
            className="mx-auto rounded-md "
            src={servic.image}
            alt={servic.name}
          />
          <h2 className="mt-2 my-2 font-semibold">{servic.category}</h2>
          <p className="text-justify">{servic.details}</p>
        </div>
        <div className="">
          <h2 className="font-semibold mt-3">Services Providers</h2>
          <Staffs />
        </div>
      </div>
    </>
  );
};

export default ServisesDetails;
