import React from "react";
import Navbar from "../../Components/Navbar";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
