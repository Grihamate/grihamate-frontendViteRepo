// import SearchBox from "./Searchbox";
// import "./style.css";

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-bg"></div>

//       <div className="hero-content">
//         <h1>Apka Apna Property Saathi</h1>
//         <p>Find your perfect home or investment opportunity</p>
//         <SearchBox />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import SearchBox from "./Searchbox";
// import "./style.css";

// const HeroSection = ({ onSearch }) => {
//   return (
//     <div className="hero-container">
//       <div className="hero-bg"></div>
//       <div className="hero-content">
//         <h1>Apka Apna Property Saathi</h1>
//         <p>Find your perfect home or investment opportunity</p>
//         <SearchBox onSearch={onSearch} /> {/* This now works */}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import React from "react";
// import SearchBox from "./Searchbox";

// const HeroSection = ({ onSearch }) => {
//   return (
//     <div className="hero-container">
//       <div className="hero-bg"></div>
//       <div className="hero-content">
//         <h1>Apka Apna Property Saathi</h1>
//         <p>Find your perfect home or investment opportunity</p>
//         <SearchBox onSearch={onSearch} />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import SearchBox from "./Searchbox";
import "./style.css"; // keep the original CSS for background, spacing, etc.

const HeroSection = ({ onSearch }) => {
  return (
    <div className="hero-container">
      <div className="hero-bg"></div> {/* background image styling from CSS */}

      <div className="hero-content">
        <h1>Apka Apna Property Saathi</h1>
        <p>Find your perfect home or investment opportunity</p>
        <SearchBox onSearch={onSearch} /> {/* Pass filters to Home */}
      </div>
    </div>
  );
};

export default HeroSection;


