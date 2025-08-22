import React from "react";
import Banner from "../Rent/components/banner/index";
import RentProperties from "./components/RentProperties";
import "./style.css";

const RentPage = () => {
  return (
    <div className="rent-page">
        <Banner />
        <RentProperties/>
    </div>
  );
};

export default RentPage;