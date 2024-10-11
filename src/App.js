import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../src/PAGES/HOME/Home";
import Services from "../src/PAGES/SERVICES/Services";
import Stafs from "../src/PAGES/STAFE/Stafs";
import Login from "../src/PAGES/LOGIN/Login";
import Signup from "../src/PAGES/SIGNUP/Signup";
import "./App.css";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import ServisesDetails from "./PAGES/SERVICES/ServisesDetails";
import AuthProvider from "./Context/AuthProvider";
import Staffs_Details from "./PAGES/STAFE/Staffs_Details";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service_details/:id" element={<ServisesDetails />} />
          <Route path="/stafs_details/:id" element={<Staffs_Details />} />
          <Route path="/stafs" element={<Stafs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
