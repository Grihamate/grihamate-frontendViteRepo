// import React, { useState } from "react"
// import Header from "../../component/common/Header"
// import "./style.css"
// import HeroSection from "../../component/common/HeroSection"
// import FeaturedProperties from "../../component/FeaturedProperties"
// import ClientFeedback from "../../component/ClientFeedback"
// import ContactSection from "../../component/ContactUs/index"
// import City from "../../component/City/index"
// import Footer from "../../component/common/Footer"
// import { fetchUserDetails } from "../../service/fetchuserdetail"

// const Home = () => {
//     const[user,setUser]=useState(null);
//     const[loading,setLoading]=useState(null)
//     return (
//         <div className="home-page">
//                 <HeroSection/>
//                 <FeaturedProperties/>
//                 <ClientFeedback/>
//                 <ContactSection/>
//                 <City/>
//         </div>
//     )
// }



// export default Home;
import React, { useEffect, useState } from "react";
import HeroSection from "../../component/common/HeroSection";
import FeaturedProperties from "../../component/FeaturedProperties";
import ClientFeedback from "../../component/ClientFeedback";
import ContactSection from "../../component/ContactUs/index";
import City from "../../component/City/index";
import Footer from "../../component/common/Footer";
import { fetchUserProfile } from "../../service/fetchuserdetail";
import "./style.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // default true to show loading first

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user details:", error.message);
        setUser(null); // optional
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  return (
    <div className="home-page">
  

      {/* Optional: loading or guest message */}
      {/* {!loading && !user && (
        <div className="guest-message">
          <p>Please log in to view your profile details.</p>
        </div>
      )} */}

      <HeroSection />
      <FeaturedProperties />
      <ClientFeedback />
      <ContactSection />
      <City />
    </div>
  );
};

export default Home;

