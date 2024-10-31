import React, { useState } from "react";
import Services from "../../COMPONENTS/ServiceApi/Services";
import { BiArrowBack } from "react-icons/bi";
// import Staffs from "../../COMPONENTS/StaffApi/Staffs";
// const [staffs] = useState(Staffs);

const Booknow = () => {
  const [count, setCount] = useState(0);
  const [product] = useState(Services);
  const [checkedServices, setCheckedServices] = useState([]);

  const handleCheckboxChange = (event, serviceId, arr) => {
    console.log(event, serviceId, arr);
    if (event.target.checked) {
      setCheckedServices((prev) => [...prev, serviceId]);
      setCount(count + 1);
    } else {
      setCheckedServices((prev) => prev.filter((id) => id !== serviceId));
      setCount(count - 1);
    }
  };

  return (
    <div className="h-auto bg-[#ECF0F3] grid sm:grid-cols-2 gap-5">
      <div className="p-5 bg-white p-3 shadow-md rounded-lg h-[95lvh] overflow-auto custom-scrollbar">
        <h1 className="text-xl text-gray-900 mb-4">Book now →</h1>
        {product.map((service) => (
          <div key={service.id} className="flex items-center gap-4 mb-5">
            <img
              className="w-10 h-10 rounded-full"
              src={service.image}
              alt={service.name}
            />
            <div>
              <h1 className="text-lg font-semibold uppercase">
                {service.name}
              </h1>
              <p className="text-gray-500">{service.category}</p>
            </div>
            <input
              className="ml-auto"
              type="checkbox"
              checked={checkedServices.includes(service.id)}
              onChange={(event) => handleCheckboxChange(event, service.id)}
            />
          </div>
        ))}
      </div>

      {/* ....................,.,.,.,.,.,.,.,.............------------,.,.,.,.,.,.,.,.,.,........................ */}
      {/* ....................,.,.,.,.,.,.,.,.............------------,.,.,.,.,.,.,.,.,.,........................ */}
      {/* ....................,.,.,.,.,.,.,.,.............------------,.,.,.,.,.,.,.,.,.,........................ */}
      <div>
        <div className="">
          <h1 className="text-xl text-gray-600 p-5">Service Provider</h1>
          <h1 className="text-xl">{count}</h1>
          <button
            className="bg-emerald-500 px-5 py-1 mb-10 block mx-auto rounded-full shadow-md shadow-gray-600"
            onClick={() => {
              // handle book service provider
              console.log("Booked Service Provider");
            }}
          >
            Book Service Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
