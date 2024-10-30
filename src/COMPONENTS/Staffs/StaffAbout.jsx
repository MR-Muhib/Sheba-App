import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosWallet } from "react-icons/io";

const StaffAbout = ({ staff }) => {
  console.log(staff);
  return (
    <>
      <div className="p-5 bg-[#e9e7e7]">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#ffffff] p-5 rounded-xl shadow my-5">
            <h1 className="">Policies</h1>
            <div className="flex items-center gap-4 mb-5">
              <IoLocationSharp className="text-2xl" />
              <div className="">
                <h1 className="text-xl bold">From</h1>
                <p className="">{staff.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoIosWallet className="text-2xl" />
              <div className="">
                <h1 className="text-xl bold">Rate</h1>
                <p className="">${staff.rate}</p>
              </div>
            </div>
          </div>
          <div className="my-5 text-justify ">
            <h1 className="text-xl font-bold mb-5">Staff Information</h1>
            <p>{staff.bio}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#ffffff] p-5 rounded-xl shadow">
            <h2 className="font-semibold mt-3">Services Providers</h2>
            <p className="">{staff.services}</p>
          </div>
          <div className="">
            <h2 className="font-semibold mt-3">company Information</h2>
            <h1 className="">{staff.company.bs}</h1>
            <h1 className="">{staff.company.catchPhrase}</h1>
            <h1 className="">{staff.company.name}</h1>
          </div>
        </div>
      </div>
      <div className="footer align-center justify-center text-center mt-5 bg-black text-white p-5">
        <p className="text-center text-gray-500">�� 2024 Sehba App</p>
        <a className="">Phone : {staff.phone}</a>
        <p className="">{staff.services}</p>
        <p className="">{staff.website}</p>
        <h1 className="">&copy; Muhibur Rahman</h1>
      </div>
    </>
  );
};

export default StaffAbout;
