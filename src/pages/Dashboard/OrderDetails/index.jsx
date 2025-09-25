import React, { useState, useEffect } from "react";
import PropertyCard from "../../../component/common/card";

import { getPropertiesByIds ,getSellPropertiesByIds } from "../../../service/getDetailedProperty";
import "./style.css";

const MyProperties = ({ myProperties, mySellProperties }) => {
  const [activeTab, setActiveTab] = useState("properties");
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchProperties = async () => {
    try {
      setLoading(true);

      let data = [];
      if (activeTab === "properties" && myProperties?.length > 0) {
        console.log("📌 Fetching normal properties IDs:", myProperties);
        data = await getPropertiesByIds(myProperties);
      } else if (activeTab === "services" && mySellProperties?.length > 0) {
        console.log("📌 Fetching sell properties IDs:", mySellProperties);
        data = await getSellPropertiesByIds(mySellProperties);
      }

      console.log("✅ API Response:", data);
      setPropertiesData(data);
    } catch (err) {
      console.error("❌ Failed to load properties:", err);
      setPropertiesData([]);
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, [activeTab, myProperties, mySellProperties]);


  return (
    <div className="myproperties-container">
      <h2 className="myproperties-heading">My Properties</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "properties" ? "active" : ""}`}
          onClick={() => setActiveTab("properties")}
        >
          Properties
        </button>
        <button
          className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
      </div>

      {/* Content */}
      <div className="tab-content">
        {loading ? (
          <p>Loading...</p>
        ) : propertiesData?.length > 0 ? (
          <div className="properties-grid">
            {propertiesData.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <p>
            No {activeTab === "properties" ? "properties" : "services"} available.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
