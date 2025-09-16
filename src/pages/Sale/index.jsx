import React from "react";
import "./style.css";
import Banner from "../Sale/components/banner";
import RentProperties from "../Sale/components/RentProperties";

const SalePage = () => {
   return (
    <div className="sale-page">
        <Banner />
        <RentProperties/>


    </div>
  )
}

export default SalePage;