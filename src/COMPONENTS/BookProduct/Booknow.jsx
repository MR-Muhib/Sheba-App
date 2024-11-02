import React, { useState } from "react";
import Services from "../../COMPONENTS/ServiceApi/Services";
import Staffs from "../../COMPONENTS/StaffApi/Staffs";
import OrderForm from "./OrderForm";

const Booknow = () => {
  const [count, setCount] = useState(0);
  const [product] = useState(Services);
  const [staffs] = useState(Staffs);
  const [checkedServices, setCheckedServices] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [formToggle, setFormToggle] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleCheckboxChange = (event, serviceId) => {
    const serviceName = product.find((item) => item.id === serviceId);

    // Check if service is provided by any staff member
    staffs.forEach((staff) => {
      if (staff.services.includes(serviceName.services)) {
        setSelectedStaff((prev) => [...prev, staff.name]);
      }
    });

    if (event.target.checked) {
      setCheckedServices((prev) => [...prev, serviceId]);
      setCount(count + 1);
    } else {
      setCheckedServices((prev) => prev.filter((id) => id !== serviceId));
      setCount(count - 1);
    }
  };

  // Create a summary string for selected services
  const selectedServicesSummary = () => {
    const selectedServices = product.filter((service) =>
      checkedServices.includes(service.id)
    );
    const serviceCounts = {};

    selectedServices.forEach((service) => {
      if (serviceCounts[service.name]) {
        serviceCounts[service.name] += 1;
      } else {
        serviceCounts[service.name] = 1;
      }
    });

    return Object.entries(serviceCounts)
      .map(([name, count]) => `${count} ${name}`)
      .join(", ");
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

      <div className="p-5 bg-[ECF0F3] p-3 shadow-md rounded-lg h-[95lvh] overflow-auto custom-scrollbar">
        <div className="">
          <h1 className="text-xl text-gray-600 p-5">Service Provider</h1>
          <h1 className="text-xl block pl-5">
            Number of Service Provider: {count}
          </h1>

          {/* Display selected services summary */}
          <h1 className="text-lg text-gray-700 p-5 ">
            {selectedServicesSummary()}
          </h1>
        </div>
        <button
          className={`px-5 py-1 mb-10 block mx-auto rounded-full shadow-md ${
            isButtonDisabled
              ? "bg-gray-400 text-gray-700 shadow-none" // Disabled style
              : "bg-emerald-500 text-white shadow-gray-600" // Enabled style
          }`}
          onClick={() => {
            setFormToggle(true);
            setIsButtonDisabled(true);
          }}
          disabled={isButtonDisabled}
        >
          Book Service Provider
        </button>

        {formToggle && (
          <>
            <h1 className="text-xl text-gray-600 p-5">
              Selected Service Providers: {selectedStaff.join(", ")}
            </h1>
            <OrderForm />
          </>
        )}

        {/* <h1 className="text-xl text-gray-600 p-5">
          Selected Service Providers: {selectedStaff.join(", ")}
        </h1> */}
      </div>
    </div>
  );
};

export default Booknow;
