import { useState } from "react";

const useCrantial = () => {
  const [user, setUser] = useState({});
  return {
    user,
    setUser,
  };
};

export default useCrantial;
