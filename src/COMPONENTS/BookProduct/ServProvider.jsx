import React, { useState } from "react";

const ServProvider = (props) => {
  const [count, setCount] = useState(0);
  const data = () => {
    setCount(count + 1);
  };

  props.onServiceData(data);

  return (
    <div>
      <h1 className="text-xl text-gray-600 p-5">Provicer</h1>
      <h1 className="text-xl">{count}</h1>
    </div>
  );
};

export default ServProvider;
