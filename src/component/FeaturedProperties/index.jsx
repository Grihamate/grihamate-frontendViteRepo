import React, { useEffect, useState } from "react";
import plusIcon from "../../assets/plusIcon.png";
import PropertyCard from "../../component/common/card";
import { getProperty } from "../../service/getProperty";
import "./style.css";

const FeaturedProperties = ({ filters }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchProperties(filters); // fetch on mount & when filters change
  }, [filters]);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="parent-div">
      <div className="property-section">
        <div className="section-header">
          <div className="detail-box">
            <h5>Featured Properties</h5>
            <p>Discover the best properties handpicked for you</p>
          </div>

          <button className="feature-btn">
            <img src={plusIcon} alt="plus" />
            <p>Post your Property</p>
          </button>
        </div>

        <div className="cards-container">
          <PropertyCard properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
