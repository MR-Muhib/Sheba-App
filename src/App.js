import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../src/PAGES/HOME/Home";
import Services from "../src/PAGES/SERVICES/Services";
import Stafs from "../src/PAGES/STAFE/Stafs";
import Login from "../src/PAGES/LOGIN/Login";
import Signup from "../src/PAGES/SIGNUP/Signup";
import "./App.css";
import ServisesDetails from "./PAGES/SERVICES/ServisesDetails";
import AuthProvider from "./Context/AuthProvider";
import StaffsDetails from "./COMPONENTS/Staffs/Staffs_Details";
import Booknow from "./COMPONENTS/BookProduct/Booknow";

function App() {
  // window.scrollTo(0, 0);
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/service" element={<Services />} />
          <Route path="/service_details/:id" element={<ServisesDetails />} />
          <Route path="/stafs_details/:id" element={<StaffsDetails />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/stafs" element={<Stafs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
