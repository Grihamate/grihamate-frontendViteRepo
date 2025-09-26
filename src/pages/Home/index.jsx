
  

      

import React, { useState } from "react";
import HeroSection from "../../component/common/HeroSection";
import FeaturedProperties from "../../component/FeaturedProperties";
import ClientFeedback from "../../component/ClientFeedback";
import ContactSection from "../../component/ContactUs/index";
import City from "../../component/City/index";
import "./style.css";

const Home = () => {
  const [filters, setFilters] = useState({});
   const [searching, setSearching] = useState(false);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setSearching(true);
  };

  return (
    <div className="home-page">
      <HeroSection onSearch={handleSearch} searching={searching} />
      <FeaturedProperties filters={filters} setSearching={setSearching} />
      <ClientFeedback />
      <ContactSection />
      <City />
    </div>
  );
};

export default Home;



