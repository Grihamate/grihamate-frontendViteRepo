import SearchBox from "./Searchbox";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <h1>Apka Property Saathi</h1>
        <p>Find your perfect home or investment opportunity</p>
        <SearchBox />
      </div>
    </div>
  );
};

export default HeroSection;
