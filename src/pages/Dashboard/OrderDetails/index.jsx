import React, { useState } from "react";
import PropertyCard from "../../../component/common/card";
import "./style.css";

const MyProperties = ({ myProperties, mySellProperties }) => {
  const [activeTab, setActiveTab] = useState("properties");

  const selectedProperties =
    activeTab === "properties" ? myProperties : mySellProperties;

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
        {selectedProperties && selectedProperties.length > 0 ? (
          <div className="properties-grid">
            {selectedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p>No {activeTab === "properties" ? "properties" : "services"} available.</p>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
