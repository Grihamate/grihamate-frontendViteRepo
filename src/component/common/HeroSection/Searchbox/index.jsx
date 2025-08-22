import searchIcon from "../../../../assets/searchIcon.png";
import "./style.css";

const SearchBox = () => {
  return (
    <div className="search-filter">
      <div className="filter-container">
        <div className="filter-option">
          <p className="filter-text">Property Type</p>
          <select>
            <option>Select Type</option>
            <option>House</option>
            <option>Apartment</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Property Type</p>
          <select>
            <option>Select Type</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Loaction</p>
          <select>
            <option>Select </option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Price range</p>
          <select>
            <option>Select Type</option>
            <option>₹0 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Rent/buy</p>
          <select>
            <option>Select Type</option>
            <option>Rent</option>
            <option>Buy</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Bedrooms</p>
          <select>
            <option>Select Type</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
          </select>
        </div>
        
      </div>
      <button className="search-btn">
        <img src={searchIcon} />
        <p>Search Properties</p>
      </button>
    </div>
  );
};

export default SearchBox;
