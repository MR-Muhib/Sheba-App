import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { id, name, category, image } = services;
  console.log(`service card ${id}`);
  return (
    <Link to={`/service_details/${id}`}>
      <article className="w-auto h-[390px] bg-cyan-50 p-5 rounded-md shadow-xl cursor-pointer">
        <h2 className="my-10 uppercase text-xl font-bold text-center">
          {name}
        </h2>
        <img className="w-40 mx-auto rounded-md" src={image} alt={image.name} />
        <p className="text-center m-2 font-semibold">{category}</p>
      </article>
    </Link>
  );
};

export default ServiceCard;
