import React,{useState} from "react";
import Banner from "../Rent/components/banner/index";
import RentProperties from "./components/RentProperties";
import "./style.css";

const RentPage = () => {
   const [filters, setFilters] = useState({});
  
    const handleSearch = (newFilters) => {
      setFilters(newFilters);
    };
  
  return (
    <div className="rent-page">
        <Banner />
        <RentProperties filters={filters}/>
    </div>
  );
};

export default RentPage;