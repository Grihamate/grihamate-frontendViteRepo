
// import React, { useEffect, useState } from "react";
// import HeroSection from "../../component/common/HeroSection";
// import FeaturedProperties from "../../component/FeaturedProperties";
// import ClientFeedback from "../../component/ClientFeedback";
// import ContactSection from "../../component/ContactUs/index";
// import City from "../../component/City/index";
// import Footer from "../../component/common/Footer";
// import { fetchUserProfile } from "../../service/fetchuserdetail";
// import "./style.css";

// const Home = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // default true to show loading first

//   useEffect(() => {
//     const getUserProfile = async () => {
//       try {
//         const userData = await fetchUserProfile();
//         setUser(userData);
//       } catch (error) {
//         console.error("Failed to fetch user details:", error.message);
//         setUser(null); // optional
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUserProfile();
//   }, []);

//   return (
//     <div className="home-page">
  

      

//       <HeroSection />
//       <FeaturedProperties />
//       <ClientFeedback />
//       <ContactSection />
//       <City />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import HeroSection from "../../component/common/HeroSection";
import FeaturedProperties from "../../component/FeaturedProperties";
import ClientFeedback from "../../component/ClientFeedback";
import ContactSection from "../../component/ContactUs/index";
import City from "../../component/City/index";
import Footer from "../../component/common/Footer";
import { fetchUserProfile } from "../../service/fetchuserdetail";
import { getProperty } from "../../service/getProperty"; // import API
import "./style.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user profile
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user details:", error.message);
        setUser(null);
      }
    };
    getUserProfile();
  }, []);

  // Fetch properties (all or filtered)
  const fetchProperties = async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProperty(filters);
      setProperties(data.properties || []);
    } catch (err) {
      setError("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all properties on mount
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="home-page">
      {/* Pass fetchProperties to HeroSection */}
      <HeroSection onSearch={fetchProperties} />

      {/* Pass filtered properties to FeaturedProperties */}
      <FeaturedProperties properties={properties} loading={loading} error={error} />

      <ClientFeedback />
      <ContactSection />
      <City />
    </div>
  );
};

export default Home;
// import React, { useState } from "react";
// import HeroSection from "../../component/common/HeroSection";
// import FeaturedProperties from "../../component/FeaturedProperties";
// import ClientFeedback from "../../component/ClientFeedback";
// import ContactSection from "../../component/ContactUs/index";
// import City from "../../component/City/index";
// import "./style.css";

// const Home = () => {
//   const [filters, setFilters] = useState({});

//   const handleSearch = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <div className="home-page">
//       <HeroSection onSearch={handleSearch} />
//       <FeaturedProperties filters={filters} />
//       <ClientFeedback />
//       <ContactSection />
//       <City />
//     </div>
//   );
// };

// export default Home;



