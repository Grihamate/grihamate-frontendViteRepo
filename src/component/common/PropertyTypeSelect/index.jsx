import { useState } from "react";

function PropertyTypeSelector() {
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="form-group">
      <label className="form-label">Property Type</label>

      <div className="radio-group">
        {["Apartment", "Villa", "Office", "Shop", "Independent house"].map(
          (type) => (
            <label className="radio-label" key={type}>
              <input
                type="radio"
                name="propertyType"
                value={type}
                checked={selectedType === type}
                onChange={handleChange}
              />
              <span>{type}</span>
            </label>
          )
        )}
      </div>

      <p>Selected: {selectedType || "None"}</p>
    </div>
  );
}

export default PropertyTypeSelector;
