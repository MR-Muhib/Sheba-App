import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { id, name, category, image } = services;
  return (
    <Link to={`/service_details/${id}`}>
      <article className="bg-cyan-50 p-5 rounded-md shadow-xl cursor-pointer">
        <h2 className="my-10 uppercase text-2xl font-bold">{name}</h2>
        <img className="w-40 mx-auto rounded-md" src={image} alt={image.name} />
        <p className="text-center m-2 font-semibold">{category}</p>
      </article>
    </Link>
  );
};

export default ServiceCard;
